'use client';
import React, { useEffect } from 'react';

const Temporizador = ({ tiempoRestante, setTiempoRestante, onTimeUp }) => {
  useEffect(() => {
    // Solo iniciar el temporizador si hay tiempo restante
    if (tiempoRestante > 0) {
      // Crear un intervalo que se ejecuta cada segundo
      const timer = setInterval(() => {
        setTiempoRestante(prev => prev - 1); // Restar 1 al tiempo restante
      }, 1000);

      // Limpiar el intervalo cuando el componente se desmonta o el tiempo cambia
      return () => clearInterval(timer);
    } else {
      // Si el tiempo se acaba, llamar a la función onTimeUp
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
