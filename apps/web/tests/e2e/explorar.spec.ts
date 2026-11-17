import { test, expect, type Page } from '@playwright/test';

async function abrirMenu(page: Page, isMobile: boolean) {
  if (isMobile) await page.getByRole('button', { name: 'Abrir el menú' }).click();
}

test('inicio lleva a la red de grupos', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explorar la red de grupos' }).click();
  await expect(page).toHaveURL(/\/buscar$/);
  await expect(page.getByRole('img', { name: /Red de los grupos animales/ })).toBeVisible();
});

test('una búsqueda con un solo grupo lo selecciona y abre su panel', async ({ page }) => {
  await page.goto('/buscar?q=oligochaeta');
  await expect(page).toHaveURL(/sel=oligochaeta/);
  const panel = page.getByRole('complementary', { name: 'Oligochaeta' });
  await expect(panel).toBeVisible();
  await panel.getByRole('link', { name: 'Abrir la ficha' }).click();
  await expect(page).toHaveURL(/\/grupo\/oligochaeta/);
});

test('una búsqueda con varios grupos los lista sin seleccionar ninguno', async ({ page }) => {
  await page.goto('/buscar?q=nefridios');
  await expect(page.getByText(/\d+ grupos encontrados/)).toBeVisible();
  await expect(page).not.toHaveURL(/sel=/);
  await page.getByRole('button', { name: 'Ubicar Annelida (Anélidos) en la red' }).click();
  await expect(page).toHaveURL(/sel=annelida/);
  await expect(page.getByRole('complementary', { name: 'Annelida' })).toBeVisible();
});

test('un filtro de linaje agrupa los grupos y queda en la URL', async ({ page, isMobile }) => {
  await page.goto('/buscar');
  await abrirMenu(page, isMobile);
  const ecdisozoos = page.getByRole('button', { name: /Ecdisozoos/ });
  await ecdisozoos.click();
  await expect(ecdisozoos).toHaveAttribute('aria-pressed', 'true');
  await expect(page).toHaveURL(/f=linaje\.ecdysozoa/);
  await expect(page.getByText(/^27 de 106 grupos cumplen/)).toBeVisible();
  await page.getByRole('button', { name: 'Quitar filtros' }).click();
  await expect(page).not.toHaveURL(/f=/);
});

test('un filtro embrionario se lee desde la URL', async ({ page, isMobile }) => {
  await page.goto('/buscar?f=cavidad.pseudocelomado');
  await abrirMenu(page, isMobile);
  await expect(page.getByRole('button', { name: /Pseudocelomado/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText(/de 106 grupos cumplen/)).toBeVisible();
});

test('colorear por cavidad muestra su leyenda', async ({ page, isMobile }) => {
  await page.goto('/buscar');
  await abrirMenu(page, isMobile);
  await page.getByLabel('Colorear por').selectOption('cavidad');
  await expect(page).toHaveURL(/color=cavidad/);
  await expect(page.getByRole('listitem').filter({ hasText: /^Pseudocelomado$/ })).toBeVisible();
});

test('desde una ficha "Ver en la red" selecciona el grupo y se navega por sus subgrupos', async ({ page, isMobile }) => {
  await page.goto('/grupo/annelida');
  await abrirMenu(page, isMobile);
  await page.getByRole('link', { name: 'Ver en la red' }).click();
  await expect(page).toHaveURL(/\/buscar\?sel=annelida/);
  const panel = page.getByRole('complementary', { name: 'Annelida' });
  await expect(panel.getByText(/Subgrupos \(\d+\)/)).toBeVisible();
  await panel.getByRole('button', { name: 'Oligochaeta' }).click();
  await expect(page).toHaveURL(/sel=oligochaeta/);
  await page.getByRole('button', { name: 'Cerrar panel' }).click();
  await expect(page).not.toHaveURL(/sel=/);
});

test('las rutas viejas del mapa y el árbol ya no existen', async ({ page }) => {
  for (const ruta of ['/mapa', '/arbol']) {
    const r = await page.goto(ruta);
    expect(r?.status()).toBe(404);
  }
});
