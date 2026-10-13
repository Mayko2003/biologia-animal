import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'malacostraca',
  nombre: 'Malacostraca',
  nombreComun: 'Malacostráceos',
  nivel: 'clase',
  padre: 'crustacea',
  orden: 1,
  resumen: [
    {
      texto: 'Clase de crustáceos que incluye al cangrejo de río como forma tipo y, dentro de sus órdenes, a los isópodos (bichos bolita y cochinillas de la humedad).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [90, 196], cita: 'CLASE MALACOSTRACA En' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En el cangrejo de río el cuerpo se halla dividido en cefalotórax y abdomen; en la primera región se fusionan trece segmentos (5 de la cabeza y 8 del tórax) y el abdomen consiste en seis segmentos. En el cefalotórax se ubican antenas, mandíbulas, maxilas, maxilípedos y los pereiópodos o patas caminadoras; en el abdomen están los pleópodos (adaptados para la respiración) y los urópodos (para nadar y proteger los huevos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [92, 97], cita: 'trece (13) segmentos' }],
    },
    {
      texto: 'La costra o caparazón de los grandes crustáceos está generalmente calcificada: tanto la epicutícula como la procutícula contienen depósitos de sales de calcio, y la capa externa está pigmentada y contiene proteínas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [99, 103], cita: 'está generalmente calcificada' }],
    },
    {
      texto: 'En los isópodos terrestres el cuerpo está dorsoventralmente aplanado y se divide en tres partes: el céfalon (con ojos en general compuestos, dos pares de antenas y aparato masticador), el pereion de ocho segmentos (siete libres o pereionitos, cada uno con un par de pereiópodos) y el pleon de seis pleonitos, el último soldado al telson formando el pleotelson.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [198, 228], cita: 'está dorsoventralmente aplanado y' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'La costra o caparazón está generalmente calcificada, con depósitos de sales de calcio en epicutícula y procutícula.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [99, 103], cita: 'depósitos de sales de' }],
      },
    ],
    digestivo: [
      {
        texto: 'El alimento se lleva a la boca por quelas del segundo y tercer par de patas; las partes blandas se cortan y trituran con las mandíbulas y pasan desde el esófago a la cámara cardiaca, donde tres dientes (uno mediano y dos laterales) movidos por músculos forman el molinillo gástrico que tritura más el alimento; la entrada de la cámara pilórica posee numerosas quetas que solo permiten el paso de partículas finas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [145, 151], cita: 'el molinillo gástrico' }],
      },
      {
        texto: 'En algunas estaciones del año la cámara cardiaca tiene dos gastrolitos calcáreos que se cree almacenan sales calcáreas para endurecer el exoesqueleto después de la muda.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [151, 153], cita: 'dos gastrolitos calcáreos' }],
      },
    ],
    circulatorio: [
      {
        texto: 'En el cangrejo de río el corazón se halla en un seno pericárdico torácico sostenido por ligamentos; la sangre entra por tres pares de ostíolos y es impelida hacia seis arterias; luego fluye por senos entre los órganos, se recoge en un gran seno esternal del suelo del tórax y pasa por conductos aferentes a las branquias, volviendo por conductos eferentes a los senos branquiocardíacos y al seno pericárdico.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [164, 172], cita: 'un seno pericárdico ubicado' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En el cangrejo de río las branquias son delicadas expansiones plumiformes de la pared del cuerpo situadas a cada lado del tórax en una cámara branquial cubierta por una porción lateral del caparazón (branquiosteguitos); hay podobranquias insertas en los coxopodios de los apéndices 7-12 y una doble serie de artrobranquias, 17 a cada lado en total.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [182, 189], cita: 'delicadas expansiones plumiformes' }],
      },
      {
        texto: 'En los isópodos terrestres los pleópodos funcionan como aparatos respiradores: branquiales en los grupos ligados a ambientes saturados de humedad, o pseudotraqueales para la respiración del aire atmosférico; en formas de zonas desérticas hay incluso espiráculos capaces de cerrarse.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [228, 264], cita: 'o pseudotraqueales, para la' }],
      },
    ],
    tegumento: [
      {
        texto: 'En los isópodos terrestres (Oniscidea) la cutícula contiene quitina y proteínas esclerotizadas, es relativamente permeable al agua y las primeras capas están calcificadas; dispone de un sistema glandular secretor que solo se encuentra en los isópodos terrestres y de un sistema de conducción de agua por capilaridad.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [241, 257], cita: 'conducción de agua por' }],
      },
    ],
    reproductor: [
      {
        texto: 'En los isópodos terrestres, después del apareamiento las hembras se aíslan para mudar y desarrollar el marsupio, en cuyo interior pasan los huevos fertilizados a través de los oviductos; los dos primeros pares de pleópodos están modificados para la cópula en la mayoría de los grupos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [231, 267], cita: 'desarrollar el marsupio' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Molinillo gástrico y gastrolitos',
      datos: [
        {
          texto: 'En la cámara cardiaca hay tres dientes (uno mediano y dos laterales) movidos por músculos insertos por fuera del estómago, que forman el molinillo gástrico; en algunas estaciones hay dos gastrolitos calcáreos que almacenarían sales para endurecer el exoesqueleto tras la muda.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [147, 153], cita: 'encuentran tres dientes' }],
        },
      ],
    },
    {
      titulo: 'Marsupio de los isópodos',
      datos: [
        {
          texto: 'El marsupio protege mecánicamente los huevos y embriones; en el medio terrestre garantiza el mantenimiento de las condiciones durante la embriogénesis; el desarrollo se produce bajo un fluido marsupial con elementos nutritivos que los protege de la desecación e infecciones bacterianas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [270, 277], cita: 'un fluido marsupial que' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En los isópodos terrestres los huevos se desarrollan en el marsupio convirtiéndose en embriones y luego en manca o juveniles post-larvales (miniaturas de los adultos pero solo con seis pares de pereiópodos); en algunos géneros se describió un comportamiento social de "guardería" de las crías.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [274, 278], cita: 'manca o juveniles post-larvales' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los isópodos terrestres son los crustáceos con más éxito en la colonización de hábitats terrestres; la muda de crecimiento se produce en dos fases (primero la parte posterior de la cutícula y un día después la mitad anterior) y luego se remineraliza el tegumento por reabsorción de calcio.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [239, 251], cita: 'la muda de crecimiento' }],
    },
    {
      texto: 'Los isópodos terrestres de vida epigea presentan mayor actividad nocturna y ritmos estacionales; la humedad es un factor importante en su actividad, dispersión y preferencias de hábitat; la volvación (enrollarse en forma de bola) mantiene la humedad corporal o defiende de depredadores, y otras especies recurren a la agregación estimulada por una feromona excretada en las heces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [280, 291], cita: 'enrollar en cuerpo en' }],
    },
    {
      texto: 'Los isópodos terrestres son saprófagos, especialmente consumidores de humus, aunque se observó forrajeo de carroña y auto y alo-coprofagia; poseen órganos gustatorios en las segundas antenas que facilitan la localización del alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [293, 296], cita: 'consumidores de humus' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'cangrejo de río',
      descripcion: 'organismo tipo de la clase en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [92, 92], cita: 'el cangrejo de río' }],
    },
  ],
  notas: [],
};

export default taxon;
