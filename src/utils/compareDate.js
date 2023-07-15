export function compareDate(fecha) {
  let fechaComparar = new Date(fecha);
  const fechaActual = new Date();

  if (fechaComparar.getFullYear() < fechaActual.getFullYear()) {
    return false;
  } else if (
    fechaComparar.getFullYear() === fechaActual.getFullYear() &&
    fechaComparar.getMonth() < fechaActual.getMonth()
  ) {
    return false;
  } else if (
    fechaComparar.getFullYear() === fechaActual.getFullYear() &&
    fechaComparar.getMonth() === fechaActual.getMonth() &&
    fechaComparar.getDate() < fechaActual.getDate()
  ) {
    return false;
  } else {
    return true;
  }
}
