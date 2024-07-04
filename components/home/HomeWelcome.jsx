"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_homewelcome.scss";
import { ReactTyped } from "react-typed";
// Constantes para efectos de Framer Motion

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const linkVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

function HomeWelcome() {
  return (
    <div id="inicio" className="HomeWelcome-container">
      <div className="container">
        <motion.h1 {...textVariants}>
          Vive una vida plena sin <br />
          <ReactTyped
            strings={["Dolores", "Estrés", "Lesiones", "Limitaciones"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </motion.h1>
        <motion.h4 {...textVariants}>
          Recuperá tu óptimo rendimiento con nuestros tratamientos
          personalizados y volvé a hacer lo que amás.
        </motion.h4>

        <div className="botones">
          <motion.a title="whatsapp" href="#nosotros" {...linkVariants}>
            Quienes somos?
          </motion.a>
          <motion.a href="https://wa.me/59898191219" {...linkVariants}>
            Solicitar turno
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome;
