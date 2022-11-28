import Link from 'next/link'

const Header = ({ navigation }) => (
  <header className="flex w-full px-6 py-6 bg-gray-200 border-b border-gray-300">
    <div className="flex w-full max-w-5xl mx-auto">
      <h1 className="text-xl font-bold text-purple-700">Site exemple NextJS</h1>
      <nav className="ml-auto">
        <ul className="flex">
          {navigation &&
            navigation.map((n) => (
              <li key={n.label} className="mx-3">
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
