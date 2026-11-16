import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'holocephali',
  nombre: 'Holocephali',
  nombreComun: 'Quimeras',
  nivel: 'subclase',
  padre: 'chondrichthyes',
  orden: 2,
  resumen: [
    {
      texto: 'Subclase llamada quimeras o peces rata: hendiduras branquiales cubiertas por un opérculo, sin cloaca ni espiráculos, primera aleta dorsal muy hacia delante con una fuerte espina y cola alargada en forma de látigo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [71, 73], cita: 'llamados quimeras o peces rata' }],
    },
    {
      texto: 'Cada mandíbula con seis pares de placas dentarias con dientes fusiformes, mandíbula superior fusionada al cráneo, adultos sin escamas; los machos tienen órganos copuladores pelvianos y un único gancho mediano sobre la cabeza que sujetaría a la hembra durante la cópula.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 76], cita: 'seis pares de placas dentarias' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Llamados quimeras o peces rata: hendiduras branquiales cubiertas por un opérculo, sin cloaca ni espiráculos, primera aleta dorsal muy adelante con una fuerte espina, cola alargada en forma de látigo, cada mandíbula con seis pares de placas dentarias y mandíbula superior fusionada al cráneo; adultos sin escamas.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [71, 75], cita: 'llamados quimeras o peces rata' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Los adultos carecen de escamas.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [75, 75], cita: 'sin escamas; machos con' }],
      },
    ],
    esqueleto: [
    {
      texto: 'Esqueleto de cartílago y no de hueso (rasgo de los condrictios); mandíbula superior fusionada al cráneo (holostilia), con placas dentarias en lugar de dientes separados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chondrichthyes', titulo: 'Chondrichthyes - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://en.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    muscular: [
    {
      texto: 'Aletas pectorales amplias en forma de ala, sostenidas por bloques cartilaginosos.',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    digestivo: [
    {
      texto: 'Cada mandíbula posee seis pares de placas dentarias trituradoras; su dieta incluye algas marinas, crustáceos, moluscos, equinodermos y peces.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [73, 79], cita: 'placas dentarias con dientes' }],
    },
    ],
    respiratorio: [
    {
      texto: 'Hendiduras branquiales cubiertas por un opérculo; dos aberturas branquiales y cinco arcos branquiales, los primeros cuatro cubiertos por la membrana opercular; sin espiráculos.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [71, 72], cita: 'hendiduras branquiales cubiertas por' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    circulatorio: [
    {
      texto: 'Corazón de dos cámaras (una aurícula y un ventrículo) con circulación simple, como en los demás peces.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    excretor: [
    {
      texto: 'Excreción por el aparato renal, como en los demás vertebrados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    nervioso: [
    {
      texto: 'Sistema nervioso de tipo vertebrado, con encéfalo y médula espinal.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    sentidos: [
    {
      texto: 'Sistema de línea lateral (presente en los condrictios); los dentículos dérmicos se limitan a los órganos sensoriales y copuladores.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [29, 30], cita: 'con sistema de línea lateral' }, { tipo: 'web', url: 'https://en.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    ],
    reproductor: [
    {
      texto: 'Los machos tienen órganos copuladores pelvianos y un único gancho mediano sobre la cabeza que se cree sujeta a la hembra durante la cópula.',
      fuentes: [{ tipo: 'apunte', archivo: 'gnatostomatha.md', lineas: [75, 76], cita: 'órganos copuladores pelvianos' }],
    },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Todas las quimeras vivientes son ovíparas: las hembras ponen grandes cápsulas de huevo coriáceas compuestas de colágeno, de dos en dos, con una solapa estriada (collarette).',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Pasan la mayor parte del tiempo en aguas profundas, a más de 80 m, y no tienen valor comercial; su dieta incluye algas marinas, crustáceos, moluscos, equinodermos y peces, que capturan con las placas trituradoras de sus dientes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 79], cita: 'tiempo en aguas profundas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Callorhynchus',
      descripcion: 'pez elefante, ejemplo de holocéfalo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [79, 79], cita: 'Ej.: Callorhynchus (pez elefante)' }],
    },
    {
      nombre: 'Chimaera monstrosa',
      descripcion: 'quimera, representante actual del grupo',
      fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Holocephali', titulo: 'Holocephali - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
