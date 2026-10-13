export function Seccion({
  id,
  titulo,
  children,
  acciones,
}: {
  id: string;
  titulo: string;
  children: React.ReactNode;
  acciones?: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 space-y-3 lg:scroll-mt-20">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={`${id}-titulo`} className="text-lg font-semibold">{titulo}</h2>
        {acciones}
      </div>
      {children}
    </section>
  );
}
