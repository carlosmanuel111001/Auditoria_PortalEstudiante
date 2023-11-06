import React from "react";
import { Link } from "react-router-dom";

// Importa la imagen de menú
import menuIcon from "./imagenes/menu.png";

const descargasStyles = {
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
  informes: {
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    fontSize: "20px",
  },
  informeItem: {
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
  informeItemHover: {
    backgroundColor: "#2980b9",
  },
};

function Descargas() {
  return (
    <div style={descargasStyles.container}>
      <header style={descargasStyles.header}>
        <div style={descargasStyles.menuIconContainer}>
          <Link to="/menu">
            <img
              src={menuIcon} // Ruta a tu imagen de menú
              alt="Menú"
              style={descargasStyles.menuIcon}
            />
          </Link>
          Sistema Integrado de Gestión Institucional - SIGI
        </div>
      </header>
      <div style={descargasStyles.content}>
        <div style={descargasStyles.informes}>
          <h2>Informes Descargables</h2>
          <Link
            to="/descargas/informe-mensual"
            style={{ ...descargasStyles.informeItem, ...descargasStyles.informeItemHover }}
          >
            Informe Mensual
          </Link>
          <Link
            to="/descargas/informe-anual"
            style={{ ...descargasStyles.informeItem, ...descargasStyles.informeItemHover }}
          >
            Informe Anual
          </Link>
          <Link
            to="/descargas/informe-trimestral"
            style={{ ...descargasStyles.informeItem, ...descargasStyles.informeItemHover }}
          >
            Informe Trimestral
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Descargas;
