import React from "react";
import "../../assets/css/FormularioActividades.css";
import { useState } from "react";
import useHorarios from "../../state/useHorarios";
import { useEffect } from "react";
import { defaultUrl } from "../../store/action/types";
import api from "../../helpers/axiosInstance";
import SelectOptionHorario from "./SelectOptionHorario";
import { getHorariosService } from "../../services/getHorariosServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialValues = {
  nombre: "",
  descripcion: "",
  horarios: [],
  cupoMaximo: 0,
  instructor: "",
  precio: 0,
  imagen: "",
};

const FormActividad = () => {
  const [data, setData] = useState(initialValues);
  const [imagen, setImagen] = useState(null);
  const { horarios, setHorarios } = useHorarios();
  const navigate = useNavigate();

  const getData = async () => {
    const getHorariosData = await getHorariosService();
    setHorarios(getHorariosData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const { name, options } = event.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setData((prevData) => ({
      ...prevData,
      [name]: selectedValues,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      data.nombre.trim() === "" ||
      data.descripcion.trim() === "" ||
      data.horarios.length === 0 ||
      data.cupoMaximo <= 0 ||
      data.instructor.trim() === "" ||
      data.precio <= 0
    ) {
      Swal.fire("Error..", "Ningun campo puede estar vacio!", "error");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nombre", data.nombre);
      formData.append("descripcion", data.descripcion);
      formData.append("horarios", data.horarios);
      formData.append("cupoMaximo", Number(data.cupoMaximo));
      formData.append("precio", Number(data.precio));
      formData.append("instructor", data.instructor);
      formData.append("imagen", imagen);

      const response = await api.post(
        `${defaultUrl}/api/v1/nueva-actividad`,
        formData
      );

      if (response.status === 200) {
        Swal.fire("Ok!!!", "Actividad creada con exito!", "success");
        navigate("/actividades");
      } else {
        Swal.fire(
          "Upps!!",
          "Ha ocurrido un error al agregar la actividad",
          "error"
        );
      }
    } catch (error) {
      console.error("Error al agregar la actividad: ", error);
      Swal.fire(
        "Upps!!",
        "Ha ocurrido un error al agregar la actividad.",
        "error"
      );
    }
  };

  return (
    <div className="containerPage">
      <h2>Formulario Actividad</h2>
      <form action="" className="formActividad" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ej: Musculación"
            name="nombre"
            onChange={handleInputChange}
            value={data.nombre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Descripcion
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            name="descripcion"
            onChange={handleInputChange}
            value={data.descripcion}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput12" className="form-label">
            Duracion
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput12"
            name="duracion"
            onChange={handleInputChange}
            value={data.duracion}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dias</label>
          <select
            className="form-select"
            name="dias"
            multiple
            onChange={handleSelectChange}
            value={data.dias}
          >
            <option selected="">Seleccione los dias</option>
            <option value={"LUNES"}>Lunes</option>
            <option value={"MARTES"}>Martes</option>
            <option value={"MIERCOLES"}>Miercoles</option>
            <option value={"JUEVES"}>Jueves</option>
            <option value={"VIERNES"}>Viernes</option>
            <option value={"SABADO"}>Sabados</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Horarios</label>
          <select
            className="form-select"
            name="horarios"
            onChange={handleSelectChange}
            value={data.horarios}
            multiple={true}
          >
            {horarios &&
              horarios.map((horario) => (
                <SelectOptionHorario key={horario.idHorario} {...horario} />
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput13" className="form-label">
            Cupo Maximo
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput13"
            name="cupoMaximo"
            onChange={handleInputChange}
            value={data.cupoMaximo}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput10" className="form-label">
            Instructor
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput10"
            placeholder="Ej: Omar Perez"
            name="instructor"
            onChange={handleInputChange}
            value={data.instructor}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput16" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput16"
            name="precio"
            onChange={handleInputChange}
            value={data.precio}
            placeholder="$"
          />
        </div>
        <div>
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormActividad;
