import React, { useState, useEffect } from "react";
import iconoHeader from "../../assets/statics/icono.png";
import iconoMenu from "../../assets/statics/icono-menu.png";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/Header.css";
import LinkNavBar from "./LinkNavBar";
import {
  linksAdminIsNotAuthenticated,
  linksAdminIsAuthenticated,
  linksPublic,
} from "../../assets/datos/links";

export default function Header() {
  const [isLogin, setIsLogin] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);
  const location = useLocation();

  const rol = "ROLE_ADMIN"; // devuelve el servicio
  //const isAuthenticated = localStorage.getItem("token") !== null;
  const isAuthenticated = true; //PRUEBA

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
                {linksAdminIsNotAuthenticated.map((link) => (
                  <LinkNavBar key={link.id} path={link.path} text={link.text} />
                ))}
              </>
            )}
            {isAuthenticated && rol === "ROLE_ADMIN" && (
              <>
                {linksAdminIsAuthenticated.map((link) => (
                  <LinkNavBar key={link.id} path={link.path} text={link.text} />
                ))}
              </>
            )}

            {linksPublic.map((link) => (
              <LinkNavBar key={link.id} path={link.path} text={link.text} />
            ))}

            {!isAuthenticated ? (
              !isLogin && (
                <LinkNavBar
                  path={"/login"}
                  text={"Inicia sesion"}
                  linkStyle={"action-btn"}
                />
              )
            ) : (
              <LinkNavBar
                path={"/"}
                text={"Cerrar sesion"}
                linkStyle={"action-btn"}
                onClick={closeSession}
              />
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
