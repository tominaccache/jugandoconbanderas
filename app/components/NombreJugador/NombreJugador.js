// components/NombreJugador/NombreJugador.js
const NombreJugador = ({ nombre, setNombre }) => {
    return (
      <input
        type="text"
        placeholder="Nombre del Jugador"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    );
  };
  
  export default NombreJugador;
  