import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="px-6 lg:px-8 h-16 flex items-center justify-between bg-gray-100">
      <Link href="/" className="flex items-center">
        {/* Geometric Logo */}
        <div className="w-8 h-8 relative">
          <svg viewBox="0 0 32 32" className="w-full h-full fill-black">
            <rect x="4" y="4" width="10" height="10" />
            <rect x="18" y="4" width="10" height="10" />
            <rect x="4" y="18" width="10" height="10" />
            <rect x="18" y="18" width="10" height="10" />
            <rect x="11" y="11" width="10" height="10" fill="white" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </Link>

      <nav className="flex gap-8">
        <Link href="/privacy-policy" className="text-sm text-gray-700 hover:text-black transition-colors">
          Privacy Policy
        </Link>
        <Link href="/about" className="text-sm text-gray-700 hover:text-black transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-sm text-gray-700 hover:text-black transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  )
}
