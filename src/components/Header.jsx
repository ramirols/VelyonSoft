import React, { useState, useEffect, useRef } from "react";
import {
    FiMenu,
    FiX,
    FiGrid,
    FiBriefcase,
    FiBookOpen,
    FiMail,
} from "react-icons/fi";

const Header = ({ lang = "es" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef(null);

    /* =========================
       Traducciones
    ========================= */
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
    }[lang];

    /* =========================
       Navegación
    ========================= */
    const navLinks = [
        { name: t.servicios, href: `/${lang}/servicios`, icon: <FiGrid /> },
        { name: t.proyectos, href: `/${lang}/proyectos`, icon: <FiBriefcase /> },
        { name: t.blog, href: `/${lang}/blog`, icon: <FiBookOpen /> },
    ];

    /* =========================
       Home detection
    ========================= */
    const isHome =
        typeof window !== "undefined" &&
        window.location.pathname === `/${lang}`;

    /* =========================
       Scroll effect
    ========================= */
    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    /* =========================
       Close mobile on outside click
    ========================= */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && panelRef.current && !panelRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    /* =========================
       Lock scroll on mobile menu
    ========================= */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    /* =========================
       Language switcher
    ========================= */
    const switchLang = (newLang) => {
        if (typeof window === "undefined") return;

        const path = window.location.pathname;
        const segments = path.split("/").filter(Boolean);

        if (segments[0] === "es" || segments[0] === "en") {
            segments[0] = newLang;
        } else {
            segments.unshift(newLang);
        }

        const newPath = "/" + segments.join("/") + window.location.search;
        window.location.href = newPath;
    };

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-[100]
        h-[65px] transition-all duration-500 ease-out
        ${scrolled
                    ? "bg-black/60 backdrop-blur-xl shadow-lg"
                    : "bg-transparent"}
      `}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center h-full">
                {/* Logo */}
                <a
                    href={`/${lang}#inicio`}
                    className="text-3xl font-black tracking-wider flex-shrink-0"
                >
                    <span className="text-secondary">Velion</span>
                    <span className="text-white"> Soft</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 justify-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 text-white/90 text-lg font-medium hover:text-accent transition"
                        >
                            <span className="text-xl">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Language Switch */}
                <div className="hidden md:flex items-center gap-2 mr-4">
                    <button
                        onClick={() => switchLang("es")}
                        className={`px-3 py-1 rounded-md text-sm font-bold transition
              ${lang === "es"
                                ? "bg-secondary text-primary"
                                : "text-white/70 hover:text-white"}
            `}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => switchLang("en")}
                        className={`px-3 py-1 rounded-md text-sm font-bold transition
              ${lang === "en"
                                ? "bg-secondary text-primary"
                                : "text-white/70 hover:text-white"}
            `}
                    >
                        EN
                    </button>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <a
                        href={`/${lang}#contacto`}
                        className="flex items-center gap-2 py-2.5 px-6 text-lg font-bold rounded-full
              bg-accent text-primary hover:bg-secondary hover:text-white transition"
                    >
                        <FiMail className="text-xl" />
                        {t.contacto}
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden ml-auto text-white"
                    onClick={() => setIsOpen(true)}
                >
                    <FiMenu className="w-8 h-8" />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]" />
            )}

            {/* Mobile Panel */}
            <div
                ref={panelRef}
                className={`
          fixed top-0 right-0 h-[100dvh] w-[75%]
          bg-black/80 backdrop-blur-xl
          z-[120] p-10 pt-14
          flex flex-col gap-10
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white"
                >
                    <FiX className="w-8 h-8" />
                </button>

                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 text-white text-3xl font-semibold hover:text-secondary transition"
                    >
                        <span className="text-3xl">{link.icon}</span>
                        {link.name}
                    </a>
                ))}

                {/* Mobile Language Switch */}
                <div className="flex gap-8 justify-center mt-6">
                    <button
                        onClick={() => switchLang("es")}
                        className={`cursor-pointer text-2xl font-bold ${lang === "es" ? "text-secondary" : "text-white/60"
                            }`}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => switchLang("en")}
                        className={`cursor-pointer text-2xl font-bold ${lang === "en" ? "text-secondary" : "text-white/60"
                            }`}
                    >
                        EN
                    </button>
                </div>

                <a
                    href={`/${lang}#contacto`}
                    onClick={() => setIsOpen(false)}
                    className="mt-10 flex items-center justify-center gap-3 py-4 px-8
            text-xl font-bold rounded-full
            bg-accent text-primary hover:bg-secondary hover:text-white transition"
                >
                    <FiMail className="text-2xl" />
                    {t.contacto}
                </a>
            </div>
        </header>
    );
};

export default Header;