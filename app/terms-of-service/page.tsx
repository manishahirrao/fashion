import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:right-[-100px] before:w-[600px] before:h-[600px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="max-w-[800px] mx-auto text-center relative">
          <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] text-white mb-[20px] leading-[1.1]">
            Terms of <em className="text-[var(--pink-light)] italic">Service</em>
          </h1>
          <p className="text-white/70 text-[1.05rem] leading-[1.8]">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-[8vw] py-[90px] max-w-[900px] mx-auto">
        <div className="prose prose-lg">
          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px]">Agreement to Terms</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            By accessing or using Favi Craze's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Services</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            Favi Craze provides custom apparel printing and design services, including but not limited to t-shirts, hoodies, caps, and other merchandise. All products are made-to-order based on customer specifications.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Orders and Payments</h2>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>All orders are subject to acceptance and availability</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be received before production begins</li>
            <li>We accept various payment methods as displayed on our website</li>
            <li>Custom orders require 50% advance payment</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Custom Designs</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            When providing custom designs:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>You must own or have rights to use the design</li>
            <li>You are responsible for ensuring designs do not infringe on copyrights or trademarks</li>
            <li>We reserve the right to refuse designs that are offensive, illegal, or infringe on intellectual property</li>
            <li>Design mockups must be approved before production begins</li>
            <li>Changes after approval may incur additional charges</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Production and Delivery</h2>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Standard production time is 3-5 business days</li>
            <li>Delivery times are estimates and not guaranteed</li>
            <li>We are not responsible for delays caused by courier services</li>
            <li>International shipping may be subject to customs duties and taxes</li>
            <li>Risk of loss passes to you upon delivery to the courier</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Quality Assurance</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            We conduct quality checks on all products before shipping. However, minor variations in color, print placement, and fabric texture are normal and not considered defects. Digital mockups are representations and may vary slightly from the final product.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Returns and Refunds</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            Please refer to our <Link href="/refund-policy" className="text-[var(--pink)] hover:underline">Refund Policy</Link> for detailed information about returns, exchanges, and refunds.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Intellectual Property</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            All content on our website, including text, graphics, logos, and images, is the property of Favi Craze and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Limitation of Liability</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            Favi Craze shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Governing Law</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Contact Us</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            For questions about these Terms of Service, please contact us:
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
