import { motion } from "framer-motion";
import { Hammer, ArrowRight } from "lucide-react";

export const FloatingBuilderCTA = ({ lang = "es" }) => {
    const content = {
        es: { title: "¿Listo para crear?", subtitle: "Calcula el precio de tu web", btn: "Probar Builder" },
        en: { title: "Ready to create?", subtitle: "Estimate your web price", btn: "Try Builder" }
    };

    const t = lang === "es" ? content.es : content.en;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
            className="fixed bottom-8 left-1/2 z-50 w-[95%] max-w-md"
        >
            {/* Contenedor principal con overflow hidden para el borde */}
            <div className="relative overflow-hidden rounded-2xl p-[1px]">

                {/* El "Arcoiris" corregido: inset masivo para evitar saltos visuales */}
                <span
                    className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
                    style={{
                        background: "conic-gradient(from 90deg at 50% 50%, #1eaccc 0%, #ff0080 25%, #7928ca 50%, #ff0080 75%, #1eaccc 100%)"
                    }}
                />

                {/* Cuerpo del componente: fondo oscuro para resaltar el borde */}
                <div className="relative flex items-center justify-between gap-4 rounded-2xl bg-neutral-950/90 px-5 py-4 backdrop-blur-2xl">
                    <div className="flex items-center gap-3">
                        {/* Icono con pulso sutil */}
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                            <Hammer size={18} className="relative z-10" />
                            <div className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-[10px] uppercase tracking-[0.15em] text-secondary font-black leading-none mb-1">
                                {t.title}
                            </p>
                            <p className="text-sm font-medium text-zinc-200 tracking-tight">
                                {t.subtitle}
                            </p>
                        </div>
                    </div>

                    <a
                        href={`/${lang}/constructor`}
                        className="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 whitespace-nowrap"
                    >
                        {t.btn}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};