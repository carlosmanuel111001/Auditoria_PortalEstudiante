import React from 'react';
import { Link } from 'react-router-dom';
import logo from './imagenes/logo.jpeg';

function Bienvenida() {
  return (
    <div style={estilosBienvenida.contenedor}>
      <header style={estilosBienvenida.encabezado}>
        <div style={estilosBienvenida.logoContainer}>
          <img src={logo} alt="Logo de InfoEstudia" style={estilosBienvenida.logo} />
          <div style={estilosBienvenida.tituloContainer}>
            <h1 style={estilosBienvenida.titulo}>Bienvenido a InfoEstudia</h1>
            <p style={estilosBienvenida.subtitulo}>Tu plataforma educativa favorita</p>
          </div>
        </div>
      </header>
      <main style={estilosBienvenida.cuerpo}>
        <p style={estilosBienvenida.textoPrincipal}>
          ¡Bienvenido a nuestro sitio web! Estamos encantados de tenerte aquí.
          En esta plataforma, encontrarás información valiosa y emocionante sobre diversos temas.
        </p>
        <Link to="/main" style={estilosBienvenida.botonPrincipal}>
          Entrar
        </Link>
      </main>
    </div>
  );
}

const estilosBienvenida = {
  contenedor: {
    maxWidth: '100%',
    padding: '20px',
    textAlign: 'center',
    fontFamily: '"Poppins", sans-serif',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
  },
  encabezado: {
    backgroundColor: '#0a3d62',
    color: '#f5f6fa',
    padding: '20px',
    borderRadius: '20px 20px 0 0',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
  },
  tituloContainer: {
    textAlign: 'center',
  },
  titulo: {
    fontSize: '2.4em',
    margin: '0',
    fontWeight: '600',
  },
  subtitulo: {
    fontSize: '1.2em',
    margin: '10px 0 0 0',
    color: '#e58e26',
  },
  cuerpo: {
    padding: '20px',
  },
  textoPrincipal: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  botonPrincipal: {
    display: 'inline-block',
    padding: '12px 36px',
    backgroundColor: '#0a3d62',
    color: '#f5f6fa',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
};

export default Bienvenida;
