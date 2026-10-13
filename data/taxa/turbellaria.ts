import type { Taxon } from '@/lib/types';

const A = 'platelmintos.md' as const;

const taxon: Taxon = {
  slug: 'turbellaria',
  nombre: 'Turbellaria',
  nombreComun: 'Turbelarios',
  nivel: 'clase',
  padre: 'platyhelminthes',
  orden: 1,
  resumen: [
    {
      texto: 'Se conocen aproximadamente unas 3000 especies. Son platelmintos de vida libre, comensales, algunos parásitos; habitan en ambientes acuáticos (marinos o dulceacuícolas) y también terrestres (en suelos húmedos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [62, 64], cita: 'aproximadamente unas 3000 especies' }],
    },
    {
      texto: 'La mayoría de los ejemplos del apunte corresponde al Orden Tricladida (del Gr. tri, tres y clados, ramas): Planaria, Dugesia (ambas paludícolas) y Bipalium, terrestre.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'Orden Tricladida: (del Gr. tri' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Planaria: gusano plano de cuerpo blando y alargado, de unos 15 mm; el extremo anterior (cabeza) es triangular y romo, y el resto del cuerpo tiene aspecto de cinta con dibujos de pigmentos oscuros. Las salientes triangulares de los lados de la cabeza son las aurículas; en el centro del dorso cefálico hay dos manchas oculares negras.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [81, 84], cita: 'unos 15 mm de longitud' }],
    },
    {
      texto: 'La boca se encuentra cerca del centro del cuerpo y por ella puede salir una proboscis o faringe para capturar el alimento; el poro genital se ubica en la superficie ventral cerca de la boca.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [85, 87], cita: 'una proboscis o faringe para capturar' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La epidermis es una sola capa de células cúbicas sobre una membrana elástica; contiene rhabdites (cuerpos de función incierta) y numerosas glándulas unicelulares que se abren en la superficie. La epidermis ventral está cubierta de cilios que sirven para la locomoción.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [89, 92], cita: 'pequeños cuerpos llamados rhabdites' }],
      },
    ],
    esqueleto: [
      {
        texto: 'No hay más esqueleto que la membrana basal elástica.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [102, 102], cita: 'No hay más esqueleto que' }],
      },
    ],
    muscular: [
      {
        texto: 'Debajo de la membrana basal hay capas de fibras musculares circulares, longitudinales y diagonales; también fibras dorsoventrales. Los espacios entre músculos y órganos internos están llenos de parénquima.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [92, 94], cita: 'fibras musculares circulares, longitudinales y diagonales' }],
      },
    ],
    digestivo: [
      {
        texto: 'Consta de una boca, a la que continúa la faringe seguida del intestino con tres ramas principales: una anterior y dos posteriores con numerosas subdivisiones laterales menores. No hay ano.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [98, 100], cita: 'tres ramas principales' }],
      },
    ],
    respiratorio: [
      {
        texto: 'No hay sistema respiratorio: el intercambio de O2 y CO2 se verifica a través de la epidermis y de aquí a los demás tejidos.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [102, 104], cita: 'El intercambio de O2 y CO2' }],
      },
    ],
    excretor: [
      {
        texto: 'Dos conductos longitudinales comunican con una red de tubos que terminan en células flamígeras grandes, que recogen el exceso de agua o residuos líquidos; la cavidad interna de cada célula flamígera contiene un mechón de cilios flexibles que conducen el líquido hacia los conductos que se abren a la superficie.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [106, 110], cita: 'un mechón de cilios flexibles' }],
      },
    ],
    nervioso: [
      {
        texto: 'En la región cefálica, debajo de los ocelos, hay dos ganglios cerebroides unidos de los que parten nervios cortos hacia el extremo anterior y a los ojos, y dos cordones nerviosos longitudinales (uno a cada lado) con numerosos conectivos transversales y nervios periféricos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [112, 115], cita: 'dos ganglios cerebroides unidos' }],
      },
    ],
    sentidos: [
      {
        texto: 'Las manchas oculares son sensibles a la luz pero no forman imagen; los órganos auriculares a ambos lados de la cabeza posiblemente sean quimiorreceptores para el gusto o el olfato.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [115, 124], cita: 'sensibles a la luz pero no' }],
      },
    ],
    reproductor: [
      {
        texto: 'Masculino: varios centenares de pequeños testículos esféricos a lo largo de ambos lados del cuerpo, cada uno con vaso eferente y un gran vaso deferente que entra en una vesícula seminal que se abre en el atrio genital, situado detrás del poro genital.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [130, 134], cita: 'varios centenares de pequeños testículos' }],
      },
      {
        texto: 'Femenino: dos ovarios redondeados próximos al extremo anterior, dos oviductos paralelos a los cordones nerviosos con numerosas glándulas vitelinas; ambos oviductos se abren en la vagina que desemboca en el atrio genital; conectado con la vagina está el receptáculo seminal (=útero).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [136, 139], cita: 'dos ovarios redondeados próximos' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La reproducción puede ser asexual o sexual y también puede existir regeneración; los individuos pueden ser monoicos o dioicos. En el parénquima hay células formativas que producen por mitosis nuevas partes regeneradas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [126, 128], cita: 'reproducción puede ser asexual o sexual' }],
    },
    {
      texto: 'Durante la reproducción sexual dos planarias juntan sus porciones ventrales posteriores y la copulación es mutua: el pene de cada una entra en el atrio genital de la otra; la fecundación es interna y cruzada; el desarrollo es directo, sin fases larvarias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [141, 143], cita: 'la fecundación es interna y cruzada' }],
    },
    {
      texto: 'Puede existir reproducción asexual por escisión transversal, que se efectúa normalmente por detrás de la faringe.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [145, 147], cita: 'reproducción asexual por escisión transversal' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Las planarias terrestres dejan sus refugios durante la noche, sólo cuando la humedad lo permite; se encuentran en áreas boscosas o descampados, en refugios húmedos (bajo piedras, troncos), hojarasca, galerías de larvas de insectos y bromeliáceas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [66, 69], cita: 'dejan sus refugios durante la noche' }],
    },
    {
      texto: 'Las formas marinas viven bajo piedras, rocas, entre el limo o la arena. Son de climas templados, todos de corta vida, y después de un período sexual llegan a la senectud.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [71, 74], cita: 'viven bajo piedras, rocas' }],
    },
  ],
  ejemplos: [
    { nombre: 'Planaria', descripcion: 'tricladida paludícola', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'Planaria, Dugesia (ambas' }] },
    { nombre: 'Dugesia', descripcion: 'tricladida paludícola', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'Planaria, Dugesia (ambas' }] },
    { nombre: 'Bipalium', descripcion: 'tricladida terrestre', fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 78], cita: 'y Bipalium, terrestre' }] },
  ],
  notas: [],
};

export default taxon;
