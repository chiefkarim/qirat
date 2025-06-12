import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <SiteHeader />
      <main className="flex-1 px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 text-center">Contact Us</h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-gray-900">Get In Touch</h2>
                <p className="text-gray-700 leading-relaxed">
                  We'd love to hear from you! Whether you have a project idea, a question, or just want to say hello,
                  feel free to reach out. Our team is ready to assist you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="h-5 w-5 text-black" />
                  <span>contact@qiratnet.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="h-5 w-5 text-black" />
                  <span>+213 (0) 555 123 456</span> {/* Placeholder Algerian number */}
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-black" />
                  <span>Algiers, Algeria</span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-gray-900">Business Hours</h2>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM (GMT+1)
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-gray-700">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
