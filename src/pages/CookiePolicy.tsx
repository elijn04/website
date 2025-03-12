import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-flick-blue">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              How we use cookies and similar technologies.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-flick-white mb-6">
                FLICK2SPLIT Cookie Policy
              </h2>
              
              <p className="text-white/90 mb-6">
                Last Updated: March 11, 2025
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">What Are Cookies</h3>
              <p className="text-white/80 mb-6">
                Cookies are small text files that are placed on your device when you visit a website or use an application. They are widely used to make websites and applications work more efficiently and provide information to the owners.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">How We Use Cookies</h3>
              <p className="text-white/80 mb-4">
                FLICK2SPLIT uses cookies and similar technologies for several purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Authentication and security: To recognize you when you sign in and to help protect your account from unauthorized access</li>
                <li>Preferences: To remember your settings and preferences</li>
                <li>Analytics: To understand how users interact with our service and to improve user experience</li>
                <li>Performance: To help our service load faster and operate more efficiently</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Types of Cookies We Use</h3>
              
              <h4 className="text-lg font-semibold text-flick-white mt-6 mb-3">Essential Cookies</h4>
              <p className="text-white/80 mb-6">
                These cookies are necessary for the website or application to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
              </p>
              
              <h4 className="text-lg font-semibold text-flick-white mt-6 mb-3">Preference Cookies</h4>
              <p className="text-white/80 mb-6">
                These cookies allow us to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              
              <h4 className="text-lg font-semibold text-flick-white mt-6 mb-3">Analytics Cookies</h4>
              <p className="text-white/80 mb-6">
                These cookies collect information about how you use our service, which pages you visit, and any errors you might encounter. This data helps us improve our service and user experience.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Third-Party Cookies</h3>
              <p className="text-white/80 mb-6">
                Some cookies may be set by third parties that provide services on our behalf, such as analytics or advertising. These third parties may be able to track your browsing activity across different websites.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Managing Cookies</h3>
              <p className="text-white/80 mb-6">
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can also use your browser to delete existing cookies.
              </p>
              <p className="text-white/80 mb-6">
                Please note that if you choose to block or delete cookies, you may not be able to use all features of our service.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Changes to This Cookie Policy</h3>
              <p className="text-white/80 mb-6">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Contact Us</h3>
              <p className="text-white/80 mb-6">
                If you have any questions about our Cookie Policy, please contact us at: support@flick2split.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy; 