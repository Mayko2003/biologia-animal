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

/** `titulo: null`: "Sin innovación nueva" (hay datos, pero sin cambios relevantes respecto de los grupos anteriores). */
export type Innovacion = { titulo: string | null; datos: Dato[] };

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

/** Innovación de cada grupo por sistema (null: los apuntes no describen ese sistema para el grupo; también se muestra como "Sin innovación nueva"). */
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
      titulo: null,
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
      titulo: null,
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
      titulo: null,
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
  tegumento: {
    porifera: {
      titulo: 'Pinacodermo de células aplanadas',
      datos: [dato(porifera, 'células epiteliales aplanadas que forman el pinacodermo')],
    },
    cnidaria: {
      titulo: 'Epidermis, gastrodermis y mesoglea',
      datos: [dato(cnidaria, 'epidermis (epitelio externo), gastrodermis')],
    },
    platyhelminthes: {
      titulo: 'Tegumento delgado respiratorio',
      datos: [dato(platyhelminthes, 'El tegumento es delgado y a través de él pasa')],
    },
    annelida: {
      titulo: 'Epidermis con musculatura parietal',
      datos: [dato(annelida, 'una epidermis, músculos circulares y longitudinales')],
    },
    mollusca: { titulo: 'Manto secretor de concha', datos: [dato(mollusca, 'El manto secreta la concha')] },
    nemata: {
      titulo: 'Cutícula no celular y epidermis sincitial',
      datos: [
        dato(nemata, 'una cutícula no celular segregada por la epidermis'),
        dato(nemata, 'la epidermis sincitial (un delgado estrato'),
      ],
    },
    chelicerata: {
      titulo: 'Exoesqueleto quitinoso con ecdisis',
      datos: [
        dato(chelicerata, 'recubierto por el exoesqueleto quitinoso de los'),
        dato(chelicerata, 'que mudan periódicamente (ecdisis)'),
      ],
    },
    myriapoda: {
      titulo: null,
      datos: [dato(myriapoda, 'la cutícula quitinosa del exoesqueleto; los paurópodos')],
    },
    crustacea: {
      titulo: 'Caparazón calcificado del exoesqueleto',
      datos: [dato(crustacea, 'impregnado de sales calcáreas (caparazón)')],
    },
    insecta: {
      titulo: null,
      datos: [dato(insecta, 'naturaleza quitinosa que protege los órganos')],
    },
    echinodermata: {
      titulo: 'Endoesqueleto dérmico con espinas',
      datos: [
        dato(echinodermata, 'dermis que contiene los osículos esqueléticos'),
        dato(echinodermata, 'espinas o tubérculos sobresalientes (piel espinosa)'),
      ],
    },
    chondrichthyes: {
      titulo: 'Escamas placoideas',
      datos: [
        dato(chondrichthyes, 'diminutas escamas placoideas, cada una con'),
        dato(chondrichthyes, 'cubierta de esmalte y con placa basal de dentina'),
      ],
    },
    osteichthyes: {
      titulo: 'Escamas dérmicas imbricadas y mucus',
      datos: [
        dato(osteichthyes, 'escamas dérmicas redondeadas imbricadas como tejas'),
        dato(osteichthyes, 'epidermis blanda productora de mucus'),
      ],
    },
    amphibia: {
      titulo: 'Piel húmeda glandular sin escamas',
      datos: [dato(amphibia, 'Piel lisa y húmeda, con muchas glándulas'), dato(amphibia, 'sin escamas externas')],
    },
    chelonia: {
      titulo: 'Caparazón córneo y óseo',
      datos: [
        dato(chelonia, 'una externa, córnea, de queratina'),
        dato(chelonia, 'el espaldar, y una ventral más plana, el peto'),
      ],
    },
    sauria: {
      titulo: 'Escamas epidérmicas imbricadas',
      datos: [dato(sauria, 'posee numerosas escamas dispuestas en hileras')],
    },
    serpentes: {
      titulo: null,
      datos: [dato(serpentes, 'escamas lisas o con quilla, resistente e impermeable')],
    },
    crocodilia: {
      titulo: 'Escamas córneas que no se mudan',
      datos: [
        dato(crocodilia, 'la capa córnea exterior no se muda'),
        dato(crocodilia, 'exoesqueleto de placas dérmicas óseas separadas'),
      ],
    },
    aves: {
      titulo: 'Plumas',
      datos: [
        dato(aves, 'Las plumas crecen adheridas a la piel'),
        dato(aves, 'solo crecen en ciertas áreas de la piel (pterilios)'),
      ],
    },
    mammalia: {
      titulo: 'Pelo y glándulas tegumentarias',
      datos: [
        dato(mammalia, 'Todos los mamíferos tienen pelo'),
        dato(mammalia, 'mayor variedad de glándulas tegumentarias'),
      ],
    },
  },
  esqueleto: {
    porifera: {
      titulo: 'Espículas y espongina',
      datos: [
        dato(porifera, 'fibras de espongina proteínica o por espículas calcáreas'),
        dato(porifera, 'El esqueleto es producido por esclerocitos'),
      ],
    },
    cnidaria: {
      titulo: 'Mesoglea y corales calcáreos',
      datos: [
        dato(cnidaria, 'tejido conjuntivo fibroso gelatinoso'),
        dato(cnidaria, 'envolturas quitinosas o recubrimientos calcáreos'),
      ],
    },
    platyhelminthes: {
      titulo: 'Cuerpo macizo con parénquima',
      datos: [dato(platyhelminthes, 'el parénquima llenando el espacio entre los')],
    },
    annelida: {
      titulo: 'Esqueleto hidrostático celómico',
      datos: [
        dato(annelida, 'la presión del líquido celómico, dividido en'),
        dato(annelida, 'metámeros, permite los movimientos peristálticos'),
      ],
    },
    mollusca: {
      titulo: 'Concha calcárea del manto',
      datos: [dato(mollusca, 'Concha calcárea dorsal en forma de escudo oval')],
    },
    nemata: {
      titulo: 'Cutícula rígida a presión interna',
      datos: [dato(nemata, 'la cutícula escleroproteica y la presión del')],
    },
    chelicerata: {
      titulo: 'Exoesqueleto quitinoso articulado',
      datos: [dato(chelicerata, 'Exoesqueleto quitinoso articulado que mudan')],
    },
    myriapoda: { titulo: null, datos: [dato(myriapoda, 'Exoesqueleto quitinoso articulado que mudan')] },
    crustacea: { titulo: 'Caparazón calcificado', datos: [dato(crustacea, 'impregnado de sales calcáreas')] },
    insecta: {
      titulo: 'Alas: expansiones del exoesqueleto',
      datos: [dato(insecta, 'cada ala es una expansión membranosa de la pared')],
    },
    echinodermata: {
      titulo: 'Endoesqueleto de osículos calcáreos',
      datos: [
        dato(echinodermata, 'Esqueleto interno de osículos calcáreos que'),
        dato(echinodermata, 'fusionarse formando un caparazón esquelético'),
      ],
    },
    chondrichthyes: {
      titulo: 'Endoesqueleto cartilaginoso con vértebras',
      datos: [
        dato(chondrichthyes, 'Esqueleto cartilaginoso reforzado por depósitos'),
        dato(chondrichthyes, 'vértebras anficélicas con arco neural'),
      ],
    },
    osteichthyes: {
      titulo: 'Endoesqueleto óseo con columna',
      datos: [
        dato(osteichthyes, 'el endoesqueleto consta de cráneo, columna'),
        dato(osteichthyes, 'entre los centros hay restos de notocorda'),
      ],
    },
    amphibia: {
      titulo: 'Extremidades tetrápodas y dos cóndilos occipitales',
      datos: [
        dato(amphibia, 'Dos pares de extremidades (tetrápodos) para'),
        dato(amphibia, 'Cráneo con 2 cóndilos occipitales'),
      ],
    },
    chelonia: {
      titulo: 'Caparazón óseo soldado a las vértebras',
      datos: [
        dato(chelonia, 'vértebras torácicas suelen estar soldadas al'),
        dato(chelonia, 'de queratina, y otra interna, de hueso'),
      ],
    },
    sauria: null,
    serpentes: {
      titulo: 'Cráneo con huesos móviles',
      datos: [dato(serpentes, 'algunos de los huesos pueden moverse')],
    },
    crocodilia: {
      titulo: 'Osteodermos y paladar secundario',
      datos: [
        dato(crocodilia, 'exoesqueleto de placas dérmicas óseas separadas'),
        dato(crocodilia, 'paladar secundario, sobre el que se ubican'),
      ],
    },
    aves: {
      titulo: 'Huesos neumatizados y quilla',
      datos: [
        dato(aves, 'muchos de sus huesos poseen cavidades aéreas'),
        dato(aves, 'quilla mediana en la que se insertan los'),
      ],
    },
    mammalia: {
      titulo: 'Huesos sesamoideos',
      datos: [
        dato(mammalia, 'osificaciones llamadas huesos sesamoideos'),
        dato(mammalia, 'dos cóndilos occipitales que lo articulan'),
      ],
    },
  },
  muscular: {
    porifera: {
      titulo: 'Células contráctiles sin tejido muscular',
      datos: [dato(porifera, 'algunas células (miocitos, pinacocitos) son contráctiles')],
    },
    cnidaria: {
      titulo: 'Células epiteliomusculares',
      datos: [
        dato(cnidaria, 'Células epiteliomusculares cuyas bases forman fibras'),
        dato(cnidaria, 'la mesoglea contiene además células musculares'),
      ],
    },
    platyhelminthes: {
      titulo: 'Capas musculares circulares, longitudinales y oblicuas',
      datos: [dato(platyhelminthes, 'Capas de músculos longitudinales, circulares y oblicuas')],
    },
    annelida: {
      titulo: 'Locomoción peristáltica',
      datos: [
        dato(annelida, 'una capa de músculos circulares externa y una'),
        dato(annelida, 'permite los movimientos peristálticos de la locomoción'),
      ],
    },
    mollusca: { titulo: 'Pie muscular', datos: [dato(mollusca, 'masa visceral y un pie muscular característico')] },
    nemata: { titulo: 'Solo musculatura longitudinal', datos: [dato(nemata, 'es muscular, de fibras longitudinales')] },
    chelicerata: {
      titulo: 'Músculos unidos al exoesqueleto',
      datos: [dato(chelicerata, 'Músculos segmentarios asociados al exoesqueleto')],
    },
    myriapoda: { titulo: null, datos: [dato(myriapoda, 'asociados al exoesqueleto y a los numerosos apéndices')] },
    crustacea: {
      titulo: 'Músculos estriados',
      datos: [dato(crustacea, 'Músculos estriados asociados al exoesqueleto')],
    },
    insecta: {
      titulo: 'Primeros animales voladores',
      datos: [dato(insecta, 'fueron el primer grupo de animales voladores')],
    },
    echinodermata: {
      titulo: 'Locomoción hidráulica ambulacral',
      datos: [dato(echinodermata, 'los pies ambulacrales se mueven por la presión')],
    },
    chondrichthyes: {
      titulo: 'Músculos segmentarios de ondulación lateral',
      datos: [
        dato(chondrichthyes, 'músculos del cuerpo y de la cola son segmentarios'),
        dato(chondrichthyes, 'producen las ondulaciones laterales de la locomoción'),
      ],
    },
    osteichthyes: {
      titulo: 'Miómeros en bandas',
      datos: [dato(osteichthyes, 'músculos segmentarios (miomeros) en forma de M')],
    },
    amphibia: {
      titulo: 'Extremidades tetrápodas',
      datos: [dato(amphibia, 'Dos pares de extremidades (tetrápodos) para andar')],
    },
    chelonia: {
      titulo: null,
      datos: [
        dato(chelonia, 'La cabeza, la cola y las patas se retraen entre'),
        dato(chelonia, 'las patas tienen forma de paleta para nadar'),
      ],
    },
    sauria: null,
    serpentes: {
      titulo: 'Locomoción sin extremidades',
      datos: [
        dato(serpentes, 'mueven los músculos que están alrededor del estómago'),
        dato(serpentes, 'movimiento lado a lado en forma ondulatoria'),
      ],
    },
    crocodilia: {
      titulo: 'Potente musculatura mandibular',
      datos: [dato(crocodilia, 'una fuerte musculatura mandibular para una apertura')],
    },
    aves: {
      titulo: 'Músculos pectorales del vuelo',
      datos: [dato(aves, 'se insertan los músculos pectorales del vuelo')],
    },
    mammalia: { titulo: 'Diafragma', datos: [dato(mammalia, 'Existe un diafragma, cubierto por peritoneo')] },
  },
  respiratorio: {
    porifera: {
      titulo: 'Difusión simple desde el agua',
      datos: [dato(porifera, 'por difusión simple entre la corriente')],
    },
    cnidaria: { titulo: null, datos: [dato(cnidaria, 'gaseoso tiene lugar a través de la superficie')] },
    platyhelminthes: {
      titulo: null,
      datos: [
        dato(platyhelminthes, 'Carecen de sistema respiratorio.'),
        dato(platyhelminthes, 'El tegumento es delgado y a través de él pasa el'),
      ],
    },
    annelida: {
      titulo: 'Respiración cutánea y branquias',
      datos: [dato(annelida, 'es cutánea, pero en algunos gusanos')],
    },
    mollusca: {
      titulo: 'Ctenidios y pulmón del manto',
      datos: [
        dato(mollusca, 'Las branquias o ctenidios están formados por'),
        dato(mollusca, 'puede realizarse por un pulmón, por el manto'),
      ],
    },
    nemata: { titulo: null, datos: [dato(nemata, 'En Ascaris lumbricoides no hay órganos respiratorios.')] },
    chelicerata: {
      titulo: 'Pulmones en libro y tráqueas',
      datos: [dato(chelicerata, 'filotráqueas (pulmones en libro), tráqueas o ambas')],
    },
    myriapoda: { titulo: null, datos: [dato(myriapoda, 'un sistema traqueal en el que los espiráculos no')] },
    crustacea: {
      titulo: 'Branquias asociadas a apéndices',
      datos: [dato(crustacea, 'branquias son normalmente los órganos')],
    },
    insecta: {
      titulo: 'Tráqueas con sacos aéreos',
      datos: [
        dato(insecta, 'tubos aéreos elásticos ectodérmicos ramificados por'),
        dato(insecta, 'se abren al exterior por espiráculos y pueden'),
      ],
    },
    echinodermata: {
      titulo: 'Pápulas y árboles respiratorios',
      datos: [dato(echinodermata, 'por diminutas branquias o pápulas protráctiles')],
    },
    chondrichthyes: {
      titulo: 'Hendiduras branquiales y filamentos',
      datos: [
        dato(chondrichthyes, 'forzada hacia las hendiduras branquiales y los'),
        dato(chondrichthyes, 'filamentos alargados y paralelos con capilares'),
      ],
    },
    osteichthyes: {
      titulo: 'Opérculo y flujo contracorriente',
      datos: [
        dato(osteichthyes, 'ventilada con ayuda del opérculo'),
        dato(osteichthyes, 'en sentido contrario al flujo sanguíneo'),
      ],
    },
    amphibia: {
      titulo: 'Pulmones, branquias y piel',
      datos: [dato(amphibia, 'Respiración por branquias, pulmones, cutánea o por')],
    },
    chelonia: {
      titulo: 'Branquias cloacales accesorias',
      datos: [dato(chelonia, 'sacos vasculares que funcionan como branquias')],
    },
    sauria: null,
    serpentes: { titulo: 'Pulmón izquierdo vestigial', datos: [dato(serpentes, 'Pulmón izquierdo vestigial.')] },
    crocodilia: {
      titulo: 'Coanas, glotis y bronquios',
      datos: [
        dato(crocodilia, 'las coanas, situadas detrás del velo'),
        dato(crocodilia, 'a través de los bronquios llega a los pulmones'),
      ],
    },
    aves: {
      titulo: 'Sacos aéreos y siringe',
      datos: [dato(aves, 'Numerosos sacos aéreos, ubicados entre los órganos')],
    },
    mammalia: {
      titulo: 'Respiración exclusivamente pulmonar',
      datos: [dato(mammalia, 'La respiración se realiza solo por pulmones.')],
    },
  },
  circulatorio: {
    porifera: {
      titulo: 'Transporte por la corriente de agua',
      datos: [dato(porifera, 'circula por cavidades y canales y sale por los ósculos')],
    },
    cnidaria: {
      titulo: 'Cavidad gastrovascular que distribuye el alimento',
      datos: [dato(cnidaria, 'la cavidad gastrovascular distribuye el alimento')],
    },
    platyhelminthes: { titulo: null, datos: [dato(platyhelminthes, 'Carecen de sistema circulatorio')] },
    annelida: {
      titulo: 'Sistema cerrado con vasos y hemoglobina',
      datos: [
        dato(annelida, 'Sistema circulatorio cerrado con vasos longitudinales'),
        dato(annelida, 'el plasma sanguíneo contiene hemoglobina disuelta'),
      ],
    },
    mollusca: {
      titulo: 'Hemocele con hemocianina',
      datos: [
        dato(mollusca, 'Básicamente un hemocele: la sangre pasa de las'),
        dato(mollusca, 'hemocianina como pigmento respiratorio'),
      ],
    },
    nemata: { titulo: null, datos: [dato(nemata, 'no hay órganos circulatorios')] },
    chelicerata: { titulo: null, datos: [dato(chelicerata, 'corazón dentro de la cámara pericárdica')] },
    myriapoda: {
      titulo: 'Corazón tubular con ostíolos',
      datos: [
        dato(myriapoda, 'el corazón es un tubo dorsal muy largo'),
        dato(myriapoda, 'un par de ostíolos en cada segmento'),
      ],
    },
    crustacea: {
      titulo: 'Corazón dorsal vesicular compacto',
      datos: [dato(crustacea, 'el corazón dorsal es una vesícula compacta')],
    },
    insecta: {
      titulo: null,
      datos: [dato(insecta, 'Corazón dorsal alargado y tubular'), dato(insecta, 'el sistema es lagunar o abierto')],
    },
    echinodermata: {
      titulo: 'Sistema hemal reducido',
      datos: [
        dato(echinodermata, 'El sistema circulatorio sanguíneo está reducido'),
        dato(echinodermata, 'El sistema hemal acompaña al vascular acuífero'),
      ],
    },
    chondrichthyes: {
      titulo: 'Corazón con seno venoso y circulación simple',
      datos: [
        dato(chondrichthyes, 'Corazón con seno venoso, aurícula, ventrículo'),
        dato(chondrichthyes, 'la sangre pasa por el corazón una sola vez'),
      ],
    },
    osteichthyes: { titulo: null, datos: [dato(osteichthyes, 'corazón de dos cámaras (aurícula y ventrículo)')] },
    amphibia: {
      titulo: 'Corazón tricameral y circulación doble',
      datos: [dato(amphibia, 'Circulación doble cerrada, con un corazón tricameral')],
    },
    chelonia: null,
    sauria: null,
    serpentes: { titulo: null, datos: [dato(serpentes, 'señala un corazón tricameral')] },
    crocodilia: {
      titulo: 'Ventrículos completamente separados',
      datos: [
        dato(crocodilia, 'los ventrículos están perfectamente separados'),
        dato(crocodilia, 'Corazón tetracameral: en los cocodrilos'),
      ],
    },
    aves: {
      titulo: 'Doble circulación completa',
      datos: [
        dato(aves, 'la sangre venosa queda completamente separada'),
        dato(aves, 'Tienen dos circuitos sanguíneos, uno pulmonar'),
      ],
    },
    mammalia: { titulo: null, datos: [dato(mammalia, 'cuatro cavidades completamente separadas')] },
  },
  excretor: {
    porifera: {
      titulo: 'Difusión hacia la corriente de agua',
      datos: [
        dato(porifera, 'desechos nitrogenados (principalmente amoníaco)'),
        dato(porifera, 'salen del cuerpo con las corrientes de agua'),
      ],
    },
    cnidaria: { titulo: null, datos: [dato(cnidaria, 'se difunden a través de la pared del cuerpo')] },
    platyhelminthes: {
      titulo: 'Células flamígeras y tubos colectores',
      datos: [dato(platyhelminthes, 'células flamígeras y tubos colectores')],
    },
    annelida: { titulo: 'Un par de nefridios por somito', datos: [dato(annelida, 'Un par de nefridios por somito')] },
    mollusca: {
      titulo: 'Metanefridios (riñones)',
      datos: [dato(mollusca, 'metanefridios tubulares denominados riñones')],
    },
    nemata: {
      titulo: 'Conductos excretores laterales',
      datos: [dato(nemata, 'un conducto excretor que se abre al exterior')],
    },
    chelicerata: {
      titulo: 'Glándulas coxales y tubos de Malpighi',
      datos: [
        dato(chelicerata, 'Glándulas coxales que desembocan en la base'),
        dato(chelicerata, 'en arácnidos además tubos de Malpighi'),
      ],
    },
    myriapoda: { titulo: null, datos: [dato(myriapoda, 'dos a cuatro tubos de Malpighio')] },
    crustacea: {
      titulo: 'Glándulas antenales y maxilares',
      datos: [dato(crustacea, 'Glándulas antenales y maxilares')],
    },
    insecta: { titulo: null, datos: [dato(insecta, 'los tubos de Malpighio, varios y filamentosos')] },
    echinodermata: {
      titulo: 'Pérdida de órganos excretores',
      datos: [dato(echinodermata, 'Carecen de órganos excretores diferenciados')],
    },
    chondrichthyes: {
      titulo: 'Riñones, uréteres y glándula rectal',
      datos: [
        dato(chondrichthyes, 'Dos riñones alargados situados sobre el celoma'),
        dato(chondrichthyes, 'glándula rectal (secreta fluido rico en cloruro sódico)'),
      ],
    },
    osteichthyes: { titulo: null, datos: [dato(osteichthyes, 'La excreción corre a cargo del aparato renal')] },
    amphibia: null,
    chelonia: { titulo: null, datos: [dato(chelonia, 'La orina es líquida')] },
    sauria: { titulo: 'Orina semisólida', datos: [dato(sauria, 'La orina es semisólida como en las aves')] },
    serpentes: {
      titulo: 'Pérdida de la vejiga urinaria',
      datos: [dato(serpentes, 'Carecen de vejiga de la orina'), dato(serpentes, 'se señala un riñón lobulado')],
    },
    crocodilia: { titulo: null, datos: [dato(crocodilia, 'dos riñones, de los que parten los uréteres')] },
    aves: {
      titulo: 'Riñones trilobulados y orina semisólida',
      datos: [
        dato(aves, 'dos riñones de color rojo oscuro y trilobulados'),
        dato(aves, 'se eliminan semisólidos junto con las heces'),
      ],
    },
    mammalia: {
      titulo: 'Vejiga urinaria y uretra',
      datos: [dato(mammalia, 'se almacena en la vejiga urinaria'), dato(mammalia, 'sale al exterior por la uretra')],
    },
  },
  nervioso: {
    porifera: { titulo: 'Sin sistema nervioso', datos: [dato(porifera, 'y sus reacciones son básicamente locales')] },
    cnidaria: {
      titulo: 'Red nerviosa descentralizada',
      datos: [dato(cnidaria, 'Red nerviosa descentralizada (nerve net)')],
    },
    platyhelminthes: {
      titulo: 'Ganglios y cordones longitudinales',
      datos: [dato(platyhelminthes, 'una concentración ganglionar anterior y filetes')],
    },
    annelida: {
      titulo: 'Cordón nervioso ventral ganglionar',
      datos: [dato(annelida, 'un cordón nervioso macizo y doble ventral')],
    },
    mollusca: { titulo: 'Anillo periesofágico', datos: [dato(mollusca, 'un anillo periesofágico del que salen')] },
    nemata: { titulo: null, datos: [dato(nemata, 'un anillo nervioso que rodea al esófago')] },
    chelicerata: {
      titulo: 'Ganglios fusionados en una masa cerebral',
      datos: [dato(chelicerata, 'con fusión de numerosos ganglios formando')],
    },
    myriapoda: { titulo: null, datos: [dato(myriapoda, 'el cordón nervioso ventral contiene un ganglio')] },
    crustacea: { titulo: 'Sincerebro dorsal', datos: [dato(crustacea, 'Cadena nerviosa ventral con ganglios por')] },
    insecta: {
      titulo: 'Cerebro supraesofágico y sistema simpático',
      datos: [
        dato(insecta, 'Cerebro o ganglio supraesofágico con nervios'),
        dato(insecta, 'sistema nervioso simpático visceral'),
      ],
    },
    echinodermata: {
      titulo: 'Sistema nervioso radial sin cerebro',
      datos: [dato(echinodermata, 'un nervio circumoral (anillo) con cordones')],
    },
    chondrichthyes: {
      titulo: 'Encéfalo con cerebelo y 10 pares craneales',
      datos: [
        dato(chondrichthyes, 'Encéfalo más avanzado que el de las lampreas'),
        dato(chondrichthyes, 'diez pares de nervios craneales'),
      ],
    },
    osteichthyes: { titulo: null, datos: [dato(osteichthyes, '10 pares de nervios craneales y un par')] },
    amphibia: { titulo: null, datos: [dato(amphibia, 'nervios craneales, con cerebelo y médula espinal')] },
    chelonia: null,
    sauria: null,
    serpentes: { titulo: null, datos: [dato(serpentes, 'inervadas por un gran paquete de terminaciones')] },
    crocodilia: {
      titulo: 'Doce pares de nervios craneales',
      datos: [dato(crocodilia, 'hay 12 pares de nervios craneales y un par')],
    },
    aves: { titulo: 'Cerebelo plegado', datos: [dato(aves, 'la superficie del cerebelo está aumentada por')] },
    mammalia: {
      titulo: 'Cerebro con circunvoluciones',
      datos: [dato(mammalia, 'presentan plegamientos (circunvoluciones)')],
    },
  },
  sentidos: {
    porifera: { titulo: null, datos: [dato(porifera, 'las células responden directamente a los estímulos')] },
    cnidaria: {
      titulo: 'Estatocistos y ocelos',
      datos: [
        dato(cnidaria, 'Estatocistos para la orientación en las medusas'),
        dato(cnidaria, 'ocelos simples; los cubozoos poseen ojos verdaderos'),
      ],
    },
    platyhelminthes: {
      titulo: 'Fotorreceptores concentrados en ocelos',
      datos: [dato(platyhelminthes, 'fotorreceptores concentrados en ocelos; no forman imágenes')],
    },
    annelida: {
      titulo: 'Órganos de tacto y gusto',
      datos: [dato(annelida, 'órganos para el tacto, el gusto y la percepción')],
    },
    mollusca: {
      titulo: 'Ojos, estatocistos y osfradios',
      datos: [
        dato(mollusca, 'tentáculos, los ojos, los estatocistos'),
        dato(mollusca, 'ofradios situados en la cavidad paleal'),
      ],
    },
    nemata: { titulo: null, datos: [dato(nemata, 'existen papilas sensitivas en el cuerpo')] },
    chelicerata: {
      titulo: 'Ojos compuestos, sin antenas',
      datos: [dato(chelicerata, 'Ojos compuestos laterales y/o ojos simples medianos')],
    },
    myriapoda: {
      titulo: 'Antenas y ocelos cefálicos',
      datos: [dato(myriapoda, 'La cabeza lleva antenas y por lo general ocelos')],
    },
    crustacea: { titulo: 'Ojo naupliano mediano', datos: [dato(crustacea, 'ojo naupliano mediano característico')] },
    insecta: {
      titulo: 'Órgano auditivo timpánico',
      datos: [dato(insecta, 'un órgano del oído con membrana timpánica')],
    },
    echinodermata: {
      titulo: 'Microlentes de calcita fotosensibles',
      datos: [dato(echinodermata, 'microlentes de calcita en las placas dorsales')],
    },
    chondrichthyes: {
      titulo: 'Ampollas de Lorenzini y línea lateral',
      datos: [
        dato(chondrichthyes, 'ampollas de Lorenzini en la cabeza'),
        dato(chondrichthyes, 'línea lateral con células sensitivas ciliadas'),
      ],
    },
    osteichthyes: {
      titulo: null,
      datos: [dato(osteichthyes, 'receptores de la línea lateral que detectan corrientes')],
    },
    amphibia: {
      titulo: 'Tímpano externo y párpados móviles',
      datos: [
        dato(amphibia, 'tímpano externo en las ranas y sapos'),
        dato(amphibia, 'los ojos frecuentemente con párpados móviles'),
      ],
    },
    chelonia: { titulo: 'Oído medio e interno', datos: [dato(chelonia, 'Tienen tanto oído medio como interno')] },
    sauria: { titulo: null, datos: [dato(sauria, 'A cada lado de la cabeza hay un tímpano externo')] },
    serpentes: {
      titulo: 'Órgano de Jacobson y foseta loreal',
      datos: [
        dato(serpentes, 'captadas por los órganos de Jacobson, fosetas'),
        dato(serpentes, 'presentan fosetas loreales termosensitivas'),
      ],
    },
    crocodilia: { titulo: null, datos: [dato(crocodilia, 'una cavidad timpánica u oído medio y el oído interno')] },
    aves: {
      titulo: 'Membrana nictitante',
      datos: [dato(aves, 'membrana nictitante que puede cubrir el globo ocular')],
    },
    mammalia: {
      titulo: 'Pabellón auricular y vibrisas',
      datos: [
        dato(mammalia, 'pabellón de la oreja es grande y móvil'),
        dato(mammalia, 'vibrisas (bigotes) son pelos sensoriales táctiles'),
      ],
    },
  },
  reproductor: {
    porifera: {
      titulo: 'Gemación y gémulas',
      datos: [
        dato(porifera, 'La reproducción asexual por gemación no es común'),
        dato(porifera, 'una masa de arqueocitos llenos de alimento es'),
      ],
    },
    cnidaria: { titulo: 'Gónadas definidas', datos: [dato(cnidaria, 'las gónadas forman los gametos en las medusas')] },
    platyhelminthes: {
      titulo: 'Hermafroditas con órganos copuladores',
      datos: [dato(platyhelminthes, 'con fecundación siempre interna y órganos copuladores')],
    },
    annelida: {
      titulo: 'Larva trocófora',
      datos: [dato(annelida, 'una fase larvaria llamada trocósfera en poliquetos')],
    },
    mollusca: { titulo: 'Nefridios como gonoductos', datos: [dato(mollusca, 'los nefridios actúan como gonoductos')] },
    nemata: {
      titulo: 'Sexos separados con cópula',
      datos: [dato(nemata, 'se insertan en la vulva durante la cópula')],
    },
    chelicerata: { titulo: null, datos: [dato(chelicerata, 'ponen huevos y el desarrollo puede ser')] },
    myriapoda: {
      titulo: 'Espermatóforos y gonoporos',
      datos: [dato(myriapoda, 'inseminación indirecta mediante espermatóforos')],
    },
    crustacea: { titulo: 'Larva nauplio', datos: [dato(crustacea, 'la larva nauplio, provista de un ojo naupliano')] },
    insecta: {
      titulo: 'Edeago y ovipositor',
      datos: [
        dato(insecta, 'un órgano copulador o edeago'),
        dato(insecta, 'los ovipositores u oviscaptos, de configuraciones'),
      ],
    },
    echinodermata: { titulo: null, datos: [dato(echinodermata, 'con fecundación externa en el agua')] },
    chondrichthyes: {
      titulo: 'Fecundación interna y ovoviviparidad',
      datos: [
        dato(chondrichthyes, 'introduce el esperma en la cloaca de la hembra'),
        dato(chondrichthyes, 'tiburones y rayas son ovovivíparos'),
      ],
    },
    osteichthyes: { titulo: null, datos: [dato(osteichthyes, 'con fecundación externa y algunas excepciones')] },
    amphibia: { titulo: null, datos: [dato(amphibia, 'colocan sus huevos en el agua')] },
    chelonia: {
      titulo: 'Huevo amniótico terrestre',
      datos: [dato(chelonia, 'entierran sus huevos amnióticos en la tierra')],
    },
    sauria: { titulo: 'Hemipenes', datos: [dato(sauria, 'El macho posee dos hemipenes')] },
    serpentes: { titulo: 'Placenta primitiva', datos: [dato(serpentes, 'donde se forma una placenta primitiva')] },
    crocodilia: {
      titulo: 'Pene único en la cloaca',
      datos: [dato(crocodilia, 'desembocan en el pene, ubicado en la pared inferior')],
    },
    aves: { titulo: 'Un solo ovario, el izquierdo', datos: [dato(aves, 'un solo ovario, en el lado izquierdo')] },
    mammalia: {
      titulo: 'Placenta y glándulas mamarias',
      datos: [dato(mammalia, 'se desarrolla en la placenta'), dato(mammalia, 'mediante las glándulas mamarias')],
    },
  },
};
