import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { RiDoubleQuotesR } from "react-icons/ri"; // Una versión más minimalista de comillas

/* ================= TEXTOS MULTIIDIOMA ================= */
const i18n = {
  es: {
    badge: "Feedback",
    title: "Casos de éxito",
    description: "Opiniones reales de clientes que confiaron en nuestra visión tecnológica.",
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
    description: "Real feedback from clients who trusted our technological vision.",
    testimonials: [
      {
        name: "Carlos Fernández",
        role: "Business",
        message: "They built a fast, modern, and optimized website. Clients increased from the very first month.",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      // ... resto igual
    ],
  },
};

export default function TestimonialsSlider({ lang = "es" }) {
  const t = i18n[lang] ?? i18n.es;

  return (
    <section className="py-28 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Minimalista */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-secondary"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">
              {t.badge}
            </span>
            <span className="w-8 h-[1px] bg-secondary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
            {t.title}
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={40}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {t.testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative flex flex-col justify-between h-full p-10 bg-white border border-gray-100 rounded-[2.5rem] transition-all duration-500 hover:border-secondary/20 hover:shadow-[0_30px_60px_-15px_rgba(30,172,204,0.1)]">

                {/* Icono Quote Sutil */}
                <div className="absolute top-10 right-10 text-gray-100 group-hover:text-secondary/10 transition-colors duration-500">
                  <RiDoubleQuotesR size={60} />
                </div>

                <div className="relative z-10">
                  {/* Rol como Badge Minimalista */}
                  <span className="inline-block px-3 py-1 mb-6 text-[9px] font-bold tracking-widest uppercase bg-gray-50 text-primary/50 rounded-lg group-hover:bg-secondary/5 group-hover:text-secondary transition-colors">
                    {item.role}
                  </span>

                  <p className="text-primary/80 leading-relaxed text-lg font-medium italic">
                    “{item.message}”
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-12">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary tracking-tight">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}