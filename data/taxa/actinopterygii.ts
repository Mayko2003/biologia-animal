import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'actinopterygii',
  nombre: 'Actinopterygii',
  nombreComun: 'Peces de aletas radiadas',
  nivel: 'subclase',
  padre: 'osteichthyes',
  orden: 1,
  resumen: [
    {
      texto: 'Son el grupo dominante de los vertebrados, con más de 27.000 especies actuales, y colonizaron toda clase de ambientes acuáticos marinos, de agua dulce y salobres; incluye truchas, salmones, sardinas, lucios, percas, arenques, atunes, cíclidos, peces planos, carpas y anguilas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [333, 338], cita: 'el grupo dominante de los vertebrados' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'La característica principal es la posesión de un esqueleto de espinas óseas en sus aletas; cráneo cartilaginoso (en parte calcificado) recubierto por huesos dérmicos y un solo par de aberturas branquiales cubiertas por un opérculo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 342], cita: 'de espinas óseas en sus aletas' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Presentan escamas ganoideas (carácter exclusivo del grupo) con ganoína, tejido óseo esponjoso y laminar; en los peces actuales la escama ganoidea se reduce (leptoidea) en dos tipos: cicloideas y ctenoideas, solo con tejido óseo laminar.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [343, 346], cita: 'presentar escamas ganoideas' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte los menciona como clases que reemplazan a Osteichthyes, ya que este es un grupo parafilético.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [234, 236], cita: 'por las clases Actinopterygii y Sarcopterygii' }],
    },
  ],
};

export default taxon;
