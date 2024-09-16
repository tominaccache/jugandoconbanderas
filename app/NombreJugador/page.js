'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'; // Importamos el módulo CSS

export default function NombreJugador() {
  const [nombre, setNombre] = useState('');
  const [isNameSaved, setIsNameSaved] = useState(false); // Para verificar si el nombre está guardado

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      // Guardar el nombre en localStorage
      localStorage.setItem('nombreJugador', nombre);

      // Limpiar el input
      setNombre('');

      // Cambiar el estado para indicar que el nombre se ha guardado
      setIsNameSaved(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Antes de comenzar le pedimos que inserte su nombre
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Ingresa el nombre del jugador"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>Guardar Nombre</button>
        {isNameSaved && (
        <Link href="/JuegoBandera">
          <button className={styles.startButton}>Comenzar</button>
        </Link>
      )}
     </form>


    </div>
  );
}
