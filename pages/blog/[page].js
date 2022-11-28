import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import ListArticles from '../../components/ListArticles'
import Pagination from '../../components/Pagination'
import { getNav, getPosts, getTotalPages } from '../../__API__'

export default function Blog({ posts, total }) {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="my-8 text-3xl font-bold ">Blog List</h1>
      <div>
        <ListArticles posts={posts} />
        <Pagination total={total} />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = +params.page
  const navigation = await getNav()
  const posts = await getPosts(page)
  const total = await getTotalPages()
  return {
    props: { posts, total, navigation },
  }
}

export async function getStaticPaths() {
  const total = await getTotalPages()
  const arr = Array.from({ length: total })
  const paths = arr.map((p, i) => ({ params: { page: `${i + 1}` } }))
  return {
    paths,
    fallback: true,
  }
}
