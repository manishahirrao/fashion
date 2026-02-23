import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:right-[-100px] before:w-[600px] before:h-[600px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="max-w-[800px] mx-auto text-center relative">
          <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] text-white mb-[20px] leading-[1.1]">
            Refund <em className="text-[var(--pink-light)] italic">Policy</em>
          </h1>
          <p className="text-white/70 text-[1.05rem] leading-[1.8]">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-[8vw] py-[90px] max-w-[900px] mx-auto">
        <div className="prose prose-lg">
          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px]">Our Commitment</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            At Favi Craze, we stand behind the quality of our products. This Refund Policy outlines the conditions under which we accept returns and provide refunds for our custom-made apparel.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Custom-Made Products</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            Since all our products are custom-made to order based on your specifications, we generally do not accept returns or offer refunds for change of mind. However, we are committed to ensuring your satisfaction and will work with you to resolve any issues.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Eligible for Refund or Replacement</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            We will provide a full refund or free replacement if:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li><strong>Manufacturing Defects:</strong> Product has printing defects, fabric tears, or quality issues</li>
            <li><strong>Wrong Product:</strong> You received a different product than what you ordered</li>
            <li><strong>Incorrect Design:</strong> The printed design does not match the approved mockup</li>
            <li><strong>Damaged in Transit:</strong> Product arrived damaged due to shipping</li>
            <li><strong>Size Issues:</strong> Product size significantly differs from standard sizing charts</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Not Eligible for Refund</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            We cannot accept returns or provide refunds for:
          </p>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Change of mind after production has started</li>
            <li>Minor color variations between digital mockup and printed product</li>
            <li>Products that have been worn, washed, or altered</li>
            <li>Incorrect size selection by customer (please refer to our size chart)</li>
            <li>Designs approved by customer that contain errors</li>
            <li>Products damaged due to improper care or washing</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Return Process</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
            To initiate a return or refund request:
          </p>
          <ol className="list-decimal pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Contact us within 7 days of receiving your order</li>
            <li>Provide your order number and photos of the issue</li>
            <li>Our team will review your request within 24-48 hours</li>
            <li>If approved, we will provide return shipping instructions</li>
            <li>Return the product in its original condition with tags attached</li>
          </ol>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Refund Timeline</h2>
          <ul className="list-disc pl-[24px] text-[var(--gray)] leading-[1.8] mb-[24px]">
            <li>Refunds are processed within 7-10 business days after receiving the returned product</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>Bank processing times may vary (3-7 business days)</li>
            <li>You will receive an email confirmation once the refund is processed</li>
          </ul>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Exchanges</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            We offer exchanges for size or color variations (subject to availability). Exchange requests must be made within 7 days of delivery. Shipping costs for exchanges may apply unless the error was on our part.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Cancellations</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            Orders can be cancelled for a full refund if production has not yet started. Once production begins, cancellations are not possible. Please contact us immediately if you need to cancel your order.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Bulk Orders</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            For bulk orders (50+ pieces), special refund and return terms may apply. Please discuss these terms with our sales team before placing your order.
          </p>

          <h2 className="font-['Playfair_Display'] text-[2rem] text-[var(--dark)] mb-[16px] mt-[40px]">Contact Us</h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
            For any questions about returns or refunds, please contact us:
          </p>
          <div className="bg-[var(--pink-pale)] rounded-[16px] p-[24px] mb-[24px]">
            <p className="text-[var(--dark)] mb-[8px]"><strong>Email:</strong> fashionvista2022@gmail.com</p>
            <p className="text-[var(--dark)] mb-[8px]"><strong>Phone:</strong> 9321137312</p>
            <p className="text-[var(--dark)] mb-[8px]"><strong>WhatsApp:</strong> +91 9321137312</p>
            <p className="text-[var(--dark)]"><strong>Address:</strong> Mumbai & Pune, Maharashtra, India</p>
          </div>

          <div className="bg-[#fff5f8] rounded-[16px] p-[24px] mb-[24px] border-l-4 border-[var(--pink)]">
            <p className="text-[var(--dark)] font-semibold mb-[8px]">💡 Pro Tip:</p>
            <p className="text-[var(--gray)] leading-[1.7]">
              To avoid sizing issues, please carefully review our size chart before ordering. If you're unsure about sizing, contact us for personalized recommendations based on your measurements.
            </p>
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
