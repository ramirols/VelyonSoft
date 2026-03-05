export type FeatureIcon = "check" | "zap" | "rocket" | "message" | "shield";
export type ServiceIcon = "laptop" | "code" | "boxes" | "phone";
export type BadgeKey = "starter" | "popular" | "business";

export type ServicePlan = {
    slug: string;
    nombre: string;
    price: {
        original: { pen: string };
        offer?: { pen: string; note?: string };
    };
    featured: boolean;
    icon: ServiceIcon;
    badgeKey?: BadgeKey;
    highlight?: boolean;
    features: {
        icon: FeatureIcon;
        textKey:
        | "responsive"
        | "seoBasic"
        | "seoAdvanced"
        | "speed"
        | "contact"
        | "custom"
        | "automation"
        | "scale"
        | "support"
        | "android"
        | "ios"
        | "marketing"
        | "wordpress"
        | "office"
        | "itSupport";
    }[];
    cta: {
        type: "contact" | "services";
    };
};

export const servicesData: Record<"es" | "en", ServicePlan[]> = {
    es: [
        {
            slug: "landing-page",
            nombre: "Landing Page Profesional",
            price: {
                original: { pen: "S/ 799" },
                offer: { pen: "S/ 599", note: "Lanzamiento" },
            },
            featured: true,
            icon: "laptop",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoBasic" },
                { icon: "check", textKey: "speed" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "web-corporativa",
            nombre: "Web Corporativa",
            price: {
                original: { pen: "S/ 1,799" },
                offer: { pen: "S/ 1,699", note: "Más Solicitado" },
            },
            featured: true,
            icon: "code",
            badgeKey: "popular",
            highlight: true,
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoAdvanced" },
                { icon: "check", textKey: "speed" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "wordpress-desarrollo",
            nombre: "Desarrollo en WordPress",
            price: {
                original: { pen: "S/ 1,200" },
                offer: { pen: "S/ 990", note: "Auto-gestionable" },
            },
            featured: true,
            icon: "code",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "wordpress" },
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoBasic" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "aplicaciones-moviles",
            nombre: "Aplicaciones Móviles",
            price: {
                original: { pen: "S/ 5,500" },
                offer: { pen: "S/ 4,500", note: "Precio Especial" },
            },
            featured: true,
            icon: "phone",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "android" },
                { icon: "check", textKey: "ios" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
        {
            slug: "marketing-digital",
            nombre: "Marketing Digital",
            price: {
                original: { pen: "S/ 899 /mes" },
                offer: { pen: "S/ 799 /mes", note: "Plan Mensual" },
            },
            featured: true,
            icon: "boxes",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "marketing" },
                { icon: "check", textKey: "seoAdvanced" },
                { icon: "check", textKey: "contact" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "automatizaciones",
            nombre: "Automatizaciones de Procesos",
            price: {
                original: { pen: "S/ 2,000" },
                offer: { pen: "S/ 1,500", note: "Eficiencia" },
            },
            featured: true,
            icon: "laptop",
            badgeKey: "business",
            features: [
                { icon: "zap", textKey: "automation" },
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "scale" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
        {
            slug: "soporte-informatico",
            nombre: "Soporte General Informático",
            price: {
                original: { pen: "S/ 500" },
                offer: { pen: "S/ 350", note: "Mantenimiento" },
            },
            featured: false,
            icon: "laptop",
            badgeKey: "popular",
            features: [
                { icon: "shield", textKey: "itSupport" },
                { icon: "check", textKey: "support" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "ofimatica",
            nombre: "Manejo de Ofimática",
            price: {
                original: { pen: "S/ 400" },
                offer: { pen: "S/ 299", note: "Productividad" },
            },
            featured: false,
            icon: "boxes",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "office" },
                { icon: "check", textKey: "support" },
                { icon: "check", textKey: "automation" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "software-medida",
            nombre: "Software a Medida",
            price: {
                original: { pen: "S/ 8,000" },
                offer: { pen: "S/ 6,500", note: "Cotización Base" },
            },
            featured: false,
            icon: "boxes",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "automation" },
                { icon: "check", textKey: "scale" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
    ],
    en: [
        {
            slug: "landing-page",
            nombre: "Professional Landing Page",
            price: {
                original: { pen: "S/ 799" },
                offer: { pen: "S/ 599", note: "Launch Offer" },
            },
            featured: true,
            icon: "laptop",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoBasic" },
                { icon: "check", textKey: "speed" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "corporate-web",
            nombre: "Corporate Website",
            price: {
                original: { pen: "S/ 1,899" },
                offer: { pen: "S/ 1,699", note: "Most Popular" },
            },
            featured: true,
            icon: "code",
            badgeKey: "popular",
            highlight: true,
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoAdvanced" },
                { icon: "check", textKey: "speed" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "wordpress-development",
            nombre: "WordPress Development",
            price: {
                original: { pen: "S/ 1,200" },
                offer: { pen: "S/ 990", note: "Self-managed" },
            },
            featured: true,
            icon: "code",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "wordpress" },
                { icon: "check", textKey: "responsive" },
                { icon: "check", textKey: "seoBasic" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "mobile-apps",
            nombre: "Mobile Applications",
            price: {
                original: { pen: "S/ 6,500" },
                offer: { pen: "S/ 5,500", note: "Business Plan" },
            },
            featured: true,
            icon: "phone",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "android" },
                { icon: "check", textKey: "ios" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
        {
            slug: "digital-marketing",
            nombre: "Digital Marketing",
            price: {
                original: { pen: "S/ 899 /mo" },
                offer: { pen: "S/ 799 /mo", note: "Monthly Plan" },
            },
            featured: true,
            icon: "boxes",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "marketing" },
                { icon: "check", textKey: "seoAdvanced" },
                { icon: "check", textKey: "contact" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "automations",
            nombre: "Process Automations",
            price: {
                original: { pen: "S/ 2,000" },
                offer: { pen: "S/ 1,500", note: "Efficiency" },
            },
            featured: true,
            icon: "laptop",
            badgeKey: "business",
            features: [
                { icon: "zap", textKey: "automation" },
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "scale" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
        {
            slug: "it-support",
            nombre: "General IT Support",
            price: {
                original: { pen: "S/ 500" },
                offer: { pen: "S/ 350", note: "Maintenance" },
            },
            featured: false,
            icon: "laptop",
            badgeKey: "popular",
            features: [
                { icon: "shield", textKey: "itSupport" },
                { icon: "check", textKey: "support" },
                { icon: "check", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },
        {
            slug: "custom-software",
            nombre: "Custom Software",
            price: {
                original: { pen: "S/ 8,000" },
                offer: { pen: "S/ 6,500", note: "Base Quote" },
            },
            featured: false,
            icon: "boxes",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "check", textKey: "automation" },
                { icon: "check", textKey: "scale" },
                { icon: "check", textKey: "support" },
            ],
            cta: { type: "services" },
        },
    ],
};