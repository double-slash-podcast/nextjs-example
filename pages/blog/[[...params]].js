import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import ListArticles from '../../components/ListArticles'
import Pagination from '../../components/Pagination'
import { getNav, getPost, getPosts, getTotalPages } from '../../__API__'

export default function Blog({ posts, total, post }) {
  // single post
  if (post) {
    return (
      <div className="max-w-4xl py-8 mx-auto">
        <h1 className="my-8 text-3xl font-bold">{post?.title}</h1>
        <p className="text-gray-600">{post?.body}</p>
      </div>
    )
  }
  // list
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
  const [page] = params?.params || []
  const navigation = await getNav()

  // if is post and not list
  // here is easy because id of post is hash
  const isPost = page !== undefined && isNaN(+page)
  if (isPost) {
    const post = await getPost(page)
    if (!post) {
      return {
        notFound: true,
      }
    }
    return {
      props: { post, navigation },
    }
  }

  const posts = await getPosts(+page || 1)
  const total = await getTotalPages()
  return {
    props: { posts, total, navigation },
  }
}

export async function getStaticPaths() {
  const total = await getTotalPages()
  const arr = Array.from({ length: total })
  // generate only list pages
  const paths = arr.map((p, i) => `/blog/${i + 1}`)
  paths.push('/blog')
  return {
    paths,
    fallback: true,
  }
}
