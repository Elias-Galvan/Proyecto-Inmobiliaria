import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";
import useStore from "../state/useStore";
import { loginService } from "../services/loginService";
import Swal from "sweetalert2";
import useUsersStore from "../state/useUsersStore";

const initialState = {
  nombreUsuario: "",
  password: "",
};

export default function Login() {
  const setToken = useStore((state) => state.setToken);
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { iniciarSesion } = useUsersStore();

  const navigate = useNavigate();

  const handleChange = ({ value, name }) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginService(user);
      if (data && data.token) {
        setToken(data.token);
        iniciarSesion(data);
        Swal.fire("Ok..", "Credenciales correctas!!!", "success");
        navigate("/");
      } else {
        Swal.fire("Error!!", "Credenciales incorrectas.", "error");
      }
    } catch (error) {
      Swal.fire(
        "Error!!",
        "Ocurrió un error al iniciar sesión. Inténtalo de nuevo.",
        "error"
      );
    } finally {
      setLoading(false);
      setUser(initialState);
    }
  };

  return (
    <section className="section-log">
      <div className="form-box">
        <div className="form-value">
          <h2>Login</h2>
          <div className="inputbox">
            <input
              type="text"
              id="nombreUsuario"
              value={user?.nombreUsuario}
              onChange={(e) => handleChange(e.target)}
              required
              name="nombreUsuario"
            />
            <label htmlFor="nombreUsuario">Nombre de usuario</label>
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

          {/* <div className="forget">
            <label htmlFor="">
              <input type="checkbox" value="Recordarme" />
              <label htmlFor="">Recordarme / </label>
              <Link to="/">Olvide la Contraseña</Link>
            </label>
          </div> */}
          <button className="buttonForm" onClick={handleLogin}>
            Entrar
          </button>
          <div className="register">
            <p>
              No tengo cuenta, <Link to="/registro">Registrarme</Link>
            </p>
          </div>
          {loading && "estoy cargando la data"}
        </div>
      </div>
    </section>
  );
}
