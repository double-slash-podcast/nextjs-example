import Head from 'next/head'
import Layout from '../components/Layout'
import { getNav, getPage } from '../__API__'

export default function Home({ page }) {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="my-8 text-3xl font-bold">{page?.title}</h1>
      <p className="text-gray-600">{page?.body}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const navigation = await getNav()
  const page = await getPage('')
  return {
    props: { page, navigation },
  }
}
