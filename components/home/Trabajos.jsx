"use client";

import "../styles/_trabajo.scss";
import React from "react";
import { motion } from "framer-motion";

import Slider from "react-slick";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const trabajos = [
  {
    nombre: "Jose Nueveonce",
    reseña:
      "Salís nuevo! Excelente atención, muy profesionales y equipados. Entrenamiento, alimentación adecuada e hidratación… pero no hay que olvidarse de pasar cada tanto a acomodar todo … y la máquina queda como nueva.",
  },
  {
    nombre: "Adriana Nadal",
    reseña:
      "Tienen atención muy cálida y personalizada, saben lo que hacen, y muy humanos!!!",
  },
  {
    nombre: "Joaquin Azanza",
    reseña:
      "Excelente atencion de Rolo y su equipo. Todos muy profesionales. Super recomendable!",
  },
  {
    nombre: "PABLO GALLI",
    reseña: "",
  },
  {
    nombre: "Natalia Silveira",
    reseña: "Espectacular atención. Muy profesionales",
  },
  {
    nombre: "Esteban Marquez",
    reseña: "Excelente recomendable",
  },
];
function Trabajos() {
  return (
    <div id="opiniones" className="contenedor-principal-Trabajos">
      <div className="titulo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="m-0"
        >
          Opiniones
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
        <motion.h3
          className="description"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          Veamos que opinan nuestros clientes
        </motion.h3>
      </div>
      <Slider className="elSlider" {...settings}>
        {trabajos.map((trabajo, index) => (
          <div key={index} className="trabajos">
            <div className="trabajo">
              {" "}
              {trabajo.reseña ? <p>- &quot;{trabajo.reseña}&quot;</p> : ""}
              <div className="npmyest">
                <div className="estrellas">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h4> &quot;{trabajo.nombre}&quot;</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <a href="https://wa.me/59898191219">
        <motion.button className="boton">Dejanos ayudarte!</motion.button>
      </a>
    </div>
  );
}

export default Trabajos;
