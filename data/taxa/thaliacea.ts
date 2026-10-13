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
  morfologiaExterna: [
    {
      texto: 'Cuerpo en forma de «tonel» cubierto por una túnica compleja, con los sifones bucal y atrial en extremos opuestos; eje oro-aboral rectilíneo, con la cavidad faríngea y cloacal ocupando casi todo el eje.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cuerpo cubierto por una túnica compleja.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Sin esqueleto rígido; la túnica cubre el cuerpo.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Musculatura en bandas por todo el cuerpo, no sólo en los sifones; su contracción genera la corriente que propulsa al animal.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Faringe perforada muy desarrollada; son filtradores.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La corriente de agua que atraviesa la faringe y el atrio sirve para el intercambio gaseoso, la alimentación y la propulsión.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón tubular del plan urocordado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores diferenciados documentados; plan urocordado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso reducido del plan urocordado (ganglio del tronco).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Receptores sensoriales poco desarrollados, como en los demás urocordados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Alternancia de generaciones asexual y sexual: el individuo asexual produce individuos sexuales por estrobilación; las salpas son vivíparas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Ciclo con alternancia de generaciones: zooides asexuales que producen individuos sexuales (estrobilación en sálpidos; espolones y yemas en doliólidos); las salpas son vivíparas con embriogénesis en un órgano materno.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Planctónicos (holoplancton), marinos y de vida libre: nadan expulsando agua por el sifón.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Salpa fusiformis y Thalia democratica',
      descripcion: 'sálpidos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Pyrosomatidae',
      descripcion: 'pirosomas coloniales',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Doliolidae',
      descripcion: 'doliólidos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Thaliacea', titulo: 'Thaliacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
