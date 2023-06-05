import "../assets/css/Header.css";
import React, { useState, useEffect } from "react";
import iconoHeader from "../assets/statics/icono.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isLogin, setIsLogin] = useState(null);
  const location = useLocation();

  const rol = "ROLE_ADMIN"; // devuelve el servicio
  const isAuthenticated = localStorage.getItem("token") !== null;

  useEffect(() => {
    let isLoginPage = location.pathname === "/login";
    setIsLogin(isLoginPage);
  }, [location, isLogin]);

  const closeSession = () => localStorage.removeItem("token");

  return (
    <>
      <div className="container-header">
        <Link to={"/"}>
          <img src={iconoHeader} alt="icon header"></img>
          <h6>Duo Gym</h6>
        </Link>
        <ul>
          {(!isAuthenticated || rol !== "ROLE_ADMIN") && (
            <>
              <li>
                <Link to={"/registro"}>Sumate Ya</Link>
              </li>
              <li>
                <Link to={"/contacto"}>Contacto</Link>
              </li>
              <li>
                <Link to={"/ayuda"}>Ayuda</Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/actividades"}>Actividades</Link>
          </li>
          {isAuthenticated && rol === "ROLE_ADMIN" && (
            <li>
              <Link to={"/altas"}>Nuevo Usuario</Link>
            </li>
          )}
          <li>
            <Link to={"/Tienda"}>Tienda</Link>
          </li>

          {!isAuthenticated ? (
            !isLogin && (
              <Link to={"/login"} className="action-btn">
                Inicia sesion
              </Link>
            )
          ) : (
            <Link to="/" className="action-btn" onClick={closeSession}>
              Cerrar sesion
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
