import React from "react";
import { Link } from "react-router-dom";

// Importa íconos o imágenes para los enlaces de manuales
import manualUsuarioIcon from "./imagenes/manual.png";
import manualUsuarioPDF from "./pdfs/Información_general_Auditoria.pdf";
import manualTecnicoIcon from "./imagenes/manual.png";
import guiaInicioRapidoIcon from "./imagenes/manual.png";
import menuIcon from "./imagenes/menu.png";

const manualesStyles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px 10px 0 0",
    fontSize: "32px",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconContainer: {
    display: "flex",
    alignItems: "center",
  },
  menuIcon: {
    width: "24px", // Tamaño de la imagen de menú
    height: "24px",
    cursor: "pointer",
    marginRight: "10px", // Espacio entre el icono y el texto
  },
  listaManuales: {
    listStyleType: "none",
    padding: "0",
  },
  enlaceManual: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    padding: "20px",
    backgroundColor: "#3498db",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "20px",
    transition: "background-color 0.3s ease",
    textDecoration: "none", // Elimina el subrayado de los enlaces
  },
  enlaceManualIcon: {
    marginRight: "10px", // Espacio entre el ícono y el texto
    width: "32px", // Tamaño de los íconos de los manuales
    height: "32px",
  },
  enlaceManualHover: {
    backgroundColor: "#2980b9",
  },
};

function Manuales() {
  return (
    <div style={manualesStyles.container}>
      <header style={manualesStyles.header}>
        <div style={manualesStyles.menuIconContainer}>
          <Link to="/menu">
            <img
              src={menuIcon} // Ruta a tu imagen de menú
              alt="Menú"
              style={manualesStyles.menuIcon}
            />
          </Link>
          Sistema Integrado de Gestión Institucional - SIGI
        </div>
      </header>
      <ul style={manualesStyles.listaManuales}>
        <li>
          <a
            href={manualUsuarioPDF}
            target="_blank"
            rel="noopener noreferrer"
            style={manualesStyles.enlaceManual}
          >
            <img
              src={manualUsuarioIcon}
              alt="Manual de Usuario"
              style={manualesStyles.enlaceManualIcon}
            />
            Manual de Usuario (PDF)
          </a>
        </li>
        <li>
          <a
            href="/manuales/manual-tecnico"
            style={manualesStyles.enlaceManual}
          >
            <img
              src={manualTecnicoIcon}
              alt="Manual Técnico"
              style={manualesStyles.enlaceManualIcon}
            />
            Manual Técnico
          </a>
        </li>
        <li>
          <a
            href="/manuales/guia-inicio-rapido"
            style={manualesStyles.enlaceManual}
          >
            <img
              src={guiaInicioRapidoIcon}
              alt="Guía de Inicio Rápido"
              style={manualesStyles.enlaceManualIcon}
            />
            Guía de Inicio Rápido
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Manuales;
