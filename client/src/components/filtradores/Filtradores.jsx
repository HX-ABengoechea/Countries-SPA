//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
/*IMPORT DE ACCIONES*/
import { getAllCountries } from "../../redux/actions/index";
/*IMPORT DE COMPONENTES*/
import FiltroContinente from "./FiltroContinente";
import FiltroActividad from "./FiltroActividad";
import OrdenAlfa from "./OrdenAlfa";
import OrdenPoblacion from "./OrdenPoblacion";
/*IMPORT CSS*/
import s from "../estilos/filtros/filtroGeneral.module.css";
//______________________________________________________________________________

/*Este compnente sirve como nexo de todos los componentes de filtración y ordenamiento. Recibe dos parámetros para heredárselos
a el componente "OrdenPoblación".*/
export default function Filtradores({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();

  /*Esta función permite resetear todos los filtros.*/
  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      <div className={s.filtersContainer}>
        {/*Componente de filtrado por continente.*/}
        <FiltroContinente setCurrentPage={setCurrentPage} setOrden={setOrden} />

        {/*Componente de filtrado por actividad turística.*/}
        <FiltroActividad setCurrentPage={setCurrentPage} setOrden={setOrden} />

        {/*Componente de ordenamiento por orden alfabético.*/}
        <OrdenAlfa setCurrentPage={setCurrentPage} setOrden={setOrden} />

        {/*Componente de ordenamiento por población.*/}
        <OrdenPoblacion setCurrentPage={setCurrentPage} setOrden={setOrden} />
      </div>
      <div className={s.buttonsContainer}>
        {/*Botón para borrar todos los filtros.*/}
        <button className={s.deleter} onClick={(e) => handleClick(e)}>
          BORRAR FILTROS
        </button>

        {/*Botón para crear una actividad turística.*/}
        <Link to="/home/activity">
          <button className={s.creator}>CREAR ACTIVIDAD TURISTICA</button>
        </Link>
      </div>
    </div>
  );
}
