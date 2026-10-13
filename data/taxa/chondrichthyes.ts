import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'chondrichthyes',
  nombre: 'Chondrichthyes',
  nombreComun: 'Peces cartilaginosos',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 1,
  resumen: [
    {
      texto: 'Los condrictios modernos comprenden dos grupos: los elasmobranquios (tiburones y rayas) y las quimeras (holocéfalos); en su conjunto se conocen como peces cartilaginosos, la mayoría de hábitat marino.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [16, 27], cita: 'se conocen comúnmente como peces' }],
    },
    {
      texto: 'Carecen por completo de huesos y el notocordio, aunque reducido, persiste durante todo el estado adulto; escamas placoideas, cola heterocerca, fosas nasales sin coanas, sin vejiga natatoria, sistema de línea lateral, sexos separados, fecundación interna y desarrollo directo; ovíparos, ovovivíparos o vivíparos, con pocas crías y huevos grandes cargados de vitelo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 32], cita: 'Con escamas placoideas; cola heterocerca' }],
    },
    {
      texto: 'No aparecieron antes que los peces óseos como se pensaba: constituyen un grupo muy especializado. Se divide en dos subclases: Selachii (elasmobranquios) y Holocephali.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 50], cita: 'constituyen un grupo muy' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Son más densos que el agua del mar y tienden a hundirse; los nadadores compensan con grandes hígados de aceites ligeros, aletas pectorales a modo de deslizadores y colas heterocercas cuyo lóbulo superior prolongado produce un empuje hacia arriba.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [38, 48], cita: 'Grandes hígados con aceites' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
