//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import axios from "axios";
//______________________________________________________________________________

/*Esta acción va a traer todos los paises del back-end, y los va a despachar al Reducer dentro de una acción.*/
export const getAllCountries = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries`)
      .then((info) => {
        return dispatch({
          type: "GET_ALL_COUNTRIES",
          payload: info.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

/*Esta acción va a traer un país espcífico que se indique ne la barra de búsqueda.*/
export const getCountriesByName = (name) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/countries?name=` + name).then((info) => {
      return dispatch({ type: "GET_COUNTRY_BY_NAME", payload: info.data });
    });
  };
};

/*Esta acción se encarga de traer un país específico cuando se solicita los detalles de alguno.*/
export const getCountryById = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/` + id)
      .then((info) => {
        return dispatch({
          type: "GET_COUNTRY_BY_ID",
          payload: info.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

/*Esta acción se encarga de traer todas las actividades turísticas para poder agregarlas como opciónd e filtrado.*/
export const getAllActivities = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/allact`)
      .then((info) => {
        return dispatch({
          type: "GET_ALL_ACTIVITIES",
          payload: info.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

/*Esta acción va a tomar el continente a filtrar, y lo va a despachar al Reducer en una acción.*/
export const filterCountriesByContinent = (continente) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: continente,
  };
};

/*Esta acción va a tomar la actividad a filtrar, y la va a despachar al Reducer en una acción.*/
export const filterActivity = (actividad) => {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload: actividad,
  };
};

/*Esta acción se encarga de tomar el modo de filtrado por población.*/
export const orderByPopulation = (condition) => {
  return {
    type: "ORDER_BY_POPULATION",
    payload: condition,
  };
};

/*Esta acción se encarga de tomar el modo de filtrado alfabético.*/
export const orderByAlpha = (char) => {
  return {
    type: "ORDER_BY_ALPHA",
    payload: char,
  };
};

/*Esta acción se encarga de postear la actividad creada.*/
export const postActivity = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      `http://localhost:3001/countries/activity`,
      payload
    );
    return dispatch({
      type: "POST_ACTIVITY",
      payload: response,
    });
  };
};
