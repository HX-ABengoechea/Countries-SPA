//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
/*IMPORT DE COMPONENTES*/
import Encabezado from "../encabezado/Encabezado";
/*IMPORT DE ACCIONES*/
import { getCountryById } from "../../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../estilos/detail.module.css";
import cargando from "../estilos/imagenes/cargando.gif";
//______________________________________________________________________________

export default function Detail() {
  const dispatch = useDispatch();

  /*Aquí obtengo el parámetro pasado por url.*/
  const { id } = useParams();

  /*Traigo el país del store solicitado por parámetro.*/
  const { idCountry } = useSelector((state) => {
    return state;
  });

  /*Cada vez que se monta o actualiza este componente quiero que traiga el nuevo país solicitado por parámetro.*/
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  /*Renderización.*/
  return (
    <div className={s.container}>
      <Encabezado />

      {idCountry.name ? (
        <div className={s.infoContainer}>
          <h3 className={s.actTitle}>Actividades</h3>
          <div className={s.cardsBox}>
            {idCountry.activities &&
              idCountry.activities.map((act) => (
                <div className={s.actCard} key={act.name}>
                  <h4 className={s.eachTitle} key={act.name}>
                    {act.name}
                  </h4>
                  <div className={s.difDur}>
                    <h4 className={s.eachDif} key={act.difficulty}>
                      DIFICULTAD: {act.difficulty}
                    </h4>

                    <h4 className={s.eachDur} key={act.name + "."}>
                      DURACIÓN: {act.duration} días
                    </h4>
                  </div>

                  <div className={s.temTem}>
                    <h4 className={s.eachTem} key={act.season}>
                      TEMPORADA
                    </h4>
                    <h4 className={s.eachTem2} key={act.season + "."}>
                      {act.season}
                    </h4>
                  </div>
                </div>
              ))}
          </div>

          <div className={s.infoBox}>
            <img className={s.img} src={idCountry.flag} alt="Not found" />

            <div className={s.part2}>
              <h1 className={s.name} key={idCountry.name}>
                {idCountry.name} ({idCountry.id})
              </h1>

              <h3 className={s.capital} key={idCountry.capital}>
                Capital {idCountry.capital}
              </h3>
            </div>

            <div className={s.part3}>
              <h2 className={s.continente} key={idCountry.continent}>
                Continente: {idCountry.continent}
              </h2>

              <h3 className={s.subregion} key={idCountry.subregion}>
                Subregion: {idCountry.subregion}
              </h3>

              <h3 className={s.area} key={idCountry.area}>
                Area: {idCountry.area}
              </h3>

              <h3 className={s.poblacion} key={idCountry.population}>
                Poblacion: {idCountry.population}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src={cargando} alt="Not Found" />,
          <h3 className={s.notFound}>No se encontraron países</h3>
        </div>
      )}
    </div>
  );
}
