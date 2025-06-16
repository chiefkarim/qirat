import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { Code, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />
      <main className="flex-1 px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto bg-white p-8 lg:p-12 rounded-lg shadow-sm">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-10 text-center">
            About Qirat
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Qirat is a leading software development startup based in
                Algiers, dedicated to empowering Algerian businesses through
                innovative digital solutions.
              </p>
              <p>
                We specialize in crafting custom web and mobile applications
                that are both visually appealing and robust. Our agile approach
                ensures we efficiently adapt to your evolving business needs.
              </p>
              <p>
                Our team—developers, designers, strategists—is our greatest
                asset. We foster collaboration to deliver excellence.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-gray-200">
                <Image
                  src="/images/about.jpg"
                  width={600}
                  height={400}
                  alt="place in algeria"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <section className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To be the trusted partner for Algerian businesses seeking to
              innovate and grow through exceptional digital experiences and
              robust software solutions.
            </p>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <Code className="w-12 h-12 text-teal-500 stroke-2" />
                <h3 className="text-xl font-medium text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Continuously exploring new technologies to deliver
                  forward-thinking solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Award className="w-12 h-12 text-yellow-500 stroke-2" />
                <h3 className="text-xl font-medium text-gray-900">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Committed to delivering high‑quality, reliable, and impactful
                  software.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Users className="w-12 h-12 text-blue-500 stroke-2" />
                <h3 className="text-xl font-medium text-gray-900">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Working closely with clients to understand their vision and
                  achieve shared success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
