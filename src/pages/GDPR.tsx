import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GDPR = () => {
  return (
    <div className="min-h-screen bg-flick-blue">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              How we comply with the General Data Protection Regulation.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-flick-white mb-6">
                FLICK2SPLIT GDPR Compliance Statement
              </h2>
              
              <p className="text-white/90 mb-6">
                Last Updated: March 11, 2025
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Introduction</h3>
              <p className="text-white/80 mb-6">
                At FLICK2SPLIT, we are committed to protecting the privacy and security of our users' personal data. This GDPR Compliance Statement explains how we comply with the European Union's General Data Protection Regulation (GDPR).
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Data Controller</h3>
              <p className="text-white/80 mb-6">
                FLICK2SPLIT acts as a data controller for the personal information collected through our service. This means we determine the purposes and means of processing personal data.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Legal Basis for Processing</h3>
              <p className="text-white/80 mb-4">
                We process personal data on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Consent: When you explicitly agree to the processing of your personal data</li>
                <li>Contractual necessity: When processing is necessary to fulfill our contractual obligations to you</li>
                <li>Legitimate interests: When processing is necessary for our legitimate interests, provided these interests do not override your fundamental rights and freedoms</li>
                <li>Legal obligation: When processing is necessary to comply with a legal obligation</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Your Rights Under GDPR</h3>
              <p className="text-white/80 mb-4">
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Right to access: You can request a copy of your personal data</li>
                <li>Right to rectification: You can request that we correct inaccurate or incomplete data</li>
                <li>Right to erasure: You can request that we delete your personal data in certain circumstances</li>
                <li>Right to restrict processing: You can request that we limit how we use your data</li>
                <li>Right to data portability: You can request a copy of your data in a machine-readable format</li>
                <li>Right to object: You can object to our processing of your data in certain circumstances</li>
                <li>Rights related to automated decision-making: You can request human intervention in automated decisions</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">How to Exercise Your Rights</h3>
              <p className="text-white/80 mb-6">
                To exercise any of these rights, please contact us at support@flick2split.com. We will respond to your request within one month. This period may be extended by two further months if necessary, taking into account the complexity and number of requests.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Data Protection Measures</h3>
              <p className="text-white/80 mb-6">
                We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption of personal data, regular testing of security measures, and procedures to restore access to personal data in the event of an incident.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Data Breach Notification</h3>
              <p className="text-white/80 mb-6">
                In the event of a personal data breach, we will notify the relevant supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of it, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons. We will also notify affected users directly if the breach is likely to result in a high risk to their rights and freedoms.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">International Data Transfers</h3>
              <p className="text-white/80 mb-6">
                If we transfer personal data outside the European Economic Area (EEA), we ensure that adequate safeguards are in place to protect your data, such as Standard Contractual Clauses approved by the European Commission.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Data Protection Officer</h3>
              <p className="text-white/80 mb-6">
                While we are not required to appoint a Data Protection Officer under the GDPR, we have designated a point of contact for data protection matters. You can reach this person at privacy@flick2split.com.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Changes to This Statement</h3>
              <p className="text-white/80 mb-6">
                We may update our GDPR Compliance Statement from time to time. We will notify you of any changes by posting the new statement on this page and updating the "Last Updated" date.
              </p>
              
              <h3 className="text-xl font-semibold text-flick-white mt-8 mb-4">Contact Us</h3>
              <p className="text-white/80 mb-6">
                If you have any questions about our GDPR compliance or how we handle your personal data, please contact us at: support@flick2split.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GDPR; 