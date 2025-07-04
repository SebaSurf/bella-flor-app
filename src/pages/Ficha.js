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
    dia: "",
    hora: "",
    tipo: "",
    colores: "",
    diseño: "",
    tecnica: "Marmolado",
    estilo: "Francesa",
  });

  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  const horariosSemana = {
    Lunes: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    Martes: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    Miércoles: ["17:30", "18:30", "19:30", "20:30"],
    Jueves: [
      "09:00", "10:00", "11:00", "12:00", "13:00",
      "17:30", "18:30", "19:30", "20:30",
    ],
    Sábado: [
      "09:00", "10:00", "11:00", "12:00", "13:00",
      "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00",
    ],
  };

  useEffect(() => {
    const datos = localStorage.getItem("reservasGuardadas");
    if (datos) setReservas(JSON.parse(datos));
  }, []);

  const cuposRestantes = MAX_CUPOS - reservas.length;

  const handleDiaClick = (dia) => {
    setForm((prev) => ({ ...prev, dia, hora: "" }));
    setHorariosDisponibles(horariosSemana[dia]);
  };

  const handleHoraClick = (hora) => {
    setForm((prev) => ({ ...prev, hora }));
  };

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
      dia: "",
      hora: "",
      tipo: "",
      colores: "",
      diseño: "",
      tecnica: "Marmolado",
      estilo: "Francesa",
    });
    setHorariosDisponibles([]);
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
        background: "linear-gradient(135deg, #a7ffeb 0%, #64b5f6 100%)",
        borderRadius: "25px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
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
        🌸 Ficha de Atención Bella Flor 💅🏻🖌✨
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
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {["nombre", "email", "direccion", "tipo", "colores", "diseño"].map((name) => (
            <input
              key={name}
              name={name}
              type={name === "email" ? "email" : "text"}
              placeholder={
                {
                  nombre: "Nombre completo",
                  email: "Correo electrónico",
                  direccion: "Dirección",
                  tipo: "Tipo de trabajo",
                  colores: "Colores preferidos",
                  diseño: "Diseño deseado",
                }[name]
              }
              value={form[name]}
              onChange={handleChange}
              required={name === "nombre" || name === "email" || name === "direccion"}
              style={{
                padding: "14px 16px",
                borderRadius: "15px",
                border: "2px solid #00796b",
                fontSize: "16px",
                fontWeight: "600",
                outlineColor: "#004d40",
              }}
            />
          ))}

          {/* Día de semana */}
          <label style={{ fontWeight: "700" }}>📅 Selecciona un día:</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {Object.keys(horariosSemana).map((dia) => (
              <button
                key={dia}
                type="button"
                onClick={() => handleDiaClick(dia)}
                style={{
                  background: form.dia === dia ? "#004d40" : "#a7ffeb",
                  color: form.dia === dia ? "white" : "#004d40",
                  padding: "10px 20px",
                  border: "2px solid #004d40",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {dia}
              </button>
            ))}
          </div>

          {/* Horarios disponibles */}
          {horariosDisponibles.length > 0 && (
            <>
              <label style={{ fontWeight: "700" }}>🕐 Elige una hora:</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {horariosDisponibles.map((hora) => (
                  <button
                    key={hora}
                    type="button"
                    onClick={() => handleHoraClick(hora)}
                    style={{
                      background: form.hora === hora ? "#00796b" : "#ffffff",
                      color: form.hora === hora ? "white" : "#004d40",
                      border: "2px solid #004d40",
                      borderRadius: "20px",
                      padding: "10px 15px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Técnica y estilo */}
          <label style={{ fontWeight: "700" }}>💅 Técnica:</label>
          <select name="tecnica" value={form.tecnica} onChange={handleChange} style={selectStyle}>
            <option value="Marmolado">Marmolado</option>
            <option value="Stickers al agua">Stickers al agua</option>
          </select>

          <label style={{ fontWeight: "700" }}>✨ Estilo:</label>
          <select name="estilo" value={form.estilo} onChange={handleChange} style={selectStyle}>
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
            }}
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
          }}
        >
          ⬅️ Volver al Inicio
        </button>
      </div>
    </div>
  );
}

const selectStyle = {
  padding: "12px 16px",
  borderRadius: "15px",
  border: "2px solid #00796b",
  fontSize: "16px",
  fontWeight: "600",
  outlineColor: "#004d40",
};
