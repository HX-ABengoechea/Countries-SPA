//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
/*IMPORT DE CSS*/
import s from "../estilos/paginado.module.css";
//______________________________________________________________________________

/*Componente que mostrará el páginado de los países.*/
export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  /*Arreglo en el que se guardará cada uno de los paginados.*/
  const pageNumbers = [];

  /*En este bucle for se calcula cuántas páginas habrá a partir de la cantidad total de países y la cantidad de países por página.*/
  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  /*Renderización.*/
  return (
    <div>
      {/*Por cada página se renderizará un botón que, al precionarlo, nos llevará a la página que representa.*/}
      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              className={s.botones}
              key={number}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          );
        })}
    </div>
  );
}
