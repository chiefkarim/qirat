import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Monitor, Smartphone, Zap } from "lucide-react";
import { FloatingHeaderImage } from "@/components/custom/header-image";

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
                  <span className="font-normal">
                    Empowering Algerian Innovation
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Based in Algiers, Qirat specializes in crafting custom web and
                  mobile solutions that elevate businesses. Our team combines
                  innovation with expertise to bring your digital vision to
                  life.
                </p>
              </div>

              <Link
                href="/about"
                className="bg-black block w-fit hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Right Image */}
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <FloatingHeaderImage />
            </div>
          </div>
        </div>
      </main>
      {/* Services Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge digital solutions tailored to the Algerian
              market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Monitor,
                title: "Web Development",
                desc: "Custom web applications built with modern technologies.",
                color: "text-teal-500",
              },
              {
                Icon: Smartphone,
                title: "Mobile Solutions",
                desc: "Native & cross-platform apps for iOS and Android.",
                color: "text-indigo-500",
              },
              {
                Icon: Zap,
                title: "Digital Innovation",
                desc: "Innovative digital solutions for growth & efficiency.",
                color: "text-orange-500",
              },
            ].map(({ Icon, title, desc, color }) => (
              <div
                key={title}
                className="group text-center space-y-4 hover:scale-105 transform transition duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                  <Icon className={`w-8 h-8 ${color} stroke-2`} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-opacity-90 transition duration-300">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* About Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
                Empowering Algerian Businesses
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Qirat, we understand the unique challenges and opportunities
                in the Algerian market. Our team of experienced developers and
                designers work closely with local businesses to create digital
                solutions that not only meet international standards but also
                resonate with the local audience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to established enterprises, we've helped numerous
                Algerian companies transform their digital presence and achieve
                their business objectives through innovative technology
                solutions.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square  rounded-lg flex flex-col items-center justify-center">
                <div className="text-center space-y-4 size-full">
                  <div className="w-full h-full relative bg-white rounded-lg overflow-hidden flex items-center justify-center mx-auto shadow-lg">
                    <Image
                      src="/images/alger.jpg"
                      alt="place in algeria"
                      fill
                    />
                  </div>
                </div>
                <div className="translate-x-3 text-center pt-2">
                  <h3 className="text-xl font-medium text-gray-900">
                    Based in Algiers
                  </h3>
                  <p className="text-gray-600">Serving Algeria & Beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-light text-white">
            Ready to Transform Your Digital Vision?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help elevate your business with custom
            digital solutions tailored to the Algerian market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
