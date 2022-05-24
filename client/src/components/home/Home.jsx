//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/*IMPORT DE ACCIONES*/
import { getAllCountries } from "../../redux/actions/index";
/*IMPORT DE COMPONENTES*/
import SearchBar from "../searchBar/SearchBar";
import CountryCard from "../countryCard/CountryCard";
import Filtradores from "../filtradores/Filtradores";
import Paginado from "../paginado/Paginado";
/*IMPORT DE CSS*/
import s from "../estilos/home.module.css";
import cargando from "../estilos/imagenes/cargando.gif";
//______________________________________________________________________________

/*Este componente renderiza todos los elementos de la ruta "/home".*/
export default function Home() {
  const dispatch = useDispatch();

  /*Traigo el arreglo auxiliar de países del store.*/
  const { someCountries } = useSelector((state) => {
    return state;
  });

  /*Aquí creo distintos estados locales para el paginado.*/
  const [currentPage, setCurrentPage] = useState(1); //Este estado marca el número del paginado en el que nos encontramos.
  const [, setOrden] = useState(""); //Este estado nos servirá como auxiliar para recargar un componente.
  const [countriesPerPage] = useState(10); //En este estado indico cuántos países habrá por página.

  /*Esta variable indicará el índice del último país mostrado en cada página.*/
  const indexOfLastCountry = currentPage * countriesPerPage;

  /*Esta variable indicará el índice del primer país que se mostrará en cada página.*/
  const indexFirstCountry = indexOfLastCountry - countriesPerPage;

  /*Esta variable será un array con todos los países que se mostrarán en cada página.*/
  const currentCountries = someCountries.slice(
    indexFirstCountry,
    indexOfLastCountry
  );

  /*Esta función será la que establezca el paginado con sus numeros y páginas.*/
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /*Este efecto permite actualizar todos los países cada vez que se actualiza o se monta este componente.*/
  useEffect(() => {
    setCurrentPage(1);
    dispatch(getAllCountries());
  }, [dispatch]);

  /*Renderización.*/
  return (
    <div className={s.container}>
      <SearchBar setCurrentPage={setCurrentPage} setOrden={setOrden} />

      <Filtradores setCurrentPage={setCurrentPage} setOrden={setOrden} />

      <div className={s.cardsContainer} key="cardsBox">
        <div className={s.paginadoBox} key="paginado">
          <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={someCountries.length}
            paginado={paginado}
          />
        </div>

        <div className={s.cardsBox}>
          {currentCountries.length > 0 ? (
            currentCountries.map((pais) => {
              return (
                <div key={pais.id}>
                  <CountryCard
                    name={pais.name}
                    continent={pais.continent}
                    flag={pais.flag}
                    id={pais.id}
                  />
                </div>
              );
            })
          ) : (
            <div>
              <img src={cargando} alt="Not Found" />,
              <h3 className={s.notFound}>No se encontraron países</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}