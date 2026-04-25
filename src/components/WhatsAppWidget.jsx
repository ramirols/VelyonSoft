import { useState } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppLink } from '../lib/constants';

const WhatsAppIcon = ({ className = '' }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
    >
        <path d="M19.05 4.94A9.94 9.94 0 0 0 3.54 16.93L2 22l5.2-1.5a9.94 9.94 0 0 0 4.75 1.21h.01A10.05 10.05 0 0 0 22 11.69a9.92 9.92 0 0 0-2.95-6.75Zm-7.09 15.08h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.08.89.82-3-.2-.31a8.28 8.28 0 0 1-1.28-4.45 8.36 8.36 0 0 1 14.27-5.9 8.26 8.26 0 0 1 2.46 5.89 8.38 8.38 0 0 1-8.45 8.22Zm4.58-6.24c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.57.12-.16.24-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.24-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.24.24-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.36-.78-1.87-.2-.48-.41-.42-.57-.43h-.48c-.17 0-.43.06-.66.31-.23.24-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.17.2-.58.2-1.07.15-1.17-.05-.1-.22-.17-.47-.29Z" />
    </svg>
);

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        window.open(getWhatsAppLink(), '_blank');
        setIsOpen(false);
    };

    return (
        <div
            className="group fixed bottom-10 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-4"
        >
            {!isOpen && (
                <div className="pointer-events-none hidden sm:block rounded-lg border border-secondary/20 bg-card px-4 py-2 text-sm text-foreground shadow-[0_18px_40px_-22px_rgba(30,172,204,0.28)] opacity-0 translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    ¿Necesitas ayuda? ¡Contáctanos ahora!
                </div>
            )}

            <button
                type="button"
                className="relative isolate rounded-full border border-secondary/30 bg-secondary p-3 text-white shadow-[0_20px_45px_-18px_rgba(30,172,204,0.45)] ring-1 ring-background/70 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_24px_50px_-20px_rgba(30,172,204,0.32)] active:scale-95 sm:p-4"
                onClick={handleWhatsAppClick}
                aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
            >
                {!isOpen && (
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-secondary/35 [animation:ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                )}
                {isOpen ? <X size={24} className="sm:w-8 sm:h-8" /> : <WhatsAppIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
            </button>

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[280px] rounded-lg border border-secondary/20 bg-card p-4 shadow-[0_28px_60px_-26px_rgba(30,172,204,0.22)] sm:bottom-20 sm:w-80 sm:p-6">
                    <div className="text-center mb-3 sm:mb-4">
                        <h3 className="font-semibold text-lg sm:text-xl mb-2 text-foreground">¡Hola! 👋</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                            ¿En qué podemos ayudarte? Estamos aquí para resolver tus dudas sobre nuestros servicios.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleSendMessage}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-secondary/20 bg-secondary py-2 text-sm text-white shadow-[0_14px_30px_-22px_rgba(30,172,204,0.45)] transition-all cursor-pointer hover:bg-primary hover:text-primary-foreground sm:py-3 sm:text-base"
                    >
                        <WhatsAppIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                        Iniciar conversación
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatsAppWidget;
