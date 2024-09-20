'use client'
import styles from './Instrucciones.module.css';  // Importa los estilos de Instrucciones.module.css
import Titulo from "../Titulo/Titulo";
import Subtitulo from "../Subtitulo/Subtitulo";
import Link from "next/link";
export default function Instrucciones() {
    return (
        <div className={styles.container}>
          <Titulo/>
          <Subtitulo/>
          
          <p className={styles.p}>¡Bienvenido! Aquí te explicamos cómo jugar y qué hacer para acumular puntos.</p>
    
          <h3 className={styles.h3}>Objetivo del Juego</h3>
          <p className={styles.p}>
            Tu objetivo es adivinar el país al que pertenece la bandera que se muestra en pantalla. 
            Cada respuesta correcta te otorgará puntos, mientras que las respuestas incorrectas restarán puntos de tu total.
          </p>
    
          <h3 className={styles.h3}>Cómo Jugar</h3>
          <ol className={styles.ol}>
            <li className={styles.li}>
              <strong className={styles.strong}>Inicio del Juego:</strong>
              <p className={styles.p}>Al comenzar, se cargará una bandera aleatoria en la pantalla. ¡Prepárate para adivinar!</p>
            </li>
            <li className={styles.li}>
              <strong className={styles.strong}>Adivina la Bandera:</strong>
              <p className={styles.p}>Observa atentamente la bandera mostrada. Escribe el nombre del país que crees que corresponde a la bandera en el campo de entrada.</p>
            </li>
            <li className={styles.li}>
              <strong className={styles.strong}>Puntuación:</strong>
              <p className={styles.p}>
                <strong>Respuestas Correctas:</strong> Si adivinas correctamente, ¡sumas <strong>10 puntos</strong>!<br />
                <strong>Respuestas Incorrectas:</strong> Si fallas, se te restará <strong>1 punto</strong>.<br />
                Tu puntaje total se mostrará en la pantalla, así podrás ver tu progreso.<br />
                Si <strong>pasan los 15 segundos</strong> y no adivinaste, se restará <strong>1 punto</strong>
              </p>
            </li>
            <li className={styles.li}>
              <strong className={styles.strong}>Tiempo Límite:</strong>
              <p className={styles.p}>
                Tienes <strong>15 segundos</strong> para hacer tu adivinanza. ¡No te apresures!
                Si adivinas antes de que se acabe el tiempo, sumarás <strong>1 punto</strong> por cada segundo que quede.
              </p>
            </li>
            <li className={styles.li}>
              <strong className={styles.strong}>Agregar Tu Nombre:</strong>
              <p className={styles.p}>Antes de comenzar a jugar, ingresa tu nombre para que se guarde en la tabla de puntuaciones. ¡Sé parte del ranking!</p>
            </li>
            <li className={styles.li}>
              <strong className={styles.strong}>Ayudas:</strong>
              <p className={styles.p}>
                Si no estás seguro de tu respuesta, puedes pedir ayuda. 
                Al pedir ayuda, se revelarán algunas letras del nombre del país. 
                Recuerda que cada vez que pidas ayuda, perderás <strong>2 segundos</strong> del tiempo total.
              </p>
            </li>
          </ol>
    
          <h3 className={styles.h3}>Consejos para Jugar</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Presta atención a los colores y símbolos de la bandera, ya que pueden ayudarte a identificar el país.</li>
            <li className={styles.li}>No dudes en utilizar las ayudas si te sientes atascado, ¡pero ten cuidado con el tiempo!</li>
            <li className={styles.li}>Intenta recordar los nombres de los países a medida que juegas para mejorar en futuras rondas.</li>
          </ul>
    
          <h3 className={styles.h3}>¡Que empiece el juego!</h3>
          <p className={styles.p}>Haz clic en "AVANZAR" para escribir tu nombre y luego, inicia el juego y demuestra tus conocimientos sobre banderas. ¡Buena suerte!</p>
          <Link href="/NombreJugador" className={styles.button}>
             Avanzar
        </Link>
        </div>
    );
}