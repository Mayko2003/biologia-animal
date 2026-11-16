import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'porifera',
  nombre: 'Porifera',
  nombreComun: 'Esponjas',
  nivel: 'phylum',
  padre: 'parazoa',
  orden: 1,
  resumen: [
    {
      texto: 'Son los animales pluricelulares más primitivos. Se separan muy pronto de la línea evolutiva principal de los metazoos y no dan origen a ningún otro grupo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 30], cita: 'los animales pluricelulares más primitivos' }],
    },
    {
      texto: 'Son sésiles y su cuerpo se organiza alrededor de un sistema de canales acuíferos: el agua entra por numerosos poros, circula por cavidades y canales y sale por los ósculos. Carácter exclusivo del phylum.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [34, 36], cita: 'un sistema corporal constituido alrededor de un sistema de canales acuíferos' }],
    },
    {
      texto: 'Se conocen unas 150 especies de agua dulce y 5.000 marinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [44, 44], cita: 'unas 150 especies de agua dulce y 5.000 especies marinas' }],
    },
    {
      texto: 'El nombre viene del latín porus (poro) y fero (llevar).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [25, 26], cita: 'del L porus: poro y fero: llevar' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Carecen de simetría, aunque algunas presentan simetría radial; su crecimiento produce formas no definidas: de copa o vaso, arboroides, placoides e incrustantes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 39], cita: 'Carecen de simetría, no obstante algunos presentan simetría radial' }],
    },
    {
      texto: 'Algunas son radialmente simétricas, pero la mayoría son irregulares con forma erecta, incrustante o ramificada.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [55, 56], cita: 'radialmente simétricas pero la mayoría son irregulares' }],
    },
    {
      texto: 'En general son de colores vivos: verde, amarillo, naranja, púrpura y rojo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [58, 58], cita: 'colores vivos: verde, amarillo, naranja, púrpura y rojo' }],
    },
    {
      texto: 'El tamaño es variado, desde un grano de arroz hasta 1 m de altura y 1 m de diámetro.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [49, 49], cita: 'desde un grano de arroz hasta 1 m de altura' }],
    },
  ],
  embriologia: {
    simetria: {
      valor: 'asimetrico',
      nota: 'Algunos presentan simetría radial.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [37, 38], cita: 'Carecen de simetría' }],
    },
    segmentacion: {
      valor: 'radial',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [276, 276], cita: 'La segmentación es completa y generalmente radial' }],
    },
    cavidad: {
      valor: 'no-aplica',
      nota: 'Organización a nivel celular, sin cavidad corporal; el atrio es parte del sistema acuífero.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Porifera/', titulo: 'Porifera - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'no-aplica',
      nota: 'Sin blastoporo del tipo de los eumetazoos.',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Porifera/', titulo: 'Porifera - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'La pared del cuerpo está constituida por el pinacodermo (pinacocitos), los porocitos y el mesohilo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [69, 71], cita: 'Pared del cuerpo' }],
      },
      {
        texto: 'Pinacocitos: células epiteliales aplanadas que forman el pinacodermo; los basales segregan el material que fija la esponja al sustrato. Son algo contráctiles y regulan el área superficial; algunos se modifican como miocitos en torno a ósculos o poros.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [72, 76], cita: 'células de tipo epitelial, aplanadas y delgadas' }],
      },
      {
        texto: 'Cada poro está formado por un porocito, célula en forma de anillo que va del exterior al espongocele; su orificio forma el ostíolo, que se abre y cierra por contracción.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [77, 79], cita: 'Cada poro esta formado por un porocito' }],
      },
      {
        texto: 'Debajo del pinacodermo está el mesohilo (o mesénquima), una matriz gelatinosa de proteína que contiene material esquelético y células ameboidales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [80, 81], cita: 'el mesohilo (o mesénquima) formado por una matriz gelatinosa' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El esqueleto se ubica en el mesohilo (a veces atraviesa el pinacodermo) y da soporte a las células; puede estar formado por fibras de espongina proteínica o por espículas calcáreas o silíceas, o ambos tipos en una misma esponja.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [83, 86], cita: 'fibras de espongina proteínica o por espículas' }],
      },
      {
        texto: 'Las espículas son de formas variadas e importantes para identificar especies: el sufijo "axon" indica el número de ejes y "actinas" el número de radios o puntas. Monoaxónicas (agujas o varillas), triaxónicas (3 o 6 puntas, hexactinas); las megascleras son las grandes y constituyen el soporte principal, las microscleras son las más pequeñas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [87, 95], cita: 'el sufijo “axon” se refiere al número de ejes' }],
      },
      {
        texto: 'Las microscleras sostienen el pinacodermo que recubre los canales acuíferos. El mesohilo contiene fibrillas de colágeno y muchas esponjas tienen además un esqueleto de fibras gruesas de espongina conectadas entre sí; algunas tienen tanta espongina que son duras como el caucho.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [98, 102], cita: 'una proteína fibrosa parecida al colágeno' }],
      },
      {
        texto: 'En muchas especies las espículas silíceas están embutidas parcial o totalmente en las fibras de espongina para endurecerse.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [103, 104], cita: 'embutidas parcial o totalmente en las fibras' }],
      },
      {
        texto: 'El esqueleto de espículas hace que el cuerpo resista la deformación que pueden provocar fuertes corrientes de agua.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [186, 188], cita: 'resiste a la deformación' }],
      },
      {
        texto: 'El esqueleto es producido por esclerocitos ameboidales: una espícula de 3 puntas se forma por 3 esclerocitos que se dividen sin separarse; en cada célula doble se desarrolla una punta que luego se fusiona por la base. La espongina la segregan los espongocitos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [116, 122], cita: 'El esqueleto es producido por esclerocitos ameboidales' }],
      },
    ],
    digestivo: [
      {
        texto: 'El agua lleva oxígeno y alimento a las células y elimina sus desechos; incluso óvulos y espermatozoides entran y salen con las corrientes. El volumen de agua bombeada por una esponja es notable.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [145, 148], cita: 'El agua lleva oxigeno y alimento a las células' }],
      },
      {
        texto: 'Son animales filtradores que dependen de la corriente de agua: se alimentan de partículas orgánicas sumamente finas (80% materia orgánica muy pequeña, 20% bacterias, dinoflagelados y otros orgánicos planctónicos).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [158, 161], cita: 'animales filtradores y dependen de la corriente de agua' }],
      },
      {
        texto: 'Todas las células pueden fagocitar partículas: los pinacocitos las más grandes; las de tamaño bacteriano o menor las filtran y fagocitan los coanocitos. El principal sitio de digestión son las vacuolas alimenticias de los arqueocitos, que también funcionarían como centros de reserva.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [163, 167], cita: 'los pinacocitos fagocitan partículas más grandes' }],
      },
    ],
    respiratorio: [
      {
        texto: 'El intercambio gaseoso se realiza por difusión simple entre la corriente de agua y las células situadas a su paso.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [182, 184], cita: 'El intercambio gaseoso se realiza por difusión simple' }],
      },
    ],
    excretor: [
      {
        texto: 'Las excreciones y desechos nitrogenados (principalmente amoníaco) salen del cuerpo con las corrientes de agua.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [178, 180], cita: 'desechos nitrogenados (principalmente amoníaco)' }],
      },
    ],
    nervioso: [
      {
        texto: 'Carecen de sistema nervioso y sus reacciones son básicamente locales.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [190, 190], cita: 'Carecen de sistema nervioso' }],
      },
      {
        texto: 'La coordinación depende de la transmisión de sustancias mensajeras por difusión en el mesohilo, mediante células ameboidales migratorias y células fijas en contacto entre sí; la conducción eléctrica (sin potenciales de acción) ocurriría por este último mecanismo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [191, 194], cita: 'transmisión de sustancias mensajeras por difusión' }],
      },
    ],
    reproductor: [
      {
        texto: 'Existen especies hermafroditas y dioicas; la mayor parte son hermafroditas pero la producción de óvulos y espermatozoides no es sincrónica.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 251], cita: 'Existen especies hermafroditas y dioicas' }],
      },
      {
        texto: 'Los espermatozoides se originan a partir de los coanocitos: los de toda una cámara flagelada pierden collares y flagelos y se convierten en espermatogonias, rodeadas por una pared celular que forma un quiste espermático; otra opción es que el quiste surja por divisiones de una sola espermatogonia.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 256], cita: 'se originan a partir de los coanocitos' }],
      },
      {
        texto: 'Los óvulos se forman a partir de arqueocitos o coanocitos, acumulan reservas fagocitando células nutritivas adyacentes y se localizan dentro de un grupo de células circundantes (a modo de folículo).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [258, 260], cita: 'Los óvulos se forman a partir de arqueocitos o coanocitos' }],
      },
      {
        texto: 'La producción de gametos comenzaría por cambios en la temperatura del agua, en el fotoperíodo o en el estado de regresión celular, según la especie.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [260, 262], cita: 'cambios en la temperatura del agua, en el fotoperíodo' }],
      },
    ],
    muscular: [
      {
        texto: 'Sin tejido muscular verdadero; algunas células (miocitos, pinacocitos) son contráctiles y regulan los poros.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Porifera/', titulo: 'Porifera - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sin órganos de los sentidos; las células responden directamente a los estímulos.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Porifera/', titulo: 'Porifera - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Sistema acuífero',
      datos: [
        {
          texto: 'Esponja tipo asconoide: tubulares y siempre pequeñas. En Leucosolenia (que raramente excede 10 cm) los tubos están fusionados por sus bases. Se distinguen ostíolos (poros inhalantes), espongocele o atrio (cavidad interior) y ósculo (abertura superior).',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [60, 67], cita: 'ESPONJA TIPO ASCONOIDE: tubulares y siempre pequeñas' }],
        },
        {
          texto: 'La estructura asconoide primitiva impone limitaciones de tamaño; la evolución lo solucionó plegando la pared del cuerpo, lo que aumenta la superficie de coanocitos y disminuye la del espongocele, logrando un mayor flujo de agua. Así surgen los tipos siconoide y leuconoide.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [127, 131], cita: 'impone limitaciones de tamaño bien definidas' }],
        },
        {
          texto: 'En la estructura siconoide el atrio se pliega hacia fuera y la pared hacia adentro, aumentando la superficie con coanocitos. Ej.: Grantia y Sycon.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [133, 135], cita: 'plegando el atrio hacia fuera y la pared hacia adentro' }],
        },
        {
          texto: 'En la estructura leuconoide los canales quedan confinados a cámaras flageladas: el agua entra por canales inhalantes o incurrentes y sale por exhalantes o excurrentes.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [137, 139], cita: 'los canales quedan confinados a cámaras flageladas' }],
        },
      ],
    },
    {
      titulo: 'Tipos celulares del mesohilo',
      datos: [
        {
          texto: 'Arqueocitos: células grandes con núcleos grandes, fagocíticas e intervienen en la digestión; pueden transformarse en cualquier tipo de célula que el animal necesite.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [111, 113], cita: 'Arqueocitos: células grandes con núcleos grandes' }],
        },
        {
          texto: 'Colenocitos: ancladas por largos filamentos citoplasmáticos, segregan las fibras de colágeno dispersas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [114, 115], cita: 'Colenocitos: están ancladas por medio de largos filamentos' }],
        },
        {
          texto: 'Coanocitos: capa de células en el lado interno del mesohilo que recubre el espongocele, con estructura semejante a la de los protozoos coanoflagelados; mueven el agua a través de la esponja y obtienen el alimento.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [123, 125], cita: 'recubriendo el espongocele existe una capa de células' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La regeneración característica de muchas especies se emplea en las esponjas comerciales para su reproducción.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [217, 219], cita: 'se emplea en las esponjas comerciales' }],
    },
    {
      texto: 'La reproducción asexual por gemación no es común, aunque se observa en algunas especies; un proceso distinto es la formación y liberación de grupos de células esenciales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [221, 227], cita: 'no es común la reproducción asexual por gemación' }],
    },
    {
      texto: 'Gémulas: en las Espongílidas y algunas formas marinas, una masa de arqueocitos llenos de alimento es rodeada por espongocitos que segregan una cubierta dura similar a la espongina, con espículas incorporadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [229, 235], cita: 'conjuntos celulares llamados gémulas' }],
    },
    {
      texto: 'Las gémulas se forman sobre todo en otoño; en invierno la esponja progenitora se desintegra pero las gémulas soportan congelación y desecación. En primavera el primordio emerge por el micrópilo del cascarón y se desarrolla hasta la esponja adulta.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [236, 241], cita: 'capaces de soportar la congelación y la desecación' }],
    },
    {
      texto: 'Los espermatozoides salen por las corrientes exhalantes en grandes nubes lechosas y entran a otras esponjas por la corriente inhalante.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [264, 266], cita: 'salen de la esponja por medio de las corrientes' }],
    },
    {
      texto: 'Fecundación in situ: un coanocito engloba al espermatozoide y lo transporta hasta el óvulo; la célula transportadora transfiere el núcleo espermático o ambos se fusionan con el óvulo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [269, 273], cita: 'un coanocito lo engloba y lo transporta hasta el óvulo' }],
    },
    {
      texto: 'El desarrollo hasta la fase larvaria ocurre dentro del cuerpo del progenitor. La larva se encuentra normalmente en estado de blástula; crece, se alarga, cada célula adquiere un flagelo en su cara interna y se forma una abertura como boca por la que el embrión vuelve su parte interna hacia fuera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [275, 280], cita: 'El desarrollo hasta la fase larvaria generalmente tiene lugar' }],
    },
    {
      texto: 'En la fase de anfiblástula la larva nada algunas horas con los flagelos externos; luego las células flageladas se invaginan o las no flageladas crecen por encima (gastrulación). La larva se adhiere a un objeto sólido por el extremo del blastoporo y se desarrolla como joven esponja.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [280, 284], cita: 'En esta fase de anfiblástula la larva sale' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en medio acuático marino o dulceacuícola; abundan en todos los mares donde haya rocas, conchas, maderos sumergidos o corales como sustrato, y algunas en fondos blandos arenosos o fangosos. Prefieren aguas someras, pero las esponjas vítreas viven en aguas profundas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [39, 47], cita: 'donde quiera que haya rocas, conchas, maderos sumergidos' }],
    },
    {
      texto: 'Algunas esponjas exhiben un ritmo diurno en la propulsión de agua; otras tienen un flujo endógeno y errático. Aguas turbulentas por lluvias pueden detener el flujo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [150, 156], cita: 'un ritmo diurno en la propulsión de agua' }],
    },
    {
      texto: 'Algunas esponjas marinas tienen organismos fotosintéticos simbiontes: las zooxantelas dan color amarillento y las cianobacterias verdes, violetas o pardos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [169, 176], cita: 'organismos fotosintéticos simbiontes' }],
    },
    {
      texto: 'Muchas producen metabolitos que impiden que otros organismos se establezcan en su superficie o rechazan depredadores; sin embargo, peces y tortugas son sus principales depredadores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [196, 198], cita: 'metabolitos capaces de impedir que otros organismos' }],
    },
    {
      texto: 'Algunas usan sus metabolitos para matar los pólipos de los corales y luego usan el esqueleto de estos como sustrato.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [200, 202], cita: 'matar a los pólipos de los corales' }],
    },
    {
      texto: 'Algunas especies tienen olores característicos (ajo) y otras producen exantema al tocarlas (esponja urticante).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [204, 206], cita: 'olores característicos (ajo)' }],
    },
    {
      texto: 'Son hospedadoras de otros animales: grandes esponjas leuconoides sirven de guarida a camarones y ofiuras; cangrejos araña se colocan esponjas sobre el dorso como camuflaje, y hay esponjas que crecen sobre conchas de cangrejos ermitaños hasta reemplazar la concha.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [208, 213], cita: 'Muchas esponjas son hospedadoras de otros animales' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Leucosolenia',
      descripcion: 'esponja asconoide; raramente excede los 10 cm de altura, con tubos fusionados por sus bases',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [62, 63], cita: 'Leucosolenia solo raramente excede los 10 cm' }],
    },
    {
      nombre: 'Grantia',
      descripcion: 'esponja siconoide',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [133, 135], cita: 'Ej. Grantia y Sycon' }],
    },
    {
      nombre: 'Sycon',
      descripcion: 'esponja siconoide',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [133, 135], cita: 'Ej. Grantia y Sycon' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Por su posición filogenética aislada (no dan origen a ningún otro grupo), es frecuente separar a las esponjas en el subreino Parazoa, aparte del resto de los animales pluricelulares (Eumetazoa).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 32], cita: 'se apartan muy pronto de la línea evolutiva principal' }],
    },
    {
      tipo: 'discrepancia',
      texto: 'Tradicionalmente se considera a las esponjas el linaje más antiguo de los animales; varios análisis filogenómicos recientes ubican en cambio a los ctenóforos como grupo hermano del resto de los animales.',
      fuentes: [
        { tipo: 'web', url: 'https://www.nature.com/articles/s41586-026-10643-z', titulo: 'A blastoporal organizer in a ctenophore', sitio: 'Nature', consultado: '2026-10-13' },
        { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ctenophora', titulo: 'Ctenophora - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' },
      ],
    },
  ],
};

export default taxon;
