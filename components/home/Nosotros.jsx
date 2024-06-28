"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/nosotros.jpg";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const imageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  viewport: { once: true },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nos-container">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
        <div className="texto">
          <motion.h2 {...tittleVariants}>Quienes somos?</motion.h2>
          <motion.div {...lineVariants} className="line"></motion.div>
          <motion.p {...tittleVariants}>
            Con más de <strong>15 años de experiencia</strong>, nos dedicamos a
            trabajar en función de tus <strong>objetivos</strong> para optimizar
            tu <strong>rendimiento muscular</strong>, independientemente del
            deporte que practiques. En <strong>Óptimo Rendimiento</strong>,
            ofrecemos una amplia gama de opciones diseñadas para ayudarte a
            superar diversos tipos de <strong>dolores</strong> y{" "}
            <strong>lesiones</strong>. Nuestro compromiso va más allá de aliviar{" "}
            <strong>síntomas</strong>; nos enfocamos en mejorar tu{" "}
            <strong>bienestar integral</strong> mediante tratamientos{" "}
            <strong>personalizados</strong> y <strong>eficaces</strong>.
          </motion.p>

          <motion.a
            {...tittleVariants}
            target="blank"
            href="https://wa.me/59898191219"
          >
            Contáctanos
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
