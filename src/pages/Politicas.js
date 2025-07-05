import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClock,
  FaExclamationTriangle,
  FaHome,
  FaMoneyBillWave,
  FaHandSparkles,
  FaPaintBrush,
} from "react-icons/fa";

export default function Politicas() {
  const navigate = useNavigate();

  const handleAceptar = () => {
    navigate("/ficha");
  };

  const iconStyle = {
    marginRight: "8px",
    fontSize: "20px",
    verticalAlign: "middle",
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 30,
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f1faf9",
        borderRadius: "20px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontSize: "26px", color: "#007f6e", textAlign: "center" }}>
        ✨ Reglas y Políticas de Atención Bella Flor ✨
      </h1>

      <ul
        style={{
          fontSize: "18px",
          lineHeight: "1.9",
          paddingLeft: "20px",
          color: "#004d40",
        }}
      >
        <li>
          <FaHandSparkles style={{ ...iconStyle, color: "#d46ac2" }} />
          Los diseños deben ser traídos por el cliente.
        </li>
        <li>
          <FaClock style={{ ...iconStyle, color: "#4db6ac" }} />
          El tiempo de espera es de 10 minutos siempre que exista&nbsp;aviso&nbsp;previo.
        </li>
        <li>
          <FaExclamationTriangle style={{ ...iconStyle, color: "#f44336" }} />
          Si el cliente no hace aviso de su inasistencia, el cobro se hará de todas formas.
        </li>
        <li>
          <FaHome style={{ ...iconStyle, color: "#81c784" }} />
          Los servicios se realizan en domicilio del particular.
        </li>
        <li>
          <FaMoneyBillWave style={{ ...iconStyle, color: "#ffb74d" }} />
          Pagos por transferencia o efectivo.
        </li>
        <li>
          <FaPaintBrush style={{ ...iconStyle, color: "#64b5f6" }} />
          El pago se realiza antes de comenzar el trabajo.
        </li>
        <li>
          <span style={{ ...iconStyle, color: "#ffd54f" }}>✨</span>
          Se agradece puntualidad y compromiso para una atención armoniosa.
        </li>
      </ul>

      {/* 🌸 Botones estilo Bella Flor */}
      <div
        style={{
          textAlign: "center",
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* 🏡 Botón: Volver al Inicio */}
        <button
          style={{
            backgroundColor: "#a0e6d0", // verde agua claro
            color: "#004d40",
            border: "none",
            padding: "14px 26px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "16px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#8edec4")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#a0e6d0")
          }
          onClick={() => navigate("/")}
        >
          🏡 Volver al Inicio
        </button>

        {/* 💅 Botón: Aceptar y continuar */}
        <button
          style={{
            backgroundColor: "#f8b5d0", // rosa pastel
            color: "#6a1b4d",
            border: "none",
            padding: "14px 26px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "16px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f29cbc")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f8b5d0")
          }
          onClick={handleAceptar}
        >
          💅 Aceptar y continuar con la ficha
        </button>
      </div>
    </div>
  );
}
