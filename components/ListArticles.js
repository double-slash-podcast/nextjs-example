import Link from 'next/link'

export default function ListArticles({ posts }) {
  return (
    <ul>
      {posts &&
        posts.map((p) => (
          <li key={p?.id}>
            <Link
              className="p-2 text-lg underline"
              href={`/blog/article/${p?.id}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}
