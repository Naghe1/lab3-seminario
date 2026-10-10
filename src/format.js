import { convert, getCurrency } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Se muestra en la moneda indicada (por defecto bolivianos, Bs).
 *  - Siempre con dos decimales.
 *
 * @param {number} amount Monto a formatear (expresado en bolivianos).
 * @param {string} [currency='BOB'] Código de moneda: 'BOB', 'USD' o 'EUR'.
 * @returns {string} Precio formateado.
 * @throws {Error} Si la moneda no está soportada.
 *
 * @example
 * formatPrice(10)          // 'Bs 10.00'
 * formatPrice(25.5)        // 'Bs 25.50'
 * formatPrice(100, 'USD')  // '$ 14.50'
 * formatPrice(0)           // 'Bs 0.00'
 */
export function formatPrice(amount, currency = 'BOB') {
  const { symbol } = getCurrency(currency);
  return `${symbol} ${convert(amount, currency).toFixed(2)}`;
}