//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/*IMPORT DE ACCIONES*/
import {
  filterActivity,
  getAllActivities,
  getAllCountries,
} from "../../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../../components/estilos/filtros/filtroActividades.module.css";
//______________________________________________________________________________

/*Este componente se encarga de filtrar los países por actividad turística.*/
export default function FiltroActividad({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();

  /*Traigo un arreglo con todas las actividades del store.*/
  const { allActivities } = useSelector((state) => {
    return state;
  });

  let arr = [];

  for (let i = 0; i < allActivities.length; i++) {
    let aux = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name.includes(allActivities[i].name.toLowerCase())) {
        aux = true;
      }
    }
    if (aux === false) {
      arr.push({
        name: allActivities[i].name.toLowerCase(),
        id: allActivities[i].id,
      });
    }
  }

  /*Para que aparezcan todas las opciones de actividades en la selección hacemos este efecto.*/
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  /*Esta función despacha el valor de la actividad que queremos filtrar.*/
  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado: ${e.target.value}`);
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      {/*Selector de actividad a filtrar.*/}
      <h6 className={s.title}>ACTIVIDAD TURISTICA</h6>
      <div>
        {" "}
        <select
          className={s.selector}
          key="Actividad"
          onChange={(e) => handleFilterActivity(e)}
        >
          {/*Opción base.*/}
          <option key="Todos" value="Todos">
            Todos
          </option>
          {/*Una opción por cada actividad existente.*/}
          {arr?.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
