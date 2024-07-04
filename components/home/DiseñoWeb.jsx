"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/sitioweb.jpg";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";
const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 100, transition: { duration: 2 } },
};

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0 },
  },
};

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
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

function DiseñoWeb() {
  return (
    <div id="desarrollo" className="nos-container">
      <div className="fila">
        <div className="texto">
          <motion.h2 {...tittleVariants}>¿Cuáles son los beneficios?</motion.h2>
          <motion.div {...lineVariants} className="line"></motion.div>
          <motion.p {...textVariants}>
            En Óptimo Rendimiento, te ofrecemos un enfoque holístico y
            personalizado para mejorar tu salud y bienestar. Nuestros servicios
            de <strong>kinesiología</strong>, <strong>osteopatía</strong>,{" "}
            <strong>fisioterapia</strong>, <strong>ecografías</strong>,{" "}
            <strong>terapias alternativas</strong> y{" "}
            <strong>quiropraxia</strong> están diseñados para abordar tus
            necesidades específicas, aliviando el dolor, mejorando la movilidad
            y promoviendo la curación natural del cuerpo. Al elegirnos,
            accederás a:
          </motion.p>
          <ul>
            <li>
              - <strong>Tratamientos personalizados</strong> para maximizar tu
              salud y rendimiento.
            </li>
            <li>
              - <strong>Prevención de lesiones futuras</strong> y mejora del
              rendimiento físico.
            </li>
            <li>
              - <strong>Terapias no invasivas</strong> que complementan la
              medicina convencional.
            </li>
            <li>
              - <strong>Diagnósticos precisos</strong> y cuidados de calidad.
            </li>
          </ul>
          <motion.p>
            Nuestro equipo de profesionales está comprometido con tu bienestar
            integral, ayudándote a vivir una vida más plena y satisfactoria.
            ¡Confía en nosotros y comienza tu viaje hacia una mejor calidad de
            vida hoy mismo!
          </motion.p>
          <motion.a
            {...textVariants}
            target="blank"
            href="https://wa.me/59898191219"
          >
            ¡Sacar un turno!
          </motion.a>
        </div>
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default DiseñoWeb;
