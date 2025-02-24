export default function processChat(text: string): string {
  return text
    .replace(/\[(\d{2}\/\d{2}), (\d{2}:\d{2})\] ([^:]+):/g, '')
    .replace(/\n/g, '  \n')
    .replace(/(https?:\/\/[^\s]+)/g, '[$1]($1)')
    .trim()
}
