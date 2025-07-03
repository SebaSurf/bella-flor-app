import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/fotos/logo.jpg";
import fondoLogin from "../assets/fotos/fondo-login.jpg";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (usuario === "admin" && clave === "admin123") {
      navigate("/admin");
    } else {
      setError("❌ Usuario o clave incorrecta.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${fondoLogin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          padding: 30,
          borderRadius: 30,
          background: "rgba(255, 255, 255, 0.96)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <img
            src={logo}
            alt="Logo Bella Flor"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 25px #a5d6a7",
              animation: "fadeInLogo 1.5s ease-in-out",
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#2e7d32",
            fontWeight: "bold",
            marginBottom: 20,
            animation: "fadeInMensaje 2s ease-in-out",
          }}
        >
          🌼 ¡Bienvenida Administradora Bella Flor! 🌼
        </div>

        <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: 20 }}>
          🔐 Acceso solo Administrador
        </h2>

        <input
          type="text"
          placeholder="👤 Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={estiloInput}
        />

        <input
          type="password"
          placeholder="🔒 Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          style={estiloInput}
        />

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: 10 }}>{error}</p>
        )}

        <button
          onClick={handleLogin}
          style={{
            background: "linear-gradient(to right, #66bb6a, #a5d6a7)",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "30px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
            marginTop: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          Iniciar sesión
        </button>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#81c784",
              color: "white",
              padding: "8px 18px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            ⬅️ Volver al Inicio
          </button>
        </div>

        {/* Animaciones CSS */}
        <style>
          {`
            @keyframes fadeInLogo {
              0% { opacity: 0; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1); }
            }

            @keyframes fadeInMensaje {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

const estiloInput = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  fontSize: "16px",
};
