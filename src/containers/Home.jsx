import "../assets/css/Home.css";
import React from "react";
import Carrousel from "../components/Carrousel";
import img1 from "../assets/statics/img1.jpg";
import img2 from "../assets/statics/img2.jpg";
import img3 from "../assets/statics/img3.jpg";
import img4 from "../assets/statics/img4.jpg";
import Filosofia from "../components/Filosofia";
import Nosotros from "../components/Nosotros";
import { Link } from "react-router-dom";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

export default function Home() {
  return (
    <div className="container-home">
      <Carrousel img={images} />
      <section className="bienvenida">
        <h1>NO ESPERES UN MINUTO MÁS...</h1>
        <Link to={"/Registro"}>Proba una clase!</Link>
      </section>
      <Filosofia />
      <Nosotros />
    </div>
  );
}
