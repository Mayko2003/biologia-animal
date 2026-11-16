import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'agnatha',
  nombre: 'Agnatha',
  nombreComun: 'Agnatos (peces sin mandíbulas)',
  nivel: 'superclase',
  padre: 'vertebrata',
  orden: 1,
  resumen: [
    {
      texto: 'Peces sin mandíbulas, con notocordio permanente durante toda su vida; carecen de osificación interna, escamas y aletas pares, sin verdaderos dientes (dérmicos), típicamente con una sola abertura nasal, ojo pineal, aberturas branquiales en forma de poros y cuerpo anguiliforme.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [389, 394], cita: 'con notocordio permanente durante' }],
    },
    {
      texto: 'Comprendía a los ostracodermos fósiles (pequeños, de 5-70 cm, de agua dulce, habitantes del fondo con armadura de huesos dérmicos, ya extintos), a los cefalaspidomorfos (lampreas) y a los mixines.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [396, 405], cita: 'los Ostracodermos fósiles' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Las especies de agnatos actuales tienen apariencia de anguila, carecen de escamas y tienen una piel mucosa y resbaladiza; los agnatos fósiles eran a menudo depredadores cubiertos de escamas de diversos tipos. Carecen de mandíbulas y de aletas emparejadas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
    {
      texto: 'Piel mucosa y resbaladiza, sin escamas en las especies actuales.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    esqueleto: [
    {
      texto: 'Esqueleto cartilaginoso; carecen de osificación interna (rasgo primitivo).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    muscular: [
    {
      texto: 'Cuerpo anguiliforme sin aletas pares; la locomoción es por ondulaciones del cuerpo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    digestivo: [
    {
      texto: 'Boca sin mandíbulas, rasgo definitorio del grupo; sin verdaderos dientes.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    respiratorio: [
    {
      texto: 'Siete o más sacos branquiales en el adulto.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    circulatorio: [
    {
      texto: 'Corazón con dos cámaras.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    excretor: [
    {
      texto: 'Excreción por riñones (aparato renal), como en los demás vertebrados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    nervioso: [
    {
      texto: 'Sistema nervioso central de tipo vertebrado, con encéfalo y médula espinal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    sentidos: [
    {
      texto: 'Ojo pineal sensible a la luz (homólogo de la glándula pineal de los mamíferos).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    reproductor: [
    {
      texto: 'La fecundación en las lampreas es externa; se desconoce el modo de fecundación en las mixinas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Las lampreas se reproducen una sola vez, con fecundación externa; se cree que las mixinas solo ponen unos 30 huevos a lo largo de su vida.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los agnatos son ectotérmicos: no regulan su temperatura corporal y su metabolismo es lento.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'lamprea',
      descripcion: 'ejemplo de agnato actual (clase Cephalaspidomorphi)',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'mixino',
      descripcion: 'ejemplo de agnato actual (clase Myxini)',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Los mixines son ciertamente más primitivos mientras que las lampreas están más relacionadas con los peces evolucionados; por eso se las situó en clases de vertebrados independientes, dejando a los agnatos como un conjunto artificial de peces sin mandíbulas y de relaciones inciertas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [396, 401], cita: 'deja al grupo de Agnatos' }],
    },
    {
      tipo: 'aclaracion',
      texto: 'Estudios genéticos posteriores encontraron que las lampreas están más emparentadas con los mixinos que con los vertebrados con mandíbulas, lo que apoya a Cyclostomata como grupo monofilético; la aplicación conserva el esquema del apunte (Agnatha con Myxini y Cephalaspidomorphi como clases).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Agnatha', titulo: 'Agnatha - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
