/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMeta
{
  glob: (RE: string) => Record<string, any>
  globEager: (RE: string) => Record<string, any>
}