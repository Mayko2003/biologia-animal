import { test, expect } from '@playwright/test';

test('ficha de annelida muestra secciones y embriología heredada', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await expect(page.getByRole('heading', { name: 'Resumen' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Desarrollo embrionario' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sistemas' })).toBeVisible();
  await expect(page.getByText('Origina la boca (protostomía)')).toBeVisible();
  await expect(page.getByText('Heredado de').first()).toBeVisible();
  await expect(page.locator('#seccion-embriologia').getByRole('link', { name: 'Protostomia' })).toBeVisible();
});

test('el hash activa la pestaña del sistema', async ({ page }) => {
  await page.goto('/grupo/annelida#sistema-excretor');
  const tab = page.getByRole('tab', { name: 'Excretor' });
  await expect(tab).toHaveAttribute('aria-selected', 'true');
});

test('filtro de fuentes oculta los datos externos', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await page.getByRole('button', { name: 'Solo apuntes' }).click();
  await expect(page.getByText(/^Externo ·/)).toHaveCount(0);
});

test('la insignia de fuente muestra la cita', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await page.getByText(/^Apunte · TP/).first().click();
  await expect(page.locator('details[open] p').last()).toBeVisible();
});

test('grupo inexistente muestra 404', async ({ page }) => {
  await page.goto('/grupo/no-existe');
  await expect(page.getByText(/no encontrada|no existe|404/i).first()).toBeVisible();
});
