import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'gastrotricha',
  nombre: 'Gastrotricha',
  nombreComun: 'Gastrotricos',
  nivel: 'phylum',
  padre: 'lophotrochozoa',
  orden: 2,
  resumen: [
    {
      texto: '(Del Gr. gaster, gastros, estómago, vientre y thrix, tricos, pelo.) Aproximadamente unas 430 especies marinas y dulceacuícolas; su longitud oscila entre 150-1000 mm, algunos llegan a medir 4 mm.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [392, 397], cita: 'unas 430 especies marinas y' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo tiene forma de botella o de cinto, aplanado ventralmente y arqueado dorsalmente. La cabeza anterior lleva órganos sensoriales, el encéfalo y la faringe; un tronco alargado posterior contiene el digestivo medio y los órganos reproductores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [399, 401], cita: 'forma de botella o de cinto' }],
    },
    {
      texto: 'En la parte posterior el tronco suele tener dos o más órganos adhesivos para adherirse temporalmente al sustrato. La superficie ventral aplanada posee cilios locomotores y hay cilios en ciertas áreas cefálicas; dorsalmente pueden llevar placas, escamas y/o espinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [402, 404], cita: 'órganos adhesivos que sirven para' }],
    },
  ],
  embriologia: {},
  sistemas: {
    muscular: [
      {
        texto: 'La capa subepidérmica está provista de fibras musculares circulares, en tanto que las longitudinales se disponen en haces independientes.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [406, 408], cita: 'fibras musculares circulares' }],
      },
    ],
    digestivo: [
      {
        texto: 'Boca, faringe (tubo muscular, glandular y alargado que se comunica al exterior por un par de poros) y digestivo medio (tubo cilíndrico celular que se adelgaza para unirse al ano posterior y ventral). Se alimentan de pequeñas partículas vivas o muertas (bacterias, diatomeas, pequeños protozoos) que ingieren por el bombeo de la faringe muscular; los poros faríngeos eliminan el exceso de agua. La digestión en el digestivo medio combina procesos extra e intracelulares.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [410, 416], cita: 'tubo muscular, glandular y alargado' }],
      },
    ],
    excretor: [
      {
        texto: 'La excreción la realizan un par o varios pares de protonefridios dispuestos a lo largo del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [425, 427], cita: 'protonefridios dispuestos a lo largo' }],
      },
    ],
    nervioso: [
      {
        texto: 'Encéfalo con dos ganglios, uno a cada lado de la faringe; cada ganglio origina un cordón nervioso que se extiende a lo largo del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [429, 431], cita: 'un encéfalo con dos ganglios' }],
      },
    ],
    sentidos: [
      {
        texto: 'Órganos sensoriales: setas y penachos ciliares mecanoreceptores, fosas ciliadas y apéndices engrosados, carnosos y quimiorreceptores, ocelos ciliares simples y fotorreceptores, y setas sensoriales sobre la superficie general del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [433, 435], cita: 'setas y penachos ciliares mecanoreceptores' }],
      },
    ],
    reproductor: [
      {
        texto: 'Las formas marinas son hermafroditas: cada individuo posee un par de testículos anteriores y un ovario posterior que produce uno a cinco grandes óvulos; los espermiductos llevan los espermatozoides a los gonoporos masculinos en el segundo tercio del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [437, 440], cita: 'Las formas marinas son hermafroditas' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Antes de la cópula el órgano copulador se carga de esperma desde los gonoporos masculinos y luego lo transfiere a su pareja, que lo almacena en un receptáculo seminal; los óvulos fecundados quedan en libertad por ruptura de la pared del cuerpo; cada huevo tiene cubierta resistente y a veces ganchos para adherirse.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [440, 444], cita: 'el órgano copulador' }],
    },
    {
      texto: 'El desarrollo es directo. Las especies de agua dulce, en cambio, son partenogenéticas y solo se conocen las hembras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [445, 446], cita: 'son partenogenéticas y solo se' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en los sedimentos del fondo, del detrito superficial, de las superficies de plantas y animales sumergidos y de las películas de agua que rodean las partículas del suelo; son comunes en lagos, lagunas y arroyos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [394, 396], cita: 'los sedimentos del fondo' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
