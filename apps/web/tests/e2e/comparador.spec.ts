import { test, expect, type Page } from '@playwright/test';

async function abrirMenu(page: Page, isMobile: boolean) {
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
}

test('la vista general dice "A vs B" y marca los sistemas que difieren', async ({ page }) => {
  await page.goto('/comparar?a=porifera&b=cnidaria');
  await expect(page.getByRole('button', { name: 'Abrir la comparación de Porifera y Cnidaria' })).toBeVisible();
  await expect(page.getByRole('button', { name: /^Circulatorio: Difieren/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /^Digestivo: Ambos con datos/ })).toBeVisible();
});

test('la diapositiva principal compara el desarrollo embrionario en una tabla', async ({ page }) => {
  await page.goto('/comparar?a=porifera&b=cnidaria');
  await page.getByRole('button', { name: 'Empezar' }).click();
  const diapositiva = page.getByRole('region', { name: 'Porifera vs Cnidaria' });
  const tabla = diapositiva.getByRole('table');
  await expect(tabla.getByRole('columnheader', { name: 'Porifera' })).toBeVisible();
  await expect(tabla.getByRole('row', { name: /Capas germinativas/ })).toContainText('Diblástico');
  await expect(diapositiva.getByRole('heading', { name: 'Morfología externa' })).toBeVisible();
});

test('cada sistema compara A y B en dos columnas', async ({ page }) => {
  await page.goto('/comparar?a=annelida&b=arthropoda#sistema-respiratorio');
  const diapositiva = page.getByRole('region', { name: 'Respiratorio' });
  await expect(diapositiva.getByRole('region', { name: 'A: Annelida' })).toBeVisible();
  await expect(diapositiva.getByRole('region', { name: 'B: Arthropoda' })).toBeVisible();
});

test('la barra lateral muestra el ancestro común', async ({ page, isMobile }) => {
  await page.goto('/comparar?a=annelida&b=arthropoda');
  await abrirMenu(page, isMobile);
  await expect(page.getByText(/Ancestro común:/).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Protostomia' })).toBeVisible();
});

test('intercambiar A y B invierte la URL', async ({ page, isMobile }) => {
  await page.goto('/comparar?a=annelida&b=arthropoda');
  await abrirMenu(page, isMobile);
  await page.getByRole('button', { name: 'Intercambiar A y B' }).click();
  await expect(page).toHaveURL(/a=arthropoda&b=annelida/);
});

test('"solo los que difieren" deja únicamente esos sistemas', async ({ page, isMobile }) => {
  await page.goto('/comparar?a=porifera&b=cnidaria');
  await abrirMenu(page, isMobile);
  await page.getByLabel('Mostrar solo los sistemas que difieren').check();
  if (isMobile) await page.getByRole('button', { name: 'Contraer el menú' }).click();
  await expect(page.getByRole('button', { name: /^Digestivo:/ })).toHaveCount(0);
  await expect(page.getByRole('button', { name: /^Circulatorio: Difieren/ })).toBeVisible();
});

test('sin dos grupos elegidos pide elegirlos', async ({ page }) => {
  await page.goto('/comparar');
  await expect(page.getByText('Elegí dos grupos o clases para comparar.').first()).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Grupo A' })).toBeVisible();
});

test('desde una ficha el selector A trae el grupo', async ({ page, isMobile }) => {
  await page.goto('/grupo/mollusca');
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
  await page.getByRole('link', { name: 'Comparar con…' }).click();
  await expect(page.getByRole('combobox', { name: 'Grupo A' })).toHaveValue(/^Mollusca/);
});

test('se elige un grupo escribiendo y con el teclado', async ({ page, isMobile }) => {
  await page.goto('/comparar?a=porifera');
  const b = page.getByRole('combobox', { name: 'Grupo B' });
  await b.click();
  await expect(page.getByRole('listbox', { name: 'Grupo B' })).toBeVisible();
  await b.fill('cnid');
  await expect(page.getByRole('option', { name: /^Cnidaria/ })).toBeVisible();
  await b.press('Enter');
  await expect(page).toHaveURL(/b=cnidaria/);
  await expect(page.getByRole('listbox')).toHaveCount(0);
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
  await expect(b).toHaveValue(/^Cnidaria/);
});

test('se elige un grupo con el mouse', async ({ page }) => {
  await page.goto('/comparar?a=porifera');
  await page.getByRole('combobox', { name: 'Grupo B' }).click();
  await page.getByRole('option', { name: /^Annelida/ }).click();
  await expect(page).toHaveURL(/b=annelida/);
});
