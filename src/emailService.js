// src/services/emailService.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_xrl2jwt";
const TEMPLATE_ID_ADMIN = "template_l6sp3h8";
const TEMPLATE_ID_CLIENTE = "template_g9yq9jq";
const PUBLIC_KEY = "pwQri5cKdEiMTNKme";

export const enviarEmails = async (datos) => {
  try {
    // Enviar al administrador
    await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, {
      nombre: datos.nombre,
      email: datos.email,
      direccion: datos.direccion,
      fecha: datos.fecha,
      hora: datos.hora,
      tipo: datos.tipo,
      colores: datos.colores,
      diseño: datos.diseño,
      tecnica: datos.tecnica,
      estilo: datos.estilo,
    }, PUBLIC_KEY);
    console.log("📨 Correo enviado al administrador");

    // Enviar al cliente
    await emailjs.send(SERVICE_ID, TEMPLATE_ID_CLIENTE, {
      to_name: datos.nombre,
      to_email: datos.email,
    }, PUBLIC_KEY);
    console.log("📨 Correo de confirmación enviado al cliente");
    
  } catch (error) {
    console.error("❌ Error al enviar correos:", error);
  }
};
