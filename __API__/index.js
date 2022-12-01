import navigation from './data/navigation.json'
import pages from './data/pages.json'
import posts from './data/posts.json'

export const getNav = async () => {
  // simule lag
  await new Promise((r) => setTimeout(r, 200))
  return navigation
}

export const getPages = async () => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  return pages
}

export const getPage = async (slug) => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  const page = pages.find((p) => p.slug === slug)
  if (page) return page
  return undefined
  //   throw new Error(`Slug ${slug} not found on pages`)
}

export const getTotalPages = async (offset = 100) => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  return Math.floor(posts.length / offset)
}

export const getAllPosts = async () => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  return posts
}

export const getPosts = async (page = 1, offset = 100) => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  const po = posts.slice((page - 1) * offset, page * offset)
  return po.map((p) => ({ id: p.id, title: p.title }))
}

export const getPost = async (slug) => {
  // simule lag
  await new Promise((r) => setTimeout(r, 400))
  const post = posts.find((p) => p.id === slug)
  if (post) return post
  return undefined
  //   throw new Error(`Slug ${slug} not found on posts`)
}
