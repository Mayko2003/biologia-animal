import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'insecta',
  nombre: 'Insecta',
  nombreComun: 'Insectos',
  nivel: 'clase',
  padre: 'hexapoda',
  orden: 1,
  resumen: [
    {
      texto: 'Con unas 750.000 especies es el grupo más extenso de animales conocido: mariposas, moscas, mosquitos, chinches, vinchucas, cascarudos, langostas, grillos, piojos, pulgas, libélulas, abejas, avispas, hormigas, termites, pececillos de plata, etc. Poseen tres pares de patas y por lo general dos pares de alas insertas en la región torácica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [55, 69], cita: 'grupo más extenso de' }],
    },
    {
      texto: 'Clase de hexápodos ectognatos: el aparato bucal está expuesto o se extiende desde la cápsula cefálica. Son los animales terrestres más abundantes y más ampliamente distribuidos, los principales invertebrados capaces de vivir en un ambiente seco y los únicos que pueden volar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [33, 126], cita: 'aparato bucal está expuesto' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo dividido en tres segmentos: cabeza (con un par de antenas y piezas bucales masticadoras, chupadoras o lamedoras consistentes en mandíbulas, maxilas y un labio), tórax (de tres somitos, con tres pares de patas articuladas y 2, 1 o ningún par de alas) y abdomen (de 11 o menos somitos, con las partes terminales modificadas en genitales).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [134, 142], cita: 'patas articuladas y 2' }],
    },
    {
      texto: 'Un rasgo esencial es la estructura metamérica y un exoesqueleto de naturaleza quitinosa que protege los órganos vitales del insecto de factores externos adversos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [128, 132], cita: 'exoesqueleto de naturaleza quitinosa' }],
    },
    {
      texto: 'Según la posición de la cabeza y sus piezas bucales respecto del eje longitudinal del cuerpo hay cabezas hipognatas (piezas bucales en la parte inferior), prognatas (piezas bucales dirigidas hacia delante) u opistognatas (dirigidas hacia atrás).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [170, 180], cita: 'hablar de una cabeza' }],
    },
    {
      texto: 'Cada pata consta de cinco piezas unidas por membranas articulares: coxa, trocánter, fémur, tibia y tarso (de 5 o menos tarsitos); el tarsito distal o pretarso puede llevar uñas, arolio, pulvillos, empodio y pelos especiales para desplazarse sobre superficies variadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [219, 225], cita: 'coxa, trocánter, fémur, tibia' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Exoesqueleto de naturaleza quitinosa que protege los órganos vitales de factores externos adversos y tratamientos químicos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [128, 132], cita: 'naturaleza quitinosa que protege' }],
      },
    ],
    digestivo: [
      {
        texto: 'El digestivo anterior consta de faringe (con bomba en los picadores suctores), esófago, buche (almacenamiento) y proventrículo (con dientes para triturar); la válvula estomodeal lo separa del digestivo medio o ventrículo (tubular, secretor de enzimas y lugar de absorción, con 6 ciegos gástricos en forma de doble dedo); sigue el digestivo posterior o proctodeo, que desemboca en el ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [503, 519], cita: 'La válvula estomodeal separa' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Formado por tráqueas, tubos aéreos elásticos ectodérmicos ramificados por todo el cuerpo; las ramas más finas o traqueolas transportan directamente el oxígeno a las células y se llevan el anhídrido carbónico; se abren al exterior por espiráculos y pueden existir sacos aéreos en el abdomen.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [547, 562], cita: 'tubos aéreos elásticos' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón dorsal alargado y tubular, encerrado en la cavidad pericárdica; la sangre entra por ostíolos, sale por la aorta dorsal hacia la cabeza y recorre los espacios del cuerpo (hemocele) bañando los órganos. No hay capilares ni venas: el sistema es lagunar o abierto; el plasma es claro con células incoloras fagocíticas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [521, 537], cita: 'espacios del cuerpo o' }],
      },
    ],
    excretor: [
      {
        texto: 'En el extremo anterior del intestino posterior desembocan los tubos de Malpighio, varios y filamentosos, situados en el hemocele con extremos cerrados; eliminan urea y sales de la sangre.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [564, 568], cita: 'tubos de Malpighio' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cerebro o ganglio supraesofágico con nervios a ojos y antenas; conecta con el ganglio subesofágico (fusión de tres pares: mandibular, maxilar y labial) del que parte el cordón nervioso ventral con ganglios pares por segmento; existe además un sistema nervioso simpático visceral y una fina red de nervios periféricos bajo la pared del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [570, 592], cita: 'un cerebro o ganglio' }],
      },
    ],
    sentidos: [
      {
        texto: 'Pelos táctiles (antenas, palpos, cercos, patas), órganos olfatorios en las antenas, gustativos en los palpos, ocelos sensibles a la luz, ojos compuestos eficientes para registrar movimientos y un órgano del oído con membrana timpánica (rodeando los espiráculos del primer urómero en langostas, o en las patas en grillos).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [594, 623], cita: 'membrana timpánica que se' }],
      },
      {
        texto: 'Las antenas están formadas por escleritos llamados escapo, pedicelo y flagelo (de antenómeros) y adoptan diversas formas; en ellas se ubican setas y órganos sensitivos para la función táctil y olfatoria.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [190, 198], cita: 'escapo, pedicelo y flagelo' }],
      },
    ],
    muscular: [
      {
        texto: 'Las patas son apéndices articulados para la locomoción terrestre o acuática, con formas diversas según su función: caminadoras, saltadoras, raptoras, nadadoras, fijadoras o colectoras.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [213, 217], cita: 'apéndices articulados que sirven' }],
      },
    ],
    reproductor: [
      {
        texto: 'En los machos hay un par de testículos de folículos unidos a un vaso deferente, un conducto eyaculador con glándulas accesorias y un órgano copulador o edeago; en la hembra un par de ovarios de ovariolas, oviductos, una vagina media con receptáculo seminal para el esperma, y el conducto se abre cerca del ovipositor u oviscapto (que en abejas se adapta como aguijón).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [625, 639], cita: 'órgano copulador o pene' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El exoesqueleto o ectoesqueleto recubre todo el cuerpo; también se conoce como integumento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Insecta', titulo: 'Insecta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Alas',
      datos: [
        {
          texto: 'Las alas pueden faltar por completo (Apterygotas, ectoparásitos que las pierden por regresión parasitaria, castas sociales); cada ala es una expansión membranosa de la pared corporal surcada por venas (tráqueas modificadas) cuyo conjunto forma la venación, de valor taxonómico.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [240, 254], cita: 'la llamada venación' }],
        },
        {
          texto: 'Existen diferentes tipos de alas según su consistencia y distribución de áreas endurecidas y membranosas o la presencia de setas o escamas: membranosas desnudas, membranosas vestidas, élitros, hemilélitros, con flecos y tegminas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [256, 262], cita: 'membranosas desnudas, membranosas vestidas' }],
        },
      ],
    },
    {
      titulo: 'Aparatos bucales',
      datos: [
        {
          texto: 'El aparato bucal está formado por cuatro estructuras básicas: el labro, las mandíbulas, las maxilas (con palpos maxilares) y el labio (con palpos labiales), adaptadas a la ingestión de distintos tipos de alimentos.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [304, 324], cita: 'cuatro estructuras básicas' }],
        },
        {
          texto: 'Masticador (tipo Orthoptera): las mandíbulas cortan y trituran los alimentos sólidos y las maxilas y el labio los empujan; langostas, grillos, cascarudos, termitas, hormigas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 346], cita: 'cortan y trituran los' }],
        },
        {
          texto: 'Picador-suctor (tipo Hemíptero): modificado para taladrar tejidos y chupar jugos; mandíbulas y maxilas forman una aguja biperforada con un canal alimenticio y uno salival, y el labio forma una vaina robusta; pulgones, chinches, vinchucas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [357, 367], cita: 'una delicada aguja biperforada' }],
        },
        {
          texto: 'En esponja (tipo Díptero): el labio forma una proboscis carnosa y acodada que termina en un órgano esponjoso llamado labela con canales pseudotráqueales; mandíbulas atrofiadas y maxilas reducidas a palpos; moscas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [377, 387], cita: 'un grueso órgano en' }],
        },
        {
          texto: 'Raspador-suctor (tipo Tisanóptero): cono bucal asimétrico con 3 estiletes; la mandíbula derecha está atrofiada y la izquierda y las maxilas forman estiletes que raspan y desgarran los tejidos; trips.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [408, 418], cita: 'cono bucal asimétrico' }],
        },
        {
          texto: 'En sifón (tipo Lepidóptero): mandíbulas atrofiadas, labro y labio reducidos a plaquetas; las gáleas maxilares hipertrofiadas se unen formando una proboscis o espiritrompa que en reposo está arrollada en espiral; mariposas y polillas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [429, 439], cita: 'proboscis o espiritrompa' }],
        },
        {
          texto: 'Masticador-lamedor (tipo abeja): mandíbulas aserradas o como paletas modeladoras; las glosas del labio forman una "lengua" o glosa retráctil que termina en una flabela con la que lamen el néctar; avispas, abejas, abejorros.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [465, 473], cita: '“lengua” o “glosa” retráctil' }],
        },
      ],
    },
    {
      titulo: 'Cuerpo graso',
      datos: [
        {
          texto: 'Red de tejido laxo entre los órganos que almacena sustancias de reserva, especialmente en los insectos jóvenes antes de la metamorfosis.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [541, 545], cita: 'sustancias de reserva' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La genitalia masculina incluye el edeago u órgano eyaculador y la femenina los ovipositores u oviscaptos, de configuraciones variadas, que además de la postura de huevos pueden adaptarse como aguijones que inyectan veneno (abejas).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 294], cita: 'edeago u órgano eyaculador' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Aunque esencialmente son animales terrestres e invadieron virtualmente todos los nichos de este medio, también invadieron los habitats acuáticos; el vuelo favoreció su dispersión, la huida de depredadores y el acceso al alimento —fueron el primer grupo de animales voladores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [75, 83], cita: 'grupo de animales voladores' }],
    },
    {
      texto: 'Tienen gran importancia ecológica: casi 2/3 de las plantas con flor dependen de ellos para la polinización; son vectores de enfermedades del hombre y animales domésticos (malaria, fiebre amarilla, enfermedad del sueño, peste bubónica, fiebre tifoidea) y plagas agrícolas, pero también se usan en control biológico como predadores, parásitos o parasitoides.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [85, 105], cita: 'plantas con flor dependen' }],
    },
    {
      texto: 'Algunos grupos poseen hábitos coloniales (termites, hormigas, abejas) con sociedades que incluyen formas morfológicas diferentes especialmente adaptadas como castas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [107, 111], cita: 'formar castas de individuos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'langosta',
      descripcion: 'organismo tipo de la morfología externa; aparato bucal masticador y órgano del oído abdominal',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [156, 156], cita: 'MORFOLOGÍA EXTERNA DE UNA' }],
    },
    {
      nombre: 'mosca',
      descripcion: 'ejemplo de aparato bucal en esponja con labela',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [377, 387], cita: 'y las maxilas están' }],
    },
    {
      nombre: 'mariposa',
      descripcion: 'ejemplo de aparato bucal en sifón con espiritrompa',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [429, 439], cita: 'mariposas y polillas' }],
    },
    {
      nombre: 'abeja',
      descripcion: 'ejemplo de aparato bucal masticador-lamedor; el oviscapto se adapta como aguijón',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [465, 473], cita: 'Avispas, Abejas, Abejorros' }],
    },
  ],
  notas: [],
};

export default taxon;
