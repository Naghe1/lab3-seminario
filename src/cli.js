#!/usr/bin/env node
import { products, searchProducts, formatPrice } from './index.js';
import { buildReceipt } from './receipt.js'; // 1. Importamos tu función del recibo

const commands = {
  list() {
    for (const product of products) {
      console.log(`${product.sku}  ${product.name.padEnd(28)} ${formatPrice(product.price)}`);
    }
  },

  search(...terms) {
    const results = searchProducts(terms.join(' '));
    if (results.length === 0) {
      console.log('Sin resultados.');
      return;
    }
    for (const product of results) {
      console.log(`${product.sku}  ${product.name}`);
    }
  },

  receipt(...itemsArgs) {
    const items = [];

    for (const arg of itemsArgs) {
     const [sku, quantityStr] = arg.split(':');
      const quantity = parseInt(quantityStr, 10) || 1;

      const product = products.find(p => p.sku === sku);

      if (product) {
        items.push({
          name: product.name,
          price: product.price,
          quantity: quantity
        });
      } else {
        console.warn(`Advertencia: El producto con SKU "${sku}" no existe en el catálogo.`);
      }
    }

    if (items.length === 0) {
      console.log('No se ingresaron productos válidos para generar el recibo.');
      return;
    }

    const receiptText = buildReceipt(items);
    console.log(receiptText);
  },
};

const [, , name, ...args] = process.argv;

if (!name || !commands[name]) {
  console.log(`Uso: node src/cli.js <comando> [argumentos]`);
  console.log(`Comandos disponibles: ${Object.keys(commands).join(', ')}`);
  process.exit(name ? 1 : 0);
}

commands[name](...args);
