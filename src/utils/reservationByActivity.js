export const reservasPorActividad = (datos) => {
  const contadorActividades = {};

  datos.forEach((actividad) => {
    const nombreActividad = actividad.nombre;
    const reservas = actividad.reservas.length;

    if (contadorActividades[nombreActividad]) {
      contadorActividades[nombreActividad] += reservas;
    } else {
      contadorActividades[nombreActividad] = reservas;
    }
  });

  return contadorActividades;
};
