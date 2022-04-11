//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/countryCards.module.css";
//______________________________________________________________________________

/*Este componente renderizará cada uno de los paises, con su imagen, su nombre y continente.*/
export default function CountryCard({ name, continent, flag, id }) {
  /*Renderización.*/
  return (
    <div className={s.card}>
      <Link to={`/home/detail/` + id}>
        <img className={s.img} src={flag} alt="Ups..." />
      </Link>

      <h3 className={s.nombre} key={name}>
        {name}
      </h3>

      <h5 className={s.continente} key={continent}>
        {continent}
      </h5>

      <Link className={s.link} to={`/home/detail/` + id}>
        <button className={s.boton} key={id}>
          Detalle
        </button>
      </Link>
    </div>
  );
}
