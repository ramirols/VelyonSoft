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
        subtitle: "Respondemos las dudas más comunes sobre nuestros servicios de desarrollo web, software a medida y procesos de trabajo.",
        faqs: [
            { q: "¿En cuánto tiempo entregan un proyecto web?", a: "El tiempo de entrega depende del alcance del proyecto. Las landing pages o sitios simples suelen entregarse entre 3 y 7 días.", str: "Proyectos más complejos como webs corporativas o e-commerce pueden tomar entre 2 y 4 semanas." },
            { q: "¿Ofrecen mantenimiento después de la entrega?", a: "Sí. Ofrecemos", str: "planes de mantenimiento web que incluyen soporte técnico, actualizaciones, seguridad y mejoras de rendimiento." },
            { q: "¿Puedo solicitar cambios después del diseño inicial?", a: "Claro. Todos nuestros proyectos incluyen ", str: "revisiones para asegurar que el resultado final represente correctamente tu marca." },
            { q: "¿Trabajan con SEO y optimización de velocidad?", a: "Sí. Todos nuestros desarrollos incluyen ", str: "SEO técnico, optimización de velocidad y buenas prácticas para Google." },
            { q: "¿Desarrollan tiendas online o e-commerce?", a: "Sí. Creamos ", str: "tiendas online optimizadas para conversión con carrito y pasarelas de pago." },
            { q: "¿Qué tecnologías utilizan?", a: "Utilizamos ", str: "Astro, React, Tailwind, Node.js y bases de datos seguras." },
        ],
    },
    en: {
        badge: "Support",
        title: "Frequently Asked Questions",
        subtitle: "We answer the most common questions about our web development, custom software, SEO, and workflow.",
        faqs: [
            { q: "How long does a web project take?", a: "Delivery time depends on the project scope. ", str: "Landing pages usually take 3 to 7 days. More complex projects may take 2 to 4 weeks." },
            { q: "Do you offer maintenance after delivery?", a: "Yes. We offer web maintenance plans including ", str: "support, updates, security, and performance improvements." },
            { q: "Can I request changes after the initial design?", a: "Of course. ", str: "All projects include revisions to ensure the final result matches your brand." },
            { q: "Do you handle SEO and speed optimization?", a: "Yes. ", str: "All projects include technical SEO and performance optimization." },
        ],
    },
};

export default function FAQ({ lang = "es" }) {
    const t = i18n[lang] ?? i18n.es;

    return (
        <section id="faq" className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header Original (Restaurado) */}
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

                {/* Accordion Numerado y Minimalista */}
                <Accordion type="single" collapsible className="space-y-4">
                    {t.faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="group border border-zinc-100 rounded-2xl bg-zinc-50/50 px-4 transition-all duration-500 data-[state=open]:bg-white data-[state=open]:border-secondary/30 data-[state=open]:shadow-[0_20px_40px_-15px_rgba(30,172,204,0.1)]"
                        >
                            <AccordionTrigger className="hover:no-underline py-7 px-4">
                                <div className="flex items-center gap-5 text-left">
                                    {/* Indicador numérico sutil */}
                                    <span className="hidden sm:block text-[11px] font-bold text-zinc-300 group-data-[state=open]:text-secondary transition-colors duration-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-medium text-zinc-700 group-data-[state=open]:text-primary transition-colors duration-500">
                                        {faq.q}
                                    </h3>
                                </div>
                                {/* Icono de interacción Plus */}
                                <div className="shrink-0 ml-4 p-2 rounded-xl bg-white border border-zinc-100 text-zinc-400 group-data-[state=open]:bg-secondary group-data-[state=open]:text-white group-data-[state=open]:border-secondary transition-all duration-500 shadow-sm">
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

                {/* Footer Simplificado */}
                <div className="mt-20 text-center">
                    <p className="text-zinc-400 text-sm">
                        ¿Aún tienes dudas?
                        <a
                            href={`/${lang}#contacto`}
                            className="text-secondary font-semibold hover:text-secondary/80 transition-colors ml-1 inline-flex items-center gap-1"
                        >
                            Contáctanos ahora →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}