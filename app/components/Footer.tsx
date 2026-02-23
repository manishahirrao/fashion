import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white/70 px-[8vw] pt-[50px] pb-[28px]">
      <div className="grid grid-cols-4 gap-[40px] mb-[40px] max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <div className="mb-[16px]">
            <Image 
              src="/logo.png" 
              alt="Favi Craze Logo" 
              width={60} 
              height={60}
              className="object-contain"
              unoptimized
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            />
          </div>
          <p className="text-white/50 text-[0.875rem] leading-[1.7]">
            Your Style Spot — Designs Made in India, Made for You. Premium custom apparel since 2022.
          </p>
          <div className="mt-[16px]">
            <a href="https://www.favicraze.com" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-light)] text-[0.875rem] hover:underline">
              www.favicraze.com
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-[16px] text-[0.95rem]">Quick Links</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            <li><Link href="/" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">About Us</Link></li>
            <li><Link href="/products" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Products</Link></li>
            <li><Link href="/contact" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-[16px] text-[0.95rem]">Products</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            <li><a href="#" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Custom T-Shirts</a></li>
            <li><a href="#" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Printed Hoodies</a></li>
            <li><a href="#" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Hand Painted</a></li>
            <li><a href="#" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Corporate Gifting</a></li>
            <li><a href="#" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Caps & Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-[16px] text-[0.95rem]">Connect With Us</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            <li><a href="mailto:fashionvista2022@gmail.com" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">fashionvista2022@gmail.com</a></li>
            <li><a href="tel:9321137312" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">9321137312</a></li>
            <li><a href="https://www.instagram.com/favicraze?igsh=dWJrdG40Z3FnOWpu" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1AVrhGRGVw/" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/favi-craze-offical" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline text-[0.875rem] hover:text-[var(--pink-light)] transition-colors">LinkedIn</a></li>
            <li><span className="text-white/50 text-[0.875rem]">Mumbai & Pune, MH</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-[24px] flex justify-between items-center text-[0.8rem] text-white/35 max-md:flex-col max-md:gap-[12px]">
        <span>© 2025 Favi Craze. All rights reserved. Made with ❤️ in India.</span>
        <span>Award Winner — Maharashtra Udyog Gaurav 2024</span>
      </div>
    </footer>
  );
}
