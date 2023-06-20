import React from "react";
import { useForm } from "react-hook-form";
import "../assets/css/Registro.css";

export default function Registro() {
  // const rol = "ADMIN";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              {...register("nombre")}
              placeholder="Nombre"
            />
             <input
              type="text"
              {...register("apellido")}
              placeholder="Apellido"
            />
              <input
              type="text"
              {...register("dni", { required: true, maxLength: 8 })}
              placeholder="Dni"
              {...(errors.dni?.type === "required" &&
                "Por favor indique su DNI")}
              {...(errors.dni?.type === "maxLength" &&
                "Excedido el numero del DNI")}
            />
            <input
              type="text"
              {...register("nombreusuario")}
              placeholder="Nombre de usuario"
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

            <button className="btn" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
