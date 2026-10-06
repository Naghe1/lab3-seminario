import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convert, getCurrency } from '../src/currency.js';
import { formatPrice } from '../src/format.js';

test('convert a BOB no cambia el monto', () => {
  assert.equal(convert(100), 100);
});

test('convert a USD usa la tasa 0.145', () => {
  assert.equal(convert(100, 'USD'), 14.5);
});

test('convert a EUR usa la tasa 0.133', () => {
  assert.equal(convert(100, 'EUR'), 13.3);
});

test('getCurrency lanza error con moneda no soportada', () => {
  assert.throws(() => getCurrency('XXX'), /Moneda no soportada: XXX/);
});

test('formatPrice mantiene el comportamiento anterior sin moneda', () => {
  assert.equal(formatPrice(10), 'Bs 10.00');
});

test('formatPrice convierte a USD', () => {
  assert.equal(formatPrice(100, 'USD'), '$ 14.50');
});

test('formatPrice lanza error con moneda desconocida', () => {
  assert.throws(() => formatPrice(10, 'XXX'));
});