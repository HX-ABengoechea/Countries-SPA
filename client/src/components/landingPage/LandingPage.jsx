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
    <div className={s.fondo}>
      <div className={s.cajonLetras}>
        <h3 className={s.t1}>B</h3>
        <h3 className={s.t2}>I</h3>
        <h3 className={s.t3}>E</h3>
        <h3 className={s.t4}>N</h3>
        <h3 className={s.t5}>V</h3>
        <h3 className={s.t6}>E</h3>
        <h3 className={s.t7}>N</h3>
        <h3 className={s.t8}>I</h3>
        <h3 className={s.t9}>D</h3>
        <h3 className={s.t10}>O</h3>
      </div>

      <Link to="/home">
        <button className={s.btning}>INGRESAR</button>
      </Link>

      <div className={s.no}>
        <a
          href="https://www.linkedin.com/in/alejobengo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="Not Found" className={s.linkedIn} />
        </a>
      </div>
      <a
        href="https://github.com/AlejoBengo/Countries-SPA"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gitHub} alt="Not Found" className={s.gitHub} />
      </a>
    </div>
  );
}
