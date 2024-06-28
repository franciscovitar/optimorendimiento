"use client";

import React from "react";
import "../styles/_servicios.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import hola from "../../Images/imagen.jpg";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 120, transition: { duration: 2 } },
};

const servsVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileHover: { scale: 1.03, transition: { duration: 0.3 } },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const serviciosData = [
  {
    icon: "bi bi-person-hearts", // Cambié de "bi bi-person-lines-fill" a "bi bi-person-hearts"
    title: "Kinesiología",
    description:
      "La <strong>kinesiología</strong> se enfoca en el <strong>movimiento humano</strong>, utilizando técnicas como el análisis de la marcha y la evaluación del movimiento para identificar disfunciones musculoesqueléticas. Nuestros kinesiólogos desarrollan planes de <strong>tratamiento personalizados</strong> para prevenir lesiones y mejorar el rendimiento deportivo. Esta disciplina esencial proporciona herramientas valiosas para <strong>optimizar la salud</strong>, el rendimiento y el bienestar en todas las etapas de la vida.",
  },
  {
    icon: "bi bi-hand-thumbs-up", // Cambié de "bi bi-hand-index-thumb" a "bi bi-hand-thumbs-up"
    title: "Osteopatía",
    description:
      "La <strong>osteopatía</strong> es una <strong>medicina manual</strong> que busca restaurar la <strong>función normal del cuerpo</strong>, tratando las causas del dolor y los desequilibrios. Nuestros osteópatas utilizan técnicas que van desde ajustes estructurales hasta manipulaciones de tejidos blandos para mejorar la <strong>movilidad</strong> y aliviar el dolor. Este enfoque holístico considera el cuerpo, la mente y el espíritu como una unidad, ayudando a <strong>prevenir enfermedades</strong> y mantener un estado de <strong>salud óptimo</strong>.",
  },
  {
    icon: "bi bi-activity", // Mantengo el mismo ícono
    title: "Fisioterapia",
    description:
      "La <strong>fisioterapia</strong> no solo trata lesiones, sino que también abre las puertas a un mundo de poder sanador. Nuestros fisioterapeutas te ayudan a <strong>recuperarte de lesiones</strong>, aliviar el dolor crónico y prevenir futuros problemas. Con su experiencia, optimizan tu <strong>salud</strong> y bienestar físico, guiándote hacia una <strong>recuperación integral</strong> y duradera.",
  },
  {
    icon: "bi bi-heart-pulse", // Cambié de "bi bi-camera" a "bi bi-heart-pulse"
    title: "Ecografías",
    description:
      "La <strong>ecografía</strong> es una herramienta poderosa para el <strong>diagnóstico médico</strong>, proporcionando imágenes en tiempo real del interior del cuerpo sin necesidad de radiación. Es ideal para <strong>evaluar órganos internos</strong> y monitorear el desarrollo fetal. Además, guía procedimientos médicos, como biopsias, con precisión y seguridad. En nuestro centro, ofrecemos servicios de ecografía de <strong>vanguardia</strong> para obtener <strong>diagnósticos precisos</strong> y un cuidado de calidad.",
  },
  {
    icon: "bi bi-flower1", // Cambié de "bi bi-spa" a "bi bi-flower1"
    title: "Terapias alternativas",
    description:
      "Las <strong>terapias alternativas</strong> tienen una rica historia que se remonta a civilizaciones antiguas como la egipcia y la china. Hoy en día, estas prácticas incluyen <strong>acupuntura</strong>, <strong>aromaterapia</strong>, quiropraxia y osteopatía, todas diseñadas para promover la <strong>curación del cuerpo</strong>, la mente y el espíritu. En nuestro centro, ofrecemos una variedad de terapias alternativas que complementan la <strong>medicina convencional</strong>, ayudándote a encontrar un camino hacia la <strong>salud total</strong> y el bienestar.",
  },
  {
    icon: "bi bi-award", // Mantengo el mismo ícono
    title: "Quiropraxia",
    description:
      "La <strong>quiropraxia</strong> es más que aliviar el dolor de espalda; busca restaurar el <strong>equilibrio y la armonía</strong> del cuerpo para mejorar la salud en general. Nuestros quiroprácticos utilizan técnicas manuales suaves para corregir desalineaciones en la <strong>columna vertebral</strong> y otras articulaciones. Esto alivia el dolor, mejora la <strong>movilidad</strong> y promueve la <strong>curación natural</strong>. Además, la quiropraxia previene <strong>lesiones futuras</strong> y mejora el rendimiento físico. Con un enfoque holístico y personalizado, te ayudamos a alcanzar tu <strong>máximo potencial</strong> y disfrutar de una vida llena de <strong>bienestar</strong>.",
  },
];

function Servicios() {
  return (
    <div id="servicios" className="servicios-container">
      <div className="titulo">
        <motion.h2 {...textVariants}>
          Lográ el <strong>equilibrio perfecto</strong> entre{" "}
          <strong>cuerpo</strong> y <strong>mente</strong>.
          <motion.div
            {...lineVariants}
            className="line m-auto mt-3"
          ></motion.div>
        </motion.h2>
        <motion.p {...textVariants}>
          En <strong>Óptimo Rendimiento</strong>, te ayudamos a alcanzar tu{" "}
          <strong>máximo potencial</strong>.
        </motion.p>
        <motion.p {...textVariants}>
          Ofrecemos una variedad de tratamientos diseñados para ayudarte a{" "}
          <strong>reducir el estrés</strong>,{" "}
          <strong>mejorar tu movilidad</strong> y aumentar tu{" "}
          <strong>bienestar general</strong>.
        </motion.p>
        <motion.p {...textVariants}>
          Te ayudamos a vivir una vida más <strong>plena</strong> y{" "}
          <strong>satisfactoria</strong>, mejorando tu{" "}
          <strong>salud física y mental</strong>.
        </motion.p>
      </div>

      <div className="servicios">
        {serviciosData.map((servicio, index) => (
          <motion.div key={index} {...servsVariants} className="servicio">
            {/* <i className={servicio.icon}></i> */}
            <h3>{servicio.title}</h3>
            <Image src={hola}></Image>
            <p dangerouslySetInnerHTML={{ __html: servicio.description }}></p>
          </motion.div>
        ))}
      </div>
      <div className="boton">
        <motion.a
          {...textVariants}
          href="https://wa.me/59898191219"
          target="_blank"
        >
          Sentite mejor hoy mismo!
        </motion.a>
      </div>
    </div>
  );
}

export default Servicios;