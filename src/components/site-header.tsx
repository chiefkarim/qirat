import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="px-6 py-3 lg:px-8  flex items-center justify-between bg-gray-100">
      <Link href="/" className="flex items-center">
        {/* Geometric Logo */}
        <Image alt="logo" src="/logo.png" width={52} height={52} />
      </Link>

      <nav className="flex gap-8">
        <Link
          href="/privacy-policy"
          className="text-sm text-gray-700 hover:text-black transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/about"
          className="text-sm text-gray-700 hover:text-black transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm text-gray-700 hover:text-black transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
