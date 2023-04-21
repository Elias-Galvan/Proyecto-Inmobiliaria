import React, { children } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Nosotros from "./Nosotros";
export default function Layout(props) {
  const{children}= props;
  return( <>
  <div className="app"></div>
  <Header></Header>
  {children}
  
  <Footer></Footer>
  </>
  );
}
