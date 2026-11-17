import { test, expect } from '@playwright/test';

test('la línea del sistema digestivo muestra la innovación de cada grupo', async ({ page }) => {
  await page.goto('/evolucion');
  const linea = page.getByRole('list', { name: /Grupos de la línea del sistema digestivo/ });
  await expect(linea.getByRole('button', { name: /Porifera/ })).toBeVisible();
  await linea.getByRole('button', { name: /Mollusca/ }).click();
  await expect(page).toHaveURL(/grupo=mollusca/);
  const detalle = page.getByRole('region', { name: /Mollusca/ });
  await expect(detalle.getByText('Innovación: Rádula raspadora y tubo en U')).toBeVisible();
  await expect(detalle.getByText(/^Apunte · TP/).first()).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(/grupo=nemata/);
});

test('los reptiles se separan en subclases dentro de cordados', async ({ page }) => {
  await page.goto('/evolucion?grupo=serpentes');
  await expect(page.getByText('Reptiles', { exact: true })).toBeVisible();
  await expect(
    page.getByRole('region', { name: /Serpentes/ }).getByText('Innovación: Mandíbulas que tragan presas enteras'),
  ).toBeVisible();
});
