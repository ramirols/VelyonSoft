import { useState } from 'react';
import { MessageCircleMore, X } from 'lucide-react';
import { getWhatsAppLink } from '../lib/constants';

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
            className="fixed bottom-10 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-4"
        >
            {!isOpen && (
                <div className="hidden sm:block bg-card border border-border px-4 py-2 rounded-lg shadow-lg text-sm text-foreground transition-opacity duration-200">
                    ¿Necesitas ayuda? ¡Contáctanos ahora!
                </div>
            )}

            <button
                className="bg-secondary text-white p-3 sm:p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                onClick={handleWhatsAppClick}
            >
                {isOpen ? <X size={24} className="sm:w-8 sm:h-8" /> : <MessageCircleMore size={24} className="sm:w-8 sm:h-8" />}
            </button>

            {isOpen && (
                <div className="absolute bottom-16 sm:bottom-20 right-0 bg-card border border-border rounded-lg shadow-xl p-4 sm:p-6 w-[280px] sm:w-80">
                    <div className="text-center mb-3 sm:mb-4">
                        <h3 className="font-semibold text-lg sm:text-xl mb-2 text-foreground">¡Hola! 👋</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                            ¿En qué podemos ayudarte? Estamos aquí para resolver tus dudas sobre nuestros servicios.
                        </p>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        className="w-full bg-secondary text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-sm sm:text-base"
                    >
                        <MessageCircleMore size={18} className="sm:w-5 sm:h-5" />
                        Iniciar conversación
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatsAppWidget;
