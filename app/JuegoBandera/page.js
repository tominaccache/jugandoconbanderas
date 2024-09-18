'use client';
import React, { useState, useEffect } from 'react';
import Puntos from '../components/Puntos/Puntos';
import Temporizador from '../components/Timer/Timer';

export default function JuegoBandera() {
  const [banderas, setBanderas] = useState([]);
  const [banderaSeleccionada, setBanderaSeleccionada] = useState(null);
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    const fetchBanderas = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        if (response.ok) {
          const data = await response.json();
          setBanderas(data.data);
          seleccionarBanderaAleatoria(data.data); // Seleccionar una bandera aleatoria
        }
      } catch (error) {
        console.error('Error al conectar con la API de banderas:', error);
      }
    };

    fetchBanderas();
  }, []);

  const seleccionarBanderaAleatoria = (banderas) => {
    const indiceAleatorio = Math.floor(Math.random() * banderas.length);
    setBanderaSeleccionada(banderas[indiceAleatorio]);
  };

  const manejarTiempoAgotado = (tiempoRestante) => {
    // Si el tiempo se agota, sumar los segundos restantes como puntos
    const puntosGanados = tiempoRestante > 0 ? tiempoRestante : 0; // Solo sumar si hay tiempo restante
    setPuntos((prevPuntos) => prevPuntos + puntosGanados);
    console.log(`El tiempo se ha agotado. Se han sumado ${puntosGanados} puntos.`);
    
    // Seleccionar una nueva bandera aleatoria después de que se agote el tiempo
    seleccionarBanderaAleatoria(banderas);
  };

  return (
    <div>
      {banderaSeleccionada && (
        <div>
          <img 
            src={banderaSeleccionada.flag} 
            alt={`Bandera de ${banderaSeleccionada.name}`} 
          />
          <Temporizador setPuntos={setPuntos} onTimeUp={manejarTiempoAgotado} />
          <Puntos 
            puntos={puntos} 
            setPuntos={setPuntos} 
            banderaSeleccionada={banderaSeleccionada} // Pasar la bandera seleccionada
          />
        </div>
      )}
    </div>
  );
}
