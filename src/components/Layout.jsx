import React from "react";
import Header from "./Header/Header";
import Footer from "../components/Footer";
import "../assets/css/Layout.css";

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
