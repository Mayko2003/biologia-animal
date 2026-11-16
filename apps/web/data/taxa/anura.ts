import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'anura',
  nombre: 'Anura',
  nombreComun: 'Ranas, sapos y escuerzos',
  sinonimos: ['Salientia'],
  nivel: 'subclase',
  padre: 'amphibia',
  orden: 1,
  resumen: [
    {
      texto: 'Orden de anfibios (Salientia): ranas, sapos y escuerzos; viven en el agua y en lugares terrestres húmedos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 90], cita: 'ORDEN ANURA: (Ranas, Sapos, Escuerzos)' }],
    },
    {
      texto: 'El cuerpo comprende cabeza y tronco sin ningún estrechamiento que los separe, y dos pares de patas o miembros; carecen de cuello y de cola.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [91, 92], cita: 'cabeza y tronco sin ningún estrechamiento' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En la cabeza se halla la boca, dos orificios nasales cerca del extremo del hocico, dos grandes ojos esféricos y, detrás de cada uno, una membrana timpánica plana que recibe las ondas sonoras; en el extremo posterior del cuerpo está el ano, por donde se eliminan la materia fecal, la orina y las células sexuales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [99, 105], cita: 'una membrana timpánica plana que recibe' }],
    },
    {
      texto: 'Cada ojo posee un párpado superior opaco y carnoso y un párpado inferior menor; debajo de éstos se ubica la membrana nictitante (un tercer párpado transparente) que se mueve hacia arriba, conserva la humedad del ojo en el aire y lo protege debajo del agua.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [101, 103], cita: 'un tercer párpado transparente' }],
    },
    {
      texto: 'Las patas anteriores constan de brazo superior, antebrazo, muñeca y mano; ésta última posee una pequeña palma con tubérculos debajo, cuatro dedos y un pulgar vestigial; el dedo más interno está engrosado en los machos, especialmente durante la estación reproductora.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [107, 109], cita: 'Las patas anteriores consta de brazo superior' }],
    },
    {
      texto: 'Las patas posteriores, mucho más desarrolladas, están formadas por muslo, pierna inferior, tobillo (región tarsal) y el largo pie con una planta estrecha (metatarso) y cinco dedos alargados unidos por una membrana interdigital ancha y delgada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [110, 112], cita: 'una membrana interdigital ancha y delgada' }],
    },
    {
      texto: 'Los Hylidae, algunas ranas Phyllobatidae y algunas del género Rana poseen discos ensanchados en todos los dedos, mediante los cuales pueden adherirse y trepar superficies verticales y lisas; el cojinete de las patas posteriores es menor en los sapos estrictamente terrestres y muy desarrollado en los anfibios más acuáticos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [242, 245], cita: 'discos ensanchados en todos los dedos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La piel es húmeda y fina en ranas, con tubérculos y verrugas en sapos; posee numerosas glándulas mucosas que segregan el líquido acuoso e incoloro que la mantiene húmeda, brillante y pegajosa, y también glándulas venenosas que secretan una sustancia blanquecina, espesa y ardiente que protege al animal de sus enemigos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [94, 97], cita: 'La piel es húmeda y fina en ranas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El esqueleto es en gran parte óseo y comprende un cráneo continuado por la columna vertebral formada por 9 vértebras; existe una cintura anterior o escapular en la que articulan los miembros anteriores y una cintura posterior o pélvica que articula los miembros posteriores; carecen de costillas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [114, 117], cita: 'columna vertebral formada por 9 vértebras' }],
      },
    ],
    digestivo: [
      {
        texto: 'En la rana, la cavidad bucal es amplia y lleva dientes en ambos maxilares y una lengua protráctil unida por delante al suelo de la boca y bifurcada posteriormente; siguen una faringe, el esófago musculoso con glándulas que segregan un líquido digestivo alcalino, y el estómago, donde las contracciones musculares desmenuzan el alimento y lo mezclan con las secreciones.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [119, 120], cita: 'una lengua protráctil unida por delante' }, { tipo: 'apunte', archivo: A, lineas: [128, 132], cita: 'las secreciones de las glándulas digestivas' }],
      },
      {
        texto: 'En el estómago se puede realizar cierta absorción, pero la mayor parte del contenido pasa al intestino delgado a través de la válvula pilórica; el hígado y el páncreas descargan en el intestino delgado, donde se realiza la parte principal de la digestión y la absorción; los residuos no digeridos pasan por movimientos peristálticos al intestino grueso, se transforman en heces y son expulsados por el ano hacia la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [133, 140], cita: 'a través de la válvula pilórica' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El sistema circulatorio consta de un corazón con tres cámaras —dos aurículas y un ventrículo—, arterias, capilares, venas, vasos linfáticos, sangre y linfa; las arterias se ramifican en arteriolas que conectan con los capilares microscópicos, donde por ósmosis se distribuyen alimento y oxígeno y pasan a la sangre el anhídrido carbónico y otras sustancias de desecho.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [142, 150], cita: 'un corazón con tres cámaras: dos aurículas' }],
      },
      {
        texto: 'El sistema linfático comprende numerosos vasos linfáticos; la linfa acuosa contiene leucocitos pero carece de glóbulos rojos y de algunas proteínas del plasma sanguíneo; pasa a los tejidos, entra a los vasos linfáticos y vuelve a las venas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [152, 154], cita: 'numerosos vasos linfáticos' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Los órganos respiratorios de la rana adulta son los pulmones, la piel y la mucosa bucal, todos con superficies húmedas y abundantes vasos debajo; el oxígeno del aire se disuelve en la humedad superficial y se difunde hacia la sangre mientras el anhídrido carbónico pasa en dirección opuesta; en las formas juveniles (renacuajos) la respiración se realiza por branquias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [156, 162], cita: 'órganos respiratorios de la rana adulta son' }],
      },
    ],
    excretor: [
      {
        texto: 'Los riñones eliminan los desechos orgánicos solubles (especialmente urea), sales minerales sobrantes y agua recogidos por la sangre en las células y líquidos del cuerpo; pasan a través del uréter hacia la pared dorsal de la cloaca en su eliminación al exterior.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [164, 167], cita: 'los órganos más importantes son los riñones' }],
      },
    ],
    nervioso: [
      {
        texto: 'El sistema nervioso comprende el encéfalo, la médula espinal y pares de nervios craneales y espinales, que rigen y coordinan los complejos procesos fisiológicos de los órganos y sus relaciones con el ambiente externo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [183, 184], cita: 'El sistema nervioso comprende el encéfalo' }, { tipo: 'apunte', archivo: A, lineas: [191, 193], cita: 'rigen y coordinan los complejos procesos fisiológicos' }],
      },
      {
        texto: 'Existe también un sistema nervioso simpático que rige muchas funciones internas vegetativas inconscientes o involuntarias: el ritmo de los latidos del corazón, la secreción de los jugos digestivos, los movimientos del estómago e intestino y el tono muscular de los vasos sanguíneos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [191, 196], cita: 'el sistema nervioso simpático rige' }],
      },
    ],
    sentidos: [
      {
        texto: 'Receptores para el tacto situados debajo de la epidermis; papilas gustativas en la lengua; terminaciones de los nervios olfatorios en las cavidades nasales; el oído con una membrana timpánica y estribo, para percibir sonido y conservar el equilibrio del cuerpo; y los ojos para ver, con párpado y glándula lacrimal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [198, 202], cita: 'membrana timpánica y estribo, para percibir' }],
      },
    ],
    reproductor: [
      {
        texto: 'En las hembras existe un par de ovarios y los oviductos que desembocan en la cloaca; en los machos hay dos pequeños testículos con vasos eferentes que desembocan en los conductos uriníferos de la parte anterior del riñón (conductos urogenitales) y la vesícula seminal en la que se almacena el esperma.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 209], cita: 'un par de ovarios y los oviductos' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Glándulas endocrinas',
      datos: [
        {
          texto: 'La glándula pituitaria, en la base del encéfalo, segrega en las larvas e individuos jóvenes una hormona estimuladora del crecimiento; en las ranas adultas segrega una hormona gonadotropa que determina el desprendimiento del óvulo o de los espermatozoides, y la Intermedina, que regula el comportamiento de los cromatóforos (células pigmentarias) de la piel y la toma de agua por la piel.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 176], cita: 'una pequeña glándula pituitaria' }],
        },
        {
          texto: 'En el "cuello" existe la glándula tiroides, cuya hormona tiroxina regula el metabolismo en general; el páncreas segrega además la insulina, que regula el metabolismo de los glúcidos; y a lo largo de la superficie ventral de los riñones existen las cápsulas suprarrenales, que producen epinefrina (adrenalina), que aumenta la presión sanguínea y determina la contracción del pigmento oscuro de la piel.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [176, 181], cita: 'cápsulas suprarrenales que producen epinefrina' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'El amplexo es el modo de acoplamiento entre machos y hembras durante el evento reproductivo; los anuros exhiben cuatro comportamientos de amplexo: búsqueda activa de hembras, desplazamiento de otros machos durante el amplexo, un macho satélite con más eventos reproductivos que otros, y poliandria, en donde varios machos intentan fecundar los ovocitos liberados por una hembra (aumenta la competencia espermática).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [211, 217], cita: 'El amplexo en los anuros' }],
    },
    {
      texto: 'La fecundación es externa; en cada huevo se desarrolla un embrión que emerge en forma de renacuajo (larva), de vida acuática y provisto de branquias externas sobre la faringe; lleva una larga cola que se reabsorbe a medida que avanza en su desarrollo, aparecen las patas —primero las posteriores y finalmente las anteriores—, las branquias se cambian por pulmones y el renacuajo busca aguas poco profundas para respirar aire: una metamorfosis muy aparente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [218, 224], cita: 'La fecundación es externa' }],
    },
    {
      texto: 'Algunas especies presentan incubación de los huevos en la piel, por la gran inversión energética en el cuidado parental de la descendencia: cámaras de cría dorsales en las familias Hemiphractidae y Cryptobatrachidae, o en la piel desprotegida como en la familia Pipidae; otras familias, como Dendrobatidae, Sooglossidae y Myobatrachidae, exhiben incubación de renacuajos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [225, 231], cita: 'incubación de los huevos en la piel' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Las ranas se alimentan únicamente de animales en movimiento, tales como crustáceos, insectos, gusanos y algunos moluscos pequeños, y a veces pueden coger pequeños peces; los renacuajos se alimentan principalmente de algas y pedazos de animales muertos, pues sus mandíbulas córneas no les permiten tragar trozos grandes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [237, 240], cita: 'Las ranas se alimentan únicamente de animales' }],
    },
    {
      texto: 'Constituyen el alimento básico de tortugas, serpientes, aves acuáticas, halcones y grandes peces; los renacuajos son presa de grandes hemípteros, escarabajos acuáticos, náyades de libélulas y otros.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [247, 249], cita: 'el alimento básico de tortugas, serpientes' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Rana',
      descripcion: 'género de ranas; algunas poseen discos ensanchados en los dedos para trepar',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [242, 243], cita: 'del género Rana poseen discos' }],
    },
  ],
  notas: [],
};

export default taxon;
