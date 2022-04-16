//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { useDispatch } from "react-redux";
/*IMPORT DE ACCIONES*/
import { orderByPopulation } from "../../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../../components/estilos/filtros/filtroPoblacion.module.css";
//______________________________________________________________________________

/*Este componente se encarga de ordenar los países por cantidad de población.*/
export default function OrdenPoblacion({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();

  /*Esta función  se encarga de despachar el modo por el que se ordenarán los países.*/
  function handleOrderByPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado: ${e.target.value}`);
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      <h6 className={s.title}>POBLACION</h6>
      <select
        className={s.selector}
        key="Poblacion"
        onChange={(e) => handleOrderByPopulation(e)}
      >
        <option key="Ninguno" value="Ninguno">
          Ninguno
        </option>
        <option key="Mayor" value="Mayor">
          Mayor
        </option>
        <option key="Menor" value="Menor">
          Menor
        </option>
      </select>
    </div>
  );
}
