import { test, expect } from '@playwright/test';

test('inicio navega al mapa conceptual', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Mapa conceptual embrionario' }).first().click();
  await expect(page).toHaveURL(/\/mapa/);
});

test('clic en nodo Protostomados selecciona el grupo', async ({ page }) => {
  await page.goto('/mapa');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /Protostomados/ }).first().click();
  await expect(page).toHaveURL(/sel=protostomia/);
  await expect(page.getByText(/Phyla incluidos \(\d+\)/)).toBeVisible();
});

test('clic en Annelida muestra clases y navega a Oligochaeta', async ({ page }) => {
  await page.goto('/mapa?sel=annelida');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Clases disponibles')).toBeVisible();
  await page.getByRole('link', { name: 'Oligochaeta' }).click();
  await expect(page).toHaveURL(/\/grupo\/oligochaeta/);
  await expect(page.getByRole('heading', { name: 'Oligochaeta' })).toBeVisible();
});

test('árbol: filtrar insecta y abrir ficha', async ({ page }) => {
  await page.goto('/arbol');
  await page.getByLabel('Filtrar grupos').fill('insecta');
  await page.getByRole('button', { name: 'Insecta' }).first().click();
  await page.getByRole('link', { name: 'Ver ficha completa' }).click();
  await expect(page).toHaveURL(/\/grupo\/insecta/);
});

test('vista gráfica del árbol muestra el nodo Insecta', async ({ page }) => {
  await page.goto('/arbol?vista=grafico&sel=insecta');
  await expect(page.locator('svg').getByText('Insecta')).toBeVisible();
});

test('lente cavidad muestra la leyenda', async ({ page }) => {
  await page.goto('/mapa?lente=cavidad');
  await expect(page.getByText(/Acelomado \(/)).toBeVisible();
  await expect(page.getByText(/Pseudocelomado \(/)).toBeVisible();
});
