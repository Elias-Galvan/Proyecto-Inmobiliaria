import "../assets/css/Home.css"
import React from 'react'
import Busqueda from "../components/Busqueda";
import Carrousel from "../components/Carrousel";
import img1 from "../assets/statics/img1.jpg";
import img2 from "../assets/statics/img2.jpg";
import img3 from "../assets/statics/img3.jpg";
import img4 from "../assets/statics/img4.jpg";
import PropiedadesDestacadas from "../components/Filosofia";
import Nosotros from "../components/Nosotros";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

export default function Home() {
  
  return (
    <div className="container-home">
    
    <Carrousel img={images}/>
    <PropiedadesDestacadas/>
    <Nosotros></Nosotros>
  
    </div>
    
   
   
  );
}
