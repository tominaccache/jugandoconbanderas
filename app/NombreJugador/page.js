'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'; 

export default function NombreJugador() {
  const [nombre, setNombre] = useState('');
  const [isNameSaved, setIsNameSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      localStorage.setItem('nombreJugador', nombre);
      setNombre('');
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
        <div className={styles.message2}>
            El boton de "Comenzar" aparecerá si se guardó el nombre correctamente
      </div>
        {isNameSaved && (
        <Link href="/JuegoBandera">
          <button className={styles.startButton}>Comenzar</button>
        </Link>
      )}
     </form>


    </div>
  );
}
