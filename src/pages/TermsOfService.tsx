import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-flick-blue">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Please read these terms carefully before using our service.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-flick-white mb-6">
                FLICK2SPLIT Terms of Service
              </h2>
              
              <p className="text-white/90 mb-6">
                Last Updated: March 11, 2025
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">1. Acceptance of Terms</h3>
              <p className="text-white/80 mb-6">
                By accessing or using FLICK2SPLIT's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">2. Description of Service</h3>
              <p className="text-white/80 mb-6">
                FLICK2SPLIT provides a bill splitting application that allows users to upload receipts, divide expenses, and manage shared costs among friends and contacts.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">3. User Accounts</h3>
              <p className="text-white/80 mb-6">
                To use certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">4. User Content</h3>
              <p className="text-white/80 mb-6">
                You retain ownership of any content you submit to the service, including receipt images and expense information. By uploading content, you grant FLICK2SPLIT a license to use, store, and process that content for the purpose of providing our service.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">5. Prohibited Uses</h3>
              <p className="text-white/80 mb-4">
                You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service. Prohibited activities include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Attempting to gain unauthorized access to the service or other users' accounts</li>
                <li>Using the service to transmit any malware or viruses</li>
                <li>Scraping or collecting data from the service without permission</li>
                <li>Impersonating another person or entity</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">6. Termination</h3>
              <p className="text-white/80 mb-6">
                We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">7. Disclaimer of Warranties</h3>
              <p className="text-white/80 mb-6">
                The service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">8. Limitation of Liability</h3>
              <p className="text-white/80 mb-6">
                To the maximum extent permitted by law, FLICK2SPLIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">9. Changes to Terms</h3>
              <p className="text-white/80 mb-6">
                We may modify these Terms of Service at any time. We will notify you of any changes by posting the updated terms on our website or within the app. Your continued use of the service after such modifications constitutes your acceptance of the revised terms.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">10. Governing Law</h3>
              <p className="text-white/80 mb-6">
                These Terms of Service shall be governed by the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">11. Contact Information</h3>
              <p className="text-white/80 mb-6">
                If you have any questions about these Terms of Service, please contact us at: support@flick2split.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 