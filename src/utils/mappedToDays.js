const dias = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADOS",
];

export const mappedToDays = (clases = []) => {
  // Crear un nuevo objeto Date
  var fecha = new Date();

  // Obtener el número del día de la semana (0-6)
  var dia = fecha.getDay();

  // Obtener la hora del día
  var hora = fecha.getHours();

  // Reiniciar la búsqueda desde el lunes si el día actual es domingo (0)
  if (dia === 0) {
    dia = 1; // Establecer el lunes (1) como día de búsqueda
  }

  // Filtrar las clases por proximidad al día actual
  const clasesPorDia = clases.filter((clase) => {
    const diaClase = clase.dia?.toUpperCase();
    const indiceDiaClase = dias.indexOf(diaClase);
    return indiceDiaClase >= dia;
  });

  clasesPorDia.sort((a, b) => {
    const horaInicioA = parseInt(a.horaInicio.split(":")[0]);
    const horaInicioB = parseInt(b.horaInicio.split(":")[0]);
    return horaInicioA - horaInicioB;
  });
  console.log("Clase por dia: ", clasesPorDia);
  // Obtener la clase más cercana
  const claseMasCercana = clasesPorDia.length > 0 ? clasesPorDia[0] : null;

  // Imprimir el resultado
  if (claseMasCercana) {
    console.log(claseMasCercana);
    return claseMasCercana;
  } else {
    console.log("No hay clases próximas");
  }
};
