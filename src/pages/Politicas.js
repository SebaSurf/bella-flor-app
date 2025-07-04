import React from "react";
import { useNavigate } from "react-router-dom";

export default function Politicas() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 30,
        fontFamily: "'Segoe UI', sans-serif",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "#004d40"
      }}
    >
      <h1 style={{ fontSize: "2em", color: "#00796b", marginBottom: "20px", textAlign: "center" }}>
        📋 Políticas de trabajo
      </h1>

      <ul style={{ fontSize: "18px", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>🎨 Los diseños deben ser traídos por el cliente.</li>
        <li>⏰ En caso de atraso, se esperará 10 minutos si hay aviso previo.</li>
        <li>❌ Si el cliente no asiste sin aviso, se cobrará igualmente el trabajo.</li>
        <li>🏠 Los servicios se realizan en domicilio del particular.</li>
        <li>💵 Los pagos son por transferencia o efectivo.</li>
        <li>🧾 El pago se realiza <strong>antes</strong> de realizar el trabajo.</li>
      </ul>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
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
          📅 Reservar cita
        </button>
      </div>
    </div>
  );
}
