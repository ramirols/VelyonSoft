import * as React from "react";
import { Sparkles, Plus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const i18n = {
    es: {
        badge: "Soporte y Consultoría Digital",
        title: "Preguntas Frecuentes: Desarrollo Web y SEO en Perú",
        subtitle: "Resolvemos tus dudas sobre landing pages, webs corporativas, WordPress y apps móviles. Todo lo que necesitas para digitalizar tu empresa en Perú con resultados reales.",
        faqs: [
            {
                q: "¿Cuál es el tiempo de entrega para una landing page o web corporativa?",
                a: "Los plazos dependen de la complejidad del proyecto digital.",
                str: "Una landing page profesional optimizada para ventas suele entregarse en 3 a 7 días, mientras que una web corporativa avanzada o e-commerce toma entre 2 a 4 semanas en Perú.",
            },
            {
                q: "¿El diseño será personalizado o utilizan plantillas genéricas?",
                a: "En VelyonSoft no creemos en soluciones masivas.",
                str: "Cada diseño es 100% único y personalizado, desarrollado con un enfoque en User Experience (UX) y conversión para que tu marca destaque frente a la competencia en el mercado peruano.",
            },
            {
                q: "¿Ofrecen mantenimiento y soporte técnico tras finalizar la web?",
                a: "Garantizamos que tu plataforma siempre esté operativa.",
                str: "Contamos con planes de soporte prioritario, actualizaciones de seguridad y optimización de Core Web Vitals para que tu web corporativa sea rápida y segura los 365 días del año.",
            },
            {
                q: "¿Mi página web aparecerá en los primeros resultados de Google?",
                a: "Diseñamos pensando en el posicionamiento orgánico desde el primer día.",
                str: "Implementamos SEO técnico avanzado (arquitectura, velocidad de carga y etiquetas meta) para que tus clientes te encuentren fácilmente al buscar servicios en Lima y todo Perú.",
            },
            {
                q: "¿Soy el dueño legal de mi código, dominio y archivos?",
                a: "La propiedad total del proyecto es tuya.",
                str: "Al finalizar, transferimos todos los accesos, licencias y código fuente. Eres el dueño absoluto de tu activo digital, sin letras pequeñas ni contratos de permanencia forzosa.",
            },
            {
                q: "¿Qué tecnologías utilizan para el desarrollo de software y apps?",
                a: "Trabajamos con el stack tecnológico más moderno del 2026.",
                str: "Especialistas en Next.js, React, Tailwind CSS y Node.js para web; y React Native para aplicaciones móviles Android e iOS, garantizando escalabilidad y rapidez extrema.",
            },
            {
                q: "¿Podré editar el contenido de mi sitio web yo mismo?",
                a: "Implementamos sistemas autogestionables e intuitivos.",
                str: "Ya sea mediante WordPress optimizado o un CMS a medida, podrás actualizar textos, imágenes y precios sin depender de un programador, dándote autonomía total sobre tu negocio.",
            },
            {
                q: "¿Cómo se manejan los pagos y las cotizaciones en Perú?",
                a: "Manejamos un proceso de pago transparente y por hitos.",
                str: "Generalmente se requiere un 50% de adelanto para iniciar y el 50% restante contra entrega. Aceptamos transferencias bancarias locales, Yape, Plin y tarjetas de crédito.",
            },
            {
                q: "¿Desarrollan aplicaciones móviles personalizadas?",
                a: "Creamos soluciones móviles de alto impacto.",
                str: "Desarrollamos aplicaciones nativas e híbridas para Android e iOS, enfocadas en resolver problemas específicos de tu empresa o crear nuevos canales de venta digitales.",
            },
            {
                q: "¿Por qué elegir a VelyonSoft frente a otras agencias en Perú?",
                a: "No solo entregamos código, entregamos resultados de negocio.",
                str: "Nuestra metodología combina marketing digital estratégico con desarrollo de alto rendimiento para maximizar tu retorno de inversión (ROI) y acelerar tu crecimiento digital.",
            },
        ],
        footer: "¿Aún tienes preguntas sobre tu próximo proyecto?",
        cta: "Solicita una asesoría gratuita por WhatsApp ahora →",
    },
    en: {
        badge: "Support & Digital Consulting",
        title: "Frequently Asked Questions: Web Development & SEO Peru",
        subtitle: "Answering your questions about landing pages, corporate websites, WordPress, and mobile apps. Everything you need to digitize your business in Peru with real results.",
        faqs: [
            {
                q: "What is the delivery time for a landing page or corporate website?",
                a: "Deadlines depend on the technical complexity of the digital project.",
                str: "A sales-optimized professional landing page is usually delivered in 3 to 7 days, while an advanced corporate website or e-commerce takes 2 to 4 weeks in Peru.",
            },
            {
                q: "Is the design custom-made or do you use generic templates?",
                a: "At VelyonSoft, we don't believe in mass-market solutions.",
                str: "Every design is 100% unique and custom-built, developed with a focus on User Experience (UX) and conversion to make your brand stand out in the Peruvian market.",
            },
            {
                q: "Do you offer maintenance and technical support after the site is finished?",
                a: "We ensure your platform is always up and running.",
                str: "We provide priority support plans, security updates, and Core Web Vitals optimization so your corporate site remains fast and secure 365 days a year.",
            },
            {
                q: "Will my website appear in the top Google search results?",
                a: "We design with organic positioning in mind from day one.",
                str: "We implement advanced technical SEO (architecture, loading speed, and meta tags) so your customers can easily find you when searching for services in Lima and across Peru.",
            },
            {
                q: "Do I legally own my code, domain, and files?",
                a: "Full project ownership belongs to you.",
                str: "Upon completion, we transfer all access, licenses, and source code. You are the absolute owner of your digital asset, with no fine print or forced contracts.",
            },
            {
                q: "What technologies do you use for software and app development?",
                a: "We work with the most modern tech stack of 2026.",
                str: "Experts in Next.js, React, Tailwind CSS, and Node.js for web; and React Native for Android and iOS mobile apps, ensuring scalability and extreme speed.",
            },
            {
                q: "Will I be able to edit my website content myself?",
                a: "We implement intuitive self-managed systems.",
                str: "Whether through optimized WordPress or a custom CMS, you can update text, images, and prices without needing a developer, giving you full autonomy over your business.",
            },
            {
                q: "How are payments and quotes handled in Peru?",
                a: "We manage a transparent, milestone-based payment process.",
                str: "Generally, a 50% deposit is required to start and the remaining 50% upon delivery. We accept local bank transfers, Yape, Plin, and credit cards.",
            },
            {
                q: "Do you develop custom mobile applications?",
                a: "We create high-impact mobile solutions.",
                str: "We develop native and hybrid applications for Android and iOS, focused on solving specific business problems or creating new digital sales channels.",
            },
            {
                q: "Why choose VelyonSoft over other agencies in Peru?",
                a: "We don't just deliver code, we deliver business results.",
                str: "Our methodology combines strategic digital marketing with high-performance development to maximize your ROI and accelerate your digital growth.",
            },
        ],
        footer: "Still have questions about your next project?",
        cta: "Request a free consultation on WhatsApp now →",
    },
};

export default function FAQ({ lang = "es" }) {
    const t = i18n[lang] ?? i18n.es;

    return (
        <section id="faq" className="py-15 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <header className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                            {t.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                        {t.title}
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
                        {t.subtitle}
                    </p>
                </header>

                {/* Accordion */}
                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {t.faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            // Añadimos itemScope para Microdatos (SEO Avanzado)
                            itemScope
                            itemType="https://schema.org/Question"
                            className="group border border-gray-400 rounded-2xl bg-zinc-50/50 px-4 transition-all duration-500 data-[state=open]:bg-white data-[state=open]:border-secondary/50 data-[state=open]:shadow-[0_20px_40px_-15px_rgba(30,172,204,0.1)]"
                        >
                            <AccordionTrigger className="hover:no-underline py-7 px-4">
                                <div className="flex items-center gap-5 text-left">
                                    <span className="hidden sm:block text-[11px] font-bold text-gray-400 group-data-[state=open]:text-secondary transition-colors duration-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {/* Quitamos el H3 repetido y lo dejamos solo aquí con itemProp */}
                                    <h3 itemProp="name" className="text-lg font-medium text-gray-700 group-data-[state=open]:text-primary transition-colors duration-500">
                                        {faq.q}
                                    </h3>
                                </div>
                                <div className="shrink-0 ml-4 p-2 rounded-xl bg-white border border-gray-400 text-gray-400 group-data-[state=open]:bg-secondary group-data-[state=open]:text-white group-data-[state=open]:border-secondary transition-all duration-500 shadow-sm">
                                    <Plus className="w-4 h-4 transition-transform duration-500 group-data-[state=open]:rotate-45" />
                                </div>
                            </AccordionTrigger>

                            <AccordionContent
                                itemScope
                                itemType="https://schema.org/Answer"
                                className="px-4 pb-8 pt-0 sm:pl-16"
                            >
                                <div itemProp="text" className="text-zinc-500 leading-relaxed font-light text-[17px]">
                                    {faq.a}{" "}
                                    <strong className="font-medium text-primary">
                                        {faq.str}
                                    </strong>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Footer */}
                <div className="mt-20 text-center">
                    <p className="text-zinc-400 text-sm">
                        {t.footer}
                        <a
                            href={`/${lang}#contacto`}
                            className="text-secondary font-semibold hover:text-secondary/80 transition-colors ml-1 inline-flex items-center gap-1"
                        >
                            {t.cta}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}