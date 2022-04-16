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
//______________________________________________________________________________

/*Muestra la información de un país específico.*/
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

      {idCountry.name && (
        <div className={s.activityContainer}>
          <h3 className={s.actTitle}>Actividades</h3>
          <div className={s.activitiesBox}>
            {idCountry.activities &&
              idCountry.activities.map((act) => (
                <div className={s.actCard} key={act.name}>
                  <h3 className={s.actName} key={act.name}>
                    {act.name}
                  </h3>

                  <h3 className={s.actDifficulty} key={act.difficulty}>
                    DIFICULTAD: {act.difficulty}
                  </h3>

                  <h3 className={s.actDuration} key={act.name + "."}>
                    DURACIÓN: {act.duration} días
                  </h3>

                  <h3 className={s.actSeason} key={act.season}>
                    TEMPORADA: {act.season}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {idCountry.name && (
        <div className={s.informationContainer}>
          <img className={s.img} src={idCountry.flag} alt="Not found" />

          <div>
            <h1 className={s.countryName} key={idCountry.name}>
              {idCountry.name} ({idCountry.id})
            </h1>
          </div>
          <div>
            <label className={s.labelMap}>Capital</label>
            <h3 key={idCountry.capital}>{idCountry.capital}</h3>
          </div>
          <div>
            <label className={s.labelMap}>Continente</label>
            <h2 className={s.text} key={idCountry.continent}>
              {idCountry.continent}
            </h2>
          </div>
          <div>
            <label className={s.labelMap}>Subregion</label>
            <h3 className={s.text} key={idCountry.subregion}>
              {idCountry.subregion}
            </h3>
          </div>
          <div>
            <label className={s.labelMap}>Area</label>
            <h3 className={s.text} key={idCountry.area}>
              {idCountry.area}
            </h3>
          </div>
          <div>
            <label className={s.labelMap}>Poblacion</label>
            <h3 className={s.text} key={idCountry.population}>
              {idCountry.population}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
