import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'hydrozoa',
  nombre: 'Hydrozoa',
  nombreComun: 'Hidrozoos',
  nivel: 'clase',
  padre: 'cnidaria',
  orden: 1,
  resumen: [
    {
      texto: 'Pueden presentar estructura de pólipo o de medusa (hidromedusa) y algunas especies pasan por ambas formas en su ciclo de vida; solitarios o coloniales (más frecuentes), de 5–15 cm.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [520, 522], cita: 'estructura de pólipo o de medusa (hidromedusa)' }],
    },
    {
      texto: 'Incluye pólipos solitarios (Hydra), pólipos coloniales marinos (Obelia, Plumularia, Millepora) e hidromedusas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [471, 472], cita: 'son pólipos coloniales marinos' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Hydra: cuerpo cilíndrico de unos pocos milímetros a un centímetro o más, de diámetro no mayor a 1 mm; el extremo aboral termina en un pedúnculo con disco basal que la fija al sustrato, y el oral tiene un cono llamado hipostoma con la boca y seis tentáculos alrededor de su base.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [347, 353], cita: 'De forma cilíndrica, miden unos pocos milímetros' }],
    },
    {
      texto: 'En los pólipos coloniales la colonia permanece unida al sustrato por el estolón o hidrorriza, del que parten las ramas (hidrocaulos) con los zooides en los extremos; las yemas quedan unidas al progenitor y cada pólipo queda conectado con los otros.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [472, 476], cita: 'permanecen unidas al sustrato por el estolón o hidrorriza' }],
    },
    {
      texto: 'El perisarco, cubierta quitinosa secretada por la epidermis, recubre cada hidrocaulo; si se extiende cubriendo al zooide se llama hidroteca (puede tener tapa u opérculo). Los organismos con teca son tecados; sin ella, atecados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [476, 480], cita: 'El perisarco, cubierta quitinosa secretada por la epidermis' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'En Hydra la epidermis tiene cinco tipos celulares: epiteliomusculares columnares con extensiones basales contráctiles, intersticiales (células germinales/formativas), cnidocitos, mucosas (abundantes en el disco basal) y receptoras/nerviosas (con cerda sensorial).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [355, 384], cita: 'se distinguen cinco tipos de células' }],
      },
      {
        texto: 'En Hydra la gastrodermis contiene células nutritivo-musculares monociliadas (con extensiones contráctiles orientadas perpendicularmente al eje del cuerpo, formando una capa circular), células enzimático-glandulares ciliadas en forma de cuña (abundantes alrededor de la boca) y células nerviosas en menor número.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [387, 401], cita: 'Células nutritivo musculares equivalentes' }],
      },
    ],
    muscular: [
      {
        texto: 'En las hidromedusas el movimiento se debe a los músculos del borde de la umbela y a los músculos radiales de la subumbela: se mueven contrayéndolos y expulsando el agua del interior (movimiento en gradiente vertical).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [523, 525], cita: 'músculos del borde de la umbela' }],
      },
    ],
    digestivo: [
      {
        texto: 'En las colonias hidroides existe polimorfismo con funciones repartidas entre zooides: gastrozoides o nutricios (digestión extracelular), hidrantes (circulación del agua), dactilozoides (captura y defensa) y gonozoides (reproducción).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [482, 487], cita: 'polimorfismo es característico de estas colonias' }],
      },
    ],
    nervioso: [
      {
        texto: 'En Hydra las células nerviosas se localizan en la base de la epidermis, próximas a la mesoglea.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 385], cita: 'células nerviosas se localizan en la base de la epidermis' }],
      },
      {
        texto: 'En las hidromedusas el sistema nervioso está más desarrollado que en los pólipos: hay un anillo nervioso externo junto al borde de la umbela y uno interno paralelo a él.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [528, 530], cita: 'anillo nervioso externo junto al borde de la umbela' }],
      },
    ],
    sentidos: [
      {
        texto: 'Las hidromedusas poseen estatocistos u ocelos fotorreceptores en la parte externa de los bulbos tentaculares, compuestos por manchas pigmentarias y células fotorreceptoras; los estatocistos son una vesícula con un cilio y un cálculo de CaSO4.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [530, 533], cita: 'estatocistos u ocelos fotorreceptores' }],
      },
    ],
    reproductor: [
      {
        texto: 'En Hydra (la mayoría dioicas) las células germinales se forman a partir de células intersticiales que se agrupan para formar ovarios o testículos; cada ovario produce un solo óvulo y los testículos son protuberancias cónicas con una chimenea por donde sale el esperma.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [426, 438], cita: 'La mayoría de las hidras son dioicas' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios; el intercambio gaseoso se produce por difusión a través de la superficie del cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Los pólipos y el cenosarco pueden secretar envolturas quitinosas o recubrimientos calcáreos.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Hydrozoa/', titulo: 'Hydrozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sin aparato circulatorio; en las colonias los estolones y la cavidad gastrovascular compartida distribuyen el alimento entre los pólipos.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Hydrozoa/', titulo: 'Hydrozoa - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores; los desechos salen por la única abertura de la cavidad gastrovascular.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://en.wikipedia.org/wiki/Cnidaria', titulo: 'Cnidaria - Wikipedia', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Colonias hidroides',
      datos: [
        {
          texto: 'Los gonozoides pueden estar aislados, formarse en la base de los gastrozoides o constituir un gonangium con un eje longitudinal (blastostilo) del que surgen yemas medusoides asexuales.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [487, 491], cita: 'una especie de gonangium' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En Hydra, durante los meses cálidos, hay reproducción por gemación: una yema evagina la pared con una extensión de la cavidad gastrovascular, forma boca y tentáculos y se desprende como hidra independiente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [415, 419], cita: 'las hidras se reproducen por gemación' }],
    },
    {
      texto: 'En Hydra la reproducción sexual tiene lugar sobre todo en otoño, produciendo huevos que son la forma de supervivencia invernal; el esperma penetra la superficie expuesta del huevo fecundándolo in situ, y el embrión encapsulado en cubierta quitinosa pasa el invierno hasta que en primavera emerge una joven hidra.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [422, 443], cita: 'produciendo huevos que son la forma de supervivencia' }],
    },
    {
      texto: 'A partir de células gastrodérmicas y epidérmicas aisladas de Hydra puede regenerarse un individuo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 421], cita: 'puede regenerarse un individuo' }],
    },
    {
      texto: 'Las hidromedusas se reproducen asexualmente por yemas en el manubrio o en la base de los tentáculos, o por fisión transversal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [533, 535], cita: 'reproducen asexualmente mediante la formación de yemas' }],
    },
    {
      texto: 'La mayoría de las hidromedusas son dioicas con fecundación externa (en el mar o sobre el manubrio) o interna (el cigoto se desarrolla dentro de la gónada femenina). De la larva plánula ciliada surge una colonia tras fijarse (ciclo de Obelia, Pernaria, Syncorina); Tubularia, Setularia y Plumularia no tienen medusa libre (gónadas gonóforos o esporosacos) y su larva es la actínula.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [535, 541], cita: 'Existe una larva plánula ciliada' }],
    },
  ],
  bioecologia: [
    {
      texto: 'En Hydra, el pedúnculo y los tentáculos pueden extenderse, contraerse o inclinarse; las hidras pueden desprenderse y cambiar de lugar dando saltos o flotando.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [403, 405], cita: 'pueden desprenderse y cambiar de lugar' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Hydra',
      descripcion: 'pólipo solitario de agua dulce',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [346, 347], cita: 'Hydra (Clase Hidrozoa)' }],
    },
    {
      nombre: 'Obelia',
      descripcion: 'pólipo colonial marino con ciclo de medusa libre',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [471, 472], cita: 'Millepora, Plumularia, Obelia' }],
    },
    {
      nombre: 'Plumularia',
      descripcion: 'pólipo colonial; no tiene medusa libre y su larva es la actínula',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [539, 541], cita: 'su larva se llama actínula' }],
    },
    {
      nombre: 'Millepora',
      descripcion: 'pólipo colonial marino',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [471, 471], cita: 'Millepora, Plumularia, Obelia' }],
    },
    {
      nombre: 'Tubularia',
      descripcion: 'pólipo colonial sin medusa libre',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [539, 541], cita: 'Tubularia, Setularia, Plumularia' }],
    },
  ],
  notas: [],
};

export default taxon;
