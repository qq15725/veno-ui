interface Metadata {
  site: string
  title: string
  description: string
  keywords: string
}

export function genAppMetaInfo (defaults: Metadata) {
  const metadata = genMetaInfo(defaults)

  metadata.link.push(...genLink())
  metadata.meta.push(...genMeta())

  return metadata
}

export function genMetaInfo (defaults: Metadata) {
  const length = defaults.description.length

  defaults.description = length <= 117
    ? defaults.description
    : `${defaults.description.slice(0, 116)}...`

  return {
    link: [] as (Record<string, any>[]),
    meta: [
      { key: 'description', name: 'description', content: defaults.description },
      { key: 'keywords', name: 'keywords', content: defaults.keywords },
      ...genOpenGraphMetaInfo(defaults),
    ] as (Record<string, any>[]),
    title: defaults.title,
  }
}

function genLink () {
  return [
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ]
}

function genOpenGraphMetaInfo (args: Metadata) {
  return parseMeta('og', {
    description: args.description,
    image: '/pwa-192x192.png',
    site_name: args.site,
    title: args.title,
    type: 'website',
  })
}

function parseMeta (
  prefix: string,
  metadata: Record<string, string>,
) {
  const meta = []

  for (const key in metadata) {
    const content = metadata[key]
    const property = `${prefix}:${key}`

    meta.push({
      key: property,
      property,
      content,
    })
  }

  return meta
}

function genMeta () {
  return [
    { charset: 'utf-8' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, minimal-ui',
    },
  ]
}
