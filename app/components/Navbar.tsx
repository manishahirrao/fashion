'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-[6px] bg-white/88 backdrop-blur-[16px] border-b border-[rgba(214,51,132,0.1)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(214,51,132,0.15)]' : ''}`}>
        <Link href="/" className="flex items-center no-underline">
          <div className="relative" style={{ width: 80, height: 80 }}>
            <Image 
              src="/logo.png" 
              alt="Fashion Vista Logo" 
              fill
              className="object-contain hover:scale-105 transition-transform duration-200"
              priority
              unoptimized
              style={{ filter: 'drop-shadow(0 3px 8px rgba(214,51,132,0.25))' }}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="flex gap-[36px] list-none max-md:hidden">
          <li>
            <Link 
              href="/" 
              className={`no-underline text-[0.9rem] font-medium relative tracking-[0.02em] transition-colors duration-250 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--pink)] after:rounded-full after:transition-all after:duration-300 ${isActive('/') ? 'text-[var(--pink)] after:right-0' : 'text-[var(--dark)] after:right-full hover:text-[var(--pink)] hover:after:right-0'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`no-underline text-[0.9rem] font-medium relative tracking-[0.02em] transition-colors duration-250 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--pink)] after:rounded-full after:transition-all after:duration-300 ${isActive('/about') ? 'text-[var(--pink)] after:right-0' : 'text-[var(--dark)] after:right-full hover:text-[var(--pink)] hover:after:right-0'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={`no-underline text-[0.9rem] font-medium relative tracking-[0.02em] transition-colors duration-250 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--pink)] after:rounded-full after:transition-all after:duration-300 ${isActive('/products') ? 'text-[var(--pink)] after:right-0' : 'text-[var(--dark)] after:right-full hover:text-[var(--pink)] hover:after:right-0'}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`no-underline text-[0.9rem] font-medium relative tracking-[0.02em] transition-colors duration-250 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--pink)] after:rounded-full after:transition-all after:duration-300 ${isActive('/contact') ? 'text-[var(--pink)] after:right-0' : 'text-[var(--dark)] after:right-full hover:text-[var(--pink)] hover:after:right-0'}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[16px]">
          {/* Desktop CTA */}
          <Link 
            href="/contact" 
            className="bg-[var(--pink)] text-white px-[24px] py-[10px] rounded-full no-underline text-[0.875rem] font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(214,51,132,0.35)] hover:translate-y-[-2px] hover:shadow-[0_6px_24px_rgba(214,51,132,0.45)] max-md:hidden"
          >
            Get Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden max-md:flex flex-col gap-[5px] w-[28px] h-[28px] justify-center items-center cursor-pointer bg-transparent border-none p-0"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-[2.5px] bg-[var(--pink)] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
            <span className={`w-full h-[2.5px] bg-[var(--pink)] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[2.5px] bg-[var(--pink)] rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>

      {/* Mobile Menu */}
      <div className={`fixed top-[92px] left-0 right-0 bg-white shadow-[0_4px_30px_rgba(214,51,132,0.2)] z-40 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}>
        <ul className="flex flex-col gap-[8px] list-none p-[24px] max-h-[calc(100vh-92px)] overflow-y-auto">
          <li>
            <Link 
              href="/" 
              className={`block no-underline text-[1rem] font-medium px-[16px] py-[12px] rounded-[12px] transition-all duration-200 ${isActive('/') ? 'text-[var(--pink)] bg-[var(--pink-pale)]' : 'text-[var(--dark)] hover:bg-[var(--pink-pale)] hover:text-[var(--pink)]'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`block no-underline text-[1rem] font-medium px-[16px] py-[12px] rounded-[12px] transition-all duration-200 ${isActive('/about') ? 'text-[var(--pink)] bg-[var(--pink-pale)]' : 'text-[var(--dark)] hover:bg-[var(--pink-pale)] hover:text-[var(--pink)]'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={`block no-underline text-[1rem] font-medium px-[16px] py-[12px] rounded-[12px] transition-all duration-200 ${isActive('/products') ? 'text-[var(--pink)] bg-[var(--pink-pale)]' : 'text-[var(--dark)] hover:bg-[var(--pink-pale)] hover:text-[var(--pink)]'}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`block no-underline text-[1rem] font-medium px-[16px] py-[12px] rounded-[12px] transition-all duration-200 ${isActive('/contact') ? 'text-[var(--pink)] bg-[var(--pink-pale)]' : 'text-[var(--dark)] hover:bg-[var(--pink-pale)] hover:text-[var(--pink)]'}`}
            >
              Contact
            </Link>
          </li>
          <li className="mt-[16px] pt-[16px] border-t border-[rgba(214,51,132,0.15)]">
            <Link 
              href="/contact" 
              className="block bg-[var(--pink)] text-white px-[24px] py-[14px] rounded-full no-underline text-[0.95rem] font-semibold text-center shadow-[0_4px_16px_rgba(214,51,132,0.35)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_6px_24px_rgba(214,51,132,0.45)]"
            >
              Get Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}