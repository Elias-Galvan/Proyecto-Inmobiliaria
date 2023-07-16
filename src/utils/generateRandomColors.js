export function generateRandomColors(numColors) {
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(1); // Valor entre 0.0 y 1.0

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const colors = [];

  for (let i = 0; i < numColors; i++) {
    colors.push(generateRandomColor());
  }

  return colors;
}
