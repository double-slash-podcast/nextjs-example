import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pagination({ total }) {
  const { query } = useRouter()
  const currentPage = query.page
  const arr = Array.from({ length: total })
  return (
    <div className="flex justify-center my-10">
      {arr.map((a, i) => (
        <Link
          key={i}
          className={`flex items-center justify-center w-8 h-8 p-2 mx-1 bg-gray-300 border border-gray-300 rounded-md ${
            +currentPage === i + 1 ? 'font-bold text-purple-800' : ''
          }`}
          href={`/blog/${i + 1 === 1 ? '' : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
