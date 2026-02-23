import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:right-[-100px] before:w-[600px] before:h-[600px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="max-w-[800px] mx-auto text-center relative">
          <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] text-white mb-[20px] leading-[1.1]">
            Privacy <em className="text-[var(--pink-light)] italic">Policy</em>
          </h1>
          <p className="text-white/70 text-[1.05rem] leading-[1.8]">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-[8vw] py-[90px] max-w-[900px] mx-auto">
        <div className="prose prose-lg">
          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px]">Introduction</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            At Favi Craze, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Information We Collect</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Order details and purchase history</li>
            <li>Design preferences and customization requests</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">How We Use Your Information</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and inquiries</li>
            <li>Provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Information Sharing</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Service providers who assist us in operating our business (shipping, payment processing)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Data Security</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Your Rights</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            You have the right to:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Cookies</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Contact Us</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-[var(--pink-pale)] rounded-[16px] p-[24px] mb-[24px]">
            <p className="text-[var(--dark)] mb-[8px]"><strong>Email:</strong> fashionvista2022@gmail.com</p>
            <p className="text-[var(--dark)] mb-[8px]"><strong>Phone:</strong> 9321137312</p>
            <p className="text-[var(--dark)]"><strong>Address:</strong> Venkatesh Vihar, Khar West, Mumbai, Maharashtra 400052, India</p>
          </div>

          <div className="mt-[48px] text-center">
            <Link href="/" className="bg-[var(--pink)] text-white px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)] inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
