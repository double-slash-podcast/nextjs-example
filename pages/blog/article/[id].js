import Head from 'next/head'
import { getAllPosts, getPost, getPosts, getNav } from '../../../__API__'
import Layout from '../../../components/Layout'

export default function Page({ post }) {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="my-8 text-3xl font-bold">{post?.title}</h1>
      <p className="text-gray-600">{post?.body}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const navigation = await getNav()
  const post = await getPost(context.params.id)
  return {
    props: { navigation, post },
  }
}

export async function getStaticPaths() {
  //   const posts = await getAllPosts()
  //   const paths = posts.map((p) => ({ params: { id: p.id } }))
  return {
    paths: [],
    fallback: true,
  }
}
