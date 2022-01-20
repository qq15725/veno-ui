// Utils
import { promises as fsp } from 'fs'
import { createFilter } from '@rollup/pluginutils'
import { optimize } from 'svgo'

// Types
import type { Plugin, PluginOption, ResolvedConfig } from 'vite'
import type { Options, ResolvedOptions } from './types'
import type { OptimizedSvg } from 'svgo'

function resolveOptions (userOptions?: Options): ResolvedOptions {
  return Object.assign({}, userOptions || {}) as ResolvedOptions
}

function svgToVue (raw: string, id: string, options: ResolvedOptions) {
  const optimizedSvg = optimize(raw, options.svgoOptions)
  if (optimizedSvg.error) {
    throw new Error(`Optimize svg error: ${ optimizedSvg.error }`)
  }
  return `<template>${ (optimizedSvg as OptimizedSvg).data }</template>\n<script>\nexport default {}\n</script>`
}

function getVueId (id: string) {
  return id.replace('.svg', '.vue')
}

export default function svgPlugin (userOptions?: Options): PluginOption {
  const options = resolveOptions(userOptions)

  const filter = createFilter(
    options.include || /\.svg$/,
    options.exclude,
  )

  let vuePlugin: Plugin | undefined
  let resolvedConfig: ResolvedConfig

  // Fix vite plugins/importAnalysis normalizeUrl
  function isAbsolutePath (id: string) {
    return !resolvedConfig.root || id.indexOf(resolvedConfig.root) > -1
  }

  return {
    name: '@veno-ui/vite-plugin-svg',

    enforce: 'pre',

    configResolved (config) {
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
      resolvedConfig = config
    },

    resolveId (id) {
      if (!filter(id)) return
      if (!isAbsolutePath(id)) return
      return id
    },

    async load (id) {
      if (!filter(id)) return
      if (!isAbsolutePath(id)) return
      return {
        code: await fsp.readFile(id, 'utf-8'),
        map: null
      }
    },

    transform (raw, id) {
      if (!filter(id)) return
      if (!isAbsolutePath(id)) return
      if (!vuePlugin) return this.error('Not found plugin [vite:vue]')
      try {
        return vuePlugin.transform?.call(this, svgToVue(raw, id, options), getVueId(id))
      } catch (e: any) {
        this.error(e)
      }
    },

    async handleHotUpdate (ctx) {
      if (!vuePlugin || !filter(ctx.file)) return
      if (!isAbsolutePath(ctx.file)) return
      return vuePlugin.handleHotUpdate?.call(this, {
        ...ctx,
        file: getVueId(ctx.file),
        read: async () => svgToVue(await ctx.read(), ctx.file, options)
      })
    }
  }
}
