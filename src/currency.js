import { round2 } from './money.js';

// Monedas soportadas y su tasa respecto al boliviano (BOB)
export const CURRENCIES = {
  BOB: { symbol: 'Bs', rate: 1 },
  USD: { symbol: '$', rate: 0.145 },
  EUR: { symbol: '€', rate: 0.133 },
};

export function getCurrency(code) {
  const currency = CURRENCIES[code];
  if (!currency) {
    throw new Error(`Moneda no soportada: ${code}`);
  }
  return currency;
}

export function convert(amount, code = 'BOB') {
  return round2(amount * getCurrency(code).rate);
}