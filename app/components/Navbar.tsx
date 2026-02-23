'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-[12px] bg-white/88 backdrop-blur-[16px] border-b border-[rgba(214,51,132,0.1)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(214,51,132,0.15)]' : ''}`}>
      <Link href="/" className="flex items-center no-underline">
        <Image 
          src="/logo.png" 
          alt="Favi Craze Logo" 
          width={50} 
          height={50}
          className="object-contain hover:scale-105 transition-transform duration-200"
          priority
          unoptimized
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
        />
      </Link>

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

      <Link 
        href="/contact" 
        className="bg-[var(--pink)] text-white px-[24px] py-[10px] rounded-full no-underline text-[0.875rem] font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(214,51,132,0.35)] hover:translate-y-[-2px] hover:shadow-[0_6px_24px_rgba(214,51,132,0.45)]"
      >
        Get Quote
      </Link>
    </nav>
  );
}
