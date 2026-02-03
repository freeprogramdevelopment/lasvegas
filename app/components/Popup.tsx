'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PopupConfig {
  casino: {
    enabled: boolean;
    title: string;
    text: string;
    ctaText: string;
    ctaUrl: string;
    buttonColor: string;
    buttonGradient?: boolean;
    image?: string;
  };
  alternative: {
    enabled: boolean;
    title: string;
    text: string;
    ctaText: string;
    ctaUrl: string;
    buttonColor: string;
    buttonGradient?: boolean;
    image?: string;
  };
}

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<PopupConfig | null>(null);
  const [isCasinoTime, setIsCasinoTime] = useState(false);

  // Provjera vremena - casino se može oglašavati samo od 23:00 do 06:00
  const checkCasinoTime = () => {
    const now = new Date();
    const hour = now.getHours();
    // 23:00 (23) do 06:00 (6) - uključivo
    return hour >= 23 || hour < 6;
  };

  useEffect(() => {
    // Provjeri da li je korisnik već zatvorio popup danas
    // const today = new Date().toDateString();
    // const closedToday = localStorage.getItem('popupClosed');
    // 
    // if (closedToday === today) {
    //   return; // Ne prikazuj popup ako je već zatvoren danas
    // }

    // Učitaj konfiguraciju
    fetch('/popup-config.json')
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setIsCasinoTime(checkCasinoTime());
      })
      .catch((err) => console.error('Error loading popup config:', err));

    // Timer od 7 sekundi
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Spremi da je popup zatvoren danas
    // if (typeof window !== 'undefined') {
    //   const today = new Date().toDateString();
    //   localStorage.setItem('popupClosed', today);
    // }
  };

  if (!config || !isVisible) return null;

  // Prikaži samo casino reklamu od 23h do 06h
  if (!isCasinoTime || !config.casino.enabled) return null;

  const activeConfig = config.casino;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Zatamnjena pozadina */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in zoom-in duration-300">
        {/* X button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 hover:bg-white rounded-full p-1 backdrop-blur-sm"
          aria-label="Zatvori"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h2 
            className={`text-2xl md:text-3xl font-bold mb-3 ${activeConfig.image && activeConfig.buttonGradient ? '' : 'text-gray-900'}`}
            style={
              activeConfig.image && activeConfig.buttonGradient
                ? {
                    background: 'linear-gradient(to bottom, #2A0A8F 0%, #7E047E 50%, #FF0000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }
                : undefined
            }
          >
            {activeConfig.title}
          </h2>
          
          {/* Image */}
          {activeConfig.image && (
            <div className="mb-4 rounded-lg overflow-hidden relative w-full h-64">
              <Image
                src={activeConfig.image}
                alt={activeConfig.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          )}
          
          <p className="text-gray-600 mb-6">
            {activeConfig.text}
          </p>
          
          {/* CTA Button */}
          <a
            href={activeConfig.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={
              activeConfig.buttonGradient
                ? {
                    background: 'linear-gradient(to bottom, #2A0A8F 0%, #7E047E 50%, #FF0000 100%)',
                  }
                : { backgroundColor: activeConfig.buttonColor }
            }
          >
            {activeConfig.ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
