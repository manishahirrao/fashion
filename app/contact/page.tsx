'use client';

import { useState, FormEvent } from 'react';
import Toast from '../components/Toast';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.fname || !formData.email || !formData.message) {
      setToastMessage('⚠️ Please fill in all required fields');
      setShowToast(true);
      return;
    }

    setToastMessage('🎉 Quote request sent! We\'ll get back to you shortly with pricing details.');
    setShowToast(true);
    
    setFormData({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    });
  };

  return (
    <div className="animate-[pageIn_0.4s_ease_forwards]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--dark)] to-[#2d0a1a] px-[8vw] py-[80px] text-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_50%,rgba(214,51,132,0.2),transparent_70%)]">
        <div className="inline-flex items-center gap-[8px] text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[var(--pink-light)] mb-[16px] relative before:content-[''] before:w-[24px] before:h-[2px] before:bg-[var(--pink-light)] before:rounded-full">
          Get in Touch
        </div>
        <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,4vw,3.8rem)] text-white mb-[16px] relative">
          Let's Discuss Your <em className="text-[var(--pink-light)] italic">Requirements</em>
        </h1>
        <p className="text-white/65 text-[1.05rem] relative">
          Have a design idea? Need a bulk order? Want to become a reseller? Request a quote today.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-[8vw] py-[80px]">
        <div className="grid grid-cols-[1fr_1.4fr] gap-[60px] max-md:grid-cols-1">
          {/* Contact Info */}
          <div>
            <h3 className="font-['Playfair_Display'] text-[1.8rem] mb-[20px]">
              Get in Touch with Favi Craze
            </h3>
            <p className="text-[var(--gray)] leading-[1.7] mb-[36px]">
              Whether you're an individual customer, a corporate client, or an aspiring reseller — our team is ready to provide you with a detailed quote and help bring your vision to life.
            </p>

            <div className="flex flex-col gap-[16px]">
              {[
                { icon: '📞', label: 'Phone', value: '9321137312 / 7304601580' },
                { icon: '✉️', label: 'Email', value: 'fashionvista2022@gmail.com' },
                { icon: '📸', label: 'Instagram', value: '@fashionvistaoffical' },
                { icon: '📍', label: 'Locations', value: 'Mumbai & Pune, Maharashtra' },
              ].map((contact, i) => (
                <div key={i} className="bg-white rounded-[16px] px-[24px] py-[20px] flex items-center gap-[16px] shadow-[0_8px_40px_rgba(214,51,132,0.12)] transition-transform hover:translate-x-[4px]">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-[var(--pink-pale)] flex items-center justify-center text-[1.3rem] flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-[0.75rem] text-[var(--gray)] uppercase tracking-[0.05em]">{contact.label}</div>
                    <div className="font-bold text-[0.95rem] text-[var(--dark)] mt-[2px]">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[24px] p-[40px] shadow-[0_8px_40px_rgba(214,51,132,0.12)]">
            <h3 className="font-['Playfair_Display'] text-[1.6rem] mb-[28px]">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-[16px] max-sm:grid-cols-1">
                <div className="flex flex-col gap-[8px] mb-[18px]">
                  <label className="text-[0.85rem] font-semibold text-[var(--dark)]">First Name</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    value={formData.fname}
                    onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                    className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-[8px] mb-[18px]">
                  <label className="text-[0.85rem] font-semibold text-[var(--dark)]">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    value={formData.lname}
                    onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                    className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] mb-[18px]">
                <label className="text-[0.85rem] font-semibold text-[var(--dark)]">Email Address</label>
                <input
                  type="email"
                  placeholder="priya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-[8px] mb-[18px]">
                <label className="text-[0.85rem] font-semibold text-[var(--dark)]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-[8px] mb-[18px]">
                <label className="text-[0.85rem] font-semibold text-[var(--dark)]">I'm interested in</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white"
                >
                  <option value="">Select an option</option>
                  <option>Custom T-Shirts for Personal Use</option>
                  <option>Corporate / Bulk Order</option>
                  <option>Event / Theme Party Order</option>
                  <option>Gifting Package</option>
                  <option>Becoming a Reseller</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-[8px] mb-[18px]">
                <label className="text-[0.85rem] font-semibold text-[var(--dark)]">Tell us about your requirement</label>
                <textarea
                  placeholder="I need 50 customized polo shirts with our company logo for a corporate event in December..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-2 border-[rgba(214,51,132,0.15)] rounded-[10px] px-[16px] py-[12px] text-[0.9rem] text-[var(--dark)] bg-[#fdf6f9] outline-none transition-all focus:border-[var(--pink)] focus:shadow-[0_0_0_4px_rgba(214,51,132,0.1)] focus:bg-white resize-vertical min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-[var(--pink)] to-[#e91e8c] text-white border-none rounded-[12px] px-[16px] py-[16px] text-[1rem] font-bold cursor-pointer shadow-[0_6px_24px_rgba(214,51,132,0.4)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(214,51,132,0.5)]"
              >
                Request Quote →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-[var(--pink-pale)] px-[8vw] py-[70px] text-center">
        <h3 className="font-['Playfair_Display'] text-[2rem] mb-[12px]">
          Follow Our Journey
        </h3>
        <p className="text-[var(--gray)] mb-[36px]">
          Stay updated with our latest designs, collections and behind-the-scenes content
        </p>

        <div className="flex gap-[16px] justify-center flex-wrap">
          {[
            { icon: '📸', text: 'Instagram', link: 'https://www.instagram.com/favicraze?igsh=dWJrdG40Z3FnOWpu' },
            { icon: '📘', text: 'Facebook', link: 'https://www.facebook.com/share/1AVrhGRGVw/' },
            { icon: '💼', text: 'LinkedIn', link: 'https://www.linkedin.com/company/favi-craze-offical' },
            { icon: '📧', text: 'fashionvista2022@gmail.com', link: 'mailto:fashionvista2022@gmail.com' },
            { icon: '📞', text: '9321137312', link: 'tel:9321137312' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target={social.link.startsWith('http') ? '_blank' : undefined}
              rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-[10px] bg-white px-[24px] py-[12px] rounded-full no-underline text-[var(--dark)] font-semibold text-[0.9rem] shadow-[0_8px_40px_rgba(214,51,132,0.12)] transition-all duration-200 hover:bg-[var(--pink)] hover:text-white hover:translate-y-[-3px]"
            >
              {social.icon} {social.text}
            </a>
          ))}
        </div>
      </section>

      <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
}
