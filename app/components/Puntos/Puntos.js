'use client';
import React, { useState } from 'react';
import styles from './Puntos.module.css';

const Puntos = ({ puntos, setPuntos, banderaSeleccionada }) => {
  const [respuesta, setRespuesta] = useState('');

  const manejarRespuesta = (e) => {
    e.preventDefault();
    if (respuesta.toLowerCase() === banderaSeleccionada.name.toLowerCase()) {
      setPuntos(puntos + 10);
    } else {
      setPuntos(puntos - 1);
    }
    setRespuesta('');//limpia la rta
  };

  return (
    <div className={styles.container}>
      <h2>Puntos: {puntos}</h2>
      <form onSubmit={manejarRespuesta}>
        <input
          type="text"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          placeholder="Adivina el país"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Puntos;
