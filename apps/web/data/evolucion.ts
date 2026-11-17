import type { Dato, SistemaId } from '@/lib/types';
import { dato } from './buscar-dato';
import porifera from './taxa/porifera';
import cnidaria from './taxa/cnidaria';
import platyhelminthes from './taxa/platyhelminthes';
import annelida from './taxa/annelida';
import mollusca from './taxa/mollusca';
import nemata from './taxa/nemata';
import chelicerata from './taxa/chelicerata';
import myriapoda from './taxa/myriapoda';
import crustacea from './taxa/crustacea';
import insecta from './taxa/insecta';
import echinodermata from './taxa/echinodermata';
import chondrichthyes from './taxa/chondrichthyes';
import osteichthyes from './taxa/osteichthyes';
import amphibia from './taxa/amphibia';
import aves from './taxa/aves';
import chelonia from './taxa/chelonia';
import crocodilia from './taxa/crocodilia';
import sauria from './taxa/sauria';
import serpentes from './taxa/serpentes';
import mammalia from './taxa/mammalia';

export type Innovacion = { titulo: string; datos: Dato[] };

/** Paradas fijas de la línea de tiempo, en orden; `bloque` agrupa paradas consecutivas. */
export const ETAPAS_EVOLUCION: readonly { slug: string; bloque?: 'Artrópodos' | 'Cordados'; subbloque?: 'Reptiles' }[] =
  [
    { slug: 'porifera' },
    { slug: 'cnidaria' },
    { slug: 'platyhelminthes' },
    { slug: 'annelida' },
    { slug: 'mollusca' },
    { slug: 'nemata' },
    { slug: 'chelicerata', bloque: 'Artrópodos' },
    { slug: 'myriapoda', bloque: 'Artrópodos' },
    { slug: 'crustacea', bloque: 'Artrópodos' },
    { slug: 'insecta', bloque: 'Artrópodos' },
    { slug: 'echinodermata' },
    { slug: 'chondrichthyes', bloque: 'Cordados' },
    { slug: 'osteichthyes', bloque: 'Cordados' },
    { slug: 'amphibia', bloque: 'Cordados' },
    { slug: 'chelonia', bloque: 'Cordados', subbloque: 'Reptiles' },
    { slug: 'sauria', bloque: 'Cordados', subbloque: 'Reptiles' },
    { slug: 'serpentes', bloque: 'Cordados', subbloque: 'Reptiles' },
    { slug: 'crocodilia', bloque: 'Cordados', subbloque: 'Reptiles' },
    { slug: 'aves', bloque: 'Cordados' },
    { slug: 'mammalia', bloque: 'Cordados' },
  ];

/** Innovación de cada grupo por sistema (null: los apuntes no describen ese sistema para el grupo). */
export const INNOVACIONES: Partial<Record<SistemaId, Record<string, Innovacion | null>>> = {
  digestivo: {
    porifera: {
      titulo: 'Digestión intracelular en vacuolas',
      datos: [
        dato(porifera, 'principal sitio de digestión son las vacuolas alimenticias'),
        dato(porifera, 'Son animales filtradores que dependen de la corriente'),
      ],
    },
    cnidaria: {
      titulo: 'Cavidad gastrovascular (celenterón)',
      datos: [dato(cnidaria, 'gastrovascular (celenterón) cumple además función vascular')],
    },
    platyhelminthes: {
      titulo: 'Tubo digestivo incompleto, a veces ausente',
      datos: [dato(platyhelminthes, 'Con o sin tubo digestivo (los cestodos carecen de él).')],
    },
    annelida: {
      titulo: 'Tubo digestivo completo y tubular',
      datos: [dato(annelida, 'El tubo digestivo es completo, tubular, y se extiende')],
    },
    mollusca: {
      titulo: 'Rádula raspadora y tubo en U',
      datos: [
        dato(mollusca, 'La rádula es una cinta de dientes quitinosos curvos'),
        dato(mollusca, 'El tubo digestivo es completo y en forma de U'),
      ],
    },
    nemata: {
      titulo: 'Tubo recto con faringe chupadora',
      datos: [
        dato(nemata, 'el tubo digestivo es recto, se extiende longitudinalmente'),
        dato(nemata, 'una faringe musculosa y chupadora o esófago'),
      ],
    },
    chelicerata: {
      titulo: 'Quelíceros que procesan el alimento',
      datos: [dato(chelicerata, 'quelíceros, primer par de apéndices, procesan o inyectan')],
    },
    myriapoda: {
      titulo: 'Glándulas salivales y válvula rectal',
      datos: [
        dato(myriapoda, 'se abren de uno a tres pares de glándulas salivales'),
        dato(myriapoda, 'recto muscular y corto por una constricción valvular'),
      ],
    },
    crustacea: {
      titulo: 'Estómago triturador y hepatopáncreas',
      datos: [
        dato(crustacea, 'funciona como estómago triturador'),
        dato(crustacea, 'glándulas digestivas grandes y esponjosas (hepatopáncreas)'),
      ],
    },
    insecta: {
      titulo: 'Digestivo en tres regiones especializadas',
      datos: [
        dato(insecta, 'la válvula estomodeal lo separa del digestivo medio'),
        dato(insecta, 'proventrículo (con dientes para triturar)'),
      ],
    },
    echinodermata: {
      titulo: 'Tubo digestivo dentro de un celoma amplio',
      datos: [dato(echinodermata, 'Celoma amplio en cuyo interior se halla el tubo digestivo')],
    },
    chondrichthyes: {
      titulo: 'Intestino con válvula espiral',
      datos: [
        dato(chondrichthyes, 'intestino con válvula espiral y glándula rectal'),
        dato(chondrichthyes, 'estómago en J con válvula pilórica'),
      ],
    },
    osteichthyes: {
      titulo: 'Dientes faríngeos y ciegos pilóricos',
      datos: [
        dato(osteichthyes, 'más dientes faríngeos y del rastrillo branquial'),
        dato(osteichthyes, 'intestino con tres ciegos pilóricos tubulares'),
      ],
    },
    amphibia: {
      titulo: 'Lengua protráctil para capturar presas',
      datos: [dato(amphibia, 'la lengua es a menudo protráctil')],
    },
    chelonia: {
      titulo: 'Pico córneo sin dientes',
      datos: [dato(chelonia, 'las mandíbulas carecen de dientes pero poseen un fuerte y robusto pico córneo')],
    },
    sauria: {
      titulo: 'Lengua extensible y dientes iguales',
      datos: [dato(sauria, 'la lengua puede ser ligeramente móvil y extensible')],
    },
    serpentes: {
      titulo: 'Mandíbulas que tragan presas enteras',
      datos: [
        dato(serpentes, 'para permitir una mayor apertura mandibular y digerir presas'),
        dato(serpentes, 'Los dientes están inclinados hacia atrás'),
      ],
    },
    crocodilia: {
      titulo: 'Estómago con fundus y región pilórica',
      datos: [dato(crocodilia, 'se diferencia una región esférica o fundus')],
    },
    aves: {
      titulo: 'Molleja trituradora con piedritas',
      datos: [
        dato(aves, 'el ventrículo o molleja, en forma de disco'),
        dato(aves, 'el alimento es machacado con ayuda de piedritas'),
      ],
    },
    mammalia: {
      titulo: 'Dentición heterodonta especializada',
      datos: [
        dato(mammalia, 'la dentición es heterodonta (dientes variables en forma'),
        dato(mammalia, 'Hay 4 clases de dientes: incisivos, caninos, premolares'),
      ],
    },
  },
};
