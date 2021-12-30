interface ImportMeta
{
  glob: (RE: string) => Record<string, any>
  globEager: (RE: string) => Record<string, any>
}