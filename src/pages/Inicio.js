import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { GiFlowerTwirl, GiNailedFoot } from "react-icons/gi";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Inicio() {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div
      style={{
        maxWidth: 950,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#e0f7fa",
        borderRadius: "20px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
      }}
    >

      {/* Logo */}
      <img
        src={require("../assets/fotos/logo.jpg")}
        alt="Logo Bella Flor"
        style={{
          width: 140,
          display: "block",
          margin: "0 auto 25px",
          borderRadius: "50%",
          border: "4px solid #80cbc4",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      />

      {/* Título */}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Great Vibes', cursive",
          fontSize: "3em",
          color: "#00796b",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}
      >
        Bienvenida a Bella Flor <GiFlowerTwirl size={36} />
      </h1>

    

      {/* Carrusel de fotos */}
      <section style={{ margin: "40px 0" }}>
        <h2 style={{ color: "#004d40", textAlign: "center", marginBottom: "20px" }}>
          💅 Diseños más queridos
        </h2>

        <Slider {...sliderSettings}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n}>
              <img
                src={require(`../assets/fotos/foto${n}.jpg`)}
                alt={`Foto ${n}`}
                style={{
                  width: "90%",
                  height: "auto",
                  maxHeight: "260px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  margin: "0 auto",
                  display: "block",
                  border: "5px solid #ffffff",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Sobre mí */}
      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          marginBottom: "30px",
          fontSize: "1.2em",
          color: "#004d40"
        }}
      >
        🌷 <strong>Sobre mí</strong>
        <p style={{ marginTop: "10px" }}>
          Soy especialista en manicure con vocación artística.  
          Cada diseño es único y busca resaltar la belleza natural con estilo,  
          dedicación y técnicas personalizadas. Me encanta conectar con cada clienta  
          y dejar una huella bella en sus manos.
        </p>
      </div>

      {/* Propósito y meta */}
      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          marginBottom: "30px",
          fontSize: "1.2em",
          color: "#004d40"
        }}
      >
        🎯 <strong>Mi propósito</strong>
        <p style={{ marginTop: "10px" }}>
          Que cada clienta sienta confianza, belleza y alegría con sus uñas.
        </p>

        💚 <strong>Mi meta</strong>
        <p style={{ marginTop: "10px" }}>
          Convertirme en una profesional reconocida, creando experiencias inolvidables  
          en cada atención de manicure.
        </p>
      </div>

      {/* Botones */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        <button
          onClick={() => navigate("/ficha")}
          style={{
            background: "linear-gradient(to right, #80cbc4, #a5d6a7)",
            color: "white",
            border: "none",
            padding: "14px 30px",
            borderRadius: "30px",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          💖 Agendar cita
        </button>

        <button
          onClick={() => navigate("/login")}
          style={{
            background: "#80cbc4",
            color: "white",
            border: "none",
            padding: "14px 30px",
            borderRadius: "30px",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔒 Solo ADM
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          padding: "20px",
          textAlign: "center",
          background: "linear-gradient(90deg, #b2dfdb, #e0f2f1)",
          borderRadius: "16px",
          fontSize: "14px",
          color: "#004d40"
        }}
      >
        <p>🌸 Gracias por confiar en mí para resaltar tu belleza ✨</p>
        <p><FaInstagram /> Instagram: @bellaflor_manicure</p>
        <p><FaEnvelope /> contacto@bellaflor.com</p>
        <p>📍 Santiago, Chile</p>
      </footer>
    </div>
  );
}
