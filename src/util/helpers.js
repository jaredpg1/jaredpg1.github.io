export function isOnSale (variants) {
  return variants.some(variant => {
    return parseFloat(variant.price) < parseFloat(variant.compareAtPrice)
  })
}

export function isNewProduct (product) {
  const date = new Date(product.createdAt)
  const now = new Date()

  return now.getUTCMonth() - date.getUTCMonth() < 2
}

export function shortId (id) {
  // atob() but for node
  const arr = Buffer.from(id, 'base64').toString('binary').split('/')
  return arr[arr.length - 1]
}

export function getLongId (id) {
  // btoa() but for node
  return Buffer.from(`gid://shopify/Product/${id}`, 'binary').toString('base64')
}

export function findProduct (store, id) {
  return store.state.store.products.find(p => p.id === id)
}

export function productSort (a, b) {
  if (!a.availableForSale) return 1
  else if (!b.availableForSale) return -1
  else if (a.isOnSale) return -1
  else if (b.isOnSale) return 1
  else if (a.isNewProduct) return -1
  else if (b.isNewProduct) return 1
  else return 0
}

export function parseProduct (product) {
  if (!product) return null

  const variant = product.variants[0] || {}

  return {
    ...product,
    altSrc: product.images[1],
    compareAt: Number(variant.compareAtPrice || 0),
    discount: Math.floor(100 - (variant.price / variant.compareAtPrice) * 100),
    isNewProduct: isNewProduct(product),
    isOnSale: isOnSale(product.variants),
    longId: getLongId(variant.id),
    price: Number(variant.price || 0),
    shortId: shortId(variant.id),
    src: product.images[0],
    variant,
  }
}

export function random (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function addToCart (variantId, quantity) {
  if (!variantId || !quantity) return

  return this.$store.dispatch('cart/addItem', { variantId, quantity })
}

export function genMetaInfo (
  title,
  description,
  keywords,
  image,
) {
  const meta = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: title },
    { property: 'og:url', content: window.location.href },
    { property: 'og:description', content: description },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { name: 'twitter:card', content: 'summary' },
  ]

  if (image) {
    meta.push({ property: 'og:image', content: image })
    meta.push({ property: 'twitter:image', content: image })
  }

  return {
    title,
    meta,
  }
}
