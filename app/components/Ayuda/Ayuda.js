// components/Ayuda/Ayuda.js
const Ayuda = ({ nombrePais }) => {
    const obtenerLetrasAleatorias = () => {
      const letras = [...nombrePais];
      const letrasAleatorias = [];
      while (letrasAleatorias.length < 2 && letras.length > 0) {
        const indice = Math.floor(Math.random() * letras.length);
        if (!letrasAleatorias.includes(letras[indice])) {
          letrasAleatorias.push(letras[indice]);
        }
      }
      return letrasAleatorias.join(', ');
    };
  
    return (
      <div>
        <h4>Ayuda: Letras del país - {obtenerLetrasAleatorias()}</h4>
      </div>
    );
  };
  
  export default Ayuda;
  