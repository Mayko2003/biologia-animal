import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'scaphopoda',
  nombre: 'Scaphopoda',
  nombreComun: 'Escafópodos',
  nivel: 'clase',
  padre: 'mollusca',
  orden: 4,
  resumen: [
    {
      texto: 'Unas 350 especies de moluscos marinos excavadores que viven en aguas poco profundas o hasta los 4500 m de profundidad, conocidos vulgarmente como colmillos o dientes de mar; se hallan parcialmente enterrados oblicuamente en la arena o el barro.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [261, 264], cita: 'unas 350 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo es alargado dorsoventralmente y está rodeado por el manto que segrega una concha tubular abierta en ambos extremos, ligeramente curvada y cónica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [266, 268], cita: 'concha tubular abierta en ambos' }],
    },
    {
      texto: 'Su pie puntiagudo sale por el extremo ventral de la concha y lo emplean para minar; el orificio posterior de la concha, de menor tamaño, sirve para la entrada y salida del agua de ventilación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [270, 272], cita: 'Su pie puntiagudo sale por' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Concha tubular abierta en ambos extremos, ligeramente curvada y cónica, segregada por el manto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [266, 268], cita: 'el manto que segrega una' }],
      },
    ],
    digestivo: [
      {
        texto: 'Alrededor de la boca hay varios tentáculos delicados ciliados y contráctiles con los extremos dilatados (captáculos), sensibles y prensiles, que sirven para capturar las microplantas y animales de los que se alimentan. Existe una rádula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [279, 281], cita: 'extremos dilatados (captáculos)' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin cabeza, carecen de branquias y el manto sirve para la respiración.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [283, 283], cita: 'carecen de branquias' }],
      },
    ],
    reproductor: [
      {
        texto: 'Dioicos; la fecundación es externa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [284, 284], cita: 'Dioicos, la fecundación es externa' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Captáculos',
      datos: [
        {
          texto: 'Tentáculos delicados, ciliados y contráctiles con los extremos dilatados, sensibles y prensiles, para capturar el alimento.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [279, 281], cita: 'tentáculos delicados ciliados' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'El desarrollo es indirecto planctónico con fases larvarias trocósfera y veliger.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [284, 286], cita: 'fases larvarias trocósfera y veliger' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Moluscos marinos excavadores; se hallan parcialmente enterrados oblicuamente en la arena o el barro, en aguas poco profundas o hasta los 4500 m.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [261, 264], cita: 'parcialmente enterrados oblicuamente' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
