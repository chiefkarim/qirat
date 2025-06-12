import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <SiteHeader />
      <main className="flex-1 px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 text-center">
            About Qirat
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-gray-700">
              <p>
                Qirat is a leading software development startup based in
                Algiers, dedicated to empowering Algerian businesses through
                innovative digital solutions. We believe in the transformative
                power of technology and are committed to helping our clients
                achieve their goals in the rapidly evolving digital landscape.
              </p>
              <p>
                Our journey began with a vision to bridge the gap between
                cutting-edge technology and local business needs. We specialize
                in crafting custom web and mobile applications that are not only
                visually appealing but also highly functional, scalable, and
                secure. Our agile development approach ensures that we deliver
                high-quality solutions efficiently and adapt to your evolving
                requirements.
              </p>
              <p>
                At Qirat, our team is our greatest asset. Comprised of
                passionate and experienced developers, designers, and
                strategists, we bring a diverse set of skills and a deep
                understanding of various industries. We foster a collaborative
                environment where creativity thrives, and every team member is
                dedicated to delivering excellence.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Qirat Team Collaboration"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To be the trusted partner for Algerian businesses seeking to
              innovate and grow through exceptional digital experiences and
              robust software solutions.
            </p>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Continuously exploring new technologies to deliver
                  forward-thinking solutions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Committed to delivering high-quality, reliable, and impactful
                  software.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Working closely with clients to understand their vision and
                  achieve shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
