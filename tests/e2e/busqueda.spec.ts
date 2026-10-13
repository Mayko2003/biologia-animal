import { test, expect } from '@playwright/test';

test('buscar nefridios desde el encabezado', async ({ page, isMobile }) => {
  test.skip(!!isMobile, 'la caja del encabezado no aplica en móvil');
  await page.goto('/');
  await page.getByPlaceholder('Buscar…').fill('nefridios');
  await page.getByPlaceholder('Buscar…').press('Enter');
  await expect(page).toHaveURL(/\/buscar\?q=nefridios/);
  await expect(page.getByRole('link', { name: 'Annelida' }).first()).toBeVisible();
});

test('la coincidencia de sistema lleva a la pestaña', async ({ page }) => {
  await page.goto('/buscar?q=nefridios');
  const annelida = page.locator('li').filter({ has: page.getByRole('link', { name: /^Annelida/ }) });
  await annelida.getByRole('link', { name: /Excretor/ }).first().click();
  await expect(page).toHaveURL(/\/grupo\/annelida#sistema-excretor/);
});

test('buscar anelidos encuentra Annelida', async ({ page }) => {
  await page.goto('/buscar?q=anelidos');
  await expect(page.getByText('Annelida').first()).toBeVisible();
});
