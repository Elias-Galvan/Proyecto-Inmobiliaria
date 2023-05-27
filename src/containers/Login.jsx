import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import "..//assets/css/Login.css";
import { Link } from "react-router-dom";
import useStore from "../state/useStore";
const token = "esto es un tokken";

export default function () {
  const setToken = useStore((state) => state.setToken);
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();

  const handleChange = ({ value, name }) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await new Promise((r) => setTimeout(r, 2000)).then(
        () => token
      );
      setToken(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-log">
      <div className="form-box">
        <div className="form-value">
          <h2>Login</h2>
          <div className="inputbox">
            <input
              type="email"
              id="email"
              value={user?.email}
              onChange={(e) => handleChange(e.target)}
              required
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="inputbox">
            <input
              type="password"
              id="password"
              value={user?.password}
              onChange={(e) => handleChange(e.target)}
              required
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" value="Recordarme" />
              <label htmlFor="">Recordarme / </label>
              <a href="">Olvide la Contraseña</a>
            </label>
          </div>
          <button onClick={handleLogin}>Entrar</button>
          <div className="register">
            <p>
              No tengo cuenta, <Link href="/registro">Registrarme</Link>
            </p>
          </div>
          {loading && "estoy cargando la data"}
        </div>
      </div>
    </section>
  );
}
