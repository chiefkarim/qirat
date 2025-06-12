import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <SiteHeader />
      <main className="flex-1 px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-6 text-gray-700">
            <p>
              This Privacy Policy describes how Qirat collects, uses, and discloses your Personal Information when you
              visit or make a purchase from the Site.
            </p>

            <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Collection of Personal Information</h2>
            <p>
              When you visit the Site, we collect certain information about your device, your interaction with the Site,
              and information necessary to process your purchases. We may also collect additional information if you
              contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely
              identify an individual (including the information below) as "Personal Information". See the list below for
              more information about what Personal Information we collect and why.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Device information:</strong>
                <ul className="list-circle list-inside ml-4">
                  <li>
                    <strong>Purpose of collection:</strong> To load the Site accurately for you, and to perform
                    analytics on Site usage to optimize our Site.
                  </li>
                  <li>
                    <strong>Source of collection:</strong> Collected automatically when you access our Site using
                    cookies, log files, web beacons, tags, or pixels.
                  </li>
                  <li>
                    <strong>Disclosure for a business purpose:</strong> Shared with our processor, Google Analytics.
                  </li>
                  <li>
                    <strong>Personal Information collected:</strong> Version of web browser, IP address, time zone,
                    cookie information, what sites or products you view, search terms, and how you interact with the
                    Site.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Order information:</strong>
                <ul className="list-circle list-inside ml-4">
                  <li>
                    <strong>Purpose of collection:</strong> To provide products or services to you to fulfill our
                    contract, to process your payment information, arrange for shipping, and provide you with invoices
                    and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and
                    when in line with the preferences you have shared with us, provide you with information or
                    advertising relating to our products or services.
                  </li>
                  <li>
                    <strong>Source of collection:</strong> Collected from you.
                  </li>
                  <li>
                    <strong>Disclosure for a business purpose:</strong> Shared with our payment processors and shipping
                    partners.
                  </li>
                  <li>
                    <strong>Personal Information collected:</strong> Name, billing address, shipping address, payment
                    information (including credit card numbers), email address, and phone number.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Sharing Personal Information</h2>
            <p>
              We share your Personal Information with service providers to help us provide our services and fulfill our
              contracts with you, as described above. For example:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>We use Google Analytics to help us understand how our customers use the Site.</li>
              <li>We may share your Personal Information to comply with applicable laws and regulations.</li>
            </ul>

            <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p>
              If you are a resident of Algeria, you have the right to access the Personal Information we hold about you
              and to ask that your Personal Information be corrected, updated, or deleted. If you would like to exercise
              this right, please contact us through the contact information below.
            </p>

            <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Changes</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
              practices or for other operational, legal, or regulatory reasons.
            </p>

            <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Contact</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a
              complaint, please contact us by e-mail at contact@qiratnet.com.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
