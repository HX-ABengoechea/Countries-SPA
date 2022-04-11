//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { useDispatch } from "react-redux";
/*IMPORT DE ACCIONES*/
import { orderByAlpha } from "../../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../../components/estilos/filtros/filtroAlpha.module.css";
//______________________________________________________________________________

/*Este componente es el encargado de ordenar todos los países alfabéticamente.*/
export default function OrdenAlfa() {
  const dispatch = useDispatch();

  /*Esta función se encarga de despachar el modo de ordenamiento.*/
  function handleOrderByAlpha(e) {
    e.preventDefault();
    dispatch(orderByAlpha(e.target.value));
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      {/* {} */}
      <h6 className={s.title}>ORDEN ALFABETICO</h6>
      <select
        className={s.selector}
        key="Alfabetico"
        onChange={(e) => {
          handleOrderByAlpha(e);
        }}
      >
        <option key="Ninguno" value="Ninguno">
          Ninguno
        </option>
        <option key="A" value="A">
          A-Z
        </option>
        <option key="Z" value="Z">
          Z-A
        </option>
      </select>
    </div>
  );
}
