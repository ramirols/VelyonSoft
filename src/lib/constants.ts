export const CONTACT_CONFIG = {
    whatsapp: {
        number: "+51997676432",
        rawNumber: "997676432",
        message: "¡Hola VelyonSoft! 🚀\n\nHe visto su sitio web y me interesa llevar mi proyecto al siguiente nivel con su tecnología. 📈\n\n¿Podrían brindarme información sobre sus servicios de desarrollo? ¡Muchas gracias!"
    },
    email: "contacto@velyonsoft.com"
};

export const SOCIAL_LINKS = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/velyonsoft/",
        iconName: "Instagram",
        color: "hover:border-pink-500/50",
        iconColor: "text-pink-400",
        bgColor: "bg-pink-400/10",
    },
    {
        name: "TikTok",
        href: "https://tiktok.com/@velyonsoft",
        iconName: "Music",
        color: "hover:border-zinc-200/50",
        iconColor: "text-zinc-200",
        bgColor: "bg-zinc-200/10",
    },
    {
        name: "Facebook",
        href: "https://facebook.com/velyonsoft",
        iconName: "Facebook",
        color: "hover:border-blue-500/50",
        iconColor: "text-blue-400",
        bgColor: "bg-blue-400/10",
    },
];

export const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(CONTACT_CONFIG.whatsapp.message);
    return `https://wa.me/${CONTACT_CONFIG.whatsapp.number.replace('+', '')}?text=${encodedMessage}`;
};