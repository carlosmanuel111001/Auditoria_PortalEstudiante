import React from "react";
import { Link } from "react-router-dom";

// Importa la imagen de menú
import menuIcon from "./imagenes/menu.png";

const opcionesStyles = {
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px 10px 0 0",
    fontSize: "32px",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
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
  content: {
    padding: "20px",
  },
  opcionesList: {
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    fontSize: "20px",
  },
  opcionItem: {
    backgroundColor: "#3498db",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "20px",
    padding: "20px",
    margin: "10px",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    transition: "background-color 0.3s ease",
  },
  opcionItemHover: {
    backgroundColor: "#2980b9",
  },
};

function Opciones() {
  return (
    <div style={opcionesStyles.container}>
      <header style={opcionesStyles.header}>
        <div style={opcionesStyles.menuIconContainer}>
          <Link to="/menu">
            <img
              src={menuIcon} // Ruta a tu imagen de menú
              alt="Menú"
              style={opcionesStyles.menuIcon}
            />
          </Link>
          Sistema Integrado de Gestión Institucional - SIGI
        </div>
      </header>
      <div style={opcionesStyles.content}>
        <div style={opcionesStyles.opcionesList}>
          <h2>Opciones</h2>
          <Link
            to="/requisitos"
            style={{ ...opcionesStyles.opcionItem, ...opcionesStyles.opcionItemHover }}
          >
            Requisitos
          </Link>
          <Link
            to="/incidentes"
            style={{ ...opcionesStyles.opcionItem, ...opcionesStyles.opcionItemHover }}
          >
            Incidentes
          </Link>
          <Link
            to="/rendimiento"
            style={{ ...opcionesStyles.opcionItem, ...opcionesStyles.opcionItemHover }}
          >
            Rendimiento
          </Link>
          <Link
            to="/pruebas"
            style={{ ...opcionesStyles.opcionItem, ...opcionesStyles.opcionItemHover }}
          >
            Pruebas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Opciones;
