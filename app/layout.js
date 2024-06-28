import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToastProvider from "@/providers/toast-provider";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Optimo rendimiento",
  description:
    "En nuestra clínica de terapias físicas, nos dedicamos a mejorar tu bienestar físico y funcional. Ofrecemos tratamientos personalizados para aliviar el dolor, mejorar la movilidad y promover tu salud general. Descubre cómo podemos ayudarte hoy mismo.",
  keywords: ["terapias físicas", "salud física", "bienestar", "terapia manual"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.mercadoahora.com.ar/" />
        <meta
          name="google-site-verification"
          content="cNem6k58FhHNRbzbwQui38jSHVe4cw-wdgDzxmFqANA"
        />
      </head>
      <body translate="no" className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
