import Contexto from "./Context";
import { useState } from "react";
import iconocarrito from "../assets/statics/iconocarrito.png";
import axios from "axios";
import Card from "../components/Productos/components/Card/Card";
import { useReducer } from "react";
import Reducer from "../context/Reducer";

const products= [
    {
      id: 1,
      descripcion: "Whey Protein Suplemento de proteína en polvo",
      nombre: "Ultra Tech",
      precio: 19.99,
      stock: 10,
      imagen: `../../../../assets/statics/Sup1.jpeg`,
      quantity: 0,
    },
    {
      id: 2,
      descripcion: "Collagen Hydrolyzed sabor caramelo",
      nombre: "Sascha",
      precio: 24.99,
      stock: 20,
      imagen: `../../../../assets/statics/Sup2.jpeg`,
      quantity: 0,
    },
    {
      id: 3,
      descripcion: "100% Whey protein extra aminoacids",
      nombre: "Scitec nutrition",
      precio: 17.99,
      stock: 15,
      imagen: `../../../../assets/statics/Sup3.jpeg`,
      quantity:0,
    },
    {
      id: 4,
      descripcion: "Combo Whey/BCAA/Creatine",
      nombre: "Streght",
      precio: 34.99,
      stock: 8,
      imagen: `../../../../assets/statics/Sup4.jpeg`,
      cantidad:0,
    },
    {
      id: 5,
      descripcion: "Glutamine + BCAA",
      nombre: "Amix",
      precio: 19.99,
      stock: 25,
      imagen: "../../../../assets/statics/Sup5.jpg",
      cantidad:0,
    }
  ]
export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const listameProductos = async () => {
    dispatch({ type: "LISTAME_PRODUCTOS", payload: products });
    console.log(products, "desde usarContexto()");
  };
  const agregarCarrito = (id) => {
    console.log("agregamos a carrito", id);
    dispatch({ type: "AGREGA_CARRITO", payload: id });
  };
  const eliminarCarrito = (item) => {
    console.log("Eliminar carrito", item);
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
  };

  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
