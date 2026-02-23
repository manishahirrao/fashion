'use client';

export default function WhatsAppButton() {
  const phoneNumber = '919321137312'; // WhatsApp number in international format without + or spaces
  const message = 'Hi! I would like to inquire about Favi Craze products.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[30px] right-[30px] z-[9999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white text-[28px] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] animate-[pulse_2s_ease-in-out_infinite]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-[32px] h-[32px] fill-white"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.316-0.518c-1.314-2.15-2.009-4.617-2.009-7.195 0-7.444 6.056-13.5 13.5-13.5s13.5 6.056 13.5 13.5-6.056 13.5-13.5 13.5zM21.803 18.142c-0.294-0.147-1.738-0.858-2.008-0.956-0.27-0.099-0.466-0.147-0.662 0.147s-0.761 0.956-0.933 1.152c-0.172 0.196-0.344 0.221-0.638 0.074-0.294-0.147-1.241-0.457-2.363-1.458-0.874-0.779-1.464-1.741-1.636-2.035-0.172-0.294-0.018-0.453 0.129-0.6 0.132-0.132 0.294-0.344 0.441-0.516 0.147-0.172 0.196-0.294 0.294-0.491 0.099-0.196 0.049-0.368-0.025-0.516-0.074-0.147-0.662-1.594-0.908-2.183-0.238-0.573-0.479-0.495-0.662-0.504-0.172-0.008-0.368-0.010-0.564-0.010s-0.516 0.074-0.786 0.368c-0.27 0.294-1.031 1.008-1.031 2.456s1.056 2.849 1.203 3.045c0.147 0.196 2.073 3.163 5.023 4.436 0.701 0.303 1.249 0.484 1.676 0.619 0.704 0.223 1.345 0.191 1.851 0.116 0.565-0.084 1.738-0.711 1.982-1.397 0.244-0.686 0.244-1.274 0.172-1.397-0.073-0.123-0.27-0.196-0.564-0.344z" />
      </svg>
    </button>
  );
}
