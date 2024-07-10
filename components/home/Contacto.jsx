"use client";

import React, { useState } from "react";
import "../styles/_contacto.scss";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};
const paragraphVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const sendEmail = () => {
    // Crear un formulario temporal en el DOM

    const form = document.createElement("form");

    // Agregar campos al formulario
    form.innerHTML = `
      <input type="hidden" name="nombre" value="${nombre}">
      <input type="hidden" name="telefono" value="${telefono}">
      <input type="hidden" name="mail" value="${mail}">
      <input type="hidden" name="consulta" value="${consulta}">
    `;

    document.body.appendChild(form);

    emailjs
      .sendForm(
        "service_khoqdvt",
        "template_cu6span",
        form,
        "_Xi61NPw_YghhsDhm"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    document.body.removeChild(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consulta || !telefono || !mail || !nombre) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    sendEmail();
    toast.success("Formulario enviado con exito");
    setNombre("");
    setMail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <div id="contacto" className="contacto-container">
      <div className="contacto-container2">
        {" "}
        <motion.h3 {...paragraphVariants}>Contacto</motion.h3>
        <div {...lineVariants} className="line mb-5"></div>
        <div className="contacto">
          <div className="info">
            <motion.div {...paragraphVariants}>
              <i className="bi bi-geo-alt"></i>
              <h5>UBICACIÓN</h5>
              <a
                target="blank"
                href="https://www.google.com/maps/place/Optimo+rendimiento/@-34.8941839,-56.1749399,15z/data=!4m2!3m1!1s0x0:0x3c74608493518e17?sa=X&ved=1t:2428&ictx=111"
              >
                Constitución1860 Apto. OO1 esq. La paz, Montevideo, Uruguay
                11200
              </a>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-whatsapp"></i>
              <h5>WHATSAPP</h5>
              <a target="blank" href="https://wa.me/59898191219">
                +598 98 191 219
              </a>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-instagram"></i>
              <h5>INSTAGRAM</h5>
              <a
                target="blank"
                href="https://www.instagram.com/optimorendimiento/"
              >
                @optimorendimiento
              </a>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-clock"></i>
              <h5>HORARIO</h5>
              <p>Lunes a jueves: 14hs - 21hs</p>
              <p>Viernes: 8hs - 16hs</p>
            </motion.div>
          </div>
          <motion.form {...paragraphVariants}>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name="nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="mail"
              type="text"
              placeholder="Email"
            />
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              name="telefono"
              type="text"
              placeholder="Teléfono"
            />
            <textarea
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              name="consulta"
              type="text"
              placeholder="Consulta"
            />
            <button type="submit" onClick={handleSubmit}>
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
