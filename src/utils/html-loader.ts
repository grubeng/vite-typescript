export default async function loadHtml(url: string): Promise<string> {
  const response = await fetch(url);

  return response.text();
}
