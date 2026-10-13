import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'cestoda',
  nombre: 'Cestoda',
  nombreComun: 'Cestodos',
  nivel: 'clase',
  padre: 'platyhelminthes',
  orden: 3,
  resumen: [
    {
      texto: '(Del Gr. cestus, cinturón y oid, parecido.) Suelen ser alargados, con el cuerpo plano, de ordinario formado por numerosos segmentos; todos son endoparásitos, los adultos en el intestino de los vertebrados y las larvas (una excepción) en los tejidos de otro hospedero.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 256], cita: 'Todos son endoparásitos' }],
    },
    {
      texto: 'El apunte desarrolla la Subclase Eucestoda: tenias de cuerpo largo y cintiforme, con 4 a 4000 proglótidos; escólex con órganos adhesivos; embrión con 6 ganchos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [258, 260], cita: 'Subclase Eucestoda: tenias de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Taenia solium (la tenia del cerdo que pasa al hombre, 2–8 m de madura): pequeña cabeza en forma de botón (el escólex) con 4 ventosas musculares a los lados y un círculo de ganchos sobre el extremo elevado formando un rostelo; un corto cuello une el escólex al cuerpo (estróbilo), con una serie de hasta 1000 segmentos llamados proglotis.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [262, 267], cita: 'una pequeña cabeza en forma' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Carecen de cilios y están cubiertos por una cutícula; la cutícula protege contra la digestión por los líquidos digestivos alcalinos del hospedero, pero es totalmente permeable al agua.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [251, 252], cita: 'Carecen de cilios' }],
      },
    ],
    muscular: [
      {
        texto: 'Poseen complejas capas de musculatura y parénquima.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [252, 253], cita: 'complejas capas de musculatura' }],
      },
    ],
    digestivo: [
      {
        texto: 'No tienen boca ni tubo digestivo: absorben el alimento a través de la pared del cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [254, 255], cita: 'No tiene boca ni tubo digestivo' }],
      },
    ],
    excretor: [
      {
        texto: 'Conductos excretores pares con células flamíferas; en cada proglotis hay secciones de los conductos excretores que se comunican por un conducto transverso.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 275], cita: 'conductos excretores pares con células' }],
      },
    ],
    nervioso: [
      {
        texto: 'Anillo nervioso con tres pares de cordones nerviosos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 254], cita: 'anillo nervioso con tres pares' }],
      },
    ],
    reproductor: [
      {
        texto: 'En cada proglotis, cuando se halla a cierta distancia del escólex, se desarrolla un grupo completo de órganos sexuales masculinos y femeninos, comparables con el sistema reproductor completo de un trematodo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [277, 279], cita: 'un grupo completo de órganos' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Escólex y estróbilo',
      datos: [
        {
          texto: 'Las ventosas y los ganchos del escólex sirven para adherirse a la pared intestinal del hospedero, y la cadena de proglotis queda libre en la cavidad intestinal; constantemente se forman nuevos proglótides por gemación transversal en el cuello.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [266, 269], cita: 'adherir el escólex a la' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'El sistema masculino madura primero; es posible la autofecundación entre los sistemas de un mismo proglotis, entre proglotis separados o la fecundación cruzada entre dos gusanos parásitos del mismo hospedero. Los huevos se desarrollan en gran número dentro de una cápsula resistente formada en el ootipo; el útero se transforma en un saco ramificado lleno de miles de huevos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [281, 286], cita: 'la autofecundación entre los sistemas' }],
    },
    {
      texto: 'Ciclo de Taenia solium: los proglotis maduros son expulsados con las heces y se desintegran; en los huevos esparcidos por el suelo el desarrollo continúa hasta formar un embrión con 6 ganchos (oncósfera) y se detiene. Si el cerdo los devora, las larvas penetran a la sangre o vasos linfáticos y llegan a los músculos voluntarios, donde se enquistan como cisticercos; en la cavidad de la papila del cisticerco se desarrolla un escólex.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [288, 299], cita: 'embrión provisto de 6 ganchos' }],
    },
    {
      texto: 'Cuando el hombre come cerdo crudo o imperfectamente cocido puede tragar quistes: la pared externa se digiere, la papila se evagina formando un escólex y un cuello, y el escólex se adhiere al intestino del hospedero donde empieza a formarse una nueva tenia.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 309], cita: 'cerdo crudo o cocido imperfectamente' }],
    },
    {
      texto: 'Ciclo de Dibothriocephalus latus: el hospedero definitivo humano libera huevos (no proglótides) vía fecal hacia el mar, que forman un coracidio (primer estadio larvario, ciliado); lo consume un crustáceo copépodo (hospedero intermediario) donde se desarrolla el procercoide (aún no infectante); el crustáceo es consumido por peces donde se desarrolla el plerocercoide, que sí es infectante.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [378, 386], cita: 'formando un CORACIDIO' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Adaptaciones fisiológicas del parásito interno: cutícula protectora permeable al agua; presión osmótica interna inferior a la del hospedero; tolerancia al pH alta (4 a 11); tejidos con alto contenido de glucógeno (hasta 60% de la sustancia seca); predomina la respiración anaeróbica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [316, 323], cita: 'adaptaciones fisiológicas especiales' }],
    },
    {
      texto: 'En el hombre las infecciones larvarias de Taenia solium pueden afectar el sistema nervioso central, con consecuencias graves.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [311, 314], cita: 'el sistema nervioso central' }],
    },
    {
      texto: 'Echinococcus granulosus produce la hidatidosis humana: los quistes hidatídicos se localizan en varios órganos (generalmente hígado y pulmón), son muy peligrosos y a veces mortales. La mejor manera de cortar el ciclo es no permitir que los perros coman vísceras infestadas de ovinos, cocinar las vísceras, desparasitar periódicamente y lavarse las manos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [355, 376], cita: 'produce la hidatidosis en el' }],
    },
    {
      texto: 'Las infecciones por tenias en el hombre decrecen en los países civilizados porque se sabe mejor cómo evitar la infección, se descubren y tratan las personas con tenias, y la inspección y congelación de la carne elimina los cisticercos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [333, 336], cita: 'la inspección y congelación de' }],
    },
    {
      texto: 'Las infecciones por Dibothriocephalus latus ocurren cuando el hombre come carne de pescado cruda o mal cocida; provoca la difilobotriasis, botriocefalosis o botriocefaliasis.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [387, 390], cita: 'carne de pescado cruda o mal' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Taenia solium',
      descripcion: 'tenia del cerdo que pasa al hombre; 2–8 m, hasta 1000 proglotis',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [262, 262], cita: 'Taenia solium: es la tenia' }],
    },
    {
      nombre: 'Taenia saginata',
      descripcion: 'tenia del buey; el adulto en el hombre mide 4–12 m (hasta 25 m) con hasta 2000 proglótidos',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 342], cita: 'Taenia saginata: tenia del buey' }],
    },
    {
      nombre: 'Echinococcus granulosus',
      descripcion: 'tenia hidatídica; adulto en el intestino del perro, lobo y chacal; produce hidatidosis en el hombre',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [344, 345], cita: 'Echinococcus granulosus: tenia hidatídica' }],
    },
    {
      nombre: 'Dibothriocephalus latus',
      descripcion: 'tenia de los peces; escólex alargado con discos succionadores en lugar de ventosas; hasta 10 m y 4000 proglótidos, vive hasta 20 años',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [378, 389], cita: 'Dibothriocephalus latus, Tenia de' }],
    },
  ],
  notas: [],
};

export default taxon;
