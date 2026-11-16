import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'aves',
  nombre: 'Aves',
  nombreComun: 'Aves',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 5,
  resumen: [
    {
      texto: 'Clase de gnatóstomos (del latín, plural de avis = pájaro); son los vertebrados más conocidos y más fáciles de observar y de reconocer.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [8, 8], cita: 'plural de avis= pájaro' }, { tipo: 'apunte', archivo: A, lineas: [12, 12], cita: 'Son los vertebrados más conocidos' }],
    },
    {
      texto: 'Todas las aves poseen plumas, que recubren y aíslan el cuerpo haciendo posible la regulación de la temperatura (homeotermia o endotermia) y facilitan el vuelo; no existen otros animales con plumas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [13, 16], cita: 'Todas las aves poseen plumas' }],
    },
    {
      texto: 'La capacidad de volar les permitió ocupar numerosos ambientes vedados para otros animales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [18, 20], cita: 'capacidad de volar les permitió a las aves' }],
    },
    {
      texto: 'Comparten con los mamíferos el máximo desarrollo de órganos del reino animal, pero toda su anatomía está diseñada en torno al vuelo: alas, huesos ligeros y huecos pero rígidos, respiración muy eficiente y termorreguladora, metabolismo alto, circulación de alta presión, digestión rápida y un sistema nervioso y sentidos agudos, en especial la visión.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [23, 35], cita: 'toda su anatomía está diseñada en torno al vuelo' }],
    },
    {
      texto: 'Aparecieron hace aproximadamente 130 millones de años; hoy se conocen unas 8600 especies distribuidas por prácticamente todo el globo, y son el grupo más numeroso de vertebrados con excepción de los peces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 40], cita: 'Aparecieron aproximadamente hace 130 millones de años' }],
    },
    {
      texto: 'Según el apunte, la sistemática actual reconoce dos subclases: Sauriuria (infraclase Archaeornithes, con Archaeopteryx) y Ornituria (infraclase Neornithes, con los superórdenes Paleognatha y Neognatha).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [371, 373], cita: 'reconoce dos subclases' }, { tipo: 'apunte', archivo: A, lineas: [386, 387], cita: 'tenemos la infraclase: Neornithes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En la gallina doméstica (el pollo), organismo tipo del apunte, el cuerpo consta de una cabeza diferenciada, un cuello largo y flexible y un tronco robusto y fusiforme.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [47, 47], cita: 'La gallina doméstica nos sirve como ejemplo' }, { tipo: 'apunte', archivo: A, lineas: [58, 59], cita: 'El pollo tiene el cuerpo compuesto por una cabeza diferenciada' }],
    },
    {
      texto: 'En la gallina, las extremidades anteriores, transformadas en alas, se insertan en la parte superior del dorso y poseen plumas voladoras o remeras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [60, 61], cita: 'transformadas en alas se insertan en la parte superior del dorso' }],
    },
    {
      texto: 'En cada pata los segmentos superiores son musculosos, mientras que la caña inferior es delgada, alargada, con tendones (no músculos) y revestida de escamas córneas, al igual que los cuatro dedos, que terminan en una uña córnea.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [62, 64], cita: 'la caña inferior es delgada' }],
    },
    {
      texto: 'La cola es corta y termina en un grupo de plumas largas (timoneras) dispuestas en forma de abanico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [64, 65], cita: 'La cola es corta y termina en un' }],
    },
    {
      texto: 'La boca se prolonga en un pico cubierto por una epidermis córnea, con dos aberturas nasales alargadas en la mandíbula superior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [67, 68], cita: 'La boca se prolonga en un pico' }],
    },
    {
      texto: 'La cresta carnosa y mediana, las barbillas laterales y los espolones de las patas son particularidades del pollo y de pocas otras aves; debajo de la cola se abre el ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 75], cita: 'La cresta carnosa y mediana' }],
    },
    {
      texto: 'La coloración es variada y llamativa: son pocas las aves de color uniforme y la mayor parte de las especies posee manchas, listas o bandas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [278, 279], cita: 'La coloración es variada y llamativa' }],
    },
    {
      texto: 'El color se asemeja a menudo al del ambiente; esta coloración protectora las hace menos visibles, y a ello contribuye el contrasombreado: las partes superiores, que reciben más luz, son más oscuras que la superficie inferior.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [280, 283], cita: 'El color se asemeja a menudo al del ambiente' }],
    },
    {
      texto: 'Las aves de regiones áridas tienden a colores pálidos y las de lugares húmedos son más oscuras; a menudo los machos son más brillantes que las hembras, y en algunas especies ambos sexos adquieren un plumaje nupcial en primavera y vuelven a colores oscuros en invierno.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [283, 288], cita: 'Las aves de las regiones áridas tienden' }],
    },
    {
      texto: 'El pico sirve de boca y de manos: se emplea para obtener o sostener el alimento, arreglar el plumaje, defenderse y construir o arreglar el nido; su cubierta córnea se desgasta con el uso, por lo que crece continuamente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [290, 294], cita: 'El pico de las aves sirve de boca y de manos' }],
    },
    {
      texto: 'Hay distintos tipos de pico según las costumbres alimentarias: largo y fino (penetrante) en las que buscan insectos en las grietas, robusto y alargado en los pájaros carpinteros, y ancho y delgado en golondrinas y chotacabras, que cazan insectos en vuelo (insectívoros).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [294, 298], cita: 'Existen diferentes tipos de picos de acuerdo' }],
    },
    {
      texto: 'El pico es robusto, cónico y corto en gorriones y pinzones (granívoros), de bordes cortantes en halcones, lechuzas y loros, que se alimentan de carne y frutos, y de bordes aserrados en los patos, que filtran pequeñas partículas del agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 302], cita: 'robusto, cónico y corto en los gorriones' }],
    },
    {
      texto: 'Las patas también denotan los hábitos: largas en las zancudas, con membranas interdigitales completas o no en nadadoras y remadoras, con dedos fuertes, curvados y con garras en las rapaces, prensoras en las aves de jaula o canoras, y con dos dedos hacia delante (1° y 3°) y dos hacia atrás (2° y 4°) en las trepadoras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [308, 314], cita: 'también denotan los hábitos de las aves' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'En la gallina, la piel es blanda y flexible y está laxamente unida a los músculos que cubre.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [77, 78], cita: 'La piel es blanda y flexible' }],
      },
      {
        texto: 'La piel carece de glándulas, excepto la glándula del aceite o uropigea, sobre la base de la cola, que segrega una sustancia aceitosa para untar e impermeabilizar las plumas y lubricar el pico evitando que sea quebradizo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [78, 80], cita: 'excepto la glándula del aceite o uropigea' }],
      },
      {
        texto: 'Las plumas crecen adheridas a la piel; la protegen del desgaste, forman una superficie que sostiene al ave durante el vuelo y actúan como cubierta aislante que colabora en la regulación de la temperatura corporal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [82, 85], cita: 'Las plumas crecen y están adheridas a la piel' }],
      },
      {
        texto: 'Las plumas solo crecen en ciertas áreas de la piel (pterilios), entre las cuales quedan espacios desnudos (apterios).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 89], cita: 'solo crecen en ciertas áreas de la piel' }],
      },
    ],
    esqueleto: [
      {
        texto: 'En la gallina, el esqueleto es óseo y delicado, y muchos de sus huesos poseen cavidades aéreas para disminuir el peso.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [91, 92], cita: 'El esqueleto es óseo, delicado' }],
      },
      {
        texto: 'Comprende el cráneo, con mandíbulas salientes que forman el pico, la columna vertebral y las costillas articuladas a las vértebras torácicas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [92, 94], cita: 'cráneo con mandíbulas salientes que' }],
      },
      {
        texto: 'El esternón ventral tiene una quilla mediana en la que se insertan los músculos pectorales del vuelo (pechuga); en la cintura pectoral se articulan las alas y en la pélvica las patas, de 4 dedos (tres delante y uno detrás).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [94, 97], cita: 'el esternón ventral, con una quilla mediana' }],
      },
    ],
    muscular: [
      {
        texto: 'La mayoría de las aves tiene aproximadamente 175 músculos, que controlan principalmente las alas, la piel y las patas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [157, 158], cita: 'La mayoría de las aves tienen aproximadamente 175' }],
      },
      {
        texto: 'Los músculos más grandes son los pectorales, que controlan el ala, constituyen cerca del 15–25 % del peso corporal de un ave voladora y proveen el poderoso golpe de alas esencial para el vuelo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [166, 168], cita: 'más grandes en el ave son los pectorales' }],
      },
      {
        texto: 'Ventral a los pectorales está el supracoracoideo, que eleva el ala entre las batidas hacia abajo; junto con los pectorales suma cerca del 25 a 35 % del peso corporal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 171], cita: 'es el supracoracoideo' }],
      },
      {
        texto: 'Los músculos de la piel ajustan las plumas, que están unidas a ellos, y ayudan al ave en las maniobras de vuelo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [171, 173], cita: 'Los músculos de la piel ayudan a un ave' }],
      },
      {
        texto: 'En el tronco y la cola hay pocos músculos, pero muy fuertes; el pigostilo controla todos los movimientos de la cola y de sus plumas, lo que da al ave una mayor superficie que la ayuda a mantenerse en el aire.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [173, 177], cita: 'Solo hay unos pocos otros músculos' }],
      },
    ],
    digestivo: [
      {
        texto: 'En la gallina, la cavidad bucal tiene una lengua pequeña y puntiaguda con cubierta córnea; sigue una faringe corta y el esófago tubular y muscular, que en la base del cuello se dilata en un ancho buche de paredes blandas donde se almacena y humedece el alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [100, 103], cita: 'lengua pequeña y puntiaguda con una cubierta córnea' }],
      },
      {
        texto: 'El estómago comprende un proventrículo anterior de paredes gruesas que segregan los jugos gástricos y el ventrículo o molleja, en forma de disco, de paredes musculosas tapizadas por un epitelio cornificado, donde el alimento es machacado con ayuda de piedritas u otras partículas duras ingeridas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [104, 105], cita: 'un proventrículo anterior de paredes gruesas' }, { tipo: 'apunte', archivo: A, lineas: [113, 115], cita: 'tapizadas interiormente por un epitelio cornificado' }],
      },
      {
        texto: 'El intestino es alargado y conduce al recto, más ancho; en la unión de ambos hay dos ciegos alargados; luego sigue la cloaca dilatada, que recibe los residuos no digeridos y los productos excretores y reproductores, y termina en el ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [116, 119], cita: 'alargado y conduce al recto' }],
      },
      {
        texto: 'El hígado es grande, rojizo y bilobulado, con vesícula biliar y dos conductos biliares; el páncreas suele tener 3 conductos que descargan en el intestino.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [119, 121], cita: 'El hígado es grande y rojizo' }],
      },
      {
        texto: 'La lengua suele ser corta, pero en algunas especies (carpinteros, colibríes) es larga y se proyecta por fuera del pico para capturar el alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [304, 306], cita: 'La lengua suele ser corta' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En la gallina, los orificios nasales externos, sobre el pico, comunican con los internos en la parte superior de la cavidad bucal; en el suelo de la faringe está la glotis, una hendidura que se continúa con la tráquea, flexible y reforzada por cartílagos anulares parcialmente calcificados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [136, 140], cita: 'los orificios nasales externos se ubican sobre el pico' }],
      },
      {
        texto: 'La tráquea desciende por el cuello hasta la siringe, dentro de la cual están los músculos vocales; desde ella un corto bronquio conduce a cada pulmón.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [140, 142], cita: 'La traquea desciende por el cuello hasta' }],
      },
      {
        texto: 'Numerosos sacos aéreos, ubicados entre los órganos en la cavidad del cuerpo, desembocan en los bronquiolos y contribuyen a eliminar el calor de la contracción muscular y de otras actividades metabólicas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [142, 145], cita: 'Los sacos aéreos, numerosos y ubicados' }],
      },
      {
        texto: 'Los pulmones no tienen alvéolos sino millones de tubos paralelos, los parabronquios; el aire pasa por sus paredes en forma de panal hacia los atrios, que dan lugar a capilares aéreos donde se intercambian oxígeno y dióxido de carbono por difusión con la sangre.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [147, 152], cita: 'conocidos como parabronquios' }],
      },
      {
        texto: 'Carecen de diafragma: toda la cavidad del cuerpo actúa como un fuelle que mueve el aire a través de los pulmones, y la fase activa de la respiración es la exhalación, que requiere contracción muscular.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [152, 155], cita: 'aves también carecen de diafragma' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El corazón tiene cuatro cámaras, dos aurículas y dos ventrículos, por lo que la sangre venosa queda completamente separada de la arterial y no se mezclan en la circulación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [123, 126], cita: 'corazón con cuatro cámaras' }],
      },
      {
        texto: 'Tienen dos circuitos sanguíneos, uno pulmonar y otro que riega el resto del cuerpo, un factor importante para el desarrollo de la regulación de la temperatura corporal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [126, 129], cita: 'Tienen dos circuitos sanguíneos' }],
      },
      {
        texto: 'En la gallina, el bazo, pequeño y redondeado, se ubica cerca del esófago.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [129, 130], cita: 'El bazo pequeño y redondeado' }],
      },
      {
        texto: 'En la superficie dorsal de la cloaca está la bolsa de Fabricio, sitio de hematopoyesis necesario para el desarrollo de los linfocitos B (sistema inmunológico); está activa en las aves jóvenes y se atrofia después de unos seis meses.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [130, 133], cita: 'se encuentra la bolsa de Fabricio' }],
      },
    ],
    excretor: [
      {
        texto: 'En la gallina hay dos riñones de color rojo oscuro y trilobulados; de cada uno sale un uréter que desemboca en la pared dorsal de la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [179, 181], cita: 'dos riñones de color rojo oscuro' }],
      },
      {
        texto: 'No existe vejiga urinaria, por lo que los productos de excreción se eliminan semisólidos junto con las heces, recubriéndolas como un material blancuzco.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [181, 183], cita: 'No existe vejiga de la orina' }],
      },
    ],
    nervioso: [
      {
        texto: 'El encéfalo es corto y ancho; la superficie del cerebelo está aumentada por numerosos pliegues superficiales, lo que le permite desarrollar muchas actividades de coordinación.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [185, 187], cita: 'el encéfalo de las aves es corto y ancho' }],
      },
      {
        texto: 'Desde la médula espinal salen los nervios espinales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [189, 189], cita: 'salen los nervios espinales' }],
      },
    ],
    sentidos: [
      {
        texto: 'En la gallina, los ojos son grandes y laterales, con un párpado superior y otro inferior; debajo de ellos hay una membrana nictitante que puede cubrir el globo ocular independientemente de los párpados, transversalmente desde el ángulo externo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [68, 71], cita: 'Los ojos son grandes y laterales' }],
      },
      {
        texto: 'Debajo y detrás de cada ojo se ubica una abertura auditiva escondida debajo de plumas especiales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 72], cita: 'abertura auditiva escondida debajo de plumas especiales' }],
      },
      {
        texto: 'El olfato está poco desarrollado, mientras que los sentidos de la vista y el oído están notablemente desarrollados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [187, 189], cita: 'El olfato esta poco desarrollado' }],
      },
    ],
    reproductor: [
      {
        texto: 'En el macho de la gallina, los dos testículos son ovales y blanquecinos; de cada uno sale un vaso deferente que corre paralelo al uréter y desemboca en la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [197, 199], cita: 'los dos testículos son ovales y' }],
      },
      {
        texto: 'Hay una vesícula seminal donde se almacena el esperma transferido por el macho a la hembra durante la cópula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [199, 200], cita: 'Hay una vesícula seminal donde se almacena' }],
      },
      {
        texto: 'El sistema femenino consta de un solo ovario, en el lado izquierdo; muy cerca se abre el embudo o infundíbulo del oviducto, que recoge los óvulos maduros, los cuales, una vez fecundados, descienden pasando por la glándula de la cáscara en el útero.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [201, 204], cita: 'solo consta de un ovario, en el lado izquierdo' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Glándulas endocrinas',
      datos: [
        {
          texto: 'En la gallina, entre las glándulas de secreción interna se destacan la pituitaria (hipófisis), debajo de la base del encéfalo; la tiroides, debajo de la vena yugular; el páncreas; las cápsulas suprarrenales, en la superficie ventral de los riñones, y las gónadas, que regulan los caracteres sexuales secundarios, especialmente los del plumaje.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [191, 195], cita: 'glándulas de secreción interna se destacan' }],
        },
      ],
    },
    {
      titulo: 'Plumas',
      datos: [
        {
          texto: 'Una típica pluma cobertera consta de un escapo hueco o cálamo, metido dentro de la piel, y un raquis (eje) que es continuación del cálamo y porta numerosas barbas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [211, 220], cita: 'Una típica pluma cobertera consta de un escapo hueco' }],
        },
        {
          texto: 'Las barbas, paralelas y dispuestas diagonalmente hacia fuera a ambos lados, forman una superficie plana y articulada, el limbo o estandarte (vexilo), que puede tener varios cientos de barbas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [220, 223], cita: 'Las barbas están ordenadas de forma paralela' }],
        },
        {
          texto: 'Al microscopio, cada barba parece una réplica en miniatura de la pluma, con filamentos paralelos llamados bárbulas (hasta 600 a cada lado, más de un millón por pluma), que se solapan con las de la barba vecina y quedan enlazadas por pequeños ganchos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [224, 230], cita: 'cada barba parece ser una réplica en miniatura' }],
        },
        {
          texto: 'Si dos barbas adyacentes se separan, vuelven a unirse instantáneamente al pasar la pluma por las puntas de los dedos; el ave lo hace con su pico, y el acicalamiento le ocupa mucho tiempo para mantener las plumas en perfectas condiciones.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 234], cita: 'vuelven a unirse instantáneamente' }],
        },
        {
          texto: 'Las plumas coberteras dan al ave su forma externa; las que se extienden más allá del cuerpo y se utilizan en el vuelo se denominan plumas del vuelo (rectrices, timoneras y remeras).',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [237, 239], cita: 'Las plumas coberteras dan al ave su forma externa' }],
        },
        {
          texto: 'Las plumas protectoras o plumón son suaves penachos escondidos por debajo de las coberteras, suaves porque sus bárbulas carecen de ganchos; abundan en el pecho y abdomen de las aves acuáticas y en los pollos de aves cinegéticas, y sirven principalmente para conservar el calor.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [239, 243], cita: 'Las plumas protectoras o plumón' }],
        },
        {
          texto: 'Las filoplumas tienen aspecto de pelos o de plumas degeneradas: un débil raquis con un penacho de pequeñas barbas en el extremo; son los pelos de una gallina desplumada y no se les conoce función; las cerdas de las comisuras bucales de vencejos y chotacabras serían filoplumas modificadas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [243, 248], cita: 'Las filoplumas tienen aspecto de pelos' }],
        },
        {
          texto: 'El plumón polvera, muy modificado, aparece en garzas, halcones, avetoros y papagayos: sus extremos se desintegran a medida que crecen y sueltan un polvo con aspecto de talco que ayuda a impermeabilizar las plumas y les brinda brillo metálico.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 252], cita: 'llamada plumón polvera aparece en las garzas' }],
        },
        {
          texto: 'Cada pluma crece a partir de una papila dérmica que la nutre; la base del primordio está hundida en una depresión circular, el futuro folículo, que mantiene a la pluma en la piel.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 255], cita: 'Cada pluma crece a partir de una papila dérmica' }],
        },
        {
          texto: 'La capa más externa del primordio se convierte en una capa córnea lisa (peridermo), dentro de la cual otras capas epidérmicas se ordenan en costillas paralelas: una mediana mayor, que formará el raquis, y otras que formarán las barbas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [256, 258], cita: 'capa córnea lisa (peridermo)' }],
        },
        {
          texto: 'La pulpa dérmica central contiene vasos sanguíneos, es nutricia y se seca al terminar el crecimiento, por lo que la pluma es una estructura completamente epidérmica; el pigmento se deposita en las células epidérmicas durante el crecimiento en el folículo, pero no después.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [258, 262], cita: 'La blanda pulpa dérmica' }, { tipo: 'apunte', archivo: A, lineas: [262, 263], cita: 'El pigmento que da el color se deposita' }],
        },
        {
          texto: 'Cuando termina el crecimiento, la cubierta revienta y es eliminada, y la pluma se despliega y adquiere su forma definitiva.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [271, 272], cita: 'la cubierta revienta, es eliminada' }],
        },
        {
          texto: 'El conjunto de plumas es el plumaje y su reemplazo es la muda, ordenada y gradual para que no queden desnudas partes del cuerpo; las plumas largas de las alas y de la cola se mudan en pares simétricos para no dificultar el vuelo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [273, 276], cita: 'El conjunto de plumas de un ave se llama plumaje' }, { tipo: 'apunte', archivo: A, lineas: [86, 87], cita: 'reemplazado mediante procesos de muda' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En la gallina la reproducción es sexual, con fecundación interna y multiplicación ovípara: los huevos tienen cáscara calcárea y deben ser incubados para el nacimiento de los pollitos, que son nidífugos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [205, 207], cita: 'la fecundación interna y la multiplicación ovípara' }],
    },
    {
      texto: 'Todas las aves ponen huevos con cáscara calcárea que deben incubarse para que se desarrollen los embriones, y la mayor parte de las especies construye nidos con ese fin.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [359, 361], cita: 'Todas las aves ponen huevo con cáscara calcárea' }],
    },
    {
      texto: 'Muchos pichones nacen ciegos, desnudos e incapaces de valerse por sí mismos, y deben permanecer en el nido al cuidado de la madre durante un tiempo: son altriciales y nidícolas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [362, 365], cita: 'Muchos de los pichones nacen ciegos' }],
    },
    {
      texto: 'Otros nacen perfectamente formados, cubiertos de plumón y capaces de caminar y procurarse su alimento apenas salen del huevo: son precoces y nidífugos, porque abandonan prontamente el nido.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [365, 367], cita: 'Otros nacen perfectamente formados' }],
    },
  ],
  bioecologia: [
    {
      texto: 'El color y el canto de las aves llaman la atención del hombre; muchas especies tienen importancia económica por sus regímenes alimentarios, algunas se cazan por deporte y otras, domesticadas, sirven de alimento al hombre.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [42, 45], cita: 'El color y el canto de las aves llama' }],
    },
    {
      texto: 'Ocupan todos los continentes, los mares y la mayor parte de las islas; cada especie se halla en un área geográfica y un ambiente particular, en bosques, desiertos, montañas y praderas, desde el círculo polar hasta las selvas tropicales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [318, 328], cita: 'Las aves ocupan todos los continentes' }],
    },
    {
      texto: 'Algunas aves viven en total oscuridad en cuevas, orientándose gracias a la ecolocalización, mientras que otras bucean a profundidades de más de 45 m para capturar animales acuáticos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [335, 335], cita: 'total oscuridad en cuevas, orientándose gracias a' }, { tipo: 'apunte', archivo: A, lineas: [331, 331], cita: 'bucean a profundidades de más de 45 m' }],
    },
    {
      texto: 'El colibrí abeja de Cuba, que pesa únicamente 1,8 g, es el más pequeño de estos vertebrados endotérmicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [332, 333], cita: 'El colibrí abeja de Cuba' }],
    },
    {
      texto: 'Son homeotermos ("de sangre caliente") y se hallan activas todo el año; su temperatura corporal oscila entre 40 y 42 °C durante el día; en las gallinas es de 43 °C de día y desciende a 40 °C de noche.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [337, 340], cita: 'Se hallan en actividad durante todo el año' }],
    },
    {
      texto: 'El vuelo les da más oportunidades de buscar alimento y de escapar de sus enemigos (halcones, lechuzas, comadrejas, gatos salvajes y domésticos y zorros), y les permite migrar de una región a otra con los cambios de estación.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [342, 345], cita: 'La capacidad del vuelo les da mayor oportunidad' }],
    },
    {
      texto: 'No todas vuelan igual: unas planean, otras se ciernen, algunas son muy rápidas, otras recorren grandes distancias y otras no vuelan; las alas de los pingüinos funcionan como aletas, y avestruces y ñandúes perdieron el uso de las alas y dependen de la carrera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [345, 349], cita: 'Pero no todas las aves vuelan igual' }],
    },
    {
      texto: 'La mayor parte de las aves emite gritos y cantos que sirven para reunir a las especies gregarias, advertir la territorialidad de nidificación, atraer a la pareja, dar órdenes entre padres e hijos y avisar en caso de peligro.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [351, 353], cita: 'La mayor parte de las aves puede emitir gritos y cantos' }],
    },
    {
      texto: 'Requieren gran cantidad de alimento de elevado valor energético, que puede ser vegetal (hojas, semillas, frutos) o animal (gusanos, artrópodos, moluscos y vertebrados).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [355, 357], cita: 'requieren gran cantidad de alimento de elevado valor energético' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
