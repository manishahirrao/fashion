'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Customer images array
  const customerImages = [
    '/customer (1).jpeg',
    '/customer (2).jpeg',
    '/happy-customer (1).JPG',
    '/happy-customer (2).JPG',
    '/group-tshirt.jpeg',
  ];

  useEffect(() => {
    if (!countersAnimated) {
      setTimeout(() => {
        setCountersAnimated(true);
      }, 400);
    }
  }, [countersAnimated]);

  // Auto-rotate customer images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % customerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [customerImages.length]);

  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] grid grid-cols-2 items-center gap-[40px] px-[8vw] py-[60px] relative overflow-hidden max-md:grid-cols-1 max-md:text-center before:content-[''] before:absolute before:top-[-200px] before:right-[-200px] before:w-[700px] before:h-[700px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.12)_0%,transparent_70%)] before:pointer-events-none after:content-[''] after:absolute after:bottom-[-150px] after:left-[-100px] after:w-[500px] after:h-[500px] after:rounded-full after:bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_70%)] after:pointer-events-none">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-[8px] bg-[var(--pink-pale)] text-[var(--pink)] px-[16px] py-[6px] rounded-full text-[0.8rem] font-semibold mb-[20px] tracking-[0.05em] uppercase">
            <span className="w-[8px] h-[8px] bg-[var(--pink)] rounded-full animate-pulse"></span>
            Award-Winning Custom Apparel Brand
          </div>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.1] text-[var(--dark)] mb-[20px]">
            Turn Your <em className="text-[var(--pink)] italic">Ideas</em> Into<br/>Wearable <em className="text-[var(--pink)] italic">Masterpieces</em>
          </h1>
          <p className="text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[460px] mb-[36px] max-md:mx-auto">
            From a single tee to bulk orders — we bring your designs to life with premium fabrics, vibrant prints, and zero minimum order. Express yourself, your brand, your way.
          </p>
          <div className="flex gap-[16px] flex-wrap max-md:justify-center">
            <Link href="/products" className="bg-[var(--pink)] text-white px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]">
              Explore Products
            </Link>
            <Link href="/contact" className="bg-transparent text-[var(--pink)] px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] border-2 border-[var(--pink)] transition-all duration-200 hover:bg-[var(--pink-pale)]">
              Get Free Quote
            </Link>
          </div>
          <div className="flex gap-[32px] mt-[48px] pt-[32px] border-t border-[rgba(214,51,132,0.15)] max-md:justify-center">
            <div className="text-left">
              <div className="font-['Playfair_Display'] text-[2rem] font-black text-[var(--pink)] leading-none">13K+</div>
              <div className="text-[0.8rem] text-[var(--gray)] mt-[4px]">Happy Customers</div>
            </div>
            <div className="text-left">
              <div className="font-['Playfair_Display'] text-[2rem] font-black text-[var(--pink)] leading-none">3</div>
              <div className="text-[0.8rem] text-[var(--gray)] mt-[4px]">Resellers</div>
            </div>
            <div className="text-left">
              <div className="font-['Playfair_Display'] text-[2rem] font-black text-[var(--pink)] leading-none">50+</div>
              <div className="text-[0.8rem] text-[var(--gray)] mt-[4px]">Exhibitions</div>
            </div>
            <div className="text-left">
              <div className="font-['Playfair_Display'] text-[2rem] font-black text-[var(--pink)] leading-none">XS-7XL</div>
              <div className="text-[0.8rem] text-[var(--gray)] mt-[4px]">All Sizes</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center max-md:hidden">
          <div className="relative w-[420px] h-[420px] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(214,51,132,0.25)]">
            <Image 
              src="/home-hero.jpeg" 
              alt="Favi Craze Custom Apparel" 
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute top-[20px] right-[20px] bg-white rounded-[12px] px-[16px] py-[10px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] text-[0.8rem] font-semibold text-[var(--dark)] animate-[floatY_3s_ease-in-out_infinite]">
              🏆 Award Winning
            </div>
            <div className="absolute bottom-[80px] left-[20px] bg-white rounded-[12px] px-[16px] py-[10px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] text-[0.8rem] font-semibold text-[var(--dark)] animate-[floatY_3s_ease-in-out_infinite] [animation-delay:1s]">
              ✨ No MOQ
            </div>
            <div className="absolute top-[160px] left-[20px] bg-white rounded-[12px] px-[16px] py-[10px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] text-[0.8rem] font-semibold text-[var(--dark)] animate-[floatY_3s_ease-in-out_infinite] [animation-delay:2s]">
              🇮🇳 Made in India
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[var(--pink)] py-[14px] overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-[60px] animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="inline-flex gap-[60px]">
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Custom Printing</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">No Minimum Order</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">DTF & DTG Technology</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Hand Painted Designs</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Made in India</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Express Delivery</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Size XS to 7XL</span>
              <span className="text-[0.85rem] font-semibold text-white tracking-[0.08em] uppercase inline-flex items-center gap-[12px] before:content-['✦'] before:opacity-60">Award Winning Brand</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Sliding Banner */}
      <section className="relative h-[500px] overflow-hidden max-md:h-[400px]">
        <div className="absolute inset-0">
          <Image 
            src="/group-tshirt.jpeg" 
            alt="Favi Craze Custom Products" 
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center px-[8vw]">
          <div className="max-w-[600px]">
            <h2 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,4rem)] text-white mb-[20px] leading-[1.1]">
              Discover Our <em className="text-[var(--pink-light)] italic">Collection</em>
            </h2>
            <p className="text-white/90 text-[1.1rem] leading-[1.7] mb-[32px]">
              From trendy t-shirts to corporate gifting solutions — explore our wide range of customizable apparel that brings your vision to life.
            </p>
            <div className="flex gap-[16px] flex-wrap">
              <Link href="/about" className="bg-white text-[var(--pink)] px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(255,255,255,0.3)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]">
                About Us
              </Link>
              <Link href="/products" className="bg-[var(--pink)] text-white px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]">
                Product Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[8vw] py-[90px]">
        <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
          Why Choose Us
        </div>
        <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
          What Makes Us <em className="text-[var(--pink)] italic">Special</em>
        </h2>
        <p className="text-[var(--gray)] max-w-[520px] leading-[1.7] mb-[56px]">
          We combine innovative design with a direct-to-consumer approach — no middlemen, just great fashion at fair prices.
        </p>

        <div className="grid grid-cols-3 gap-[28px] max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            { icon: '🎨', title: 'Innovative Designs', text: 'Designs crafted to be an extension of your personality — from pop culture to Indian traditions to minimalist art.' },
            { icon: '🇮🇳', title: 'Homegrown with Pride', text: 'Imagined, designed and made entirely in India. We celebrate our heritage through vibrant prints and motifs.' },
            { icon: '💰', title: 'Direct to Consumer', text: 'We cut out the middleman entirely, passing the savings to you — better value, wider choice, faster delivery.' },
            { icon: '📦', title: 'No Minimum Order', text: 'Order just 1 piece or 1000 — we treat every order with the same dedication and precision.' },
            { icon: '🔧', title: 'Full Customization', text: 'DTF, DTG, hand-painted, and embroidered designs — choose your method, share your idea, we\'ll bring it to life.' },
            { icon: '🌍', title: 'Global Delivery', text: 'From Pune to UAE and Australia — we ship quality Indian craftsmanship to doorsteps across the world.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-[20px] px-[28px] py-[36px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] relative overflow-hidden transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_16px_50px_rgba(214,51,132,0.18)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[4px] before:bg-gradient-to-r before:from-[var(--pink)] before:to-[var(--pink-light)]">
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[var(--pink-pale)] flex items-center justify-center text-[1.6rem] mb-[20px]">
                {feature.icon}
              </div>
              <div className="text-[1.1rem] font-bold mb-[10px]">{feature.title}</div>
              <p className="text-[var(--gray)] text-[0.9rem] leading-[1.6]">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-[var(--dark)] px-[8vw] py-[80px] relative overflow-hidden before:content-[''] before:absolute before:top-[-200px] before:right-[-100px] before:w-[500px] before:h-[500px] before:rounded-full before:bg-[radial-gradient(circle,rgba(214,51,132,0.15),transparent_70%)]">
        <div className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink-light)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink-light)] before:rounded-full">
            Our Journey
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-white mb-[16px] leading-[1.2]">
            Numbers That Tell <em className="text-[var(--pink-light)] italic">Our Story</em>
          </h2>
        </div>

        {/* Award Showcase */}
        <div className="max-w-[900px] mx-auto mb-[60px]">
          <div className="grid grid-cols-[350px_1fr] gap-[40px] items-center max-md:grid-cols-1 bg-white/5 backdrop-blur-sm rounded-[20px] p-[32px] border border-white/10">
            <div className="relative h-[280px] rounded-[16px] overflow-hidden shadow-[0_12px_50px_rgba(214,51,132,0.3)]">
              <Image 
                src="/maharashtra-udhyog-winner.jpeg" 
                alt="Maharashtra Udyog Gaurav Award 2024 Winner" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-[8px] bg-[var(--pink)]/20 text-[var(--pink-light)] px-[16px] py-[6px] rounded-full text-[0.75rem] font-bold mb-[16px] tracking-[0.05em] uppercase">
                <span>🏆</span>
                <span>Award Winner 2024</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.8rem] text-white mb-[12px] leading-[1.2]">
                Maharashtra Udyog <em className="text-[var(--pink-light)] italic">Gaurav</em>
              </h3>
              <p className="text-white/70 leading-[1.7] text-[0.95rem]">
                Honored with the prestigious Maharashtra Udyog Gaurav 2024 award in the <strong className="text-white">Best Customized Printed Apparel Brand</strong> category. This recognition celebrates our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[24px] max-md:grid-cols-2">
          {[
            { num: '13K+', label: 'Orders Completed' },
            { num: '50+', label: 'Exhibitions Attended' },
            { num: '20+', label: 'Business News Outlets Coverage' },
            { num: '3', label: 'Resellers Appointed' },
          ].map((ach, i) => (
            <div key={i} className="text-center px-[20px] py-[32px] border border-[rgba(214,51,132,0.2)] rounded-[16px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[4px] transition-colors hover:border-[var(--pink)]">
              <div className="font-['Playfair_Display'] text-[2.8rem] font-black bg-gradient-to-br from-[var(--pink)] to-[var(--pink-light)] bg-clip-text text-transparent leading-none mb-[8px]">
                {ach.num}
              </div>
              <div className="text-white/60 text-[0.85rem] leading-[1.4]">{ach.label}</div>
            </div>
          ))}
        </div>
      </section>


           {/* SEO Content Section - Custom Printing Services */}
      <section className="px-[8vw] py-[90px] bg-gradient-to-br from-[#fff5f8] to-[var(--pink-pale)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[24px] leading-[1.2] text-center">
            Premium <em className="text-[var(--pink)] italic">Custom Printing Services</em> in Mumbai & Pune
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1">
            <div>
              <h3 className="text-[1.4rem] font-bold text-[var(--dark)] mb-[16px]">Why Choose Favi Craze for Custom T-Shirt Printing?</h3>
              <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
                Looking for <strong>custom t-shirt printing in Mumbai</strong> or <strong>personalized apparel in Pune</strong>? Favi Craze is your trusted partner for high-quality, affordable custom clothing. We specialize in DTF (Direct to Film) and DTG (Direct to Garment) printing technology, ensuring vibrant colors and long-lasting prints that won't fade or crack.
              </p>
              <p className="text-[var(--gray)] leading-[1.8] mb-[16px]">
                Whether you need <strong>corporate gifting solutions</strong>, <strong>event merchandise</strong>, <strong>family reunion t-shirts</strong>, or <strong>personalized gifts</strong>, we've got you covered. Our no minimum order quantity (MOQ) policy means you can order just one piece or thousands — we treat every order with the same care and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-[1.4rem] font-bold text-[var(--dark)] mb-[16px]">Our Custom Printing Capabilities</h3>
              <ul className="space-y-[12px]">
                {[
                  'Custom T-Shirts (Round Neck, Collar, V-Neck) - XS to 7XL',
                  'Printed Hoodies & Sweatshirts for Winter',
                  'Corporate Polo Shirts with Logo Embroidery',
                  'Hand-Painted Artistic Designs (One-of-a-Kind)',
                  'Custom Caps, Bags, Aprons & Accessories',
                  'Bulk Orders for Events, Weddings & Exhibitions',
                  'Same-Day & Express Delivery Available',
                  'International Shipping to UAE, Australia & More'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[12px] text-[var(--gray)] leading-[1.7]">
                    <span className="text-[var(--pink)] text-[1.2rem] flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-[8vw] py-[90px]">
        <div className="text-center mb-[56px]">
          <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
            Happy Customers
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
            What Our <em className="text-[var(--pink)] italic">Customers Say</em>
          </h2>
          <p className="text-[var(--gray)] max-w-[620px] mx-auto leading-[1.7]">
            Real reviews from real people who wear Favi Craze with pride. From family reunions to corporate events, we've helped thousands express their unique style.
          </p>
        </div>

        {/* Customer Images Gallery - Smooth Sliding Carousel */}
        <div className="relative overflow-hidden mb-[60px]">
          <div 
            className="flex gap-[24px] transition-transform duration-1000 ease-in-out max-md:gap-[16px]"
            style={{
              transform: `translateX(-${currentImageIndex * (100 / 3)}%)`
            }}
          >
            {/* Duplicate images for infinite loop effect */}
            {[...customerImages, ...customerImages].map((image, index) => (
              <div 
                key={index}
                className="relative h-[320px] rounded-[20px] overflow-hidden shadow-[0_12px_50px_rgba(214,51,132,0.2)] transition-transform hover:scale-[1.02] flex-shrink-0 max-md:h-[280px]"
                style={{ 
                  width: 'calc(33.333% - 16px)',
                  minWidth: 'calc(33.333% - 16px)'
                }}
              >
                <Image 
                  src={image} 
                  alt={`Happy Customer wearing Favi Craze Custom Apparel`} 
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-[8px] mt-[24px]">
            {customerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'bg-[var(--pink)] w-[24px]' 
                    : 'bg-[var(--pink)]/30 hover:bg-[var(--pink)]/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            { stars: 5, text: '"Ordered t-shirts for full family with a printed theme for a party. Fabric quality and print quality are amazing. Delivery was super fast — Saturday I ordered, Monday delivered!"', author: 'Shipa Risbud' },
            { stars: 4, text: '"Thanks a million — your T-shirts were appreciated and liked by all at our alumni meet. The customization was exactly as requested!"', author: 'Dr. Dipali' },
            { stars: 5, text: '"Thank you so much to Priyam from Favi Craze for the excellent quality customized T-shirt delivered before time. She was clear, precise, and cooperative."', author: 'Anuja' },
          ].map((testi, i) => (
            <div key={i} className="bg-white rounded-[20px] px-[32px] py-[32px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] transition-transform hover:translate-y-[-4px]">
              <div className="text-[#f59e0b] text-[1rem] mb-[16px] tracking-[2px]">
                {'★'.repeat(testi.stars)}{'☆'.repeat(5 - testi.stars)}
              </div>
              <p className="text-[var(--gray)] text-[0.95rem] leading-[1.7] mb-[20px] italic">{testi.text}</p>
              <div className="font-bold text-[var(--dark)]">{testi.author}</div>
            </div>
          ))}
        </div>
      </section>

 

      {/* Become a Reseller Section */}
      <section className="px-[8vw] py-[90px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-[8px] bg-[var(--pink-pale)] text-[var(--pink)] px-[16px] py-[6px] rounded-full text-[0.75rem] font-bold mb-[20px] tracking-[0.05em] uppercase shadow-sm">
                <span>🤝</span>
                <span>Partnership Opportunity</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[20px] leading-[1.2]">
                Become a <em className="text-[var(--pink)] italic">Reseller</em>
              </h2>
              <p className="text-[var(--gray)] leading-[1.8] mb-[24px]">
                Join India's fastest-growing custom apparel brand and build your own profitable business. As a Favi Craze reseller, you'll get exclusive access to premium products, competitive pricing, and dedicated support to help you succeed.
              </p>
              <ul className="space-y-[12px] mb-[32px]">
                {[
                  'Zero investment required to start',
                  'Attractive profit margins on every order',
                  'Access to our complete product catalog',
                  'Marketing materials and design support',
                  'Dedicated reseller dashboard',
                  'Priority customer service',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-[12px] text-[var(--gray)]">
                    <span className="text-[var(--pink)] text-[1.2rem] flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/919321137312?text=Hi!%20I%20want%20to%20become%20a%20Favi%20Craze%20reseller.%20Please%20share%20more%20details." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[var(--pink)] text-white px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]"
              >
                Join as Reseller →
              </a>
            </div>
            <div className="bg-white rounded-[24px] p-[40px] shadow-[0_12px_50px_rgba(214,51,132,0.15)]">
              <div className="text-center mb-[32px]">
                <div className="w-[80px] h-[80px] mx-auto mb-[16px] rounded-full bg-gradient-to-br from-[var(--pink)] to-[var(--pink-light)] flex items-center justify-center text-[2.5rem] text-white shadow-[0_8px_24px_rgba(214,51,132,0.3)]">
                  💼
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.6rem] text-[var(--dark)] mb-[8px]">Start Your Journey</h3>
                <p className="text-[var(--gray)] text-[0.9rem]">Join 3+ successful resellers across Maharashtra</p>
              </div>
              <div className="space-y-[20px]">
                {[
                  { step: '01', title: 'Apply', desc: 'Fill out a simple application form' },
                  { step: '02', title: 'Get Approved', desc: 'Receive your reseller credentials' },
                  { step: '03', title: 'Start Selling', desc: 'Begin earning from day one' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-[16px] items-start">
                    <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full bg-[var(--pink-pale)] flex items-center justify-center text-[var(--pink)] font-bold text-[0.85rem]">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--dark)] mb-[4px]">{item.title}</div>
                      <div className="text-[var(--gray)] text-[0.85rem]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* WhatsApp Affiliate Partner Program */}
      <section className="px-[8vw] py-[90px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1">
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[24px] p-[48px] text-white relative overflow-hidden max-md:order-2">
              <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10 blur-[60px]"></div>
              <div className="relative z-10">
                <div className="w-[70px] h-[70px] mb-[24px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-[40px] h-[40px] fill-white">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.5c-1.864 0-3.605-.561-5.055-1.527l-3.611.968.977-3.638c-1.004-1.454-1.589-3.217-1.589-5.115 0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.139-6.857c-.281-.141-1.664-.821-1.922-.915-.258-.094-.446-.141-.633.141s-.727.915-.891 1.102c-.164.188-.328.211-.609.07-.281-.141-1.186-.437-2.258-1.393-.835-.744-1.399-1.663-1.563-1.945-.164-.281-.017-.433.123-.573.126-.126.281-.328.422-.492.141-.164.188-.281.281-.469.094-.188.047-.352-.023-.492-.07-.141-.633-1.524-.867-2.086-.228-.547-.459-.473-.633-.481-.164-.008-.352-.008-.539-.008s-.492.07-.75.352c-.258.281-.984.961-.984 2.344s1.008 2.719 1.148 2.906c.141.188 1.984 3.028 4.805 4.242.672.289 1.195.461 1.602.59.675.214 1.289.184 1.773.112.54-.08 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.258-.188-.539-.328z"/>
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-[2rem] mb-[16px] leading-[1.2]">
                  WhatsApp Affiliate <em className="italic">Partner</em>
                </h3>
                <p className="text-white/90 leading-[1.7] mb-[24px]">
                  Earn commissions by promoting Favi Craze products through WhatsApp. Perfect for influencers, content creators, and anyone with a strong social network.
                </p>
                <div className="space-y-[12px]">
                  {[
                    'Earn up to 15% commission per sale',
                    'Unique referral links for tracking',
                    'Weekly payouts via UPI/Bank transfer',
                    'Exclusive promotional content',
                    'Real-time dashboard to track earnings',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-[12px]">
                      <span className="text-white text-[1.2rem] flex-shrink-0">✓</span>
                      <span className="text-white/90 text-[0.95rem]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-md:order-1">
              <div className="inline-flex items-center gap-[8px] bg-[#25D366]/10 text-[#128C7E] px-[16px] py-[6px] rounded-full text-[0.75rem] font-bold mb-[20px] tracking-[0.05em] uppercase">
                <span>💰</span>
                <span>Earn While You Share</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[20px] leading-[1.2]">
                Turn Your Network Into <em className="text-[var(--pink)] italic">Income</em>
              </h2>
              <p className="text-[var(--gray)] leading-[1.8] mb-[32px]">
                Love our products? Share them with your friends, family, and followers on WhatsApp and earn generous commissions on every sale. No inventory, no investment — just share and earn!
              </p>
              <div className="bg-[var(--pink-pale)] rounded-[16px] p-[24px] mb-[32px]">
                <div className="font-bold text-[var(--dark)] mb-[12px]">How It Works:</div>
                <ol className="space-y-[8px] list-decimal list-inside text-[var(--gray)]">
                  <li>Sign up as a WhatsApp Affiliate Partner</li>
                  <li>Get your unique referral link and promo materials</li>
                  <li>Share products with your WhatsApp contacts</li>
                  <li>Earn commission when someone buys through your link</li>
                  <li>Receive weekly payouts directly to your account</li>
                </ol>
              </div>
              <a 
                href="https://wa.me/919321137312?text=Hi!%20I%20want%20to%20join%20the%20WhatsApp%20Affiliate%20Partner%20Program.%20Please%20share%20details." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] bg-[#25D366] text-white px-[32px] py-[14px] rounded-full no-underline font-semibold text-[0.95rem] shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
              >
                <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-white">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.5c-1.864 0-3.605-.561-5.055-1.527l-3.611.968.977-3.638c-1.004-1.454-1.589-3.217-1.589-5.115 0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5z"/>
                </svg>
                Join Affiliate Program
              </a>
            </div>
          </div>
        </div>
      </section>

                  {/* FAQ Section */}
      <section className="px-[8vw] py-[90px] bg-gradient-to-br from-[#fff5f8] to-[var(--pink-pale)]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
              Got Questions?
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-[var(--dark)] mb-[16px] leading-[1.2]">
              Frequently Asked <em className="text-[var(--pink)] italic">Questions</em>
            </h2>
            <p className="text-[var(--gray)] leading-[1.7]">
              Everything you need to know about our custom printing services
            </p>
          </div>

          <div className="space-y-[16px]">
            {[
              {
                q: 'What is the minimum order quantity (MOQ) for custom t-shirts?',
                a: 'We have NO minimum order quantity! You can order just 1 piece or 1000+ pieces. Whether you need a single personalized gift or bulk corporate orders, we handle all order sizes with the same quality and care.'
              },
              {
                q: 'What printing methods do you use?',
                a: 'We use advanced DTF (Direct to Film) and DTG (Direct to Garment) printing technology for vibrant, long-lasting prints. We also offer hand-painted designs for unique artistic pieces and embroidery for corporate logos. Each method is chosen based on your design requirements and fabric type.'
              },
              {
                q: 'How long does it take to complete an order?',
                a: 'Standard orders are typically completed within 3-5 business days. We also offer express delivery options for urgent requirements. For bulk orders (100+ pieces), delivery time may vary from 5-7 days. Same-day delivery is available for select products in Mumbai and Pune.'
              },
              {
                q: 'What sizes do you offer?',
                a: 'We offer truly inclusive sizing from XS to 7XL for most products. We believe fashion is for everyone, regardless of body type. Custom sizing is also available upon request for special requirements.'
              },
              {
                q: 'Can I provide my own design or logo?',
                a: 'Absolutely! You can provide your own artwork, logo, or design in any format (JPG, PNG, PDF, AI). Our design team can also help refine your concept or create custom designs from scratch. We offer free design consultation for all orders.'
              },
              {
                q: 'What is your pricing structure?',
                a: 'Pricing varies based on product type, printing method, quantity, and design complexity. We offer competitive rates with no hidden charges. Contact us for a detailed quote — we typically respond within 2-4 hours with pricing and mockups.'
              },
              {
                q: 'Do you ship outside Mumbai and Pune?',
                a: 'Yes! We ship across India and internationally to countries like UAE, Australia, and more. Shipping costs are calculated based on location and order weight. We use reliable courier partners to ensure safe and timely delivery.'
              },
              {
                q: 'What is your return and refund policy?',
                a: 'We stand behind our quality. If there\'s a printing defect or quality issue, we offer free replacement or full refund. Since our products are custom-made, we cannot accept returns for change of mind. However, customer satisfaction is our priority, and we work with you to resolve any concerns.'
              },
              {
                q: 'Can you handle corporate bulk orders?',
                a: 'Yes! We specialize in corporate gifting, employee uniforms, event merchandise, and promotional products. We\'ve successfully delivered orders for 500+ companies and events. We offer special pricing for bulk orders and dedicated account management for corporate clients.'
              },
              {
                q: 'How do I place an order?',
                a: 'Simply click the WhatsApp button on any product page, fill out our quote request form, or call us directly at 9321137312. Share your requirements, design, quantity, and delivery timeline. We\'ll provide a quote and mockup within hours. Once approved, we begin production immediately.'
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-[16px] px-[28px] py-[24px] shadow-[0_4px_20px_rgba(214,51,132,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(214,51,132,0.12)] group">
                <summary className="font-bold text-[1.05rem] text-[var(--dark)] cursor-pointer list-none flex items-center justify-between">
                  <span className="pr-[20px]">{faq.q}</span>
                  <span className="text-[var(--pink)] text-[1.5rem] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-[var(--gray)] leading-[1.8] mt-[16px] pt-[16px] border-t border-[rgba(214,51,132,0.1)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] text-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_50%,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="relative z-10 max-w-[700px] mx-auto">
          <h2 className="font-['Playfair_Display'] text-[clamp(2.2rem,4vw,3.5rem)] text-white mb-[20px] leading-[1.2]">
            Ready to Create Your <em className="text-[var(--pink-light)] italic">Custom Apparel?</em>
          </h2>
          <p className="text-white/70 text-[1.1rem] leading-[1.8] mb-[36px]">
            Get a free quote today! Share your design ideas, and we'll bring them to life with premium quality printing.
          </p>
          <div className="flex gap-[16px] justify-center flex-wrap">
            <Link href="/contact" className="bg-[var(--pink)] text-white px-[36px] py-[16px] rounded-full no-underline font-bold text-[1rem] shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]">
              Request Free Quote
            </Link>
            <a href="https://wa.me/919321137312?text=Hi!%20I%20would%20like%20to%20inquire%20about%20Favi%20Craze%20products." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-[36px] py-[16px] rounded-full no-underline font-bold text-[1rem] shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center gap-[10px]">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-white">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.5c-1.864 0-3.605-.561-5.055-1.527l-3.611.968.977-3.638c-1.004-1.454-1.589-3.217-1.589-5.115 0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
