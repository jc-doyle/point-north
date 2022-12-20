const content = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://pointnorth.co.za/</loc>
  <lastmod>2022-12-20T08:54:43+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://pointnorth.co.za/projects</loc>
  <lastmod>2022-12-20T08:54:43+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://pointnorth.co.za/projects/jameson</loc>
  <lastmod>2022-12-20T08:54:43+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://pointnorth.co.za/projects/talbragar</loc>
  <lastmod>2022-12-20T08:54:43+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://pointnorth.co.za/projects/cawdor</loc>
  <lastmod>2022-12-20T08:54:43+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://pointnorth.co.za/downloads/jameson/floor-plan.pdf</loc>
  <lastmod>2022-12-08T17:37:11+00:00</lastmod>
  <priority>0.51</priority>
</url>
</urlset>
`.trim()

export async function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'application/xml'
    }
  }
  );
}
