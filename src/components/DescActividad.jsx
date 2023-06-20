import React from "react";
import Carrousel from "../components/Carrousel";
import img1 from "../assets/statics/img1.jpg";
import img2 from "../assets/statics/img2.jpg";
import img3 from "../assets/statics/img3.jpg";
import img4 from "../assets/statics/img4.jpg";
import "../assets/css/DescActividad.css";

function DescActividad({ titulo, descripcion, horario, precio, instructor }) {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

  return (
    <section className="splash">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text">
              <h1>{titulo}Musculacion</h1>
              <br />
              <p>
                {descripcion}Trabajá la fuerza y resistencia, desarrollando
                todos los grupos musculares. Prevení lesiones y mejorá tu
                calidad de vida
              </p>
              <br />
              <p>Horarios:</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label htmlFor=""></label>
                <label className="form-check-label" for="">
                  {horario}Jueves 12:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label htmlFor=""></label>
                <label className="form-check-label" for="">
                  {horario}Viernes 17:00
                </label>
                <br />
                <br />
              </div>

              <p>Instructor: Pepito{instructor}</p>

              <p>Precio: $5000{precio}</p>

              <button type="button" className="btn btn-primary">
                Reserva una clase
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-fluid">
              <Carrousel img={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescActividad;
