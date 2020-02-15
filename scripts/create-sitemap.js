const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

let head = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="
            http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`

const renderedRoutes = require('../data/rendered-routes.json')
const date = (new Date()).toISOString().slice(0, 10)

for (const route of renderedRoutes) {
  head += `\n<url>
      <loc>https://vuetifyjs.com${route}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0000</priority>
</url>`
}

head += `\n</urlset>`

fs.writeFileSync(resolve('../public/sitemap.xml'), head, 'utf8')
