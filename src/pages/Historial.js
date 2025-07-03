import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Historial() {
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("historialReservas");
    if (data) {
      setReservas(JSON.parse(data));
    }
  }, []);

  const eliminarReserva = (index) => {
    const nuevas = [...reservas];
    nuevas.splice(index, 1);
    setReservas(nuevas);
    localStorage.setItem("historialReservas", JSON.stringify(nuevas));
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20, fontFamily: "Segoe UI" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "10px" }}>
        📜 Historial de Reservas Confirmadas
      </h2>

      <p style={{ textAlign: "center", color: "#388e3c", fontSize: "16px", marginBottom: 30 }}>
        ✅ Estas reservas ya fueron confirmadas con éxito.
      </p>

      {reservas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No hay reservas confirmadas aún.</p>
      ) : (
        reservas.map((r, i) => (
          <div key={i} style={{
            background: "#e0f2f1",
            marginBottom: 20,
            padding: 20,
            borderRadius: 16,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            position: "relative",
            border: "2px solid #81d4fa"
          }}>
            <p><strong>👤 Nombre:</strong> {r.nombre}</p>
            <p><strong>📧 Email:</strong> {r.email}</p>
            <p><strong>📍 Dirección:</strong> {r.direccion}</p>
            <p><strong>📅 Fecha:</strong> {r.fecha}</p>
            <p><strong>💅 Tipo:</strong> {r.tipo}</p>
            <p><strong>🎨 Colores:</strong> {r.colores}</p>
            <p><strong>🌸 Diseño:</strong> {r.diseño}</p>
            <p><strong>💧 Técnica:</strong> {r.tecnica}</p>
            <p><strong>✨ Estilo:</strong> {r.estilo}</p>
            <p><strong>📝 Nota:</strong> {r.nota || "Sin nota agregada"}</p>

            <button
              onClick={() => eliminarReserva(i)}
              style={{
                background: "#ef5350",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "10px",
                cursor: "pointer",
                position: "absolute",
                top: 10,
                right: 10
              }}
            >
              🗑️ Eliminar
            </button>
          </div>
        ))
      )}

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <button
          onClick={() => navigate("/admin")}
          style={{
            background: "#81c784",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          ⬅️ Volver a Panel Admin
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#4db6ac",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          🏠 Ir al Inicio
        </button>
      </div>
    </div>
  );
}
