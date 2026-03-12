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
        badge: "Soporte",
        title: "Preguntas frecuentes",
        subtitle: "Resolvemos tus dudas para que des el siguiente paso con total seguridad y claridad.",
        faqs: [
            { q: "¿En cuánto tiempo entregan un proyecto web?", a: "Depende de la complejidad. Una landing page toma de 3 a 7 días, mientras que", str: "webs corporativas o e-commerce suelen estar listas en 2 a 4 semanas." },
            { q: "¿El diseño será único o usan plantillas?", a: "No usamos plantillas genéricas.", str: "Cada diseño es 100% personalizado para destacar tu marca frente a la competencia." },
            { q: "¿Ofrecen mantenimiento después de la entrega?", a: "Sí. Contamos con", str: "planes de soporte técnico, actualizaciones y seguridad para que nunca te preocupes por nada." },
            { q: "¿Mi web aparecerá en Google?", a: "Absolutamente. Todos nuestros desarrollos incluyen", str: "SEO técnico avanzado y optimización de velocidad para que tus clientes te encuentren." },
            { q: "¿Soy el dueño total de mi código y web?", a: "Sí, al finalizar el proyecto,", str: "la propiedad total de los archivos y licencias te pertenece. Sin letras pequeñas." },
            { q: "¿Qué tecnologías utilizan?", a: "Trabajamos con el stack más moderno:", str: "React, Next.js, Tailwind CSS y Node.js, garantizando escalabilidad y rapidez extrema." },
            { q: "¿Puedo autogestionar mi contenido?", a: "Sí. Implementamos", str: "paneles de administración intuitivos para que puedas subir fotos o textos sin depender de un programador." },
            { q: "¿Cómo se manejan los pagos?", a: "Normalmente dividimos el proyecto en", str: "dos fases: un pago inicial para comenzar y el saldo final tras la aprobación y entrega." },
            { q: "¿Desarrollan aplicaciones móviles también?", a: "Sí. Creamos", str: "apps nativas e híbridas para iOS y Android con experiencias de usuario fluidas." },
            { q: "¿Por qué elegirlos a ustedes y no a otros?", a: "Porque no solo entregamos código.", str: "Entregamos herramientas de venta optimizadas para maximizar tu ROI desde el primer día." },
        ],
        footer: "¿Aún tienes dudas?",
        cta: "Contáctanos ahora →",
    },
    en: {
        badge: "Support",
        title: "Frequently Asked Questions",
        subtitle: "Answering your questions so you can take the next step with total confidence and clarity.",
        faqs: [
            { q: "How long does a web project take?", a: "It depends on complexity. A landing page takes 3-7 days, while", str: "corporate sites or e-commerce are usually ready in 2 to 4 weeks." },
            { q: "Is the design unique or do you use templates?", a: "We don't use generic templates.", str: "Every design is 100% custom-made to make your brand stand out from the competition." },
            { q: "Do you offer maintenance after delivery?", a: "Yes. We provide", str: "technical support, updates, and security plans so you never have to worry about a thing." },
            { q: "Will my website appear on Google?", a: "Absolutely. All our builds include", str: "advanced technical SEO and speed optimization so customers can find you." },
            { q: "Do I fully own the code and website?", a: "Yes, upon project completion,", str: "total ownership of files and licenses belongs to you. No fine print." },
            { q: "What technologies do you use?", a: "We work with the most modern stack:", str: "React, Next.js, Tailwind CSS, and Node.js, ensuring scalability and extreme speed." },
            { q: "Can I manage my own content?", a: "Yes. We implement", str: "intuitive admin panels so you can upload photos or text without needing a developer." },
            { q: "How do you handle payments?", a: "We typically split the project into", str: "two phases: an initial deposit to start and the final balance upon approval and delivery." },
            { q: "Do you develop mobile applications too?", a: "Yes. We create", str: "native and hybrid apps for iOS and Android with seamless user experiences." },
            { q: "Why choose you over others?", a: "Because we don't just deliver code.", str: "We deliver sales tools optimized to maximize your ROI from day one." },
        ],
        footer: "Still have questions?",
        cta: "Contact us now →",
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
                <Accordion type="single" collapsible className="space-y-4">
                    {t.faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="group border border-gray-400 rounded-2xl bg-zinc-50/50 px-4 transition-all duration-500 data-[state=open]:bg-white data-[state=open]:border-secondary/50 data-[state=open]:shadow-[0_20px_40px_-15px_rgba(30,172,204,0.1)]"
                        >
                            <AccordionTrigger className="hover:no-underline py-7 px-4">
                                <div className="flex items-center gap-5 text-left">
                                    <span className="hidden sm:block text-[11px] font-bold text-gray-400 group-data-[state=open]:text-secondary transition-colors duration-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-medium text-gray-700 group-data-[state=open]:text-primary transition-colors duration-500">
                                        {faq.q}
                                    </h3>
                                </div>
                                <div className="shrink-0 ml-4 p-2 rounded-xl bg-white border border-gray-400 text-gray-400 group-data-[state=open]:bg-secondary group-data-[state=open]:text-white group-data-[state=open]:border-secondary transition-all duration-500 shadow-sm">
                                    <Plus className="w-4 h-4 transition-transform duration-500 group-data-[state=open]:rotate-45" />
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-4 pb-8 pt-0 sm:pl-16">
                                <div className="text-zinc-500 leading-relaxed font-light text-[17px]">
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