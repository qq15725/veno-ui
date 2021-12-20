// Types
import type { PluginSimple } from 'markdown-it/lib'

export const fencePlugin: PluginSimple = md => {
  const escapeHtml = md.utils.escapeHtml
  const unescapeAll = md.utils.unescapeAll

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    let token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted, i, arr, tmpAttrs, tmpToken;

    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join('');
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    return highlighted + '\n';
  }
}