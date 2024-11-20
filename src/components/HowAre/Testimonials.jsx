import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { Autoplay, Navigation, Keyboard, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";

import witness1 from "./Testimonials-Imagens/antenor.png";
import witness2 from "./Testimonials-Imagens/amanda.png";
import witness3 from "./Testimonials-Imagens/natalia.png";
import witness4 from "./Testimonials-Imagens/sabrina.png";
import witness5 from "./Testimonials-Imagens/marcelo.png";
import witness6 from "./Testimonials-Imagens/shirlei.png";

const testimonials = [
  {
    id: "jnsd@#",
    img: witness1,
    name: "Antenor",
    description:
      "O lugar ideal para manter a forma, contando com profissionais altamente qualificados!",
  },
  {
    id: "MNBSD&S",
    img: witness2,
    name: "Amanda",
    description:
      "Ambiente muito limpo e organizado, as fisioterapeuta bem atenciosas e competentes com o seu trabalho. Estou gostando muito.",
  },
  {
    id: "AHSB@HS",
    img: witness3,
    name: "Natalia",
    description:
      "Studio maravilhoso, sempre higienizado. A Mari é uma excelente profissional, super atenciosa! Comecei as aulas de Pilates na gestação e a Mari tem me acompanhado nesta fase tão importante! Super recomendo!",
  },
  {
    id: "SMNCC*&S",
    img: witness4,
    name: "Sabrina",
    description:
      "Aulas incríveis, professora incrível, simpatica e carinhosa! Super indico, é realmente muito bom!",
  },
  {
    id: "KJGA$@CS",
    img: witness5,
    name: "Marcelo",
    description:
      "Amooooo, conheci o pilates a muito tempo, mas só agora me adaptei. A Professora é super didática em cada exercícios. Carinhosa e atenciosa.",
  },
  {
    id: "iugi897",
    img: witness6,
    name: "Shirlei",
    description:
      "Profissional de excelência. Faz trabalho personalizado, mesmo atendendo a mais de um por horário. Tenho Fibromialgia e o Studio MOOV me salvou. Hoje já me sinto bem melhor.",
  },
];

const Testimonials = () => {
  const [slidesPerView, setSlidePerView] = useState(3);
  const [navigation, setNavigation] = useState(true);
  const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 950) {
        setSlidePerView(2);
        setNavigation(false);
        setSpaceBetweenSlides(10);
      } else {
        setSlidePerView(3);
        setNavigation(true);
        setSpaceBetweenSlides(30);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="how__slide__container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetweenSlides}
        slidesPerGroup={3}
        grabCursor={true}
        keyboard={{ enabled: true }}
        navigation={navigation}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, Keyboard, EffectFade]}
        className="how__slide__content"
      >
        {testimonials.map((testimony) => (
          <SwiperSlide key={testimony.id} className="how__card">
            <div className="image__contentDepoimentos">
              <span className="overlay"></span>

              <div className="card__imageDepoimentos">
                <img
                  src={testimony.img}
                  alt="foto da witness"
                  className="card__imgDepoimentos"
                />
              </div>
            </div>

            <div className="card__contentDepoimentos">
              <h2 className="nomeDepoimentos">{testimony.name}</h2>
              <p className="descriptionDepoimentos">{testimony.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
