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
        role: "Business",
        message: "Crearon una web rápida, moderna y totalmente optimizada. Desde el primer mes aumentaron los clientes.",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "María Valdivia",
        role: "Entrepreneur",
        message: "El nivel de detalle y profesionalismo fue increíble. Quedé muy feliz con mi landing page. Muy recomendable.",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Viviana Vargas",
        role: "Corporate",
        message: "Necesitábamos una web corporativa seria y optimizada. El resultado superó expectativas.",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Andrea Ríos",
        role: "Marketing",
        message: "Ahora la web carga rápido y convierte mejor. Fue una gran decisión para nuestra marca.",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
    ],
  },
  en: {
    badge: "Feedback",
    title: "Success Stories",
    testimonials: [
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
                    <h4 className="font-bold text-primary text-sm tracking-tight">
                      {item.name}
                    </h4>
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