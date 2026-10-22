import type { Taxon } from '@/lib/types';

const A = 'aves, mamiferos.md' as const;

const taxon: Taxon = {
  slug: 'mammalia',
  nombre: 'Mammalia',
  nombreComun: 'Mamíferos',
  nivel: 'clase',
  padre: 'gnathostomata',
  orden: 6,
  resumen: [
    {
      texto: 'Clase de gnatóstomos (del latín mamma = teta) que comprende topos, murciélagos, conejos, gatos, monos, perros, caballos, ciervos, vacas, ovejas, ballenas, focas y el hombre, entre otras formas vivientes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 410], cita: 'Comprende  los  topos' }, { tipo: 'apunte', archivo: A, lineas: [414, 414], cita: 'Mamíferos (Mammalia, latín;  mamma=teta)' }],
    },
    {
      texto: 'Aunque no son un grupo grande (unas 4000 especies), son en conjunto el grupo de mayor éxito biológico del reino animal, con la posible excepción de los insectos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 412], cita: 'no son un grupo grande (4000 especies' }, { tipo: 'apunte', archivo: A, lineas: [414, 416], cita: 'el grupo de mayor éxito biológico' }],
    },
    {
      texto: 'Son increíblemente diversos en tamaños, formas y funciones: desde formas de 4 cm de longitud y pocos gramos hasta ballenas que superan las 100 toneladas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [416, 419], cita: 'increíblemente  diversos  en  tamaños' }],
    },
    {
      texto: 'Los mamíferos actuales descienden de reptiles mamiferoideos, los terápsidos, del Jurásico (Mesozoico), y se diversificaron rápidamente durante el Terciario (Cenozoico).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [431, 434], cita: 'Los  mamíferos  actuales  descienden  de' }, { tipo: 'apunte', archivo: A, lineas: [434, 435], cita: 'Se diversificaron rápidamente' }],
    },
    {
      texto: 'Todos están más o menos cubiertos de pelo y son de “sangre caliente” (endotérmicos, homeotérmicos); el nombre de la clase se debe a las glándulas mamarias de las hembras, que suministran leche a las crías.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [437, 440], cita: 'Todos  están  mas  o  menos  cubiertos  de  pelo' }],
    },
    {
      texto: 'En los mamíferos alcanza su máximo desarrollo el cuidado parental de los hijos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [440, 441], cita: 'alcanza  su  máximo  desarrollo  el  cuidado' }],
    },
    {
      texto: 'El factor más importante de su éxito es el excepcional desarrollo del neopalio, que permite un comportamiento adaptativo, aprendizaje, curiosidad y actividad inteligente superiores a los de cualquier reptil.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [448, 452], cita: 'El  factor  más importante que contribuye al éxito' }],
    },
    {
      texto: 'Según el apunte, la clasificación reconoce dos subclases: Prototheria (infraclase Monotremata) y Theria (infraclases Metatheria y Eutheria).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [774, 779], cita: 'Subclase Prototheria  (Gr. protos=primero' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo consta de cabeza, cuello, tronco y cola; la cabeza suele ser grande por el gran desarrollo del encéfalo y acostumbra a tener un hocico más o menos largo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [463, 465], cita: 'El  cuerpo  consta  de  cabeza,  cuello,  tronco  y  cola' }],
    },
    {
      texto: 'Los ojos pueden estar colocados adelante o hacia los lados, según las especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [465, 466], cita: 'Los ojos pueden estar colocados adelante' }],
    },
    {
      texto: 'El pabellón de la oreja es grande y móvil en ciervos, caballos y liebres, reducido en las formas minadoras y ausente en las focas y otros mamíferos nadadores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [466, 468], cita: 'El  pabellón  de  la  oreja  es  grande' }],
    },
    {
      texto: 'La cola tiene forma variada y distintas funciones; las patas anteriores y posteriores llevan dedos provistos de uñas, y el número de dedos, el tipo de uñas y el desarrollo de las patas distinguen a las especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [468, 471], cita: 'La  cola  tiene  forma variada' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Lo que principalmente diferencia a los mamíferos es su piel y sus modificaciones; en general es más gruesa que en cualquier otra clase de vertebrados y, como en todos ellos, está formada por epidermis y dermis.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [473, 477], cita: 'Lo que principalmente diferencia a los mamíferos' }],
      },
      {
        texto: 'La dermis es mucho más gruesa que la epidermis; esta es fina donde la protege el pelo, pero en zonas de mucho contacto y desgaste (palmas, callosidades) sus capas se espesan y cornifican con queratina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [477, 481], cita: 'la dermis  es  mucho  más  gruesa  que  la  epidermis' }],
      },
      {
        texto: 'Todos los mamíferos tienen pelo (en las ballenas, reducido a unas pocas cerdas sensoriales del hocico); crece a partir de un folículo epidérmico hundido en la dermis, y sus células mueren y se convierten en queratina densa, la misma de garras, uñas, pezuñas y plumas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [485, 486], cita: 'todos  los  mamíferos  se caracterizan por tener pelo' }, { tipo: 'apunte', archivo: A, lineas: [486, 491], cita: 'Este crece a partir de un folículo' }],
      },
      {
        texto: 'Hay dos tipos de pelos: la borra, densa, suave y aislante, que atrapa una capa de aire, y las cerdas, más rígidas y largas, cuyo conjunto forma la jarra, que protege contra el desgaste y da la coloración al pelaje.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 497], cita: 'presentan  dos  tipos  de  pelos' }],
      },
      {
        texto: 'En animales acuáticos (focas, nutrias y castores) la borra es tan densa que es imposible mojarla; en el agua las cerdas se mojan y se pliegan sobre ella formando una capa aislante.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [497, 499], cita: 'en los animales  acuáticos  (focas,  nutrias  y  castores)' }],
      },
      {
        texto: 'En el hombre el pelo se reemplaza durante toda la vida, pero en la mayoría de los mamíferos hay mudas periódicas de toda la capa pilosa, generalmente dos al año (primavera y otoño); el pelaje de verano suele ser menos espeso que el de invierno y puede tener otro color.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [503, 506], cita: 'En  los  hombres  el  pelo  es reemplazado' }, { tipo: 'apunte', archivo: A, lineas: [506, 507], cita: 'El  pelaje  de verano es generalmente mucho menos espeso' }],
      },
      {
        texto: 'El pelo se ha modificado para determinadas funciones: las vibrisas (bigotes) son pelos sensoriales táctiles, y puercoespines y erizos desarrollaron una cobertura espinosa defensiva.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [519, 522], cita: 'Las  vibrisas,  con  frecuencia  llamadas  bigotes' }],
      },
      {
        texto: 'De todos los vertebrados, los mamíferos son los que tienen mayor variedad de glándulas tegumentarias: sudoríparas, odoríferas, sebáceas y mamarias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [549, 551], cita: 'los  mamíferos  son  los  que  tienen  una  mayor' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El esqueleto es en gran parte óseo, con cartílagos en las superficies articulares, en parte de las costillas y otros lugares; ciertos tendones contienen osificaciones llamadas huesos sesamoideos (por ejemplo, la rótula).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [629, 632], cita: 'El  esqueleto  es  en  gran  parte  óseo' }],
      },
      {
        texto: 'El cráneo, con sus huesos unidos por fuertes suturas, lleva los orificios nasales y las grandes órbitas, el paladar plano, el arco zigomático y el foramen magnum, a cuyos lados hay dos cóndilos occipitales que lo articulan con la primera vértebra cervical.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [632, 634], cita: 'El cráneo, con todos sus huesos  unidos  por  fuertes  suturas' }, { tipo: 'apunte', archivo: A, lineas: [635, 638], cita: 'el  arco  zigomático' }],
      },
      {
        texto: 'La mandíbula inferior, formada por dos mitades, lleva los dientes y se articula con el hueso escamoso del cráneo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [638, 639], cita: 'La mandíbula inferior formada por  dos mitades' }],
      },
      {
        texto: 'La columna vertebral tiene vértebras cervicales, torácicas (donde articulan las costillas), lumbares, sacras soldadas a la cintura pélvica y caudales; costillas y esternón forman el armazón torácico que protege los órganos internos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [640, 643], cita: 'La  columna  vertebral  consta  de  diferentes  tipos' }],
      },
      {
        texto: 'La cintura pectoral, unida por músculos al tórax, tiene a cada lado una escápula y una delicada clavícula; las extremidades anteriores tienen húmero, cúbito y radio, carpales, metacarpales y falanges, y las posteriores fémur, tibia y peroné, tarsales, metatarsales y falanges.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [643, 648], cita: 'La  cintura  pectoral  está  unida' }],
      },
      {
        texto: 'La cintura pélvica se articula rígidamente al sacro; cada mitad está formada por ilion, isquion y pubis, que se unen en el acetábulo, donde articula la cabeza del fémur.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [648, 651], cita: 'La cintura pélvica se articula rígidamente al sacro' }],
      },
    ],
    muscular: [
      {
        texto: 'El sistema muscular es una masa de músculos muy diferenciados en las distintas regiones corporales, que posibilitan los más variados movimientos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [653, 655], cita: 'El  sistema  muscular  está  formado  por  una  masa' }],
      },
      {
        texto: 'Existe un diafragma, cubierto por peritoneo, que divide al celoma en una cavidad torácica anterior y una cavidad abdominal posterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [655, 656], cita: 'Existe un diafragma, cubierto por peritoneo' }],
      },
    ],
    digestivo: [
      {
        texto: 'La boca tiene dientes fijos en fosas y en número constante, especializados en forma y función según el alimento; la corona está cubierta por esmalte sobre la dentina, con la cavidad de la pulpa en el interior, y la raíz se fija con cemento en un alvéolo de la mandíbula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [658, 660], cita: 'El  sistema  digestivo  comienza  con  la  boca' }, { tipo: 'apunte', archivo: A, lineas: [660, 664], cita: 'En cada diente la parte externa, o corona' }],
      },
      {
        texto: 'Hay 4 clases de dientes: incisivos, caninos, premolares y molares; la dentición es heterodonta (dientes variables en forma y función) u homodonta (todos iguales).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [664, 667], cita: 'Existen  4  clases  de  dientes' }],
      },
      {
        texto: 'Los placentarios tienen dientes difiodontos (dientes de leche reemplazados por un juego permanente), en vez de los dientes polifiodontos de los reptiles.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [442, 444], cita: 'Los  mamíferos placentarios  tienen  dientes  difiodontos' }],
      },
      {
        texto: 'La cavidad bucal está rodeada por labios delgados y blandos y encías carnosas; la lengua es musculosa, flexible y fija ventralmente; el paladar duro es óseo y el blando, carnoso, cierra el conducto respiratorio durante la deglución; las glándulas salivales humedecen el alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [667, 680], cita: 'La  cavidad  bucal esta  rodeada  por  los  labios' }, { tipo: 'apunte', archivo: A, lineas: [680, 680], cita: 'Las  glándulas  salivales  secretan  la  saliva' }],
      },
      {
        texto: 'En la faringe se cruzan los conductos respiratorio y digestivo; la glotis queda cubierta por la epiglotis cuando pasa el alimento, y el esófago, tubo muscular estrecho, lleva al estómago, situado detrás del diafragma.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [682, 682], cita: 'donde se cruzan los conductos respiratorio y digestivo' }, { tipo: 'apunte', archivo: A, lineas: [685, 687], cita: 'la  epiglotis,  cuando  pasa  el  alimento' }],
      },
      {
        texto: 'La válvula pilórica comunica el estómago con el intestino delgado, largo y arrollado, donde desembocan el gran hígado parduzco y lobulado y el pequeño páncreas blanquecino; en la unión con el intestino grueso hay un ciego (apéndice), y el intestino grueso termina en el recto, que se abre en el ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [687, 693], cita: 'Mediante  la  válvula  pilórica' }],
      },
      {
        texto: 'Los rumiantes (bueyes, cabras, ovejas, ciervos, jirafas, entre otros) tienen un enorme estómago de cuatro cámaras: la hierba va a la panza, donde la descompone la microflora; luego se regurgita, se mastica y vuelve a la panza, y pasa a la redecilla, al libro y finalmente al cuajar, el auténtico estómago con enzimas proteolíticas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [695, 696], cita: 'En  los  rumiantes  (bueyes,  bisontes' }, { tipo: 'apunte', archivo: A, lineas: [703, 705], cita: 'La pulpa pasa a la redecilla' }],
      },
      {
        texto: 'Los herbívoros tienen tractos digestivos largos y grandes, mientras que en los carnívoros es más corto y el ciego, si existe, es más pequeño.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [707, 709], cita: 'Los herbívoros tienen tractos digestivos largos' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La respiración se realiza solo por pulmones.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [718, 718], cita: 'la respiración solo se realiza por pulmones' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El corazón, en la cavidad torácica dentro de un delicado saco pericardio, tiene como en las aves cuatro cavidades completamente separadas: dos aurículas y dos ventrículos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [711, 713], cita: 'el corazón esta situado en la cavidad torácica' }],
      },
      {
        texto: 'Hay venas y arterias diferenciadas, además de capilares que llegan a los tejidos; la sangre es roja por la hemoglobina de los glóbulos rojos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [714, 716], cita: 'existen vasos diferenciados en venas y arterias' }],
      },
    ],
    excretor: [
      {
        texto: 'La excreción se realiza por dos riñones situados en la región lumbar; la orina líquida sale por los uréteres, se almacena en la vejiga urinaria, ubicada debajo del recto, y sale al exterior por la uretra.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [719, 721], cita: 'La excreción se realiza por dos riñones' }],
      },
    ],
    nervioso: [
      {
        texto: 'El encéfalo está muy desarrollado: el cerebelo y el cerebro son grandes y presentan plegamientos (circunvoluciones) que aumentan la superficie, en relación con un mayor grado de inteligencia y una coordinación más precisa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [723, 732], cita: 'el  encéfalo  esta  muy  desarrollado' }, { tipo: 'apunte', archivo: A, lineas: [733, 733], cita: 'mayor grado de inteligencia y la coordinación mas precisa' }],
      },
      {
        texto: 'Hay 12 pares de nervios craneales, y de la médula espinal parte un par de nervios a cada somito.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [734, 735], cita: 'Hay 12 pares de nervios craneales' }],
      },
    ],
    sentidos: [
      {
        texto: 'Los órganos del gusto, olfato, vista y oído están especialmente desarrollados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [735, 736], cita: 'Los órganos del gusto, olfato, vista y oído' }],
      },
    ],
    reproductor: [
      {
        texto: 'El macho tiene 2 testículos dentro del escroto, una doble expansión de la cavidad abdominal que cuelga debajo del ano, y un órgano copulador o pene; la glándula prostática y las bulbouretrales, cerca de la base de la uretra, elaboran secreciones que contribuyen a transferir el esperma.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [742, 747], cita: 'El  sistema  reproductor  de  los  machos  consta  de  2  testículos' }],
      },
      {
        texto: 'La hembra posee 2 pequeños ovarios detrás de los riñones; los oviductos abren en el útero, seguido por la vagina, situada entre la vejiga y el recto, hasta la abertura urogenital, ventral a la cual está el clítoris.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [748, 750], cita: 'La hembra posee 2 pequeños ovarios' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Cuernos y astas',
      datos: [
        {
          texto: 'Los auténticos cuernos de los rumiantes (bovinos, ovejas) son vainas huecas de epidermis queratinizada alrededor de una matriz de hueso que surge del cráneo; normalmente no se mudan, no suelen estar ramificados y aparecen en ambos sexos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [526, 530], cita: 'Los  auténticos  cuernos,  que  presentan  los  rumiantes' }],
        },
        {
          texto: 'Las astas de los ciervos son totalmente córneas y duras en su fase madura; crecen bajo una piel suave y muy vascularizada (terciopelo), que el ciervo desgasta rascándolas contra los árboles antes del celo, y se pierden después de cada estación de cría.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [532, 535], cita: 'Las astas de los ciervos son totalmente córneas' }, { tipo: 'apunte', archivo: A, lineas: [537, 538], cita: 'Las  astas  se  pierden  después  de cada  estación  cría' }],
        },
        {
          texto: 'Cada nuevo par de astas es mayor y más complejo que el anterior; su crecimiento anual supone un desgaste del metabolismo mineral, ya que un gran alce o ciervo debe acumular 50 o más libras de sales de calcio de su dieta vegetal.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [539, 543], cita: 'cada nuevo par de astas es mayor y más complejo' }],
        },
        {
          texto: 'El cuerno del rinoceronte es el tercer tipo: fibras córneas de aspecto de pelo que se originan en papilas dérmicas y se cementan juntas formando un solo cuerno.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [545, 547], cita: 'El  cuerno del  rinoceronte  es el tercer tipo' }],
        },
      ],
    },
    {
      titulo: 'Glándulas tegumentarias',
      datos: [
        {
          texto: 'Las glándulas sudoríparas son tubulares simples y muy plegadas; las ecrinas segregan un sudor acuoso que al evaporarse enfría la piel, aparecen en regiones sin pelo (palmas y plantas) y en caballos, primates y perros también por todo el cuerpo, mientras que faltan en algunos roedores, conejos y ballenas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [553, 557], cita: 'Las  glándulas  sudoríparas  son  glándulas  tubulares' }, { tipo: 'apunte', archivo: A, lineas: [559, 559], cita: 'Pueden estar reducidas e incluso faltar' }],
        },
        {
          texto: 'Las glándulas apocrinas son mayores, con conductos largos y retorcidos, y desembocan en un folículo piloso; se desarrollan en la pubertad en zonas restringidas (axilas, zona púbica, pechos, entre otras), su secreción es lechosa y no intervienen en la regulación térmica, sino en aspectos del ciclo sexual.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [561, 563], cita: 'Las glándulas apocrinas son de tamaño mayor' }, { tipo: 'apunte', archivo: A, lineas: [575, 577], cita: 'Estas  glándulas  no tienen nada que ver con la regulación térmica' }],
        },
        {
          texto: 'Las glándulas odoríferas existen en casi todas las especies y se usan en la comunicación intraespecífica, para marcar territorio, como señales de aviso y para la defensa; las anales (mofetas, armiños y comadrejas) son las más olorosas y pueden descargar su secreción a varios metros.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [580, 583], cita: 'Las  glándulas  odoríferas  existen  prácticamente' }, { tipo: 'apunte', archivo: A, lineas: [587, 589], cita: 'región anal (mofetas, armiños y comadrejas)' }],
        },
        {
          texto: 'Las glándulas sebáceas, ligadas a los folículos pilosos, expulsan el sebo, una mezcla grasienta que no se vuelve rancia y mantiene al pelo y la piel dúctiles y lustrosos; la mayoría de los mamíferos las tiene por todo el cuerpo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [595, 603], cita: 'Las  glándulas  sebáceas  están  íntimamente  ligados' }],
        },
        {
          texto: 'Las glándulas mamarias serían apocrinas modificadas (o derivadas de sebáceas); aparecen solo en las hembras (rudimentarias en los machos) y se desarrollan a partir de una línea mamaria embrionaria a ambos lados del abdomen, donde surgen las mamas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [606, 610], cita: 'Las  glándulas  mamarias,  posiblemente  glándulas  apocrinas' }, { tipo: 'apunte', archivo: A, lineas: [611, 611], cita: 'crestas aparecen mamas' }],
        },
        {
          texto: 'En la mayoría de los mamíferos las glándulas mamarias solo se hinchan periódicamente, turgentes por la leche durante el embarazo y la lactancia siguiente.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [615, 625], cita: 'En  otros  mamíferos  las glándulas mamarias solo se hinchan' }],
        },
      ],
    },
    {
      titulo: 'Glándulas endocrinas',
      datos: [
        {
          texto: 'Las glándulas endocrinas (hipófisis, tiroides, paratiroides, cápsulas suprarrenales, páncreas y gónadas) son en función, estructura y localización semejantes a las de los restantes vertebrados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [738, 740], cita: 'Las  glándulas  endocrinas  como  la  hipófisis' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Después de la cópula, el óvulo fecundado se ubica en el útero, donde el embrión se desarrolla en la placenta, a través de la cual recibe alimento y oxígeno y elimina los desechos mediante la circulación materna.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [751, 754], cita: 'Después de la copula el óvulo fecundado' }],
    },
    {
      texto: 'El período de gestación es variable según la especie.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [754, 754], cita: 'El período de gestación es variable según la especie' }],
    },
    {
      texto: 'Las hembras suministran leche a las crías mediante las glándulas mamarias, y en los mamíferos el cuidado parental alcanza su máximo desarrollo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [439, 441], cita: 'suministran  leche  a  los  individuos' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Forman parte de la economía humana como bestias de carga, alimento, abrigo, en la industria del cuero y farmacéutica y en la investigación biomédica; el hombre los domesticó, los introdujo en diversos ambientes y llevó a miles de especies a la desaparición, poniendo en peligro a otras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [422, 425], cita: 'Forman  parte  constante  de  la economía del hombre' }, { tipo: 'apunte', archivo: A, lineas: [428, 428], cita: 'llevando a la desaparición a miles de especies' }],
    },
    {
      texto: 'Habitan prácticamente toda la Tierra (tierra, agua y aire), y cada especie tiene una distribución geográfica y ecológica determinada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [758, 760], cita: 'Habitan  prácticamente  toda  la tierra' }],
    },
    {
      texto: 'Muchas especies son nocturnas y otras diurnas, y algunas conforman grupos sociales (primates).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [762, 764], cita: 'Muchas  especies  son  nocturnas' }],
    },
    {
      texto: 'Su alimentación es variada: hay especies herbívoras, carnívoras, insectívoras y omnívoras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [766, 767], cita: 'Su  alimentación  es  variada' }],
    },
    {
      texto: 'Muchas viven en escondrijos naturales o construidos, donde crían, descansan, duermen y se resguardan del tiempo y de sus enemigos (mamíferos carnívoros, aves rapaces y el hombre).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [767, 770], cita: 'Muchas especies suelen vivir en escondrijos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'ballenas',
      descripcion: 'algunas superan las 100 toneladas de peso',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [418, 418], cita: 'las ballenas algunas de las cuales superan las 100' }],
    },
    {
      nombre: 'murciélagos',
      descripcion: 'mamíferos citados como integrantes de la clase',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 409], cita: 'Comprende  los  topos' }],
    },
    {
      nombre: 'focas',
      descripcion: 'carecen de pabellón de la oreja',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [467, 468], cita: 'falta o esta  ausente  en  las  focas' }],
    },
  ],
  notas: [],
};

export default taxon;
