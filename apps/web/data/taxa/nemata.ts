import type { Taxon } from '@/lib/types';

const A = 'nematodos.md' as const;
const P = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'nemata',
  nombre: 'Nemata',
  nombreComun: 'Nematodos',
  sinonimos: ['Nematoda'],
  nivel: 'phylum',
  padre: 'ecdysozoa',
  orden: 1,
  resumen: [
    {
      texto: '(nematos=filamento.) Comprende gusanos cilíndricos y no segmentados, de cuerpo alargado y cutícula resistente; el tubo digestivo es completo y permanente. Muchos viven libremente en el suelo y en el agua, otros son parásitos de animales y plantas, y existen formas predadoras. Suelen ser pequeños (menos de 1 mm) aunque algunos alcanzan un metro; el dimorfismo sexual es frecuente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [16, 20], cita: 'gusanos cilíndricos y no segmentados' }],
    },
    {
      texto: 'Los ecdisozoos, entre los que están los nematodos, presentan el fenómeno de ecdisis o muda, a partir del cual cambian o renuevan su exoesqueleto o cutícula para poder crecer.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [11, 14], cita: 'ecdisis o muda' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Ascaris lumbricoides la hembra alcanza 20-40 cm de longitud y unos 6 mm de diámetro máximo; el macho llega a 15-25 cm. Los ejemplares frescos son de color amarillo o rosado.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [24, 26], cita: 'la hembra alcanza 20-40' }],
    },
    {
      texto: 'En Ascaris lumbricoides el cuerpo es alargado y redondo, aguzado hacia ambos extremos, cubierto por una cutícula lisa, resistente y elástica con pequeñas estrías. A lo largo del cuerpo se distinguen cuatro líneas longitudinales blancuzcas: una dorsal, otra ventral y dos laterales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 34], cita: 'cuatro líneas longitudinales blancuzcas' }],
    },
    {
      texto: 'En Ascaris lumbricoides la boca se abre en el extremo anterior entre tres labios redondeados; el ano es una abertura transversal próxima al extremo posterior ventral. Los machos tienen el extremo posterior muy encorvado y dos espículas copuladoras que salen del poro genital situado dentro del ano; en la hembra la vulva ocupa una posición ventral mediana aproximadamente a un tercio del extremo anterior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [36, 46], cita: 'tres labios redondeados' }],
    },
  ],
  embriologia: {
    segmentacion: {
      valor: 'en-T',
      fuentes: [{ tipo: 'apunte', archivo: P, lineas: [17, 19], cita: 'huevo en T (como' }],
    },
    cavidad: {
      valor: 'pseudocelomado',
      nota: 'Vermes seudocelomados; la presión del líquido seudocelomático mantiene cerrada la faringe.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematoda', titulo: 'Nematoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    capas: {
      valor: 'triblastico',
      nota: 'Seudocelomado y protostomado: condición propia de triblásticos.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematoda', titulo: 'Nematoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematoda', titulo: 'Nematoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'boca',
      nota: 'Los nematodos y sus parientes cercanos se cuentan entre los metazoos protostomados.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematoda', titulo: 'Nematoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'En Ascaris lumbricoides la pared del cuerpo es delgada y consta de: 1) una cutícula no celular segregada por la epidermis, 2) la epidermis sincitial (un delgado estrato protoplasmático con núcleos pero sin paredes celulares), y 3) el estrato muscular de fibras longitudinales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [48, 50], cita: 'una cutícula no celular' }],
      },
    ],
    muscular: [
      {
        texto: 'En Ascaris lumbricoides el estrato más interno de la pared del cuerpo es muscular, de fibras longitudinales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [48, 50], cita: 'estrato muscular de fibras' }],
      },
    ],
    digestivo: [
      {
        texto: 'En Ascaris lumbricoides el tubo digestivo es recto, se extiende longitudinalmente a lo largo del cuerpo y está formado por la boca, una pequeña cavidad bucal, una faringe musculosa y chupadora o esófago que engulle el alimento, un largo y estrecho intestino no muscular donde se absorbe el alimento digerido, y un corto recto que descarga por el ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [52, 55], cita: 'El tubo digestivo es recto' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En Ascaris lumbricoides no hay órganos respiratorios.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [57, 57], cita: 'órganos circulatorios ni respiratorios' }],
      },
    ],
    circulatorio: [
      {
        texto: 'En Ascaris lumbricoides no hay órganos circulatorios.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [57, 57], cita: 'No posee órganos circulatorios' }],
      },
    ],
    excretor: [
      {
        texto: 'En Ascaris lumbricoides la parte interna de cada línea lateral contiene un conducto excretor que se abre al exterior por un poro ventral situado detrás de la boca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [58, 60], cita: 'un conducto excretor' }],
      },
    ],
    nervioso: [
      {
        texto: 'En Ascaris lumbricoides hay un anillo nervioso que rodea al esófago, conectado con seis cortos nervios anteriores y con seis cordones nerviosos posteriores, un cordón nervioso central y otro dorsal situados sobre la línea longitudinal correspondiente, con varias ramas laterales y conectivos transversales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [67, 70], cita: 'un anillo nervioso' }],
      },
    ],
    sentidos: [
      {
        texto: 'En Ascaris lumbricoides existen papilas sensitivas en el cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [70, 70], cita: 'cuerpo papilas sensitivas' }],
      },
    ],
    reproductor: [
      {
        texto: 'En Ascaris lumbricoides los sexos son separados. El sistema reproductor masculino consta de dos testículos, vasos deferentes, vesícula seminal, conducto eyaculador y un saco con dos dardos (=espículas) que se insertan en la vulva durante la cópula. El femenino posee un ovario, un oviducto y un útero al que le continúa la vagina que se abre en la vulva.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 84], cita: 'sistema reproductor masculino' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto mineralizado; la cutícula escleroproteica y la presión del líquido seudocelomático dan rigidez al cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Nematoda', titulo: 'Nematoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Espículas copuladoras',
      datos: [
        {
          texto: 'En Ascaris lumbricoides los machos tienen dos espículas copuladoras (dardos) que salen del poro genital masculino situado dentro del ano y se insertan en la vulva de la hembra durante la cópula.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [40, 80], cita: 'dos dardos (=espículas)' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En Ascaris lumbricoides el adulto vive parásito dentro del intestino del hospedero y machos y hembras copulan dentro de él; los huevos, recubiertos por una cáscara resistente, salen con las heces (una hembra puede contener hasta 27 millones de huevos y poner 200 mil por día). Dentro del huevo se forma la primera forma larval.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [86, 95], cita: 'hasta 27 millones de huevos' }],
    },
    {
      texto: 'En Ascaris lumbricoides, si los huevos con embrión son engullidos por un hospedero, las larvas salen del huevo en el intestino, penetran las venas o vasos linfáticos de la pared intestinal, pasan al corazón y los capilares pulmonares, irrumpen en los conductos aéreos y se desplazan por tráquea, esófago y estómago de nuevo al intestino, donde alcanzan la madurez.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [94, 99], cita: 'los capilares pulmonares' }],
    },
    {
      texto: 'Para completar el ciclo biológico no es necesario hospedero intermediario.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [101, 101], cita: 'no es necesario hospedero intermediario' }],
    },
    {
      texto: 'En Ascaris suum el ciclo de vida puede ser directo o indirecto con anfitriones paraténicos: el cerdo ingiere el huevo con una larva L2 dentro; la larva migra al hígado, muda a L3, migra a los pulmones, entra en los alvéolos, es expectorada y tragada (migración hepato-traqueal); entonces muda dos veces y se convierte en adulto. Los hospedadores paraténicos (escarabajos, lombrices de tierra) conservan las larvas L2 en sus tejidos hasta que un cerdo los come.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [125, 134], cita: 'conoce como migración hepato-traqueal' }],
    },
    {
      texto: 'En Trichinella spiralis las hembras son vivíparas: penetran en la pared del intestino y cada una produce hasta 1500 larvas vivas de 0,1 mm que penetran en la linfa, son transportadas por la corriente circulatoria y penetran en los músculos estriados, donde se enrollan y enquistan calcificándose.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [141, 148], cita: 'las hembras, que son vivíparas' }],
    },
  ],
  bioecologia: [
    {
      texto: 'El paso de muchas larvas de áscaris por los pulmones puede producir inflamación local o neumonía; los adultos intestinales producen secreciones tóxicas y pueden obstruir el intestino o invadir otros órganos causando enfermedades serias o la muerte del hospedero.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [109, 114], cita: 'inflamación local o incluso' }],
    },
    {
      texto: 'Trichinella spiralis produce la triquinosis, que puede ser muy grave y terminar con la muerte; el hombre se infecta comiendo cerdo con quistes microscópicos, y la única protección es cocer completamente la carne (58 °C por lo menos) o congelarla a –23 °C durante tres días.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [152, 168], cita: 'la enfermedad llamada triquinosis' }],
    },
    {
      texto: 'Meloidogyne es un nemátodo fitófago de la familia Heteroderidae, de distribución mundial, que ataca raíces de plantas (tomate, tabaco, algodón, etc.); deforma las células normales de las raíces generando células gigantes y produciendo agallas ("nudo-raíz").',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [175, 180], cita: 'un nemátodo fitófago' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Ascaris lumbricoides',
      descripcion: 'lombriz intestinal común del hombre; parásito del intestino con ciclo directo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 23], cita: 'la lombriz intestinal común' }],
    },
    {
      nombre: 'Ascaris suum',
      descripcion: 'gusano redondo grande de los cerdos; produce ascariasis de distribución mundial',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [116, 118], cita: 'gusano redondo grande de' }],
    },
    {
      nombre: 'Trichinella spiralis',
      descripcion: 'triquina; larva enquistada en músculos estriados de cerdos, ratas, hombre, gatos, perros y osos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [136, 138], cita: 'pequeña larva enquistada en' }],
    },
    {
      nombre: 'Meloidogyne',
      descripcion: 'nemátodo fitófago formador de agallas en raíces; los juveniles J2 invaden raíces y tubérculos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [182, 184], cita: 'juveniles del segundo estadío' }],
    },
  ],
  notas: [],
};

export default taxon;
