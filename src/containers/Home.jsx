import "../assets/css/Home.css"
import React from 'react'
import Busqueda from "../components/Busqueda";
import Carrousel from "../components/Carrousel";
import img1 from "../assets/statics/img1.jpg";
import img2 from "../assets/statics/img2.jpeg";
import img3 from "../assets/statics/img3.webp";
import PropiedadesDestacadas from "../components/PropiedadesDestacadas";
import Nosotros from "../components/Nosotros";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

export default function Home() {
  
  return (
    <div className="container-home">
    <Busqueda/>
    <Carrousel img={images}/>
    <PropiedadesDestacadas/>
    <Nosotros></Nosotros>
  
    </div>
    
   
   
  );
}
