//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/countryCards.module.css";
//______________________________________________________________________________

/*Cada una de las cartas de presentación de los países.*/
export default function CountryCard({ name, continent, flag, id }) {
  /*Renderización.*/
  return (
    <div className={s.card}>
      {name === "Este país no existe" ? (
        <img className={s.img} src={flag} alt="Ups..." />
      ) : (
        <Link to={`/home/detail/` + id}>
          <img className={s.img} src={flag} alt="Ups..." />
        </Link>
      )}

      <h3 className={s.nombre} key={name}>
        {name}
      </h3>

      <h5 className={s.continente} key={continent}>
        {continent}
      </h5>

      {name === "Este país no existe" ? (
        <h4>No hay detalles</h4>
      ) : (
        <Link className={s.link} to={`/home/detail/` + id}>
          <button className={s.boton} key={id}>
            Detalle
          </button>
        </Link>
      )}
    </div>
  );
}
