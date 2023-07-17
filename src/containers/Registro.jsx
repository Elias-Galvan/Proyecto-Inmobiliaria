import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/Registro.css";
import { defaultUrl } from "../constants/types";
import api from "../helpers/axiosInstance";

export default function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || {};

  const isAdmin = sessionStorage.getItem("isAdmin");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmpassword) {
      Swal.fire("Error", "Las contraseñas deben coincidir!", "error");
      return;
    }
    if (Object.keys(user).length > 0) {
      data = { ...data, id: user.id };
    }

    let dni = parseInt(data.dni);
    let telefono = parseInt(data.telefono);
    const newData = { ...data, dni, telefono };
    delete newData.confirmpassword;

    let resp;
    if (newData.id) {
      resp = await api.put(
        `${defaultUrl}/api/v1/usuario/editar/${newData.id}`,
        newData
      );
    } else {
      resp = await api.post(`${defaultUrl}/auth/nuevo`, newData);
    }

    if (resp.status === 201) {
      Swal.fire("Ok!!", "Te registrate correctamente!", "success").then(
        (result) => {
          if (result.isConfirmed) navigate("/");
        }
      );
    } else if (resp.status === 200) {
      Swal.fire("Ok!!", "Editaste tus datos correctamente!", "success").then(
        (result) => {
          if (result.isConfirmed) navigate("/");
        }
      );
    } else {
      Swal.fire("Upps!", "Ocurrio un error, volve a intentarlo!", "warning");
    }
  };

  return (
    <section className="section-reg ">
      <div className="form-box-reg ">
        <div className="registro">
          <h2>Registrate</h2>
          <span>
            Crea una cuenta para poder utilizar todos nuestros servicios
          </span>
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("dni", { required: true, maxLength: 8 })}
              placeholder="Dni"
              defaultValue={user?.dni}
              {...(errors.dni?.type === "required" &&
                "Por favor indique su DNI")}
              {...(errors.dni?.type === "maxLength" &&
                "Excedido el numero del DNI")}
            />
            <input
              type="text"
              {...register("nombre")}
              placeholder="Nombre"
              defaultValue={user?.nombre}
            />
            <input
              type="text"
              {...register("apellido")}
              placeholder="Apellido"
              defaultValue={user?.apellido}
            />

            <input
              type="text"
              {...register("nombreUsuario")}
              placeholder="Nombre de usuario"
              defaultValue={user?.nombreUsuario}
            />

            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              defaultValue={user?.email}
            />
            <input
              type="text"
              {...register("telefono", { required: true, maxLength: 10 })}
              placeholder="telefono"
              defaultValue={user?.telefono}
              {...(errors.telefono?.type === "required" &&
                "Por favor indique su numero de telefono")}
              {...(errors.telefono?.type === "maxLength" &&
                "Telefono incorrecto")}
            />

            {isAdmin === null && (
              <>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="contraseña"
                />
                <input
                  type="password"
                  {...register("confirmpassword")}
                  placeholder="confirme contraseña"
                />
              </>
            )}
            <label className="check">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Acepto los <Link to={"/termycond"}>términos, condiciones</Link> y{" "}
              <Link to={"/politicas"}>políticas de privacidad</Link>
            </label>

            <button className="btn" type="submit" disabled={!isChecked}>
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
