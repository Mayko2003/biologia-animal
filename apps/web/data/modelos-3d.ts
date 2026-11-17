import type { Dato, SistemaId } from '@/lib/types';
import { dato } from './buscar-dato';
import porifera from './taxa/porifera';

export type PuntoAnatomico = {
  id: string;
  nombre: string;
  grupo: SistemaId | 'agua';
  posicion: [number, number, number];
  normal: [number, number, number];
  datos: Dato[];
};

export type Modelo3D = {
  src: string;
  poster: string;
  alt: string;
  especie: string;
  credito: string;
  puntos: PuntoAnatomico[];
};

export const MODELOS_3D: Readonly<Record<string, Modelo3D>> = {
  porifera: {
    src: '/models/porifera-corte.glb',
    poster: '/models/porifera-corte.webp',
    alt: 'Modelo 3D de una esponja tubular amarilla (Aplysina fistularis) con un corte longitudinal y uno transversal',
    especie: 'Aplysina fistularis (esponja tubular amarilla)',
    credito: 'Modelo propio generado con Blender (models/porifera/scripts)',
    puntos: [
      {
        id: 'osculo',
        nombre: 'Ósculo',
        grupo: 'agua',
        posicion: [-0.01, 0.1789, -0.13],
        normal: [0, 1, 0],
        datos: [dato(porifera, 'sale por los ósculos')],
      },
      {
        id: 'espongocele',
        nombre: 'Espongocele (atrio)',
        grupo: 'agua',
        posicion: [0.022, 0.2712, -0.0373],
        normal: [0.5136, 0.4487, 0.7314],
        datos: [dato(porifera, 'va del exterior al espongocele')],
      },
      {
        id: 'ostiolos',
        nombre: 'Ostíolos y porocitos',
        grupo: 'agua',
        posicion: [-0.08, 0.18, 0.0096],
        normal: [-0.2219, 0.1823, 0.9579],
        datos: [dato(porifera, 'Cada poro está formado por un porocito')],
      },
      {
        id: 'pinacodermo',
        nombre: 'Pinacodermo',
        grupo: 'tegumento',
        posicion: [-0.12, 0.3, -0.0022],
        normal: [0.3154, 0.344, 0.8844],
        datos: [
          dato(porifera, 'La pared del cuerpo está constituida'),
          dato(porifera, 'células epiteliales aplanadas que forman el pinacodermo'),
        ],
      },
      {
        id: 'mesohilo',
        nombre: 'Mesohilo (corte longitudinal)',
        grupo: 'tegumento',
        posicion: [0.07, 0.2126, 0.0192],
        normal: [-0.4069, -0.3168, 0.8568],
        datos: [dato(porifera, 'Debajo del pinacodermo está el mesohilo')],
      },
      {
        id: 'espongina',
        nombre: 'Esqueleto de espongina',
        grupo: 'esqueleto',
        posicion: [0.085, 0.37, -0.06],
        normal: [0, 1, 0],
        datos: [dato(porifera, 'fibras de espongina proteínica')],
      },
      {
        id: 'coanocitos',
        nombre: 'Coanocitos (corte transversal)',
        grupo: 'digestivo',
        posicion: [0.21, 0.3699, -0.06],
        normal: [0, 1, 0],
        datos: [dato(porifera, 'Coanocitos: capa de células')],
      },
      {
        id: 'base',
        nombre: 'Base de fijación',
        grupo: 'tegumento',
        posicion: [0, 0.05, 0.0731],
        normal: [-0.2024, -0.5882, 0.7829],
        datos: [dato(porifera, 'los basales segregan el material que fija')],
      },
    ],
  },
};
