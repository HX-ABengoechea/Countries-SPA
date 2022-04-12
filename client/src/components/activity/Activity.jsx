//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
/*IMPORT DE ACCIONES*/
import { postActivity, getAllCountries } from "../../redux/actions/index";
/*IMPORT DE FUNCIONES*/
import { validate } from "./validate";
/*IMPORT DE CSS*/
import s from "../estilos/formulario.module.css";
import e from "../estilos/errorsForm.module.css";
//______________________________________________________________________________

/*Componente de creación de actividades.*/
export default function Activity() {
  const dispatch = useDispatch();

  /*Traigo todos los países del back.*/
  const { allCountries } = useSelector((state) => {
    return state;
  });

  /*Creo un estado local en el que guardaré la información del formulario a medida que se completa.*/
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  /*Creo un estado manejador de errores.*/
  const [errors, setErrors] = useState({});

  /*Cada vez que se monta o actualiza el componente quiero que traiga todos los países actualizado.*/
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  /*Esta función maneja la selección de todos los campos, menos countries.*/
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value.trim(),
      })
    );
  }

  /*Esta función maneja la selección de los países.*/
  function handleSelect(e) {
    // e.preventDefault();
    setInput({
      ...input,
      countries: input.countries.includes(e.target.value)
        ? input.countries
        : [...input.countries, e.target.value],
    });
    setErrors(validate({ ...input, countries: e.target.value }));
  }

  /*Esta función permite borrar un país ya seleccionado.*/
  function handleDelete(pais) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== pais),
    });
  }

  /*Esta función permite crear la actividad despachando la información del formulario.*/
  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      input.countries.length !== 0 &&
      !Object.keys(errors).length
    ) {
      dispatch(postActivity(input));
      alert("Actividad turística creada");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
        submit: "",
      });
    }
  }
  /*Esta función permite resetear la información del formulario.*/
  function handleNew(e) {
    e.preventDefault();
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    setErrors({});
  }

  /*Renderización.*/
  return (
    <div className={s.container}>
      <div className={s.topContainer}>
        <button className={s.new} onClick={(e) => handleNew(e)}>
          Nueva Actividad
        </button>

        <Link to="/home">
          <button className={s.back}>Volver</button>
        </Link>
      </div>

      <form className={s.botContainer} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={s.title}>CREAR ACTIVIDAD</h1>

        <div className={s.supresor}>
          <label className={s.label}>NOMBRE: </label>
          <input
            className={s.placer1}
            key="name"
            autoComplete="off"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          ></input>

          {errors.name && <p className={e.errName1}>{errors.name}</p>}
          {!errors.name && errors.name2 && (
            <p className={e.errName1}>{errors.name2}</p>
          )}
        </div>

        <div className={s.supresor}>
          <label className={s.label}>DIFICULTAD: </label>
          <input
            className={s.placer2}
            key="difficulty"
            type="text"
            value={input.difficulty}
            autoComplete="off"
            name="difficulty"
            onChange={(e) => handleChange(e)}
          ></input>

          {errors.difficulty && <p className={e.errDif}>{errors.difficulty}</p>}
          {!errors.difficulty && errors.difficulty2 && (
            <p className={e.errDif}>{errors.difficulty2}</p>
          )}
          {!errors.difficulty && !errors.difficulty2 && errors.difficulty3 && (
            <p className={e.errDif2}>{errors.difficulty3}</p>
          )}

          <label className={s.label2}>DURACIÓN: </label>
          <input
            className={s.placer3}
            key="duration"
            autoComplete="off"
            type="text"
            value={input.duration}
            name="duration"
            onChange={(e) => handleChange(e)}
          ></input>

          {errors.duration && <p className={e.errDur}>{errors.duration}</p>}
          {!errors.duration && errors.duration2 && (
            <p className={e.errDur2}>{errors.duration2}</p>
          )}
          {!errors.duration && !errors.duration2 && errors.duration3 && (
            <p className={e.errDur2}>{errors.duration3}</p>
          )}
        </div>

        <div className={s.supresor}>
          <label className={s.label}>TEMPORADA: </label>
          <select
            className={s.selector}
            name="season"
            onChange={(e) => handleChange(e)}
          >
            <option key="Nada">Temporada</option>
            <option key="Verano" value="Verano">
              Verano
            </option>
            <option key="Invierno" value="Invierno">
              Invierno
            </option>
            <option key="Primavera" value="Primavera">
              Primavera
            </option>
            <option key="Otoño" value="Otoño">
              Otoño
            </option>
          </select>

          {errors.season && <p className={e.errSea}>{errors.season}</p>}
        </div>

        <div className={s.supresor}>
          <label className={s.label}>PAISES: </label>
          <select className={s.selector2} onChange={(e) => handleSelect(e)}>
            {allCountries
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((pais) => {
                return (
                  <option key={pais.id} value={pais.name}>
                    {pais.name}
                  </option>
                );
              })}
          </select>

          <div className={s.choosed}>
            {input.countries.map((pais) => (
              <div key={pais} className={s.card}>
                <p className={s.country}>{pais}</p>
                <button className={s.cross} onClick={() => handleDelete(pais)}>
                  x
                </button>
              </div>
            ))}
          </div>

          {errors.countries && <p className={e.errCount}>{errors.countries}</p>}
        </div>

        {!input.name ||
        !input.difficulty ||
        !input.duration ||
        !input.season ||
        input.countries.length === 0 ||
        Object.keys(errors).length ? (
          <button className={s.submit2} disabled type="submit">
            Crear!
          </button>
        ) : (
          <button className={s.submit} type="submit">
            Crear!
          </button>
        )}
      </form>
    </div>
  );
}
