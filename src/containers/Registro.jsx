import React from "react";
import { useForm } from "react-hook-form";
import "../assets/css/Registro.css";
export default function Registro() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <section className="section-reg">
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
              {...register("nombreUsuario")}
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
                "Max Length Exceed")}
            />
            <input
              type="text"
              {...register("direccion")}
              placeholder="Direccion"
            />
            <button className="btn">Registrar</button>
          </form>
        </div>
      </section>
    </>
  );
}
