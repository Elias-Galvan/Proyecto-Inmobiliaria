import "../assets/css/Home.css";
import React from "react";
import Carrousel from "../components/Carrousel";
import img1 from "../assets/statics/img1.jpg";
import img2 from "../assets/statics/img2.jpg";
import img3 from "../assets/statics/img3.jpg";
import img4 from "../assets/statics/img4.jpg";
import Filosofia from "../components/Filosofia";
import { Link } from "react-router-dom";



const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

export default function Home() {
  return (
    <div className="container-home">
      <Carrousel img={images} />
      <section className="bienvenida">
        <h1>NO ESPERES UN MINUTO MÁS...</h1>
        <button
          type="button"
          className="btnModal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Proba una clase!
        </button>
      </section>
      <Filosofia />
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Clase gratis!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Registrate en la pagina para acceder a una clase gratis.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link className="linkReg" to={"/Registro"}>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              to={"/Registro"}
                >Registro</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
