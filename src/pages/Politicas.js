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
        backgroundColor: "#e0f7f3",
        borderRadius: "20px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#00796b", marginBottom: "30px" }}>
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

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={handleAceptar}
          style={{
            padding: "14px 30px",
            background: "linear-gradient(to right, #80cbc4, #a5d6a7)",
            color: "#004d40",
            fontWeight: "bold",
            border: "none",
            borderRadius: "30px",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ✅ Aceptar y continuar con la ficha
        </button>
      </div>
    </div>
  );
}
