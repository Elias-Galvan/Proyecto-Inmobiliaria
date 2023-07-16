export const activeUsers = (usuarios) => {
  const registrosxmes = new Array(12).fill(0); // Inicializar un array de longitud 12 con valores 0
  const activosxmes = new Array(12).fill(0); // Inicializar un array de longitud 12 con valores 0

  usuarios.forEach((usuario) => {
    // Obtener el mes de la fecha de alta del usuario
    const fechaAlta = new Date(usuario.fechaAlta);
    const mesAlta = fechaAlta.getMonth();

    // Incrementar el contador de registros por mes
    registrosxmes[mesAlta]++;

    // Verificar si el usuario está activo
    if (usuario.activo) {
      // Incrementar el contador de activos por mes
      activosxmes[mesAlta]++;
    }
  });

  return {
    registrosxmes,
    activosxmes,
  };
};
