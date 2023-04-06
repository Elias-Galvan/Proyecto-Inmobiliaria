import "../assets/css/Home.css"
import React from 'react'
import Busqueda from "../components/Busqueda";
import Carrousel from "../components/Carrousel";


export default function Home() {
  return (
    <div className="container-home">
    <Busqueda/>
    <Carrousel/>
  
    </div>
    
   
   
  );
}
