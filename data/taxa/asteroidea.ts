import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'asteroidea',
  nombre: 'Asteroidea',
  nombreComun: 'Estrellas de mar',
  nivel: 'clase',
  padre: 'echinodermata',
  orden: 1,
  resumen: [
    {
      texto: 'Con aproximadamente 1500 especies conocidas, son equinodermos de forma estrellada y vida libre, con el cuerpo formado por una serie de radios o brazos que salen de un disco central; se desplazan arrastrándose sobre rocas y conchas o viven enterradas en fondos arenosos. Cosmopolitas, habitan generalmente en aguas poco profundas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [71, 83], cita: 'radios o brazos' }],
    },
    {
      texto: 'Generalmente poseen colores rojos, anaranjados, azules, púrpuras o verdes, o combinaciones de dichos colores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [85, 87], cita: 'púrpuras o verdes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Típicamente pentámeras: la mayor parte presenta 5 brazos, aunque hay especies con 7, 40 o más; miden por lo general de 12 a 24 cm. Los brazos no se distinguen con facilidad del disco central.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [90, 100], cita: 'presenta 5 brazos' }],
    },
    {
      texto: 'La boca está en el centro de la cara inferior del disco (superficie oral); desde ella parte radialmente un surco hacia cada brazo —los surcos ambulacrales— que presenta 2 o 4 filas de pies ambulacrales o podios. En el extremo de cada brazo hay pies ambulacrales sensoriales y un pequeño ocelo rojo; en la superficie aboral se ubican el ano y la placa madreporito.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [102, 114], cita: 'conocen como surcos ambulacrales' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La epidermis está formada por células epiteliales monociliadas y otras sin cilios, células glandulares mucosas y células sensoriales ciliadas; los detritos quedan retenidos en el moco y son expulsados por los cilios.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [121, 127], cita: 'células epiteliales monociliadas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Bajo el tegumento hay una dermis de tejido conjuntivo con los elementos esqueléticos rígidos: osículos en forma de bastones, cruces o placas, de calcita ricos en magnesio; las espinas y los tubérculos también forman parte del esqueleto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [129, 147], cita: 'bastones, cruces o placa' }],
      },
    ],
    muscular: [
      {
        texto: 'Bajo la dermis hay una capa de músculos circulares y otra más externa de músculos longitudinales; la superficie interna bordea la cavidad celomática revestida por un peritoneo ciliado.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 151], cita: 'capa de músculos circulares' }],
      },
    ],
    digestivo: [
      {
        texto: 'De disposición radial: boca en una membrana peristomial con esfínter, corto esófago y un estómago dividido en estómago cardíaco (oral, musculoso y con pliegues) y estómago pilórico (aboral), donde desembocan los ciegos hepáticos o pilóricos (2 en cada brazo); un corto intestino con ciegos rectales va al ano aboral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [201, 223], cita: 'el estómago cardíaco' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En la superficie aboral hay numerosas evaginaciones, las pápulas, que actúan como branquias dérmicas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 159], cita: 'como branquias dérmicas' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio sanguíneo está reducido y es difícil de ver: vasos que rodean la boca y 5 vasos radiales (uno por brazo) situados debajo del canal radial del sistema ambulacral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [241, 243], cita: 'está reducido y es' }],
      },
    ],
    nervioso: [
      {
        texto: 'Un nervio circumoral con cordones nerviosos radiales en los brazos: en cada brazo un cordón en la epidermis dentro del surco ambulacral, un par de nervios profundos y un cordón peritoneal aboral; pequeños nervios inervan los pies ambulacrales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [245, 249], cita: 'un nervio circumoral' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos están separados y la fecundación es externa; en el celoma de cada brazo hay un par de gónadas con un conducto que se abre en la parte aboral del disco central.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [251, 253], cita: 'fecundación es externa' }],
      },
    ],
    excretor: [
      {
        texto: 'Carecen de órganos excretores diferenciados.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [56, 56], cita: 'órganos excretores diferenciados' }],
      },
      {
        texto: 'Sin órganos excretores distintos: los desechos nitrogenados salen por los pies ambulacrales y las pápulas, y los celomocitos fagocitan residuos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Asteroidea', titulo: 'Asteroidea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Sistema ambulacral',
      datos: [
        {
          texto: 'Parte especializada del celoma tapizada por un epitelio ciliado: el agua penetra por el madreporito, sigue por el conducto pétreo (hidrófobo) hasta el canal anular o anillo acuífero (con los cuerpos de Tiedermann que producen amebocitos y las vesículas de Poli) y de allí sale un canal radial ciliado hacia cada brazo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [161, 173], cita: 'lleva al conducto pétreo' }],
        },
        {
          texto: 'De cada canal radial salen canales laterales provistos de una válvula que terminan en una ampolla (saco muscular aboral) y un pie ambulacral; al contraerse la ampolla el líquido extiende el pie, que puede arrollarse, y al retroceder el líquido el pie se adhiere como ventosa.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [181, 199], cita: 'una ampolla y un' }],
        },
        {
          texto: 'Los pies ambulacrales sirven para mantener a la estrella en el sustrato, para la locomoción y para la captura del alimento; cada uno puede actuar de forma independiente o coordinada.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [197, 199], cita: 'la captura del alimento' }],
        },
      ],
    },
    {
      titulo: 'Pedicelarios',
      datos: [
        {
          texto: 'Pequeños apéndices en forma de mandíbulas sobre la superficie del cuerpo, de función defensiva sobre todo contra pequeños animales que puedan establecerse sobre el animal.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [153, 155], cita: 'los pedicelarios cuya función' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La larva es nadadora, ciliada, bilateral y se alimenta: se llama bipinnaria y, cuando aparecen las estructuras de fijación, braquiolaria; tras una metamorfosis aparece el adulto con simetría radial.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [255, 257], cita: 'se llama bipinnaria' }],
    },
    {
      texto: 'Las estrellas de mar pueden regenerar sus brazos cuando los pierden o cuando se desprenden de ellos en una batalla; este fenómeno se llama autotomía.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [259, 261], cita: 'nombre de autotomía' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Se alimentan de moluscos, crustáceos, gusanos tubícolas, otros invertebrados y pequeños peces; las especies de brazos cortos ingieren las presas enteras y las de brazos largos evierten el estómago para digerirlas parcialmente fuera del cuerpo; las que comen bivalvos deslizan el estómago entre las valvas y causan estragos en criaderos de ostras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 235], cita: 'evierten su estómago' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Pycnodia',
      descripcion: 'género de estrella con numerosos brazos que puede medir 1 m de lado a lado',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [95, 96], cita: 'puede llegar a medir' }],
    },
  ],
  notas: [],
};

export default taxon;
