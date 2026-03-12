"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
    HiArrowNarrowRight,
    HiOutlineCode,
    HiOutlineChip,
    HiOutlineTrendingUp,
    HiOutlineDeviceMobile,
    HiOutlineSpeakerphone,
    HiOutlineLightningBolt,
} from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const year = new Date().getFullYear();

const SLIDER_I18N = {
    es: {
        badge: `Agencia de Desarrollo Web Premium · ${year}`,
        slides: [
            {
                icon: HiOutlineCode,
                title: "Desarrollo Web de Alto Rendimiento",
                highlights: ["Vende más", "Escala rápido", "Carga en < 1s"],
                subtitle: "Diseñamos páginas web profesionales con arquitectura Next.js, Angular, React, Astro, Etc. Optimizadas para Core Web Vitals y máximas tasas de conversión.",
            },
            {
                icon: HiOutlineChip,
                title: "Sistemas y Software a Medida",
                highlights: ["Arquitectura Robusta", "Escalabilidad Total", "Cero Errores"],
                subtitle: "Soluciones de software que eliminan cuellos de botella. Desarrollamos herramientas que transforman tus procesos operativos en rentabilidad pura.",
            },
            {
                icon: HiOutlineTrendingUp,
                title: "Estrategia SEO y Performance",
                highlights: ["Dominio de Google", "Tráfico Cualificado", "ROI Real"],
                subtitle: "No solo es diseño; es visibilidad. Implementamos SEO técnico avanzado para posicionar tu marca y captar clientes orgánicos de alto valor.",
            },
            {
                icon: HiOutlineDeviceMobile,
                title: "Desarrollo de Apps Móviles",
                highlights: ["iOS & Android", "UX Impecable", "Retención de Usuarios"],
                subtitle: "Creamos experiencias móviles nativas e híbridas que tus clientes amarán usar. Tu negocio, siempre en el bolsillo de tus usuarios.",
            },
            {
                icon: HiOutlineSpeakerphone,
                title: "Marketing Digital Estratégico",
                highlights: ["Campañas de Impacto", "Ads que Convierten", "Crecimiento Exponencial"],
                subtitle: "Maximizamos tu inversión publicitaria con estrategias basadas en datos. Atraemos, convertimos y fidelizamos a tu audiencia ideal.",
            },
            {
                icon: HiOutlineLightningBolt,
                title: "Automatización Inteligente",
                highlights: ["Ahorra Tiempo", "Reduce Costos", "Flujos Inteligentes"],
                subtitle: "Deja que la tecnología trabaje por ti. Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente genera valor.",
            },
        ],
        ctaPrimary: "🚀 Empieza tu Transformación",
        ctaSecondary: "Explorar Casos de Éxito",
        devBy: "Desarrollado por VelyonSoft",
    },
    en: {
        badge: `Premium Web Development Agency · ${year}`,
        slides: [
            {
                icon: HiOutlineCode,
                title: "High-Performance Web Development",
                highlights: ["Sell More", "Scale Fast", "Loads in < 1s"],
                subtitle: "Professional websites designed with Next.js and React. Optimized for Core Web Vitals and maximum conversion rates.",
            },
            {
                icon: HiOutlineChip,
                title: "Custom Software Solutions",
                highlights: ["Robust Architecture", "Full Scalability", "Zero Bugs"],
                subtitle: "Software solutions that eliminate bottlenecks. We build scalable tools that transform processes into pure profitability.",
            },
            {
                icon: HiOutlineTrendingUp,
                title: "SEO Strategy & Performance",
                highlights: ["Google Dominance", "Qualified Traffic", "Real ROI"],
                subtitle: "It’s not just design; it’s visibility. We implement advanced technical SEO to rank your brand and capture high-value organic leads.",
            },
            {
                icon: HiOutlineDeviceMobile,
                title: "Mobile App Development",
                highlights: ["iOS & Android", "Flawless UX", "User Retention"],
                subtitle: "Creating native and hybrid mobile experiences that your customers will love. Your business, always in your users' pockets.",
            },
            {
                icon: HiOutlineSpeakerphone,
                title: "Strategic Digital Marketing",
                highlights: ["High-Impact Campaigns", "High-Converting Ads", "Exponential Growth"],
                subtitle: "Maximize your advertising spend with data-driven strategies. We attract, convert, and retain your ideal audience.",
            },
            {
                icon: HiOutlineLightningBolt,
                title: "Intelligent Automation",
                highlights: ["Save Time", "Reduce Costs", "Smart Workflows"],
                subtitle: "Let technology work for you. We automate repetitive tasks so your team can focus on what truly adds value.",
            },
        ],
        ctaPrimary: "🚀 Start Your Transformation",
        ctaSecondary: "Explore Success Stories",
        devBy: "Developed by VelyonSoft",
    },
};

function TypeHighlight({ words }) {
    const [text] = useTypewriter({
        words,
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 40,
        delaySpeed: 3000,
    });

    return (
        <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {text}
            <Cursor cursorColor="#22d3ee" />
        </h2>
    );
}

export default function Slider({ lang = "es" }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = SLIDER_I18N[lang] ?? SLIDER_I18N.es;

    return (
        <section
            className="relative w-full overflow-hidden bg-zinc-950 text-white"
            id="inicio"
        >

            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url(/images/slider-font.webp)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-30" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,0.12),transparent_60%)]" />

            <motion.div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-cyan-500/40"
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-purple-500/30"
            />

            <div className="absolute inset-0 bg-black/60" />

            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={900}
                loop
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="relative h-[90vh] sm:h-[95vh] md:h-[800px]"
            >
                {t.slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => {
                            const Icon = slide.icon;

                            return (
                                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate={isActive ? "show" : "hidden"}
                                        className="max-w-4xl text-center"
                                    >
                                        <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                            <Icon className="text-cyan-400" size={16} />
                                            <span className="text-xs tracking-widest text-white/60 uppercase font-semibold">
                                                {t.badge}
                                            </span>
                                        </div>

                                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                                            {slide.title}
                                        </h1>

                                        <div className="flex justify-center mb-8 min-h-[40px]">
                                            {isActive && (
                                                <TypeHighlight
                                                    key={index}
                                                    words={slide.highlights}
                                                />
                                            )}
                                        </div>

                                        <p className="max-w-2xl px-4 mx-auto text-lg text-white/50 mb-12 leading-relaxed">
                                            {slide.subtitle}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center justify-center items-center">
                                            <a
                                                href={`/${lang}#contacto`}
                                                className="px-10 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
                                            >
                                                {t.ctaPrimary}
                                                <HiArrowNarrowRight />
                                            </a>

                                            <a
                                                href={`/${lang}/proyectos`}
                                                className="px-10 py-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                                            >
                                                {t.ctaSecondary}
                                                <HiArrowNarrowRight />
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-16 left-6 md:left-12 z-20"
            >
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-white/80">
                        Desarrollado por VelyonSoft
                    </span>
                </div>
            </motion.div>
        </section>
    );
}