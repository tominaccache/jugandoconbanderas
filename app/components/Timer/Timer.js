'use client';
import React, { useEffect } from 'react';

const Temporizador = ({ tiempoRestante, setTiempoRestante, onTimeUp }) => {
  useEffect(() => {
    if (tiempoRestante > 0) {
      const timer = setInterval(() => {
        setTiempoRestante(prev => prev - 1);
      }, 1000);

      
      return () => clearInterval(timer);
    } else {
      onTimeUp();
    }
  }, [tiempoRestante, setTiempoRestante, onTimeUp]);

  return (
    <div>
      Tiempo Restante: {tiempoRestante}s
    </div>
  );
};

export default Temporizador;
