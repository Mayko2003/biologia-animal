import { test, expect } from '@playwright/test';

test('comparar annelida y arthropoda muestra el ancestro común', async ({ page }) => {
  await page.goto('/comparar?a=annelida&b=arthropoda');
  await expect(page.getByText(/Ancestro común:/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Protostomia' })).toBeVisible();
});

test('intercambiar A y B invierte la URL', async ({ page }) => {
  await page.goto('/comparar?a=annelida&b=arthropoda');
  await page.getByRole('button', { name: 'Intercambiar A y B' }).click();
  await expect(page).toHaveURL(/a=arthropoda&b=annelida/);
});

test('desde una ficha el selector A trae el grupo', async ({ page }) => {
  await page.goto('/grupo/mollusca');
  await page.getByRole('link', { name: 'Comparar con…' }).click();
  await expect(page.getByLabel('Grupo A')).toHaveValue('mollusca');
});
