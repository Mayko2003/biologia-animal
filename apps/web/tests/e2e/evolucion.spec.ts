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

test('se cambia al sistema tegumentario desde la barra lateral', async ({ page, isMobile }) => {
  await page.goto('/evolucion');
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
  await page.getByRole('button', { name: /Tegumento y pared del cuerpo/ }).click();
  await expect(page).toHaveURL(/sistema=tegumento/);
  if (isMobile) await page.getByRole('button', { name: 'Contraer el menú' }).click();
  await page
    .getByRole('list', { name: /tegumento/ })
    .getByRole('button', { name: /Aves/ })
    .click();
  await expect(page.getByRole('region', { name: /Aves/ }).getByText('Innovación: Plumas')).toBeVisible();
});

test('esqueleto: distingue "sin innovación" de "sin datos"', async ({ page }) => {
  await page.goto('/evolucion?sistema=esqueleto&grupo=myriapoda');
  await expect(
    page.getByRole('region', { name: /Myriapoda/ }).getByText('Sin innovación nueva', { exact: true }),
  ).toBeVisible();
  await page.goto('/evolucion?sistema=esqueleto&grupo=sauria');
  await expect(page.getByText('Los apuntes no describen el sistema esqueleto y sostén de Sauria.')).toBeVisible();
});
