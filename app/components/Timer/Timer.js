'use client';
import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Temporizador = ({ onTimeUp }) => {
  const [tiempo, setTiempo] = useState(15);

  useEffect(() => {
    if (tiempo === 0) {
      onTimeUp(tiempo); // Llama a la función cuando el tiempo se acaba y pasa el tiempo restante
      return;
    }

    const timer = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo - 1);
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [tiempo, onTimeUp]);

  return (
    <div>
      <h3>Tiempo Restante: {tiempo}s</h3>
    </div>
  );
};

export default Temporizador;
