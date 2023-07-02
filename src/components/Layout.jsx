import React from "react";
import "../assets/css/Layout.css";
import Header from "./Header/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="container-fluid22">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
