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
  const navigation = await getNav()
  const posts = await getPosts(1)
  const total = await getTotalPages()
  return {
    props: { posts, total, navigation },
  }
}
