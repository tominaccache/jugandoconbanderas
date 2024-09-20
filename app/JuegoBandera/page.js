'use client'; 
import React, { useState, useEffect } from 'react';
import Puntos from '../components/Puntos/Puntos';
import Temporizador from '../components/Timer/Timer';
import Ayuda from '../components/Ayuda/Ayuda';
import styles from './page.module.css'; 

export default function JuegoBandera() {
  const [banderas, setBanderas] = useState([]);
  const [banderaSeleccionada, setBanderaSeleccionada] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [respuesta, setRespuesta] = useState('');
  const [tiempoRestante, setTiempoRestante] = useState(15);
  const [isGameActive, setIsGameActive] = useState(false);
  const [nombreJugador, setNombreJugador] = useState('');

  useEffect(() => {
    const fetchBanderas = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        if (response.ok) {
          const data = await response.json();
          setBanderas(data.data);
          seleccionarBanderaAleatoria(data.data);
        }
      } catch (error) {
        console.error('Error al conectar con la API de banderas:', error);
      }
    };

    fetchBanderas();
    const storedName = localStorage.getItem('nombreJugador');
    if (storedName) setNombreJugador(storedName);
  }, []);

  const seleccionarBanderaAleatoria = (banderas) => {
    const indiceAleatorio = Math.floor(Math.random() * banderas.length);
    setBanderaSeleccionada(banderas[indiceAleatorio]);
    setRespuesta('');
    setTiempoRestante(15);
    setIsGameActive(true);
  };

  const manejarTiempoAgotado = () => {
    setIsGameActive(false);
    seleccionarBanderaAleatoria(banderas);
  };

  const verificarRespuesta = () => {
    if (respuesta.toLowerCase() === banderaSeleccionada.name.toLowerCase()) {
      setPuntos(prev => prev + 10);
    } else if (puntos > 0) {
      setPuntos(prev => prev - 1);
    }
    manejarTiempoAgotado();
  };

  return (
    <div className={styles.container}>
      {banderaSeleccionada && (
        <div className={styles.juegoContainer}>
          <img 
            src={banderaSeleccionada.flag} 
            alt={`Bandera de ${banderaSeleccionada.name}`} 
            className={styles.bandera}
          />
          <Temporizador 
            tiempoRestante={tiempoRestante} 
            setTiempoRestante={setTiempoRestante} 
            onTimeUp={manejarTiempoAgotado} 
          />
          <Puntos 
            puntos={puntos} 
            nombreJugador={nombreJugador} 
          />
          <input
            type="text"
            placeholder="Adivina el país"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)} 
            className={styles.input}
          />
          <button 
            onClick={verificarRespuesta} 
            className={styles.button}
          >
            Enviar Respuesta
          </button>
          <Ayuda 
            banderaSeleccionada={banderaSeleccionada} 
            setTiempoRestante={setTiempoRestante} 
          />
        </div>
      )}
    </div>
  );
}
