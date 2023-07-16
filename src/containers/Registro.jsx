import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmpassword) {
      Swal.fire("Error", "Las contraseñas deben coincidir!", "error");
      return;
    }
    let dni = parseInt(data.dni);
    let telefono = parseInt(data.telefono);
    const newData = { ...data, dni, telefono };

    delete newData.confirmpassword;

    const resp = await api.post(`${defaultUrl}/auth/nuevo`, newData);

    if (resp.status === 201) {
      Swal.fire("Ok!!", "Te registrate correctamente!", "success").then(
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
              {...(errors.dni?.type === "required" &&
                "Por favor indique su DNI")}
              {...(errors.dni?.type === "maxLength" &&
                "Excedido el numero del DNI")}
            />
            <input type="text" {...register("nombre")} placeholder="Nombre" />
            <input
              type="text"
              {...register("apellido")}
              placeholder="Apellido"
            />

            <input
              type="text"
              {...register("nombreUsuario")}
              placeholder="Nombre de usuario"
            />

            <input type="email" {...register("email")} placeholder="Email" />
            <input
              type="text"
              {...register("telefono", { required: true, maxLength: 10 })}
              placeholder="telefono"
              {...(errors.telefono?.type === "required" &&
                "Por favor indique su numero de telefono")}
              {...(errors.telefono?.type === "maxLength" &&
                "Telefono incorrecto")}
            />

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
