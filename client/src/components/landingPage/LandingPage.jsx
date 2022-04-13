//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/landingPage.module.css";
import gitHub from "../estilos/imagenes/gitHub.png";
import linkedIn from "../estilos/imagenes/linkedIn.png";
//______________________________________________________________________________

/*Este componente será el que incluya todo el contenido de la landing page.*/
export default function LandingPage() {
  /*Renderización.*/
  return (
    <div className={s.container}>
      <div>
        <div className={s.cajonLetras}>
          <h3 className={s.letra}>B</h3>
          <h3 className={s.letra}>I</h3>
          <h3 className={s.letra}>E</h3>
          <h3 className={s.letra}>N</h3>
          <h3 className={s.letra}>V</h3>
          <h3 className={s.letra}>E</h3>
          <h3 className={s.letra}>N</h3>
          <h3 className={s.letra}>I</h3>
          <h3 className={s.letra}>D</h3>
          <h3 className={s.letra}>O</h3>
        </div>

        <Link to="/home">
          <button className={s.ingresar}>INGRESAR</button>
        </Link>
      </div>

      <div className={s.imgContainer}>
        <a
          href="https://www.linkedin.com/in/alejobengo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="Not Found" className={s.linkedIn} />
        </a>

        <a
          href="https://github.com/AlejoBengo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt="Not Found" className={s.gitHub} />
        </a>
      </div>
    </div>
  );
}
