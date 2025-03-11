import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Effective Date: 01/01/2025</p>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p><strong>1.1 Personal Information:</strong> We may collect your name, email, phone number, company details, and billing information when you interact with us, sign up for services, or make purchases.</p>
        <p><strong>1.2 Non-Personal Information:</strong> This includes browser type, IP address, device details, operating system, referral source, and website usage data via cookies and tracking technologies.</p>
        <p><strong>1.3 Sensitive Information:</strong> We do not intentionally collect sensitive personal data unless required for specific services with explicit consent.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>We use your information to provide, improve, and personalize our products and services, including:</p>
        <ul className="list-disc pl-6">
          <li>Processing transactions and fulfilling orders</li>
          <li>Communicating updates, offers, and service-related notifications</li>
          <li>Enhancing user experience and website functionality</li>
          <li>Conducting research, analytics, and security assessments</li>
          <li>Ensuring compliance with legal and regulatory requirements</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Information Sharing & Disclosure</h2>
        <p>We do not sell or rent personal information. However, we may share data in the following circumstances:</p>
        <ul className="list-disc pl-6">
          <li><strong>With Service Providers:</strong> Trusted partners for payment processing, analytics, and customer support.</li>
          <li><strong>Legal Compliance:</strong> If required by law, court order, or governmental authority.</li>
          <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales, your information may be transferred.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement industry-standard security measures, including encryption, secure servers, and restricted access to protect your data from unauthorized access, alteration, or disclosure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h2>
        <p>Our website uses cookies, tracking pixels, and similar technologies to enhance user experience, analyze website traffic, and customize content. You can manage cookie preferences in your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights & Choices</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, update, or delete your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability</li>
          <li>Restrict or object to data processing</li>
        </ul>
        <p>To exercise these rights, contact us at [Insert Contact Email].</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Retention of Data</h2>
        <p>We retain personal data for as long as necessary to fulfill business and legal obligations. Once no longer needed, we securely delete or anonymize the data.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices and recommend reviewing their policies before sharing personal information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>We reserve the right to update this Privacy Policy. Any changes will be posted with a revised effective date. Continued use of our services constitutes acceptance of these changes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, contact us at:</p>
        <p>Email: yanacacom@gmail.com</p>
        <p>Phone: +91 6394302301</p>
        {/* <p>Address: [Insert Address]</p> */}
      </section>
    </div>
  );
};

export default PrivacyPolicy;
