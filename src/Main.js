import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "./imagenes/menu.png";

const mainStyles = {
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
    backgroundColor: "#3498db", // Color del encabezado
    color: "#f5f6fa", // Color del texto en el encabezado
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
    width: "24px",
    height: "24px",
    cursor: "pointer",
    marginRight: "10px",
  },
  content: {
    padding: "20px",
  },
  description: {
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    fontSize: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    flex: "1",
    margin: "10px",
    padding: "20px",
    backgroundColor: "#3498db", // Color de fondo del botón
    color: "#f5f6fa", // Color del texto en el botón
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "20px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#2980b9", // Color de fondo del botón al pasar el mouse
  },
};

function Main() {
  return (
    <div style={mainStyles.container}>
      <header style={mainStyles.header}>
        <div style={mainStyles.menuIconContainer}>
          <Link to="/menu">
            <img
              src={menuIcon}
              alt="Menú"
              style={mainStyles.menuIcon}
            />
          </Link>
          Sistema Integrado de Gestión Institucional - SIGI
        </div>
      </header>
      <div style={mainStyles.content}>
        <div style={mainStyles.description}>
          <h2>Descripción del Portal Estudiantil</h2>
          <p>
            Bienvenido al portal estudiantil, tu fuente de información y
            recursos académicos. Aquí encontrarás manuales, descargas y más para
            facilitar tu experiencia estudiantil.
          </p>
        </div>
        <div style={mainStyles.buttons}>
          <Link
            to="/manuales"
            style={{ ...mainStyles.button, ...mainStyles.buttonHover }}
          >
            Manuales
          </Link>
          <Link
            to="/descargas"
            style={{ ...mainStyles.button, ...mainStyles.buttonHover }}
          >
            Descargas
          </Link>
          <div style={{ ...mainStyles.button, ...mainStyles.buttonHover }}>
            Otros
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
