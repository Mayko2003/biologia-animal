import { test, expect } from '@playwright/test';

test('la ficha de Porifera ofrece la vista 3D y su lista de estructuras', async ({ page }) => {
  await page.goto('/grupo/porifera');
  await page.getByRole('button', { name: '3D', exact: true }).click();
  await expect(page).toHaveURL(/vista=3d/);
  await expect(page.getByRole('heading', { name: 'Anatomía en 3D' })).toBeVisible();
  await page.getByRole('button', { name: 'Ósculo', exact: true }).click();
  await expect(page.getByText(/sale por los ósculos/)).toBeVisible();
  await page.getByRole('button', { name: 'Esquema' }).click();
  await expect(page).not.toHaveURL(/vista=3d/);
});

test('los grupos sin modelo no muestran el selector de vista', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await expect(page.getByRole('group', { name: 'Vista' })).toHaveCount(0);
});
