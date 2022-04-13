//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/encabezado.module.css";
//______________________________________________________________________________

export default function Encabezado() {
  return (
    <div className={s.container}>
      <h1 className={s.mapsphere}>M A P S P H E R E</h1>

      <Link to="/home/activity">
        <button className={s.newActivity}>Crear actividad turística</button>
      </Link>

      <Link className={s.link} to="/home">
        <button className={s.back}>Volver</button>
      </Link>
    </div>
  );
}
