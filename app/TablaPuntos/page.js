'use client'; 
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'; 
import Link from 'next/link';

const TablaPuntos = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('puntosJugadores')) || [];
    // Ordenar jugadores por puntos de forma descendente
    const jugadoresOrdenados = storedPlayers.sort((a, b) => b.puntos - a.puntos);
    setJugadores(storedPlayers);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Tabla de Puntos</h1>
      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Nombre del Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre}</td>
              <td>{jugador.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" className={styles.termina} >
            Terminar Juego
          </Link>
    </div>
  );
};

export default TablaPuntos;
