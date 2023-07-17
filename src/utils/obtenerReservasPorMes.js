export function obtenerReservasPorMes(jsonData) {
  const actividades = [];

  jsonData.forEach((categoria) => {
    const actividad = {
      nombre: categoria.nombre,
      reservasPorMes: [],
      borderColor: generarColorRGB(),
      backgroundColor: generarColorRGBA(0.5),
    };

    const reservasPorMes = {};

    categoria.reservas.forEach((reserva) => {
      const fecha = new Date(reserva.fecha);
      const mes = fecha.getMonth();
      if (mes in reservasPorMes) {
        reservasPorMes[mes] += 1;
      } else {
        reservasPorMes[mes] = 1;
      }
    });

    // Ordenar los meses de forma ascendente
    for (let i = 0; i < 12; i++) {
      actividad.reservasPorMes.push(reservasPorMes[i] || 0);
    }

    actividades.push(actividad);
  });

  return actividades;
}

function generarColorRGBA(opacidad) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgba(${r}, ${g}, ${b}, ${opacidad})`;
  return color;
}

function generarColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
