'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Category = 'all' | 'printed-adults' | 'handpainted' | 'kids' | 'couple' | 'other';

// Grouped product structure (source data)
interface GroupedProduct {
  name: string;
  desc: string;
  category: Category;
  badge?: string;
  images: string[];
}

// Individual product structure (for rendering)
interface IndividualProduct {
  id: string;
  imagePath: string;
  categoryName: string;
  categoryDescription: string;
  category: Category;
  badge?: string;
  displayName: string;
}

const groupedProducts: GroupedProduct[] = [
  // Round Neck T-shirts
  { 
    name: 'Round Neck T-shirts', 
    desc: 'Classic round neck tees with custom DTF/DTG printing. Premium 180 GSM cotton, XS–7XL.', 
    category: 'printed-adults', 
    badge: 'Bestseller', 
    images: [
      '/round-neck-tshirt (1).jpeg',
      '/round-neck-tshirt (2).jpeg',
      '/round-neck-tshirt (3).jpeg',
      '/round-neck-tshirt (4).jpeg',
      '/round-neck-tshirt (5).jpeg',
      '/round-neck-tshirt (6).jpeg',
      '/round-neck-tshirt (7).jpeg',
      '/round-neck-tshirt (8).jpeg',
      '/round-neck-tshirt (9).jpeg',
      '/round-neck-tshirt (10).jpeg',
      '/round-neck-tshirt (11).jpeg',
      '/round-neck-tshirt (12).jpeg',
      '/round-neck-tshirt (13).jpeg',
      '/round-neck-tshirt (14).jpeg',
      '/round-neck-tshirt (15).jpeg',
      '/round-neck-tshirt (16).jpeg',
    ]
  },
  
  // Collar T-shirts
  { 
    name: 'Collar T-shirts', 
    desc: 'Professional polo-style collar tees perfect for corporate wear and casual outings.', 
    category: 'printed-adults', 
    badge: 'Popular',
    images: [
      '/collar-tshirt (1).jpeg',
      '/collar-tshirt (2).jpeg',
      '/collar-tshirt (3).jpeg',
      '/collar-tshirt (4).jpeg',
      '/collar-tshirt (5).jpeg',
      '/collar-tshirt (6).jpeg',
      '/collar-tshirt (7).jpeg',
      '/collar-tshirt (8).jpeg',
      '/collar-tshirt (9).jpeg',
      '/collar-shirt (1).jpeg',
      '/collar-shirt (2).jpeg',
    ]
  },
  
  // Nylon T-shirts
  { 
    name: 'Nylon T-shirts', 
    desc: 'Lightweight, quick-dry nylon tees perfect for sports, gym, and outdoor activities.', 
    category: 'printed-adults', 
    images: [
      '/nylon-tshirt (1).jpeg',
      '/nylon-tshirt (2).jpeg',
    ]
  },
  
  // Handpainted T-shirts
  { 
    name: 'Handpainted T-shirts', 
    desc: 'Unique hand-painted designs on premium tees. Each piece is one-of-a-kind art for kids & adults.', 
    category: 'handpainted', 
    badge: 'Exclusive', 
    images: [
      '/handpainted-tshirt (1).jpeg',
      '/handpainted-tshirt (2).jpeg',
      '/handpainted-tshirt (3).jpeg',
      '/handpainted-tshirt (4).jpeg',
      '/handpainted-tshirt (5).jpeg',
      '/handpainted-tshirt (6).jpeg',
      '/handpainted-tshirt (7).jpeg',
      '/handpainted-tshirt (8).jpeg',
    ]
  },
  
  // Kids Wear
  { 
    name: 'Kids Wear Collection', 
    desc: 'Soft, comfortable tees and hoodies for kids with fun custom prints. Round neck, collar, and hoodie styles available.', 
    category: 'kids', 
    badge: 'New',
    images: [
      '/kids-tshirt (1).jpeg',
      '/kids-tshirt (2).jpeg',
      '/kids-tshirt (3).jpeg',
      '/kids-tshirt (4).jpeg',
      '/kids-tshirt (5).jpeg',
      '/kids-tshirt (6).jpeg',
      '/kids-tshirt (7).jpeg',
      '/kids-tshirt (8).jpeg',
      '/kids-tshirt (9).jpeg',
      '/kids-tshirt (10).jpeg',
      '/kids-tshirt (11).jpeg',
      '/kids-tshirt (12).jpeg',
      '/kids-tshirt (13).jpeg',
      '/kids-tshirt (14).jpeg',
    ]
  },
  
  // Couple T-shirts
  { 
    name: 'Couple T-shirts', 
    desc: 'Matching couple tees with creative designs. Perfect for anniversaries, dates, and special occasions.', 
    category: 'couple', 
    badge: 'Trending',
    images: [
      '/couple-tshirt (1).jpeg',
      '/couple-tshirt (2).jpeg',
      '/couple-tshirt (3).jpeg',
      '/couple-tshirt (4).jpeg',
      '/couple-tshirt (5).jpeg',
    ]
  },
  
  // Group T-shirts
  { 
    name: 'Group T-shirts', 
    desc: 'Coordinated group tees perfect for teams, events, family reunions, and corporate gatherings.', 
    category: 'other', 
    images: [
      '/family-group.jpeg',
    ]
  },
  
  // Custom Caps
  { 
    name: 'Custom Caps', 
    desc: 'Personalized caps with custom embroidery and printing. Perfect for corporate branding, events, and casual wear.', 
    category: 'other', 
    badge: 'New',
    images: [
      '/cap-eith-tshirt.jpeg',
    ]
  },
  
  // Custom Pouches
  { 
    name: 'Custom Pouches', 
    desc: 'Personalized pouches and bags with custom printing. Perfect for gifts, events, and promotional items.', 
    category: 'other', 
    images: [
      '/pouches (1).jpeg',
      '/pouches (2).jpeg',
      '/pouches (3).jpeg',
      '/pouches-1 (1).JPG',
      '/pouches-1 (2).JPG',
      '/pouches-1 (3).JPG',
      '/pouches-2 (1).JPG',
      '/pouches-2 (2).JPG',
      '/pouches-3.JPG',
      '/pouches.JPG',
      '/poches-with-pocket perfume (1).JPG',
      '/poches-with-pocket perfume (2).JPG',
      '/poches-with-pocket perfume (3).JPG',
    ]
  },
  
  // Shopping Bags
  { 
    name: 'Shopping Bags', 
    desc: 'Custom printed shopping bags for retail, events, and promotional purposes. Durable and eco-friendly options.', 
    category: 'other', 
    images: [
      '/shopping-bags (1).jpeg',
      '/shopping-bags (2).jpeg',
    ]
  },
];

// Flatten grouped products into individual product cards
function flattenProducts(groupedProducts: GroupedProduct[]): IndividualProduct[] {
  const flattened: IndividualProduct[] = [];
  
  groupedProducts.forEach((group) => {
    // Skip if images array is empty
    if (!group.images || group.images.length === 0) {
      console.warn(`Product group "${group.name}" has no images`);
      return;
    }
    
    group.images.forEach((imagePath, index) => {
      // Skip invalid image paths
      if (!imagePath || typeof imagePath !== 'string' || !imagePath.startsWith('/')) {
        console.warn(`Invalid image path in "${group.name}": ${imagePath}`);
        return;
      }
      
      // Extract filename from path for display
      const filename = imagePath.split('/').pop()?.replace(/\.(jpeg|jpg|png|webp)$/i, '') || '';
      
      flattened.push({
        id: `${group.category}-${group.name.toLowerCase().replace(/\s+/g, '-')}-${index}`,
        imagePath: imagePath,
        categoryName: group.name,
        categoryDescription: group.desc,
        category: group.category || 'printed-adults', // Default category if undefined
        badge: group.badge,
        displayName: `${group.name} - ${filename}`
      });
    });
  });
  
  return flattened;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Flatten products once on mount using useMemo
  const allProducts = useMemo(() => flattenProducts(groupedProducts), []);

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter((p: IndividualProduct) => p.category === activeCategory);

  const handleWhatsApp = (productName: string) => {
    const phoneNumber = '919321137312';
    const message = `Hi! I would like to inquire about: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#fff5f8] to-[var(--pink-pale)] px-[8vw] py-[70px] pb-[50px] text-center">
        <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink)] mb-[12px] before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink)] before:rounded-full">
          Our Collection
        </div>
        <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] mb-[16px]">
          Wear What <em className="text-[var(--pink)] italic">You Love</em>
        </h1>
        <p className="text-[var(--gray)] max-w-[540px] mx-auto mb-[40px] text-[1.05rem] leading-[1.7]">
          From custom t-shirts to hand-painted hoodies — every product is crafted with superior fabric and long-lasting prints that won't fade.
        </p>

        <div className="flex gap-[12px] flex-wrap justify-center">
          {[
            { label: 'All Products', value: 'all' as Category },
            { label: 'Printed Apparel', value: 'printed-adults' as Category },
            { label: 'Handpainted', value: 'handpainted' as Category },
            { label: 'Kids Wear', value: 'kids' as Category },
            { label: 'Other Products', value: 'other' as Category },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-[22px] py-[9px] rounded-full border-2 text-[0.875rem] font-semibold cursor-pointer transition-all duration-200 ${
                activeCategory === tab.value
                  ? 'bg-[var(--pink)] text-white border-[var(--pink)]'
                  : 'bg-transparent text-[var(--dark)] border-[rgba(214,51,132,0.25)] hover:bg-[var(--pink)] hover:text-white hover:border-[var(--pink)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-[8vw] py-[60px]">
        <div className="grid grid-cols-3 gap-[28px] max-md:grid-cols-2 max-sm:grid-cols-1">
          {filteredProducts.map((product: IndividualProduct, i: number) => (
            <div key={product.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(214,51,132,0.12)] transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_16px_50px_rgba(214,51,132,0.2)]">
              <div className="bg-gradient-to-br from-[var(--pink-pale)] to-[#fce4ec] h-[280px] flex items-center justify-center relative overflow-hidden">
                <Image
                  src={product.imagePath}
                  alt={product.displayName}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-[12px] right-[12px] bg-[var(--pink)] text-white px-[12px] py-[4px] rounded-full text-[0.75rem] font-bold">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="px-[24px] py-[20px] pb-[24px]">
                <div className="font-bold text-[1.05rem] mb-[6px]">{product.categoryName}</div>
                <p className="text-[var(--gray)] text-[0.875rem] leading-[1.6] mb-[14px]">{product.categoryDescription}</p>
                <div className="flex items-center justify-between gap-[8px]">
                  <button
                    onClick={() => handleWhatsApp(product.displayName)}
                    className="flex-1 bg-[#25D366] text-white border-none rounded-full px-[16px] py-[8px] text-[0.8rem] font-bold cursor-pointer transition-all duration-200 hover:bg-[#20BA5A] flex items-center justify-center gap-[6px]"
                  >
                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-white">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.5c-1.864 0-3.605-.561-5.055-1.527l-3.611.968.977-3.638c-1.004-1.454-1.589-3.217-1.589-5.115 0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.139-6.857c-.281-.141-1.664-.821-1.922-.915-.258-.094-.446-.141-.633.141s-.727.915-.891 1.102c-.164.188-.328.211-.609.07-.281-.141-1.186-.437-2.258-1.393-.835-.744-1.399-1.663-1.563-1.945-.164-.281-.017-.433.123-.573.126-.126.281-.328.422-.492.141-.164.188-.281.281-.469.094-.188.047-.352-.023-.492-.07-.141-.633-1.524-.867-2.086-.228-.547-.459-.473-.633-.481-.164-.008-.352-.008-.539-.008s-.492.07-.75.352c-.258.281-.984.961-.984 2.344s1.008 2.719 1.148 2.906c.141.188 1.984 3.028 4.805 4.242.672.289 1.195.461 1.602.59.675.214 1.289.184 1.773.112.54-.08 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.258-.188-.539-.328z"/>
                    </svg>
                    WhatsApp
                  </button>
                  <Link 
                    href="/contact"
                    className="flex-1 bg-[var(--pink-pale)] text-[var(--pink)] border-none rounded-full px-[16px] py-[8px] text-[0.8rem] font-bold cursor-pointer transition-all duration-200 hover:bg-[var(--pink)] hover:text-white text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-[var(--dark)] px-[8vw] py-[80px]">
        <div className="text-center mb-[48px]">
          <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,3rem)] text-white mb-[16px] leading-[1.2]">
            Our <em className="text-[var(--pink-light)] italic">Promise</em> to You
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-[20px] max-md:grid-cols-2">
          {[
            { icon: '🚫', title: 'No MOQ', text: 'Order as few as 1 piece with no compromise on quality' },
            { icon: '🧵', title: 'Superior Fabric', text: 'Premium cotton, hand-selected for comfort and durability' },
            { icon: '📏', title: 'Size XS–7XL', text: 'Truly inclusive sizing because fashion is for everyone' },
            { icon: '🎨', title: 'Long-lasting Prints', text: 'DTF technology ensures prints that won\'t crack or fade' },
            { icon: '✏️', title: 'Your Design', text: 'Bring your artwork, logo, or idea — we\'ll make it real' },
          ].map((usp, i) => (
            <div key={i} className="text-center px-[16px] py-[28px]">
              <span className="text-[2.5rem] mb-[12px] block">{usp.icon}</span>
              <div className="text-white font-bold text-[0.95rem] mb-[6px]">{usp.title}</div>
              <p className="text-white/50 text-[0.8rem] leading-[1.5]">{usp.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
