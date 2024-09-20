'use client';
import React from 'react';

const Puntos = ({ puntos, nombreJugador }) => {
  let mensaje;

  if (nombreJugador) {
    mensaje = `Puntos de ${nombreJugador}: ${puntos}`;
  } 

  return (
    <div>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default Puntos;