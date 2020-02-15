require('dotenv').config()
global.fetch = require('node-fetch')

const shopify = require('shopify-buy')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const client = shopify.buildClient({
  domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.VUE_APP_SHOPIFY_ACCESS_TOKEN,
})

async function create () {
  const structure = [
    '/',
    '/contact-us',
    '/about-us',
    '/licensing',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/thank-you',
    '/collections',
  ]

  for (const collection of await createCollectionProducts()) {
    structure.push(`/collections/${collection.handle}`)

    for (const product of collection.products) {
      const entry = `/product/${product.handle}`

      if (!structure.includes(entry)) {
        structure.push(entry)
      }
    }
  }

  fs.writeFileSync(
    resolve('../data/rendered-routes.json'),
    JSON.stringify(structure),
    'utf8'
  )
}

async function createCollectionProducts () {
  const collectionsWithProducts = await client.collection.fetchAllWithProducts()

  fs.writeFileSync(
    resolve('../data/collections-with-products.json'),
    JSON.stringify(collectionsWithProducts),
    'utf8'
  )

  return Promise.resolve(collectionsWithProducts)
}

create()
