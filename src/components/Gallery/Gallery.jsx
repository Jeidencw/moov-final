import "./Gallery.css";
import { useEffect, useState } from "react";

import img1 from "./imagens/1.jpg";
import img2 from "./imagens/2.jpg";
import img3 from "./imagens/3.jpg";
import img4 from "./imagens/4.jpg";
import img5 from "./imagens/5.jpg";
import img6 from "./imagens/6.jpg";
import img7 from "./imagens/7.jpg";
import img8 from "./imagens/8.jpg";
import img9 from "./imagens/9.jpg";
import img10 from "./imagens/10.jpg";
import img11 from "./imagens/11.jpg";
import img12 from "./imagens/12.jpg";
import img13 from "./imagens/13.jpg";
import img14 from "./imagens/14.jpg";
import img15 from "./imagens/15.jpg";
import img16 from "./imagens/16.jpg";
import img17 from "./imagens/17.jpg";
import img18 from "./imagens/18.jpg";
import img19 from "./imagens/19.jpg";
import img20 from "./imagens/20.jpg";

const images = [
  [img1, "Studio"],
  [img2, "Pilates"],
  [img3, "Pilates"],
  [img4, "LPF"],
  [img5, "Bungee"],
  [img6, "Fisioterapia"],
  [img7, "Fisioterapia"],
  [img8, "Fisioterapia"],
  [img9, "Studio"],
  [img10, "LPF"],
  [img11, "Bungee"],
  [img12, "Bungee"],
  [img13, "Bungee"],
  [img14, "LPF"],
  [img15, "Fisioterapia"],
  [img16, "LPF"],
  [img17, "Studio"],
  [img18, "Pilates"],
  [img19, "Fisioterapia"],
  [img20, "Pilates"],
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgNumbers, setImgNumbers] = useState(5);
  const [visibleImages, setVisibleImages] = useState(imgNumbers);
  const [filter, setFilter] = useState("Todas");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImgNumbers(5);
      } else {
        setImgNumbers(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleImages(imgNumbers);
  }, [imgNumbers]);

  const setActiveFilter = (item) => {
    setFilter(item);

    if (isOpen) toggleMenu();
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const filteredImages =
    filter === "Todas" ? images : images.filter((img) => img[1] === filter);

  const loadMoreImages = () => {
    setVisibleImages((prevVisible) =>
      Math.min(prevVisible + imgNumbers, filteredImages.length)
    );
  };

  const loadLessImages = () => {
    setVisibleImages((prevVisible) => Math.max(prevVisible - 6, imgNumbers));
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="container grid">
        <h2 className="section__title">Galeria</h2>

        <nav className="filter__menu-container">
          <div className={`${isOpen ? "open" : ""} filter__menu`}>
            <ul>
              <li
                className={`${filter === "Todas" ? "active" : ""}`}
                onClick={() => setActiveFilter("Todas")}
              >
                Todas
              </li>
              <li
                className={`${filter === "Studio" ? "active" : ""}`}
                onClick={() => setActiveFilter("Studio")}
              >
                Studio
              </li>
              <li
                className={`${filter === "Pilates" ? "active" : ""}`}
                onClick={() => setActiveFilter("Pilates")}
              >
                Pilates
              </li>
              <li
                className={`${filter === "LPF" ? "active" : ""}`}
                onClick={() => setActiveFilter("LPF")}
              >
                LPF
              </li>
              <li
                className={`${filter === "Bungee" ? "active" : ""}`}
                onClick={() => setActiveFilter("Bungee")}
              >
                Bungee
              </li>
              <li
                className={`${filter === "Fisioterapia" ? "active" : ""}`}
                onClick={() => setActiveFilter("Fisioterapia")}
              >
                Fisioterapia
              </li>
            </ul>
          </div>

          <div className="filter__mobile">
            <div className="filter__text">{filter}</div>
            <div
              className={`filter__burger ${isOpen ? "filter__toggle" : ""}`}
              onClick={toggleMenu}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>

        <div className="gallery__container">
          {filteredImages.slice(0, visibleImages).map((src, index) => (
            <div key={index} className="gallery__card">
              <img src={src[0]} className="gallery__images" alt="" />
            </div>
          ))}
        </div>

        {visibleImages < filteredImages.length && (
          <button onClick={loadMoreImages} className="button">
            Carregar mais
          </button>
        )}

        {visibleImages > imgNumbers && (
          <button onClick={loadLessImages} className="button">
            Mostrar menos
          </button>
        )}
      </div>
    </section>
  );
};

export default Gallery;
