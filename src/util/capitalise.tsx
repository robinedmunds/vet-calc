export default function (s: string): string {
  const words = s.split(" ");

  const out = [];
  for (const word of words) {
    const first = word.charAt(0);
    out.push(first.toUpperCase().concat(word.slice(1)));
  }

  return out.join(" ");
}
