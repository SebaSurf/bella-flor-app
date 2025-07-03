import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { enviarEmails } from "../emailService";

export default function Ficha() {
  const navigate = useNavigate();
  const MAX_CUPOS = 10;

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    fecha: "",
    tipo: "",
    colores: "",
    diseño: "",
    tecnica: "Marmolado",
    estilo: "Francesa",
  });

  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const datos = localStorage.getItem("reservasGuardadas");
    if (datos) {
      setReservas(JSON.parse(datos));
    }
  }, []);

  const cuposRestantes = MAX_CUPOS - reservas.length;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cuposRestantes <= 0) {
      setMensaje("❌ Cupos agotados este mes. ¡Gracias por tu interés!");
      return;
    }

    const nuevasReservas = [...reservas, form];
    setReservas(nuevasReservas);
    localStorage.setItem("reservasGuardadas", JSON.stringify(nuevasReservas));
    setMensaje("✅ ¡Reserva exitosa! Revisa tu correo 📩");

    try {
      await enviarEmails(form);
    } catch (error) {
      console.error("Error al enviar correo", error);
    }

    setForm({
      nombre: "",
      email: "",
      direccion: "",
      fecha: "",
      tipo: "",
      colores: "",
      diseño: "",
      tecnica: "Marmolado",
      estilo: "Francesa",
    });
  };

  const mensajeCupos = () => {
    if (cuposRestantes === 0) return "❌ Cupos agotados este mes.";
    if (cuposRestantes === 1) return "⚠️ ¡Último cupo disponible!";
    return `🧮 Cupos disponibles: ${cuposRestantes} / ${MAX_CUPOS}`;
  };

  return (
    <div
      style={{
        padding: 30,
        maxWidth: 650,
        margin: "30px auto",
        background:
          "linear-gradient(135deg, #a7ffeb 0%, #64b5f6 100%)", // gradiente aqua
        borderRadius: "25px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow:
          "0 8px 24px rgba(0, 0, 0, 0.15)", // sombra suave y moderna
        color: "#004d40",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#004d40",
          marginBottom: 30,
          fontWeight: "900",
          fontSize: "2.4rem",
          letterSpacing: "2px",
          textShadow: "1px 1px 3px #004d4080",
        }}
      >
        🌸 Ficha de Atención Bella Flor
      </h2>

      <div
        style={{
          marginBottom: 20,
          fontSize: "20px",
          color: cuposRestantes <= 1 ? "#d84315" : "#004d40",
          textAlign: "center",
          fontWeight: "700",
          padding: "10px",
          backgroundColor: cuposRestantes <= 1 ? "#ffccbc" : "#b2dfdb",
          borderRadius: "15px",
          boxShadow: "inset 0 0 10px #004d4080",
        }}
      >
        {mensajeCupos()}
      </div>

      {cuposRestantes > 0 && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {[
            { name: "nombre", placeholder: "Nombre completo", type: "text" },
            { name: "email", placeholder: "Correo electrónico", type: "email" },
            { name: "direccion", placeholder: "Dirección", type: "text" },
            { name: "fecha", placeholder: "Fecha de reserva", type: "date" },
            { name: "tipo", placeholder: "Tipo de trabajo", type: "text" },
            { name: "colores", placeholder: "Colores preferidos", type: "text" },
            { name: "diseño", placeholder: "Diseño deseado", type: "text" },
          ].map(({ name, placeholder, type }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
              required={name !== "tipo" && name !== "colores" && name !== "diseño"} // opcionales
              style={{
                padding: "14px 16px",
                borderRadius: "15px",
                border: "2px solid #00796b",
                fontSize: "16px",
                fontWeight: "600",
                outlineColor: "#004d40",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#004d40")}
              onBlur={(e) => (e.target.style.borderColor = "#00796b")}
            />
          ))}

          <label style={{ fontWeight: "700", color: "#004d40" }}>Técnica:</label>
          <select
            name="tecnica"
            value={form.tecnica}
            onChange={handleChange}
            style={{
              padding: "12px 16px",
              borderRadius: "15px",
              border: "2px solid #00796b",
              fontSize: "16px",
              fontWeight: "600",
              outlineColor: "#004d40",
            }}
          >
            <option value="Marmolado">Marmolado</option>
            <option value="Stickers al agua">Stickers al agua</option>
          </select>

          <label style={{ fontWeight: "700", color: "#004d40" }}>Estilo:</label>
          <select
            name="estilo"
            value={form.estilo}
            onChange={handleChange}
            style={{
              padding: "12px 16px",
              borderRadius: "15px",
              border: "2px solid #00796b",
              fontSize: "16px",
              fontWeight: "600",
              outlineColor: "#004d40",
            }}
          >
            <option value="Francesa">Francesa</option>
            <option value="Puntitos">Puntitos</option>
            <option value="Flores">Flores</option>
            <option value="Hojas">Hojas</option>
          </select>

          <button
            type="submit"
            style={{
              backgroundColor: "#004d40",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "20px",
              fontSize: "18px",
              fontWeight: "900",
              cursor: "pointer",
              boxShadow: "0 4px 10px #00796b",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#00796b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#004d40")}
          >
            💅 Reservar ahora
          </button>
        </form>
      )}

      {mensaje && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            background: "#fffde7",
            borderLeft: "8px solid #fbc02d",
            borderRadius: "15px",
            color: "#827717",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "18px",
            boxShadow: "0 0 10px #fbc02d80",
          }}
        >
          {mensaje}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#a7ffeb",
            color: "#004d40",
            padding: "14px 30px",
            border: "none",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 10px #004d4060",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#64b5f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#a7ffeb")}
        >
          ⬅️ Volver al Inicio
        </button>
      </div>
    </div>
  );
}
