import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    const guardadas = localStorage.getItem("reservasGuardadas");
    if (guardadas) {
      setReservas(JSON.parse(guardadas));
    }
  }, []);

  const guardarCambios = () => {
    const nuevas = [...reservas];
    nuevas[editando] = form;
    setReservas(nuevas);
    localStorage.setItem("reservasGuardadas", JSON.stringify(nuevas));
    setEditando(null);
    alert("✅ Cambios guardados correctamente");
  };

  const confirmarReserva = (reserva, index) => {
    const historial = JSON.parse(localStorage.getItem("historialReservas")) || [];
    historial.push({ ...reserva, confirmada: true });
    localStorage.setItem("historialReservas", JSON.stringify(historial));
    eliminarReserva(index);
    alert("✅ Reserva confirmada y movida al historial");
  };

  const eliminarReserva = (index) => {
    const nuevas = [...reservas];
    nuevas.splice(index, 1);
    setReservas(nuevas);
    localStorage.setItem("reservasGuardadas", JSON.stringify(nuevas));
  };

  const filtrar = reservas.filter((r) =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.fecha.includes(busqueda)
  );

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "Segoe UI" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>🌼 Panel de Administración</h2>

      <div style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <input
          placeholder="🔍 Buscar cliente o fecha"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            width: "70%",
            fontSize: "16px"
          }}
        />
        <div style={{ fontWeight: "bold", color: "#2e7d32" }}>
          Total reservas: {filtrar.length}
        </div>
      </div>

      {filtrar.length === 0 ? (
        <p style={{ color: "#888", textAlign: "center" }}>No hay reservas encontradas.</p>
      ) : (
        filtrar.map((reserva, index) => (
          <div key={index} style={{
            background: "#e8f5e9",
            marginBottom: 20,
            padding: 20,
            borderRadius: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            position: "relative"
          }}>
            {editando === index ? (
              <>
                <h3 style={{ color: "#388e3c", marginBottom: 10 }}>✏️ Editar ficha de atención</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input style={estiloInput} placeholder="👤 Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                  <input style={estiloInput} placeholder="📧 Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <input style={estiloInput} placeholder="📍 Dirección" value={form.direccion} onChange={(e) => setForm({ ...form, direccion: e.target.value })} />
                  <input style={estiloInput} placeholder="📅 Fecha" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} />
                  <input style={estiloInput} placeholder="💅 Tipo" value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} />
                  <input style={estiloInput} placeholder="🎨 Colores" value={form.colores} onChange={(e) => setForm({ ...form, colores: e.target.value })} />
                  <input style={estiloInput} placeholder="🌸 Diseño" value={form.diseño} onChange={(e) => setForm({ ...form, diseño: e.target.value })} />
                  <input style={estiloInput} placeholder="💧 Técnica" value={form.tecnica} onChange={(e) => setForm({ ...form, tecnica: e.target.value })} />
                  <input style={estiloInput} placeholder="✨ Estilo" value={form.estilo} onChange={(e) => setForm({ ...form, estilo: e.target.value })} />
                </div>

                <div style={{ marginTop: 16, textAlign: "center" }}>
                  <button
                    onClick={guardarCambios}
                    style={{
                      background: "#4caf50",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "16px",
                      cursor: "pointer",
                      marginRight: "10px"
                    }}
                  >
                    💾 Guardar
                  </button>
                  <button
                    onClick={() => setEditando(null)}
                    style={{
                      background: "#ccc",
                      color: "#333",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "16px",
                      cursor: "pointer"
                    }}
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <p><strong>👤 Nombre:</strong> {reserva.nombre}</p>
                <p><strong>📧 Email:</strong> {reserva.email}</p>
                <p><strong>📍 Dirección:</strong> {reserva.direccion}</p>
                <p><strong>📅 Fecha:</strong> {reserva.fecha}</p>
                <p><strong>💅 Tipo:</strong> {reserva.tipo}</p>
                <p><strong>🎨 Colores:</strong> {reserva.colores}</p>
                <p><strong>🌸 Diseño:</strong> {reserva.diseño}</p>
                <p><strong>💧 Técnica:</strong> {reserva.tecnica}</p>
                <p><strong>✨ Estilo:</strong> {reserva.estilo}</p>

                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    onClick={() => {
                      setEditando(index);
                      setForm(reserva);
                    }}
                    style={botonEditar}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => confirmarReserva(reserva, index)}
                    style={botonConfirmar}
                  >
                    ✅ Confirmar
                  </button>
                  <button
                    onClick={() => eliminarReserva(index)}
                    style={botonEliminar}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <button
          onClick={() => navigate("/historial")}
          style={{
            background: "#4db6ac",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            fontSize: "16px",
            cursor: "pointer",
            marginRight: 10
          }}
        >
          📜 Ver Historial
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#aed581",
            color: "#1b5e20",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          🏠 Volver al Inicio
        </button>
      </div>
    </div>
  );
}

const estiloInput = {
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "15px",
  width: "100%"
};

const botonEditar = {
  background: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  cursor: "pointer"
};

const botonConfirmar = {
  background: "#66bb6a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  cursor: "pointer"
};

const botonEliminar = {
  background: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  cursor: "pointer"
};
