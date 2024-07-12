import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToastProvider from "@/providers/toast-provider";

const inter = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Óptimo Rendimiento - Centro de salud física en Montevideo",
  description:
    "Descubre Óptimo Rendimiento, tu centro de kinesiología en Montevideo. Ofrecemos tratamientos personalizados de kinesiología y fisioterapia para mejorar tu bienestar físico, aliviar el dolor y aumentar tu movilidad. Visítanos hoy y mejora tu salud con nuestros expertos.",
  keywords: [
    "kinesiología Montevideo",
    "fisioterapia Montevideo",
    "tratamientos de kinesiología",
    "alivio del dolor",
    "mejora de la movilidad",
    "bienestar físico",
    "centro de kinesiología",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.optimorendimientouy.com/" />
        <meta
          name="google-site-verification"
          content="D6cPs-X-jHYuQCJbMZG8GTbA7i1p5FYahKTj_a3QBnk"
        />
      </head>
      <body translate="no" className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
