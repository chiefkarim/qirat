import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function QiratLanding() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
                  Crafting Digital Solutions,
                  <br />
                  <span className="font-normal">Empowering Algerian Innovation</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Based in Algiers, Qirat specializes in crafting custom web and mobile solutions that elevate
                  businesses. Our team combines innovation with expertise to bring your digital vision to life.
                </p>
              </div>

              <Button
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src="/hero-image.png"
                  alt="3D geometric shapes on wooden surface with dramatic lighting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge digital solutions tailored to the Algerian market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Web Development</h3>
              <p className="text-gray-600">Custom web applications built with modern technologies and best practices</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Mobile Solutions</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Digital Innovation</h3>
              <p className="text-gray-600">Innovative digital solutions that drive business growth and efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900">Empowering Algerian Businesses</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Qirat, we understand the unique challenges and opportunities in the Algerian market. Our team of
                experienced developers and designers work closely with local businesses to create digital solutions that
                not only meet international standards but also resonate with the local audience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to established enterprises, we've helped numerous Algerian companies transform their
                digital presence and achieve their business objectives through innovative technology solutions.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">Based in Algiers</h3>
                    <p className="text-gray-600">Serving Algeria & Beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-light text-white">Ready to Transform Your Digital Vision?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help elevate your business with custom digital solutions tailored to the Algerian
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
              size="lg"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
