function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let num = 1

  for (let i = min; i <= max; i++) {
    num = num * i;
  }
  if (num === -0) {
    return 0;
  } else {
    return num;
  }
}

module.exports = productoEntreNúmeros;