import React, { useState, useEffect } from "react";
import iconoHeader from "../../assets/statics/icono.png";
import iconoMenu from "../../assets/statics/icono-menu.png";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/Header.css";
import LinkNavBar from "./LinkNavBar";
import {
  linksIsNotAuthenticated,
  linksAdminIsAuthenticated,
  linksPublic,
  linksAuthenticated,
} from "../../assets/datos/links";
import Swal from "sweetalert2";
import useUserStore from "../../state/useUserStore";

export default function Header() {
  const [isLogin, setIsLogin] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);
  const location = useLocation();
  const { usuario } = useUserStore();

  // const rol = "ROLE_USER"; // devuelve el servicio
  const rol = usuario?.authorities.some((el) => el.authority === "ROLE_ADMIN");
  const isAuthenticated = localStorage.getItem("token") !== null;

  useEffect(() => {
    let isLoginPage = location.pathname === "/login";
    setIsLogin(isLoginPage);
  }, [location, isLogin]);

  const closeSession = () => {
    Swal.fire("OK!", "Session finalizada con exito!", "success");
    localStorage.removeItem("token");
  };

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
            {(!isAuthenticated || !rol) && (
              <>
                {linksIsNotAuthenticated.map((link) => (
                  <LinkNavBar key={link.id} path={link.path} text={link.text} />
                ))}
              </>
            )}
            {isAuthenticated && rol && (
              <>
                {linksAdminIsAuthenticated.map((link) => (
                  <LinkNavBar key={link.id} path={link.path} text={link.text} />
                ))}
              </>
            )}

            {linksPublic.map((link) => (
              <LinkNavBar key={link.id} path={link.path} text={link.text} />
            ))}

            {isAuthenticated &&
              linksAuthenticated.map((link) => (
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
                fn={closeSession}
              />
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
