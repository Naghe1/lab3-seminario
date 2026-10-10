/**
 * Da formato a un precio para mostrarle al usuario.
 *
 * Reglas actuales:
 * - Siempre se muestra en bolivianos (Bs).
 * - Siempre con dos decimales.
 *
 * @param {number} amount Monto a formatear.
 * @param {object} [options] Opciones de formateo.
 * @param {number} [options.width=0] Ancho para rellenar a la izquierda.
 * @returns {string} Precio formateado.
 *
 * @example
 * formatPrice(10) // 'Bs 10.00'
 * formatPrice(25.5) // 'Bs 25.50'
 * formatPrice(0) // 'Bs 0.00'
 */
export function formatPrice(amount, { width = 0 } = {}) {
  let formatted = `Bs ${amount.toFixed(2)}`;

  if (width > 0) {
    formatted = formatted.padStart(width);
  }

  return formatted;
}
