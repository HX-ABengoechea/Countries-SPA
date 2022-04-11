//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
/*IMPORT DE REDUCER*/
import rootReducer from "../reducer/index";
//______________________________________________________________________________

/*Aquí se crea el store.*/
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
