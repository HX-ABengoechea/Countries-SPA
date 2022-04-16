//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { useDispatch } from "react-redux";
/*IMPORT DE ACCIONES*/
import { filterCountriesByContinent } from "../../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../../components/estilos/filtros/filtroContinente.module.css";
//______________________________________________________________________________

/*Este componente se encarga de filtrar los países por continente.*/
export default function FiltroContinente({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();

  /*Esta función es la encargada de despachar el continente por el que se va a filtrar.*/
  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado: ${e.target.value}`);
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      <h6 className={s.title}>CONTINENTE</h6>

      <select
        className={s.selector}
        key="Continente"
        onChange={(e) => handleFilterContinent(e)}
      >
        <option key="Todos" value="Todos">
          Todos
        </option>
        <option key="Africa" value="Africa">
          Africa
        </option>
        <option key="Americas" value="Americas">
          America
        </option>
        <option key="Antarctic" value="Antarctic">
          Antartica
        </option>
        <option key="Asia" value="Asia">
          Asia
        </option>
        <option key="Europe" value="Europe">
          Europa
        </option>
        <option key="Oceania" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}
