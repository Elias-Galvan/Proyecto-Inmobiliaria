import React from "react";
import "../../assets/css/FormularioActividades.css";
import { useState } from "react";

const initialValues = {
  nombre: "",
  descripcion: "",
  duracion: 0,
  dias: [],
  horarios: [],
  cupoMaximo: 0,
  instructor: "",
  precio: 0,
  imagen: "",
};

const FormActividad = () => {
  const [data, setData] = useState(initialValues);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { dias, horarios } = data;

    if (dias.length === 0 || horarios.length === 0) {
      console.error("Debe de seleccionar un dia o un horario");
      return;
    }

    if (horarios.length === 1) {
      // aca asignar mismo horarios a todos los dias
      dias.map(() => [...dias, horarios[0]]);
    } else if (horarios.length === dias.length) {
      dias.map((dia, i) => [...dia, horarios[i]]);
    }

    console.log({ dias });
  };

  return (
    <div fluid className="containerPage">
      <h2>Formulario Actividad</h2>
      <form action="" className="formActividad" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre:
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
            Descripcion:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            name="descripcion"
            onChange={handleInputChange}
            value={data.descripcion}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput12" className="form-label">
            Duracion:
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
          <label className="form-label">Dias:</label>
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
          <label className="form-label">Horarios:</label>
          <select
            className="form-select"
            name="horarios"
            multiple
            onChange={handleSelectChange}
            value={data.horarios}
          >
            <option selected="">Seleccione los horarios</option>
            <option value={"09:00"}>09:00</option>
            <option value={"10:00"}>10:00</option>
            <option value={"11:00"}>11:00</option>
            <option value={"12:00"}>12:00</option>
            <option value={"13:00"}>13:00</option>
            <option value={"14:00"}>14:00</option>
            <option value={"15:00"}>15:00</option>
            <option value={"16:00"}>16:00</option>
            <option value={"17:00"}>17:00</option>
            <option value={"18:00"}>18:00</option>
            <option value={"19:00"}>19:00</option>
            <option value={"20:00"}>20:00</option>
            <option value={"21:00"}>21:00</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput13" className="form-label">
            Cupo Maximo:
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
            Instructor:
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
            Precio:
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
        <br/>
        <div className="mb-3">
          <label>
            Imagen:
            <input
              accept="image/*"
              type="file"
              name="btn btn-danger"
              onChange={handleInputChange}
            value={data.imagen}
            />
          </label>
        </div>
        <div className="btnfinal">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormActividad;
