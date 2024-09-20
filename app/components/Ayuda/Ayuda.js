'use client';
import React from 'react';
import styles from './Ayuda.module.css';

const Ayuda = ({ banderaSeleccionada, setTiempoRestante }) => {
  const pedirAyuda = () => {
    const letras = banderaSeleccionada.name.split('');

    const indicesAleatorios = [];

    while (indicesAleatorios.length < 2) {
      const indiceAleatorio = Math.floor(Math.random() * letras.length);
      if (!indicesAleatorios.includes(indiceAleatorio)) {
        indicesAleatorios.push(indiceAleatorio);
      }
    }

    const letrasReveladas = indicesAleatorios.map(indice => letras[indice]).join(', ');
    
    alert(`Letras reveladas: ${letrasReveladas}`);
    
    setTiempoRestante(prev => prev - 2);
  };

  return (
    <button onClick={pedirAyuda} className={styles.boton}>Pedir Ayuda</button>
  );
};

export default Ayuda;
