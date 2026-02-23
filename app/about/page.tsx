import Link from 'next/link';

export default function About() {
  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] relative overflow-hidden before:content-[''] before:absolute before:top-[-100px] before:right-[-100px] before:w-[600px] before:h-[600px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="max-w-[800px] mx-auto text-center relative">
          <span className="inline-block bg-[var(--pink)] text-white px-[18px] py-[6px] rounded-full text-[0.8rem] font-bold mb-[20px] tracking-[0.05em]">
            Est. March 2022
          </span>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] text-white mb-[20px] leading-[1.1]">
            From a Passion Project to a <em className="text-[var(--pink-light)] italic">Fashion Empire</em>
          </h1>
          <p className="text-white/70 text-[1.05rem] leading-[1.8]">
            Two siblings. One dream. Favi Craze was born during the pandemic from Prathamesh's creative flair and Priyam's marketing vision — today it's Maharashtra's most loved custom apparel brand.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-[8vw] py-[90px]">
        <div className="grid grid-cols-2 gap-[80px] items-center max-md:grid-cols-1">
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[var(--pink-pale)] to-[#fce4ec] rounded-[24px] flex items-center justify-center text-[6rem] shadow-[0_20px_60px_rgba(214,51,132,0.15)]">
              🏭
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] bg-white rounded-[16px] px-[24px] py-[20px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] text-center">
              <strong className="block text-[1.8rem] text-[var(--pink)] font-['Playfair_Display']">2022</strong>
              <span className="text-[0.8rem] text-[var(--gray)]">Founded in Mumbai</span>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[16px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
              Our Story
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
              A Brand Built on <em className="text-[var(--pink)] italic">Passion</em>
            </h2>
            <p className="text-[var(--gray)] leading-[1.8] mb-[8px]">
              Favi Craze's journey began with a simple yet powerful promise: provide high-quality, custom-printed apparel. Prathamesh, a hospitality professional with a love for graphic design, channeled years of creative energy into captivating T-shirt designs. Priyam, with six years of marketing expertise, saw the potential and together they built a world where fashion is a canvas for self-expression.
            </p>

            <ul className="list-none mt-[28px] flex flex-col gap-[16px]">
              {[
                { icon: '📅', title: 'March 2022 — Launch', text: 'Started with adult round-neck and collar T-shirts, building a loyal base through social media' },
                { icon: '🏆', title: '2024 — Award Recognition', text: 'Won Maharashtra Udyog Gaurav 2024 in the Best Customize Printed Apparel Brand category' },
                { icon: '🌆', title: 'Sept 2025 — Pune Branch', text: 'Expanded operations to Pune to serve the growing western Maharashtra market' },
                { icon: '🌍', title: 'International Reach', text: 'Successfully delivered orders to UAE and Australia — taking Indian craftsmanship global' },
              ].map((item, i) => (
                <li key={i} className="flex gap-[14px] items-start p-[16px] bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <div className="w-[36px] h-[36px] flex-shrink-0 rounded-[8px] bg-[var(--pink-pale)] flex items-center justify-center text-[1rem]">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-[0.9rem] mb-[3px]">{item.title}</strong>
                    <span className="text-[0.85rem] text-[var(--gray)]">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--pink-pale)] px-[8vw] py-[80px]">
        <div className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
            What Drives Us
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
            Our Core <em className="text-[var(--pink)] italic">Values</em>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            { emoji: '💡', title: 'Innovation First', text: 'We constantly push creative boundaries — every design collection is a fresh perspective on fashion and culture.' },
            { emoji: '🤝', title: 'Customer Obsession', text: 'Your satisfaction is our benchmark. Clear communication, on-time delivery and quality checks every time.' },
            { emoji: '🇮🇳', title: 'Proudly Indian', text: 'Every stitch, print and design celebrates India — our heritage, our culture, our spirit of self-expression.' },
          ].map((value, i) => (
            <div key={i} className="bg-white rounded-[20px] px-[28px] py-[36px] text-center shadow-[0_8px_40px_rgba(214,51,132,0.12)] transition-transform hover:translate-y-[-6px]">
              <span className="text-[2.5rem] mb-[16px] block">{value.emoji}</span>
              <div className="font-bold mb-[10px] text-[1.1rem]">{value.title}</div>
              <p className="text-[var(--gray)] text-[0.9rem] leading-[1.6]">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="px-[8vw] py-[90px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[56px]">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
              How We <em className="text-[var(--pink)] italic">Create Magic</em>
            </h2>
            <p className="text-[var(--gray)] leading-[1.7] max-w-[600px] mx-auto">
              From concept to delivery, we ensure every step meets our high standards of quality and creativity
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[24px] max-md:grid-cols-2 max-sm:grid-cols-1">
            {[
              { num: '01', icon: '💭', title: 'Share Your Vision', desc: 'Tell us your design idea, occasion, or brand message. Our team listens carefully to understand your needs.' },
              { num: '02', icon: '🎨', title: 'Design & Mockup', desc: 'We create digital mockups and refine the design until it perfectly matches your vision. Free revisions included!' },
              { num: '03', icon: '🖨️', title: 'Premium Printing', desc: 'Using DTF/DTG technology or hand-painting, we bring your design to life on premium quality fabric.' },
              { num: '04', icon: '📦', title: 'Quality Check & Delivery', desc: 'Every piece is inspected for quality before careful packaging and express delivery to your doorstep.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-[20px] p-[28px] shadow-[0_4px_20px_rgba(214,51,132,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(214,51,132,0.15)] h-full">
                  <div className="text-[var(--pink)] text-[0.9rem] font-bold mb-[12px]">STEP {step.num}</div>
                  <div className="text-[2.5rem] mb-[16px]">{step.icon}</div>
                  <h3 className="font-bold text-[1.1rem] mb-[10px] text-[var(--dark)]">{step.title}</h3>
                  <p className="text-[var(--gray)] text-[0.875rem] leading-[1.6]">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-[50%] right-[-12px] translate-y-[-50%] text-[var(--pink)] text-[1.5rem] z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="bg-gradient-to-br from-[#fff5f8] to-[var(--pink-pale)] px-[8vw] py-[90px]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[48px] leading-[1.2] text-center">
            Why Customers Choose <em className="text-[var(--pink)] italic">Favi Craze</em>
          </h2>

          <div className="grid grid-cols-2 gap-[32px] max-md:grid-cols-1">
            {[
              { 
                title: 'Award-Winning Quality', 
                desc: 'Winner of Maharashtra Udyog Gaurav 2024 for Best Customized Printed Apparel Brand. Our commitment to excellence is recognized at the state level.',
                icon: '🏆'
              },
              { 
                title: 'Lightning-Fast Turnaround', 
                desc: 'Order on Saturday, receive on Monday! Our streamlined process and dedicated team ensure quick delivery without compromising quality.',
                icon: '⚡'
              },
              { 
                title: 'No Hidden Costs', 
                desc: 'Transparent pricing with no setup fees, no design charges, and no minimum order requirements. What you see is what you pay.',
                icon: '💰'
              },
              { 
                title: 'Eco-Friendly Practices', 
                desc: 'We use water-based inks and sustainable printing methods. Fashion that looks good and does good for the planet.',
                icon: '🌱'
              },
              { 
                title: 'Expert Design Support', 
                desc: 'Not a designer? No problem! Our creative team helps refine your ideas and creates professional mockups at no extra cost.',
                icon: '🎨'
              },
              { 
                title: 'Trusted by 500+ Brands', 
                desc: 'From startups to established companies, educational institutions to event organizers — businesses trust us for their branding needs.',
                icon: '🤝'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] p-[32px] shadow-[0_4px_20px_rgba(214,51,132,0.08)] transition-all hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.15)]">
                <div className="text-[3rem] mb-[16px]">{item.icon}</div>
                <h3 className="font-bold text-[1.2rem] mb-[12px] text-[var(--dark)]">{item.title}</h3>
                <p className="text-[var(--gray)] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-[8vw] py-[90px]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[24px] leading-[1.2]">
            Meet the <em className="text-[var(--pink)] italic">Dream Team</em>
          </h2>
          <p className="text-[var(--gray)] leading-[1.8] mb-[48px] max-w-[700px] mx-auto">
            Behind every great design is a passionate team dedicated to bringing your vision to life. From creative designers to quality control experts, customer service representatives to logistics coordinators — we're a family working together to make you look amazing.
          </p>
          <div className="bg-gradient-to-br from-[var(--pink-pale)] to-[#fce4ec] rounded-[24px] p-[48px] max-md:p-[32px]">
            <p className="text-[1.1rem] text-[var(--dark)] leading-[1.8] italic mb-[24px]">
              "We started Favi Craze with a simple belief: everyone deserves to wear their story. Whether it's a corporate logo, a family reunion design, or a personal artistic expression — we're here to make it happen with quality, care, and creativity."
            </p>
            <div className="flex items-center justify-center gap-[32px] flex-wrap">
              <div>
                <div className="font-bold text-[var(--dark)]">Prathamesh Ranjan Talpade</div>
                <div className="text-[var(--pink)] text-[0.9rem]">Founder & Creative Director</div>
              </div>
              <div className="w-[2px] h-[40px] bg-[var(--pink)] max-sm:hidden"></div>
              <div>
                <div className="font-bold text-[var(--dark)]">Priyam Talpade-Mandrekar</div>
                <div className="text-[var(--pink)] text-[0.9rem]">Co-Founder & Marketing Head</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] text-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_50%,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="relative z-10 max-w-[700px] mx-auto">
          <h2 className="font-['Playfair_Display'] text-[clamp(2.2rem,4vw,3.5rem)] text-white mb-[20px] leading-[1.2]">
            Let's Create Something <em className="text-[var(--pink-light)] italic">Amazing Together</em>
          </h2>
          <p className="text-white/70 text-[1.1rem] leading-[1.8] mb-[36px]">
            Join 13,000+ satisfied customers who trust Favi Craze for their custom apparel needs. Get your free quote today!
          </p>
          <div className="flex gap-[16px] justify-center flex-wrap">
            <Link href="/products" className="bg-[var(--pink)] text-white px-[36px] py-[16px] rounded-full no-underline font-bold text-[1rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]">
              View Products
            </Link>
            <Link href="/contact" className="bg-white text-[var(--pink)] px-[36px] py-[16px] rounded-full no-underline font-bold text-[1rem] shadow-[0_6px_24px_rgba(255,255,255,0.2)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
