import React from "react";
import { Link } from "react-router-dom";
import style from "../style.module.css";

function errorPage () {

  return (
    <div className={style['regresar']}>
      <h1>Error 404</h1>
        <Link to='/'>
          <button>Regresar</button>
        </Link>
    </div>
  )
}

export default errorPage;