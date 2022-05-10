export function downloadCSV(
  name: string,
  headers: (string | { text?: string; value: string })[],
  rows: Record<string, string | number>[],
  charset = 'utf-8',
) {
  const csv = [
    headers.map(header => typeof header === 'object'
      ? (header.text ?? header.value)
      : header).join(','),
    ...rows.map(row => {
      return headers.map(header => typeof header === 'object'
        ? row[header.value]
        : row[header]).join(',')
    }),
  ]
  const blob = new Blob([
    `\uFEFF${ csv.join('\n') }`,
  ], {
    type: `text/csv;charset=${ charset }`,
  })
  const link = document.createElement('a')
  link.setAttribute('href', window.URL.createObjectURL(blob))
  link.setAttribute('download', `${ name }.csv`)
  link.click()
}
