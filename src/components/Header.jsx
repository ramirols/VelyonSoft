import {
    Menu,
    X,
    Grid3X3,
    Briefcase,
    BookOpen,
    Mail,
    Moon,
    SunMedium,
    ArrowUpRight,
    ChevronDown,
    Scale,
    Brain,
    UtensilsCrossed,
    ShoppingBag,
    Workflow,
    Building2,
} from "lucide-react";
import { useState, useEffect } from "react";

function ThemeToggleIcon({ theme }) {
    const isDark = theme === "dark";

    return (
        <span className="relative block h-[18px] w-[18px]">
            <SunMedium
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${isDark
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-90 scale-0 opacity-0"
                    }`}
            />
            <Moon
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${isDark
                    ? "-rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                    }`}
            />
        </span>
    );
}

export default function Header({ lang = "es" }) {
    const [open, setOpen] = useState(false);
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
            label: "Legal",
            description: "Gestiona clientes, casos, documentos y agenda desde un solo sistema.",
            icon: Scale,
            accent: "from-sky-500/20 via-sky-500/8 to-transparent",
            badgeClass: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
            iconClass: "text-sky-700 dark:text-sky-300",
        },
        {
            name: "Software para psicólogos",
            href: `/${lang}/servicios/software-para-psicologos`,
            label: "Salud",
            description: "Organiza pacientes, sesiones, historial clínico y control de pagos.",
            icon: Brain,
            accent: "from-violet-500/20 via-violet-500/8 to-transparent",
            badgeClass: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
            iconClass: "text-violet-700 dark:text-violet-300",
        },
        {
            name: "Software para restaurantes",
            href: `/${lang}/servicios/software-para-restaurantes`,
            label: "Gastronomía",
            description: "Centraliza pedidos, reservas, menú digital, mesas e inventario.",
            icon: UtensilsCrossed,
            accent: "from-amber-500/20 via-amber-500/8 to-transparent",
            badgeClass: "bg-amber-500/14 text-amber-700 dark:text-amber-300",
            iconClass: "text-amber-700 dark:text-amber-300",
        },
        {
            name: "Tiendas virtuales",
            href: `/${lang}/servicios/tiendas-virtuales`,
            label: "E-commerce",
            description: "Vende online con catálogo, carrito, panel y optimización para convertir.",
            icon: ShoppingBag,
            accent: "from-emerald-500/20 via-emerald-500/8 to-transparent",
            badgeClass: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
            iconClass: "text-emerald-700 dark:text-emerald-300",
        },
        {
            name: "Automatización de procesos",
            href: `/${lang}/servicios/automatizacion-de-procesos`,
            label: "Operaciones",
            description: "Reduce tareas manuales con flujos, alertas e integraciones a medida.",
            icon: Workflow,
            accent: "from-cyan-500/20 via-cyan-500/8 to-transparent",
            badgeClass: "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
            iconClass: "text-cyan-700 dark:text-cyan-300",
        },
        {
            name: "Desarrollo web empresas",
            href: `/${lang}/servicios/desarrollo-web-empresas`,
            label: "Corporativo",
            description: "Crea una web corporativa rápida, clara y orientada a captar clientes.",
            icon: Building2,
            accent: "from-rose-500/20 via-rose-500/8 to-transparent",
            badgeClass: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
            iconClass: "text-rose-700 dark:text-rose-300",
        },
    ];

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
        const syncHeaderState = () => {
            setOpen(false);
        };

        document.addEventListener("astro:page-load", syncHeaderState);

        return () => {
            document.removeEventListener("astro:page-load", syncHeaderState);
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

    const themeButtonClass = "border border-border/70 bg-card/80 text-primary hover:bg-muted hover:scale-105 active:scale-95";

    const headerLogoSrc = theme === "dark" ? "/velyon-logo-mo.webp" : "/velyon-logo-mc.webp";

    return (
        <header className="fixed top-6 left-0 w-full z-50 px-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative flex items-center justify-between rounded-2xl border border-border/60 bg-background/75 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-500 ease-out"
                >
                    <div className="flex items-center">
                        <a
                            href={`/${lang}#inicio`}
                            className="ml-2 inline-flex items-center py-1 transition-all duration-500 ease-in-out"
                        >
                            <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/20 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <img
                                    src={headerLogoSrc}
                                    alt="VelyonSoft Logo"
                                    className="h-6 w-auto object-cover"
                                />
                            </div>
                        </a>
                    </div>

                    <nav
                        className="hidden items-center gap-8 text-sm font-medium text-primary transition-colors duration-300 md:flex"
                    >
                        <a href={`/${lang}/sobre-nosotros`} className="flex items-center gap-2 hover:text-secondary">
                            <BookOpen size={18} />
                            {t.sobre_nosotros}
                        </a>

                        <div className="relative group">
                            <a
                                href={`/${lang}/servicios`}
                                className="flex items-center gap-2 transition-colors hover:text-secondary"
                            >
                                <Grid3X3 size={18} />
                                {t.servicios}
                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover:rotate-180"
                                />
                            </a>

                            <div className="absolute left-1/2 top-full z-50 w-[760px] max-w-[92vw] -translate-x-1/2 pt-5 opacity-0 invisible translate-y-3 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-3 shadow-2xl shadow-black/10 backdrop-blur-2xl">
                                    <div className="border-b border-border/60 px-4 pb-4 pt-2">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                                            Servicios
                                        </p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Soluciones digitales pensadas para necesidades concretas de negocio.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 p-2">
                                        {servicesLinks.map((service) => {
                                            const Icon = service.icon;

                                            return (
                                                <a
                                                    key={service.href}
                                                    href={service.href}
                                                    className="group/item relative flex min-h-[152px] flex-col overflow-hidden rounded-2xl border border-transparent bg-background/50 p-4 transition-all duration-200 hover:border-border hover:bg-muted/80 hover:shadow-lg hover:shadow-black/5"
                                                >
                                                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-80 transition-opacity duration-200 group-hover/item:opacity-100`} />

                                                    <div className="relative flex items-start justify-between gap-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-background/80 shadow-sm dark:border-white/10 ${service.iconClass}`}>
                                                                <Icon size={20} />
                                                            </div>
                                                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${service.badgeClass}`}>
                                                                {service.label}
                                                            </span>
                                                        </div>

                                                        <ArrowUpRight
                                                            size={16}
                                                            className="mt-0.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                                                        />
                                                    </div>

                                                    <div className="relative mt-5">
                                                        <p className="font-semibold leading-snug text-primary transition-colors group-hover/item:text-secondary">
                                                            {service.name}
                                                        </p>
                                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
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
                            className={`group flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${themeButtonClass}`}
                        >
                            <ThemeToggleIcon theme={theme} />
                        </button>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`cursor-pointer rounded-lg px-3 py-1 text-sm font-bold transition ${lang === "es"
                                    ? "bg-secondary text-white"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`cursor-pointer rounded-lg px-3 py-1 text-sm font-bold transition ${lang === "en"
                                    ? "bg-secondary text-white"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href={`/${lang}#contacto`}
                            className="flex items-center gap-2 rounded-xl bg-secondary px-5 py-2 font-semibold text-white transition-all hover:opacity-90"
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="text-primary transition-colors md:hidden"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div
                        className="mt-2 space-y-6 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 text-lg font-medium text-primary transition hover:text-secondary"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center justify-center gap-4 border-t border-border/60 pt-4">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={t.toggleTheme}
                                className={`group flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${themeButtonClass}`}
                            >
                                <ThemeToggleIcon theme={theme} />
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`font-bold ${lang === "es"
                                    ? "text-secondary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`font-bold ${lang === "en"
                                    ? "text-secondary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href={`/${lang}#contacto`}
                            onClick={() => setOpen(false)}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-white transition hover:opacity-90"
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
