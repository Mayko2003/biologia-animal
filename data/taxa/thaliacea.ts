import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'thaliacea',
  nombre: 'Thaliacea',
  nombreComun: 'Taliáceos (salpas)',
  nivel: 'clase',
  padre: 'urochordata',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de urocordados pelágicos adaptados a la existencia planctónica; los taliáceos (salpas) poseen forma de casco, con los sifones bucal y atrial en extremos opuestos del cuerpo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 234], cita: 'forma de casco' }],
    },
    {
      texto: 'Nadan utilizando la corriente del agua que pasa por la faringe y el atrio, generada por contracciones de la musculatura de la pared del cuerpo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [234, 236], cita: 'pasa por la faringe' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
