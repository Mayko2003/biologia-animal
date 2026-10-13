import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'cnidaria',
  nombre: 'Cnidaria',
  nombreComun: 'Cnidarios',
  nivel: 'phylum',
  padre: 'radiata',
  orden: 1,
  resumen: [
    {
      texto: 'Más o menos 9000 especies descriptas, llamadas comúnmente corales, hidras, medusas y anémonas de mar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [313, 314], cita: 'Más o menos con 9000 especies descriptas' }],
    },
    {
      texto: 'Marinos (excepto Hydra y muy pocos hidrozoos de agua dulce) en aguas someras; las formas sésiles tienen simetría radial y viven en litorales rocosos o en formaciones coralinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 315], cita: 'en aguas someras y las formas sésiles' }],
    },
    {
      texto: 'Presentan una cavidad digestiva tapizada por endodermo que se denomina celenterón o cavidad gastrovascular porque además de la función digestiva tiene función vascular (circulatoria); se abre al exterior por la boca.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [317, 320], cita: 'se denominan celenterón o cavidad gastrovascular' }],
    },
    {
      texto: 'Un círculo de tentáculos (evaginaciones de la pared del cuerpo) rodea la boca y ayuda en la captura del alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [322, 324], cita: 'un círculo de tentáculos rodeando la boca' }],
    },
    {
      texto: 'Existen dos formas básicas: el pólipo sésil y la medusa libre.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [336, 339], cita: 'Existen dos formas básicas' }],
    },
    {
      texto: 'El nombre viene del griego anide (ortiga) y del latín aria (parecido o relacionado con).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [311, 311], cita: 'del Gr. anide: ortiga' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo con dos formas básicas: pólipo sésil y medusa libre; los sésiles con simetría radial en litorales rocosos o formaciones coralinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [336, 339], cita: 'Existen dos formas básicas' }],
    },
  ],
  embriologia: {
    capas: {
      valor: 'diblastico',
      nota: 'Para algunos autores los Anthozoos presentarían un mesodermo primario (triblásticos).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [330, 335], cita: 'todos los Cnidarios son Diblásticos' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'La pared del cuerpo consta de tres capas: epidermis (epitelio externo), gastrodermis (epitelio interno que recubre la cavidad gastrovascular) y entre ambas la mesoglea — lámina basal acelular muy fina en hidrozoos, y capa gruesa de tejido conjuntivo fibroso gelatinoso con o sin células mesenquimáticas en escifozoos y antozoos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [326, 330], cita: 'Consta de tres capas: un epitelio externo' }],
      },
    ],
    digestivo: [
      {
        texto: 'La cavidad gastrovascular (celenterón) cumple además función vascular; los cnidarios son carnívoros y las hidras se alimentan principalmente de pequeños crustáceos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [407, 409], cita: 'los otros Cnidarios son carnívoras' }],
      },
    ],
    respiratorio: [
      {
        texto: 'El intercambio gaseoso tiene lugar a través de la superficie general del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [411, 411], cita: 'El intercambio gaseoso tiene lugar a través' }],
      },
    ],
    excretor: [
      {
        texto: 'Los residuos nitrogenados (amoníacos) se difunden a través de la pared del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [411, 413], cita: 'residuos nitrogenados (amoníacos) se difunden' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Cnidocitos',
      datos: [
        {
          texto: 'Célula redonda u ovoide con núcleo basal; en hidrozoos y escifozoos presenta el cnidocilio, un flagelo corto y rígido que sobresale de la superficie. El interior lo ocupa una cápsula con un tubo enrollado, cubierta por un opérculo o solapa.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [367, 372], cita: 'una especie de flagelo corto y rígido' }],
        },
        {
          texto: 'La base se ancla a extensiones de células epiteliomusculares y puede asociarse a una neurona terminal; el tubo o filamento está armado con espinas que se adhieren a la presa.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [373, 375], cita: 'anclada a extensiones laterales' }],
        },
        {
          texto: 'Sirven para capturar presas y pueden inyectar toxinas paralizantes; se usan una sola vez y pueden reemplazarse en 48 hs. Los tipos más comunes son los nematocistos, estructuras urticopunzantes.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [366, 377], cita: 'pueden inyectar toxinas paralizantes' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Son carnívoros; se alimentan principalmente de pequeños crustáceos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [407, 409], cita: 'se alimentan principalmente de pequeños Crustáceos' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Hydra',
      descripcion: 'pólipo solitario de agua dulce',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [346, 347], cita: 'Hydra (Clase Hidrozoa)' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Para algunos autores todos los cnidarios son diblásticos; otros opinan que los Anthozoos presentarían una tercera capa o mesodermo primario (triblásticos), que proviene del ectodermo y es de aparición tardía. El mesodermo secundario aparece recién en los bilaterios.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [330, 335], cita: 'los Anthozoos presentarían una tercera capa' }],
    },
  ],
};

export default taxon;
