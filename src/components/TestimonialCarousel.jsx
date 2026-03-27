import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { RiDoubleQuotesR } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const i18n = {
  es: {
    badge: "Feedback",
    title: "Casos de éxito",
    testimonials: [
      {
        name: "Carlos Fernández",
        role: "Empresario",
        message: "Crearon una web rápida, moderna y totalmente optimizada. Desde el primer mes aumentaron los clientes.",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "María Valdivia",
        role: "Emprendedora",
        message: "El nivel de detalle y profesionalismo fue increíble. Quedé muy feliz con mi landing page. Muy recomendable.",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Viviana Vargas",
        role: "Corporativa",
        message: "Necesitábamos una web corporativa seria y optimizada. El resultado superó expectativas.",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Andrea Ríos",
        role: "Marketing",
        message: "Ahora la web carga rápido y convierte mejor. Fue una gran decisión para nuestra marca.",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      // Nuevos basados en tus servicios
      {
        name: "Javier Morales",
        role: "Emprendedor",
        message: "Mi página profesional quedó espectacular: diseño moderno, carga rapidísima y ya estoy captando leads todos los días. Precio justo y entrega rápida.",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Lucía Mendoza",
        role: "Dueña de Empresa",
        message: "La web corporativa que nos hicieron es impecable: responsive, SEO avanzado y muy profesional. Las consultas de clientes subieron notablemente.",
        avatar: "https://i.pravatar.cc/150?img=59",
      },
      {
        name: "Roberto Castillo",
        role: "Gerente de Marketing",
        message: "Optamos por desarrollo en WordPress y ahora manejamos todo nosotros mismos. Diseño actual, SEO optimizado y soporte prioritario excelente.",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
      {
        name: "Sofía Ramírez",
        role: "Directora Creativa",
        message: "El plan de marketing digital está dando resultados brutales: posiciones altas en Google, más tráfico y conversiones reales. Muy contentos.",
        avatar: "https://i.pravatar.cc/150?img=41",
      },
      {
        name: "Diego Salazar",
        role: "CEO Startup",
        message: "Desarrollaron nuestra app móvil para Android e iOS con calidad premium. Funciona perfecto y el soporte ha sido clave en cada paso.",
        avatar: "https://i.pravatar.cc/150?img=55",
      },
      {
        name: "Patricia López",
        role: "Gerente Operaciones",
        message: "Las automatizaciones de procesos nos ahorraron horas diarias. Todo personalizado, escalable y con soporte prioritario. Inversión que se paga sola.",
        avatar: "https://i.pravatar.cc/150?img=64",
      },
      {
        name: "Miguel Torres",
        role: "Administrador",
        message: "El soporte informático general y manejo de ofimática nos salvó en momentos críticos. Respuesta rápida, eficiente y precios accesibles.",
        avatar: "https://i.pravatar.cc/150?img=22",
      },
      {
        name: "Elena Gutiérrez",
        role: "Emprendedora Tech",
        message: "Software a medida que nos pidieron cotización y superó todo lo esperado: automatizaciones integradas, escalable y muy bien soportado. Recomendado al 100%.",
        avatar: "https://i.pravatar.cc/150?img=38",
      },
    ],
  },
  en: {
    badge: "Feedback",
    title: "Success Stories",
    testimonials: [
      {
        name: "Carlos Fernández",
        role: "Business",
        message: "They created a fast, modern, and fully optimized website. Our client base started growing from the very first month.",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "María Valdivia",
        role: "Entrepreneur",
        message: "The level of detail and professionalism was incredible. I am very happy with my landing page. Highly recommended.",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Viviana Vargas",
        role: "Corporate",
        message: "We needed a serious and optimized corporate website. The final result truly exceeded our expectations.",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Andrea Ríos",
        role: "Marketing",
        message: "Now the web loads faster and converts better. It was a great decision for our brand's growth.",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      // New ones based on your services
      {
        name: "Javier Morales",
        role: "Entrepreneur",
        message: "My professional landing page turned out spectacular: modern design, super fast loading, and I'm already capturing leads every day. Fair price and quick delivery.",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Lucía Mendoza",
        role: "Business Owner",
        message: "The corporate website they built for us is flawless: responsive, advanced SEO, and very professional. Client inquiries increased noticeably.",
        avatar: "https://i.pravatar.cc/150?img=59",
      },
      {
        name: "Roberto Castillo",
        role: "Marketing Manager",
        message: "We went with WordPress development and now manage everything ourselves. Modern design, optimized SEO, and excellent priority support.",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
      {
        name: "Sofía Ramírez",
        role: "Creative Director",
        message: "The digital marketing plan is delivering brutal results: top Google rankings, more traffic, and real conversions. Very happy.",
        avatar: "https://i.pravatar.cc/150?img=41",
      },
      {
        name: "Diego Salazar",
        role: "Startup CEO",
        message: "They developed our mobile app for Android and iOS with premium quality. It works perfectly and the support has been key every step of the way.",
        avatar: "https://i.pravatar.cc/150?img=55",
      },
      {
        name: "Patricia López",
        role: "Operations Manager",
        message: "The process automations saved us hours every day. Fully customized, scalable, and with priority support. An investment that pays for itself.",
        avatar: "https://i.pravatar.cc/150?img=64",
      },
      {
        name: "Miguel Torres",
        role: "Administrator",
        message: "The general IT support and office suite management saved us in critical moments. Fast response, efficient, and affordable prices.",
        avatar: "https://i.pravatar.cc/150?img=22",
      },
      {
        name: "Elena Gutiérrez",
        role: "Tech Entrepreneur",
        message: "Custom software that required a quote and exceeded all expectations: integrated automations, scalable, and very well supported. 100% recommended.",
        avatar: "https://i.pravatar.cc/150?img=38",
      },
    ],
  },
};

export default function TestimonialCarousel({ lang = "es" }) {
  const t = i18n[lang] ?? i18n.es;

  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  );

  return (
    <section className="py-15 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-secondary/40"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
              {t.badge}
            </span>
            <span className="w-8 h-[1px] bg-secondary/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
            {t.title}
          </h2>
        </div>

        {/* Carousel con Loop Infinito */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {t.testimonials.map((item, i) => (
              <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 cursor-pointer">
                <div className="group relative flex flex-col justify-between h-full p-8 bg-white border border-gray-300 rounded-[2rem] transition-all duration-500 hover:border-secondary hover:shadow-[0_20px_40px_-15px_rgba(30,172,204,0.1)]">

                  <div className="absolute top-8 right-8 text-gray-100 group-hover:text-secondary transition-colors duration-500">
                    <RiDoubleQuotesR size={40} />
                  </div>

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 mb-6 text-[9px] font-bold tracking-widest uppercase bg-gray-50 text-primary/50 rounded-lg group-hover:bg-secondary/5 group-hover:text-secondary transition-colors">
                      {item.role}
                    </span>
                    <p className="text-primary/80 leading-relaxed text-base font-medium italic">
                      “{item.message}”
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 mt-10">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
                    </div>
                    <h6 className="font-bold text-primary text-sm tracking-tight">
                      {item.name}
                    </h6>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center md:block mt-8 md:mt-0">
            <CarouselPrevious className="static cursor-pointer md:absolute -left-12 translate-y-0 md:-translate-y-1/2 border-none bg-gray-50 hover:bg-secondary hover:text-white transition-all mx-2" />
            <CarouselNext className="static cursor-pointer md:absolute -right-12 translate-y-0 md:-translate-y-1/2 border-none bg-gray-50 hover:bg-secondary hover:text-white transition-all mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}