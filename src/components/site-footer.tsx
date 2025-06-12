import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-6 lg:px-8 py-12 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-6 h-6 relative">
                <svg viewBox="0 0 32 32" className="w-full h-full fill-black">
                  <rect x="4" y="4" width="10" height="10" />
                  <rect x="18" y="4" width="10" height="10" />
                  <rect x="4" y="18" width="10" height="10" />
                  <rect x="18" y="18" width="10" height="10" />
                  <rect
                    x="11"
                    y="11"
                    width="10"
                    height="10"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="ml-2 text-lg font-medium">Qirat</span>
            </div>
            <p className="text-gray-600 text-sm">
              Crafting digital solutions and empowering Algerian innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Algiers, Algeria</p>
              <p>contact@qiratnet.com</p>
              <p>+213 (0) 555 123 456</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2024 Qirat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
