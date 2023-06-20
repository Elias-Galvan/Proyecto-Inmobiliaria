import "../assets/css/Header.css";
import React, { useState, useEffect } from "react";
import iconoHeader from "../assets/statics/icono.png";
import iconoMenu from "../assets/statics/icono-menu.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isLogin, setIsLogin] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);
  const location = useLocation();

  const rol = "ROLE_ADMIN"; // devuelve el servicio
  const isAuthenticated = localStorage.getItem("token") !== null;
  //const isAuthenticated = true; //PRUEBA

  useEffect(() => {
    let isLoginPage = location.pathname === "/login";
    setIsLogin(isLoginPage);
  }, [location, isLogin]);

  const closeSession = () => localStorage.removeItem("token");

  return (
    <>
      <div className={viewMenu ? "container-header1" : "container-header"}>
        <Link to={"/"}>
          <img src={iconoHeader} className="imgIcon" alt="icon header"></img>
          <h6 className="titleh">Duo Gym</h6>
        </Link>

        <ul className="ul">
          <div
            className={viewMenu ? "toggle-btn" : "toggle-btn"}
            onClick={() => setViewMenu(!viewMenu)}
          >
            <picture className="iconoMenu">
              <img src={iconoMenu} className="iconoMenu" alt="icon Menu" />
            </picture>
          </div>

          <div className={viewMenu ? "li1" : "li"}>
            {(!isAuthenticated || rol !== "ROLE_ADMIN") && (
              <>
                <li className="li">
                  <Link to={"/registro"}>Sumate Ya</Link>
                </li>
                <li className="li">
                  <Link to={"/contacto"}>Contacto</Link>
                </li>
                <li className="li">
                  <Link to={"/ayuda"}>Ayuda</Link>
                </li>
              </>
            )}
            <li className="li">
              <Link to={"/actividades"}>Actividades</Link>
            </li>
            {isAuthenticated && rol === "ROLE_ADMIN" && (
              <li className="li">
                <Link to={"/altas"}>Nuevo Usuario</Link>
              </li>
            )}
            {isAuthenticated && rol === "ROLE_ADMIN" && (
              <li className="li">
                <Link to={"/graficos"}>Graficos</Link>
              </li>
            )}
            <li className="li">
              <Link to={"/tienda"}>Tienda</Link>
            </li>

            {!isAuthenticated ? (
              !isLogin && (
                <li className="li">
                  <Link to={"/login"} className="action-btn">
                    Inicia sesion
                  </Link>
                </li>
              )
            ) : (
              <li className="li">
                <Link to="/" className="action-btn" onClick={closeSession}>
                  Cerrar sesion
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
