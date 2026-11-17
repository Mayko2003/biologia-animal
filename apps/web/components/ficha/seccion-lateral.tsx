export function SeccionLateral({
  id,
  titulo,
  cantidad,
  abierta = false,
  children,
}: {
  id: string;
  titulo: string;
  cantidad?: number;
  abierta?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details id={id} open={abierta} className="group scroll-mt-4 border-b border-zinc-100 py-1 last:border-b-0">
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-2 py-2 [&::-webkit-details-marker]:hidden">
        <h2 className="font-display text-base font-semibold text-tinta">{titulo}</h2>
        <span className="flex items-center gap-2 text-xs text-zinc-400">
          {cantidad !== undefined && cantidad}
          <span aria-hidden="true" className="inline-block transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </span>
      </summary>
      <div className="space-y-3 pb-4 text-[15px]">{children}</div>
    </details>
  );
}
