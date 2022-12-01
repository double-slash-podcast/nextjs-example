import Head from 'next/head'
import Layout from '../components/Layout'
import { getNav, getPage, getPages } from '../__API__'

export default function Page({ page }) {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="my-8 text-3xl font-bold">{page?.title}</h1>
      <p className="text-gray-600">{page?.body}</p>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // slug in first param
  const [slug] = params.slug || []
  const navigation = await getNav()
  // not slug === home
  const page = await getPage(slug || '')
  if (!page) {
    return {
      notFound: true,
    }
  }
  return {
    props: { navigation, page },
  }
}

export async function getStaticPaths() {
  const pages = await getPages()
  // remove home
  pages.shift()
  const paths = pages.map((p) => `/${p.slug}`)
  paths.push('/')
  return {
    paths,
    fallback: true,
  }
}
