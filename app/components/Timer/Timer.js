'use client';
import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Temporizador = ({ onTimeUp }) => {
  const [tiempo, setTiempo] = useState(15);

  useEffect(() => {
    if (tiempo === 0) {
      onTimeUp(tiempo);
      setTiempo(15);
    }

    const timer = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [tiempo, onTimeUp]);

  return (
    <div className={styles.timerContainer}>
      <h3>Tiempo Restante: {tiempo}s</h3>
    </div>
  );
};

export default Temporizador;

