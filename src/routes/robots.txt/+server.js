const content = `User-agent: *
Allow: /
Sitemap: https://pointnorth.co.za/sitemap.xml`

export async function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain'
    }
  }
  );
}
