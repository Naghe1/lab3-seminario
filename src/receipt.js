import { formatPrice } from './format.js';

/**
 * Devuelve un string de varias líneas con el formato del recibo.
 *
 * @param {Array} items - Cada ítem es { name, price, quantity }
 * @returns {string}
 */
export function buildReceipt(items) {
  let lines = [];

  lines.push("--- MINI TIENDA ---");

  let total = 0;

  for (const item of items) {
    const subtotalItem = item.price * item.quantity;
    total += subtotalItem;

    const etiqueta = `${item.name} x${item.quantity}`.padEnd(28);

    const montoFormateado = formatPrice(subtotalItem, { width: 12 });

    lines.push(`${etiqueta}${montoFormateado}`);
  }

  const etiquetaTotal = "TOTAL".padEnd(28);
  const totalFormateado = formatPrice(total, { width: 12 });
  lines.push(`${etiquetaTotal}${totalFormateado}`);


  return lines.join('\n');
}
