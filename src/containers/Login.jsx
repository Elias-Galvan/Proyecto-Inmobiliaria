import React, { useState } from "react";
import axios from "axios";
import "..//assets/css/Login.css";
import { Link } from "react-router-dom";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("RUTA", { email, password });
      if (response.data.success) {
        // Redireccionar al usuario a la página de inicio
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <section className="section-log">
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
              <button>Entrar</button>
              <div className="register">
                <p>
                  No tengo cuenta, <Link href="/registro">Registrarme</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </form>
  );
}
