import Image from "next/image";
import styles from "./page.module.css";
import Titulo from "./components/Titulo/Titulo";
import Subtitulo from "./components/Subtitulo/Subtitulo";
import Instrucciones from "./components/Instrucciones/Instrucciones";

export default function Home() {
  return (
    <div>
      <Instrucciones/>
    </div>
  );
}
