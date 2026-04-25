import { Menu, X, Grid3X3, Briefcase, BookOpen, Mail, Moon, SunMedium } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ lang = "es" }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState("light");

    const translations = {
        es: {
            inicio: "Inicio",
            sobre_nosotros: "Sobre Nosotros",
            servicios: "Servicios",
            proyectos: "Proyectos",
            blog: "Blog",
            contacto: "Contacto",
            toggleTheme: "Cambiar tema",
        },
        en: {
            inicio: "Home",
            sobre_nosotros: "About Us",
            servicios: "Services",
            proyectos: "Projects",
            blog: "Blog",
            contacto: "Contact",
            toggleTheme: "Toggle theme",
        },
    };

    const t = translations[lang] || translations.es;

    const navLinks = [
        {
            name: t.sobre_nosotros,
            href: `/${lang}/sobre-nosotros`,
            icon: <BookOpen size={18} />,
        },
        {
            name: t.servicios,
            href: `/${lang}/servicios`,
            icon: <Grid3X3 size={18} />,
        },
        {
            name: t.proyectos,
            href: `/${lang}/proyectos`,
            icon: <Briefcase size={18} />,
        },
        { name: t.blog, href: `/${lang}/blog`, icon: <BookOpen size={18} /> },
    ];

    const servicesLinks = [
        {
            name: "Software para abogados",
            href: `/${lang}/servicios/software-para-abogados`,
        },
        {
            name: "Software para psicólogos",
            href: `/${lang}/servicios/software-para-psicologos`,
        },
        {
            name: "Software para restaurantes",
            href: `/${lang}/servicios/software-para-restaurantes`,
        },
        {
            name: "Tiendas virtuales",
            href: `/${lang}/servicios/tiendas-virtuales`,
        },
        {
            name: "Automatización de procesos",
            href: `/${lang}/servicios/automatizacion-de-procesos`,
        },
        {
            name: "Desarrollo web empresas",
            href: `/${lang}/servicios/desarrollo-web-empresas`,
        },
    ]

    useEffect(() => {
        const syncTheme = () => {
            setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        };

        syncTheme();
        document.addEventListener("themechange", syncTheme);

        return () => {
            document.removeEventListener("themechange", syncTheme);
        };
    }, []);

    useEffect(() => {
        let frame = 0;
        let slideSection = null;
        let blogHero = null;
        let footer = null;

        const refreshTargets = () => {
            slideSection = document.getElementById("inicio");
            blogHero = document.getElementById("blog-hero");
            footer = document.querySelector("footer");
        };

        const handleScroll = () => {
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                if (footerRect.top < 80) {
                    setScrolled(false);
                    return;
                }
            }

            if (slideSection) {
                const rect = slideSection.getBoundingClientRect();
                if (rect.bottom > 80) {
                    setScrolled(false);
                    return;
                }
            }

            if (blogHero) {
                const rect = blogHero.getBoundingClientRect();
                if (rect.bottom > 100) {
                    setScrolled(false);
                    return;
                }
            }

            setScrolled(true);
        };

        const syncHeaderState = () => {
            setOpen(false);
            refreshTargets();
            window.requestAnimationFrame(handleScroll);
        };

        const onScroll = () => {
            if (frame) {
                return;
            }

            frame = window.requestAnimationFrame(() => {
                frame = 0;
                handleScroll();
            });
        };

        refreshTargets();
        window.addEventListener("scroll", onScroll, { passive: true });
        document.addEventListener("astro:page-load", syncHeaderState);

        const timeout = setTimeout(handleScroll, 100);

        return () => {
            if (frame) {
                window.cancelAnimationFrame(frame);
            }

            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("astro:page-load", syncHeaderState);
            clearTimeout(timeout);
        };
    }, []);

    const switchLang = (newLang) => {
        const url = new URL(window.location.href);
        const segments = url.pathname.split("/").filter(Boolean);

        if (segments[0] === "es" || segments[0] === "en") {
            segments[0] = newLang;
        } else {
            segments.unshift(newLang);
        }

        url.pathname = `/${segments.join("/")}`;
        window.location.href = url.toString();
    };

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";

        if (typeof window.__setTheme === "function") {
            window.__setTheme(nextTheme);
        } else {
            document.documentElement.classList.toggle("dark", nextTheme === "dark");
            document.documentElement.dataset.theme = nextTheme;
            document.dispatchEvent(
                new CustomEvent("themechange", { detail: { theme: nextTheme } }),
            );
        }

        setTheme(nextTheme);
    };

    const themeButtonClass = scrolled
        ? "border border-border/70 bg-card/80 text-primary hover:bg-muted"
        : "border border-white/15 bg-white/10 text-white hover:bg-white/20";

    const headerLogoSrc = theme === "dark" ? "/velyon-logo-mo.webp" : "/velyon-logo-mc.webp";

    return (
        <header className="fixed top-6 left-0 w-full z-50 px-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`relative flex items-center justify-between px-6 rounded-2xl transition-all duration-500 ease-out ${scrolled
                        ? "py-3 border border-border/60 bg-background/75 backdrop-blur-xl shadow-lg shadow-black/5"
                        : "py-4 bg-transparent"
                        }`}
                >
                    <div className="flex items-center">
                        {!scrolled ? (
                            <a
                                href={`/${lang}#inicio`}
                                className="text-2xl font-black tracking-wide transition-all duration-500 ease-in-out"
                            >
                                <span className="text-secondary">Velyon</span>
                                <span className="text-white">Soft</span>
                            </a>
                        ) : (
                            <a
                                href={`/${lang}#inicio`}
                                className="ml-2 inline-flex items-center py-1 transition-all duration-500 ease-in-out"
                            >
                                <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/20 backdrop-blur-sm">
                                    <img
                                        src={headerLogoSrc}
                                        alt="VelyonSoft Logo"
                                        className="h-6 w-auto object-cover"
                                    />
                                </div>
                            </a>
                        )}
                    </div>

                    <nav
                        className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-primary" : "text-white/90"
                            }`}
                    >
                        <a href={`/${lang}/sobre-nosotros`} className="flex items-center gap-2 hover:text-secondary">
                            <BookOpen size={18} />
                            {t.sobre_nosotros}
                        </a>

                        <div className="relative group">
                            <a
                                href={`/${lang}/servicios`}
                                className={`flex items-center gap-2 transition-colors ${scrolled ? "hover:text-secondary" : "hover:text-white"
                                    }`}
                            >
                                <Grid3X3 size={18} />
                                {t.servicios}
                            </a>

                            <div className="invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[720px]">
                                <div className="rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl shadow-2xl p-4 grid grid-cols-2 gap-2">
                                    {servicesLinks.map((service) => (
                                        <a
                                            key={service.href}
                                            href={service.href}
                                            className="rounded-xl p-4 hover:bg-muted transition-colors"
                                        >
                                            <p className="font-semibold text-primary">{service.name}</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Landing completa con detalles, beneficios, precio y contacto.
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href={`/${lang}/proyectos`} className="flex items-center gap-2 hover:text-secondary">
                            <Briefcase size={18} />
                            {t.proyectos}
                        </a>

                        <a href={`/${lang}/blog`} className="flex items-center gap-2 hover:text-secondary">
                            <BookOpen size={18} />
                            {t.blog}
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={t.toggleTheme}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${themeButtonClass}`}
                        >
                            {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
                        </button>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`px-3 py-1 rounded-lg text-sm font-bold transition cursor-pointer ${lang === "es"
                                    ? "bg-secondary text-white"
                                    : scrolled
                                        ? "text-muted-foreground hover:text-primary"
                                        : "text-white/60 hover:text-white"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`px-3 py-1 rounded-lg text-sm font-bold transition cursor-pointer ${lang === "en"
                                    ? "bg-secondary text-white"
                                    : scrolled
                                        ? "text-muted-foreground hover:text-primary"
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
                                : "bg-white text-[#091017] hover:bg-secondary hover:text-white"
                                }`}
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className={`md:hidden transition-colors ${scrolled ? "text-primary" : "text-white"
                            }`}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div
                        className={`md:hidden mt-2 rounded-2xl backdrop-blur-xl p-6 space-y-6 transition-all duration-300 ${scrolled
                            ? "bg-background/90 border border-border/60 shadow-xl"
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

                        <div className={`pt-4 border-t flex items-center justify-center gap-4 ${scrolled ? "border-border/60" : "border-white/10"}`}>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={t.toggleTheme}
                                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${themeButtonClass}`}
                            >
                                {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`font-bold ${lang === "es"
                                    ? "text-secondary"
                                    : scrolled
                                        ? "text-muted-foreground"
                                        : "text-white/60"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`font-bold ${lang === "en"
                                    ? "text-secondary"
                                    : scrolled
                                        ? "text-muted-foreground"
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
                                : "bg-white text-[#091017] hover:bg-secondary hover:text-white"
                                }`}
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
