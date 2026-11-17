import { test, expect, type Page } from '@playwright/test';

async function abrirMenu(page: Page, isMobile: boolean) {
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
}

test('la vista general muestra la diapositiva principal y los 10 sistemas', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await expect(page.getByRole('button', { name: 'Abrir resumen y desarrollo embrionario de Annelida' })).toBeVisible();
  for (const sistema of ['Digestivo', 'Excretor', 'Nervioso', 'Órganos de los sentidos', 'Reproductor']) {
    await expect(page.getByRole('button', { name: new RegExp(`^${sistema}:`) })).toBeVisible();
  }
});

test('la diapositiva principal tiene resumen y embriología heredada', async ({ page }) => {
  await page.goto('/grupo/annelida');
  await page.getByRole('button', { name: 'Empezar' }).click();
  await expect(page).toHaveURL(/#seccion-resumen/);
  const diapositiva = page.getByRole('region', { name: 'Annelida' });
  await expect(diapositiva.getByRole('heading', { name: 'Resumen' })).toBeVisible();
  await expect(diapositiva.getByRole('heading', { name: 'Desarrollo embrionario' })).toBeVisible();
  await expect(diapositiva.getByText('Origina la boca (protostomía)')).toBeVisible();
  await expect(diapositiva.getByText('Heredado de').first()).toBeVisible();
  await expect(page.locator('#seccion-embriologia').getByRole('link', { name: 'Protostomia' })).toBeVisible();
});

test('el hash abre la diapositiva del sistema y el teclado navega', async ({ page }) => {
  await page.goto('/grupo/annelida#sistema-excretor');
  await expect(page.getByRole('region', { name: 'Excretor' })).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(/#sistema-nervioso/);
  await expect(page.getByRole('region', { name: 'Nervioso' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Empezar' })).toBeVisible();
  await expect(page).not.toHaveURL(/#/);
});

test('las secciones de la barra lateral se abren desde el hash', async ({ page }) => {
  await page.goto('/grupo/annelida#seccion-bioecologia');
  await expect(page.locator('#seccion-bioecologia')).toHaveAttribute('open', '');
  await expect(page.getByRole('heading', { name: 'Bioecología' })).toBeVisible();
});

test('filtro de fuentes oculta los datos externos', async ({ page }) => {
  await page.goto('/grupo/annelida#seccion-resumen');
  await page.getByRole('button', { name: 'Solo apuntes' }).click();
  await expect(page.getByText(/^Externo ·/)).toHaveCount(0);
});

test('la insignia de fuente muestra la cita', async ({ page }) => {
  await page.goto('/grupo/annelida#seccion-resumen');
  await page.getByRole('region', { name: 'Annelida' }).getByText(/^Apunte · TP/).first().click();
  await expect(page.locator('details[open] p').last()).toBeVisible();
});

test('un grupo superior muestra sus phyla como diapositivas enlazadas', async ({ page }) => {
  await page.goto('/grupo/protostomia');
  await page.getByRole('link', { name: /^Annelida/ }).first().click();
  await expect(page).toHaveURL(/\/grupo\/annelida/);
});

test('la barra lateral tiene la ruta taxonómica y los accesos', async ({ page, isMobile }) => {
  await page.goto('/grupo/oligochaeta');
  await abrirMenu(page, isMobile);
  await expect(page.getByRole('navigation', { name: 'Ubicación taxonómica' }).getByRole('link', { name: 'Annelida' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'Oligochaeta' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ver en la red' })).toBeVisible();
});

test('grupo inexistente muestra 404', async ({ page }) => {
  await page.goto('/grupo/no-existe');
  await expect(page.getByText(/no encontrada|no existe|404/i).first()).toBeVisible();
});
