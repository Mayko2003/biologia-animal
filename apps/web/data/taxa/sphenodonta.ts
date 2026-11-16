import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'sphenodonta',
  nombre: 'Sphenodonta',
  nombreComun: 'Tuátaras (esfenodontes)',
  sinonimos: ['Rhynchocephalia'],
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 6,
  resumen: [
    {
      texto: 'Orden de la subclase Diapsida, según el apunte: los tuátaras o esfenodontes (género Sphenodon), reptiles endémicos de las islas aledañas a Nueva Zelanda pertenecientes a la familia Sphenodontidae; el significado de su nombre común proviene del maorí y quiere decir "espalda espinosa".',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [563, 568], cita: 'ORDEN SPHENODONTA (Tuátara)' }],
    },
    {
      texto: 'A primera vista son parecidos a las iguanas —por convergencia evolutiva—, con las que, sin embargo, no están cercanamente emparentados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [568, 570], cita: 'por convergencia evolutiva' }],
    },
    {
      texto: 'Son los reptiles diápsidos más antiguos que sobreviven: existen fósiles mesozoicos muy similares, como Homoeosaurus del Jurásico; se los califica como fósiles vivientes porque son los únicos representantes cuyos antecesores cercanos existieron hace ya 200 millones de años, a la par de los dinosaurios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [576, 580], cita: 'los reptiles diápsidos más antiguos' }],
    },
    {
      texto: 'Sphenodon representa una de las más bajas tasas de evolución conocidas en los vertebrados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [592, 594], cita: 'tasas de evolución conocidas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Animal con aspecto de lagarto, de hasta unos 70 cm de longitud.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [572, 573], cita: 'hasta unos 70 cm' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Entre los numerosos caracteres que se han conservado sin modificar durante 200 millones de años se hallan dos fosas temporales completas en el cráneo (cráneo diápsido).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [583, 585], cita: 'dos fosas temporales completas en el cráneo' }],
      },
    ],
    sentidos: [
      {
        texto: 'Poseen un ojo pineal o parietal bien desarrollado (el orificio pineal era muy patente en los primeros diápsidos), ubicado en la bóveda de la cabeza, con una retina, cristalino y conexiones nerviosas; por estar debajo de la piel solo puede registrar cambios en la intensidad de la luz; quizá desarrolló una importante función como órgano sensorial en los reptiles primitivos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [585, 588], cita: 'una retina, cristalino y conexiones nerviosas' }],
      },
    ],
    reproductor: [
      {
        texto: 'Es el único reptil actual cuyos machos carecen de hemipenes (órgano copulador): copulan a través de sus cloacas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [589, 590], cita: 'carecen de hemipenes (órgano copulador)' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Insectívoros y carnívoros; viven en madrigueras; son animales con una lenta tasa de crecimiento y larga vida —se ha registrado un caso que ha vivido hasta los 77 años.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [572, 574], cita: 'Viven en madrigueras' }],
    },
    {
      texto: 'Estas especies solo se encuentran en las islas de la costa de Nueva Zelanda; fueron llevados casi a la extinción con la llegada del hombre, debido a la pérdida de su hábitat y a la introducción de nuevas especies —en concreto ratas y mustélidos—; fueron totalmente exterminados de las islas más grandes y actualmente son especies protegidas, reintroducidas en islotes y en parques nacionales de las islas grandes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [580, 581], cita: 'islas de la costa de Nueva' }, { tipo: 'apunte', archivo: A, lineas: [596, 600], cita: 'casi a la extinción con' }],
    },
    {
      texto: 'El calentamiento global supone una grave amenaza para su supervivencia: al aumentar las temperaturas de las zonas de cría existe un alto riesgo de que en un futuro cercano solo nazcan animales de un solo sexo; en el caso de los tuátaras esto podría suceder si las temperaturas en época de cría excediesen los 22 grados dentro de unas décadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [602, 607], cita: 'excediesen los 22 grados' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Sphenodon',
      descripcion: 'género de los tuátaras, "fósiles vivientes" endémicos de Nueva Zelanda',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [566, 567], cita: 'esfenodontes (género Sphenodon) son' }],
    },
    {
      nombre: 'Homoeosaurus',
      descripcion: 'fósil mesozoico del Jurásico muy similar al tuátara',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [577, 577], cita: 'como Homoeosaurus del Jurásico' }],
    },
  ],
  notas: [],
};

export default taxon;
