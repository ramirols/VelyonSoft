import { Menu, X, Grid3X3, Briefcase, BookOpen, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header({ lang = "es" }) {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const t = {
        es: {
            servicios: "Servicios",
            proyectos: "Proyectos",
            blog: "Blog",
            contacto: "Contacto",
        },
        en: {
            servicios: "Services",
            proyectos: "Projects",
            blog: "Blog",
            contacto: "Contact",
        },
    }[lang]

    const navLinks = [
        { name: t.servicios, href: `/${lang}/servicios`, icon: <Grid3X3 size={18} /> },
        { name: t.proyectos, href: `/${lang}/proyectos`, icon: <Briefcase size={18} /> },
        { name: t.blog, href: `/${lang}/blog`, icon: <BookOpen size={18} /> },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const slideSection = document.getElementById("inicio")
            const blogHero = document.getElementById("blog-hero")
            const footer = document.querySelector("footer")

            // 🦶 FOOTER PRIMERO (máxima prioridad)
            if (footer) {
                const rect = footer.getBoundingClientRect()

                if (rect.top <= window.innerHeight - 80) {
                    setScrolled(true)
                    return
                }
            }

            // 🏠 HOME (slider principal)
            if (slideSection) {
                const rect = slideSection.getBoundingClientRect()

                if (rect.bottom > 100) {
                    setScrolled(false)
                    return
                }
            }

            // 📰 Blog con hero
            if (blogHero) {
                const rect = blogHero.getBoundingClientRect()

                if (rect.bottom > 100) {
                    setScrolled(false)
                    return
                }
            }

            // 📄 Resto de casos
            setScrolled(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const switchLang = (newLang) => {
        const path = window.location.pathname
        const segments = path.split("/").filter(Boolean)

        if (segments[0] === "es" || segments[0] === "en") {
            segments[0] = newLang
        } else {
            segments.unshift(newLang)
        }

        const newPath = "/" + segments.join("/") + window.location.search
        window.location.href = newPath
    }

    return (
        <header className="fixed top-6 left-0 w-full z-50 px-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto">

                <div
                    className={`relative flex items-center justify-between px-6 rounded-2xl transition-all duration-500 ease-out
                    ${scrolled
                            ? "py-3 bg-white/40 backdrop-blur-xl shadow-lg"
                            : "py-4 bg-transparent"
                        }`}
                >

                    {/* Logo */}
                    <a
                        href={`/${lang}`}
                        className="text-2xl font-black tracking-wide"
                    >
                        <span className="text-secondary">Velyon</span>
                        <span className={scrolled ? "text-primary" : "text-white"}>
                            Soft
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav
                        className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-primary/80" : "text-white/70"
                            }`}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-2 transition-colors ${scrolled
                                    ? "hover:text-primary"
                                    : "hover:text-white"
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex gap-2">
                            <button
                                onClick={() => switchLang("es")}
                                className={`px-3 py-1 rounded-lg text-sm font-bold transition ${lang === "es"
                                    ? scrolled
                                        ? "bg-secondary text-white"
                                        : "bg-secondary text-primary"
                                    : scrolled
                                        ? "text-primary/70 hover:text-primary"
                                        : "text-white/60 hover:text-white"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                onClick={() => switchLang("en")}
                                className={`px-3 py-1 rounded-lg text-sm font-bold transition ${lang === "en"
                                    ? scrolled
                                        ? "bg-secondary text-white"
                                        : "bg-secondary text-primary"
                                    : scrolled
                                        ? "text-primary/70 hover:text-primary"
                                        : "text-white/60 hover:text-white"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href={`/${lang}#contacto`}
                            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold transition-all ${scrolled
                                ? "bg-secondary text-white hover:opacity-90"
                                : "bg-white text-accent hover:bg-secondary hover:text-white"
                                }`}
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`md:hidden transition-colors ${scrolled ? "text-primary" : "text-white"
                            }`}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className={`md:hidden mt-2 rounded-2xl backdrop-blur-xl p-6 space-y-6 transition-all duration-300 ${scrolled
                                ? "bg-white/20 border border-black/10 shadow-xl"
                                : "bg-black/20 border border-white/10"
                                }`}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-3 text-lg font-medium transition ${scrolled
                                        ? "text-primary hover:text-secondary"
                                        : "text-white hover:text-secondary"
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            ))}

                            <div className="pt-4 border-t border-white/10 flex justify-center gap-6">
                                <button
                                    onClick={() => switchLang("es")}
                                    className={`font-bold ${lang === "es"
                                        ? "text-secondary"
                                        : scrolled
                                            ? "text-primary/70"
                                            : "text-white/60"
                                        }`}
                                >
                                    ES
                                </button>
                                <button
                                    onClick={() => switchLang("en")}
                                    className={`font-bold ${lang === "en"
                                        ? "text-secondary"
                                        : scrolled
                                            ? "text-primary/70"
                                            : "text-white/60"
                                        }`}
                                >
                                    EN
                                </button>
                            </div>

                            <a
                                href={`/${lang}#contacto`}
                                onClick={() => setOpen(false)}
                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition ${scrolled
                                    ? "bg-secondary text-white hover:opacity-90"
                                    : "bg-white text-accent hover:bg-secondary"
                                    }`}
                            >
                                <Mail size={18} />
                                {t.contacto}
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    )
}