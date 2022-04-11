import image from "../../components/estilos/imagenes/notFound.png";

//_______________________________ S T O R E ____________________________________
const initialState = {
  allCountries: [],
  someCountries: [],
  allActivities: [],
  idCountry: [],
};
//_______________________________ S T O R E ____________________________________

/*Este es el reducer.*/
function rootReducer(state = initialState, action) {
  switch (action.type) {
    /*Este caso trae todos los datos del back-end y los guarda en dos estados.*/
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
        someCountries: action.payload,
      };

    /*Este caso toma el valor del continente que se quiere filtrar, usa uno de los estados como auxiliar de todos los paises, 
    y los filtra a partir de ahí.*/
    case "FILTER_BY_CONTINENT":
      const allCountries = state.allCountries;

      const filtrado =
        action.payload === "Todos"
          ? allCountries
          : allCountries.filter((pais) => {
              return pais.continent === action.payload;
            });

      return {
        ...state,
        someCountries: filtrado,
      };

    /*Este caso toma el valor de la actividad que se quiere filtrar.*/
    case "FILTER_BY_ACTIVITY":
      const allCountries2 = state.allCountries;

      const solo = allCountries2.filter((pais) => {
        return pais.activities.length > 0;
      });

      let array = [];

      for (let i = 0; i < solo.length; i++) {
        for (let j = 0; j < solo[i].activities.length; j++) {
          if (solo[i].activities[j].name.toLowerCase() === action.payload) {
            array.push(solo[i]);
          }
        }
      }

      const filtro = action.payload === "Todos" ? allCountries2 : array;

      return {
        ...state,
        someCountries: filtro,
      };

    /*Este caso toma el modo de ordenamiento por población.*/
    case "ORDER_BY_POPULATION":
      let sortedCountries;

      if (action.payload === "Ninguno") {
        sortedCountries = state.someCountries;
      } else if (action.payload === "Mayor") {
        sortedCountries = state.someCountries.sort((a, b) => {
          if (a.population > b.population) {
            return -1;
          }
          if (a.population < b.population) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "Menor") {
        sortedCountries = state.someCountries.sort((a, b) => {
          if (a.population > b.population) {
            return 1;
          }
          if (a.population < b.population) {
            return -1;
          }
          return 0;
        });
      }

      return {
        ...state,
        someCountries: sortedCountries,
      };

    /*Este caso toma el modo de ordenamiento alfabético.*/
    case "ORDER_BY_ALPHA":
      let sortedAlpha;
      if (action.payload === "Ninguno") {
        sortedAlpha = state.allCountries;
      } else if (action.payload === "A") {
        sortedAlpha = state.someCountries.sort((a, b) => {
          if (a.name.charAt(0) > b.name.charAt(0)) {
            return 1;
          }
          if (a.name.charAt(0) < b.name.charAt(0)) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "Z") {
        sortedAlpha = state.someCountries.sort((a, b) => {
          if (a.name.charAt(0) > b.name.charAt(0)) {
            return -1;
          }
          if (a.name.charAt(0) < b.name.charAt(0)) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        someCountries: sortedAlpha,
      };

    /*Este caso toma el país que se buscó en el search bar.*/
    case "GET_COUNTRY_BY_NAME":
      const arr = [];
      if (action.payload.mal) {
        arr.push({
          name: "Este país no existe",
          continent: "",
          id: "",
          flag: image,
        });
      } else {
        arr.push(action.payload);
      }

      return {
        ...state,
        someCountries: arr,
      };

    /*Este caso retorna el mismo state cuando se hace un nuevo posteo.*/
    case "POST_ACTIVITY":
      return { ...state };

    /*Este caso trae todas las actividades y las guarda en el store.*/
    case "GET_ALL_ACTIVITIES":
      return {
        ...state,
        allActivities: action.payload,
      };

    /*Este caso guarda el país al que se le require mostrar más detalles.*/
    case "GET_COUNTRY_BY_ID":
      return {
        ...state,
        idCountry: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
