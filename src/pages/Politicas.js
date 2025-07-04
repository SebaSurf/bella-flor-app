import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaMoneyBillWave, FaHome, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Politicas() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: 800,
        margin: "50px auto",
        padding: "30px",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(to top, #e0f7fa, #ffffff)",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        color: "#004d40"
      }}
    >
      <h1 style={{ fontSize: "2.2em", color: "#00796b", textAlign: "center", marginBottom: "25px" }}>
        🌸 Políticas de trabajo 💅🏻✨
      </h1>

      <ul style={{ fontSize: "18px", lineHeight: "1.9", paddingLeft: "20px" }}>
        <li>💅🏻 Los diseños deben ser traídos por el cliente.</li>
        <li><FaClock style={{ marginRight: "8px" }} /> En caso de atraso, se espera 10 minutos si hay aviso previo.</li>
        <li><FaExclamationTriangle style={{ marginRight: "8px" }} /> Si no asiste sin aviso, se cobrará igualmente el trabajo.</li>
        <li><FaHome style={{ marginRight: "8px" }} /> Los servicios se realizan en domicilio del particular.</li>
        <li><FaMoneyBillWave style={{ marginRight: "8px" }} /> Pagos por transferencia o efectivo.</li>
        <li>🖌 El pago se realiza <strong>antes</strong> de comenzar el trabajo.</li>
        <li>✨ Se agradece puntualidad y compromiso para una atención armoniosa.</li>
      </ul>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            marginTop: "20px"
          }}
        >
          💅🏻 Reservar cita
        </motion.button>
      </div>
    </motion.div>
  );
}
