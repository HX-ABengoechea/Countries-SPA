//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/searchBar.module.css";
//______________________________________________________________________________

/*Este componente mostrará la barra de búsqueda en "/home".*/
export default function Encabezado() {
  /*Renderización.*/
  return (
    <div className={s.container}>
      <h1 className={s.title}>M A P S P H E R E</h1>

      <Link className={s.link2} to="/home/activity">
        <button className={s.newAct}>Crear actividad turística</button>
      </Link>

      <Link className={s.link} to="/home">
        <button className={s.back}>Volver</button>
      </Link>
    </div>
  );
}
