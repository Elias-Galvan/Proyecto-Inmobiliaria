import React from "react";
import "../assets/css/Layout.css";
import Header from "../components/Header";
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
