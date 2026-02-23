'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`fixed bottom-[30px] right-[30px] z-[9999] bg-[var(--pink)] text-white px-[24px] py-[14px] rounded-[12px] font-semibold text-[0.9rem] shadow-[0_8px_30px_rgba(214,51,132,0.4)] transition-all duration-400 ${show ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
      {message}
    </div>
  );
}
