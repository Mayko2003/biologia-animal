import Form from 'next/form';

export function CajaBusqueda() {
  return (
    <Form action="/buscar" role="search" className="ml-auto hidden lg:block">
      <label htmlFor="caja-q" className="sr-only">
        Buscar
      </label>
      <input
        id="caja-q"
        name="q"
        type="search"
        placeholder="Buscar…"
        className="w-40 md:w-56 rounded-md border border-zinc-300 bg-transparent px-2.5 py-1.5 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none dark:border-zinc-700"
      />
    </Form>
  );
}
