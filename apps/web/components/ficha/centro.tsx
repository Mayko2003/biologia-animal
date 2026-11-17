import Image from 'next/image';

export function CentroGrupo({
  nivel,
  nombre,
  nombreComun,
  imagen,
  invitacion,
}: {
  nivel: string;
  nombre: string;
  nombreComun?: string;
  imagen?: { src: string };
  invitacion: string;
}) {
  return (
    <>
      {imagen && (
        <Image
          src={imagen.src}
          alt=""
          fill
          sizes="480px"
          priority
          className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/30 to-transparent" />
      <span className="absolute inset-x-0 bottom-[16%] block px-[14%] text-center text-white">
        <span className="block text-[14px] font-medium text-white/70">{nivel}</span>
        <span className="block font-display text-[44px] font-semibold leading-none">{nombre}</span>
        {nombreComun && <span className="mt-1 block text-lg text-white/80">{nombreComun}</span>}
        <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[13px] text-white/90">
          {invitacion}
        </span>
      </span>
    </>
  );
}

export function CentroComparacion({
  a,
  b,
  ancestro,
}: {
  a: { nombre: string; imagen?: { src: string } };
  b: { nombre: string; imagen?: { src: string } };
  ancestro: string;
}) {
  return (
    <>
      {[a, b].map((g, i) => (
        <span key={i} className={`absolute inset-y-0 w-1/2 overflow-hidden ${i === 0 ? 'left-0' : 'right-0'}`}>
          {g.imagen && (
            <Image
              src={g.imagen.src}
              alt=""
              fill
              sizes="240px"
              priority
              className="object-cover opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </span>
      ))}
      <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/80" />
      <span className="absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/40 to-tinta/10" />
      <span className="absolute inset-x-0 top-1/2 block -translate-y-1/2 px-[12%] text-center text-white">
        <span className="block font-display text-[38px] font-semibold leading-tight">{a.nombre}</span>
        <span className="my-1 block font-display text-[22px] font-medium italic text-white/75">vs</span>
        <span className="block font-display text-[38px] font-semibold leading-tight">{b.nombre}</span>
        <span className="mt-3 block text-[14px] text-white/75">Ancestro común: {ancestro}</span>
        <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[13px] text-white/90">
          Visión general y desarrollo embrionario
        </span>
      </span>
    </>
  );
}
