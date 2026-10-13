import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'larvacea',
  nombre: 'Larvacea',
  nombreComun: 'Larváceos',
  nivel: 'clase',
  padre: 'urochordata',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de urocordados pelágicos; los larváceos pueden representar urocordados progénicos que viven en casas mucosas, y filtran el plancton de la corriente de agua que pasa a través de la casa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 237], cita: 'viven en casas mucosas' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Planctónicos: filtran el plancton de la corriente de agua que pasa a través de la casa mucosa donde viven.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [236, 237], cita: 'a través de la casa' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
