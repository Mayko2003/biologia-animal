# T04 — Esqueleto de los 89 taxones

**Épica**: E0 Base · **Depende de**: T03

## Objetivo

Crear un archivo por taxón con sus metadatos (slug, nombre, nivel, padre, orden) y todos los arrays de
contenido vacíos, más el registro `data/taxa/index.ts`. Con esto el árbol completo existe desde el principio
y la UI se puede construir antes de tener el contenido.

## Archivos

- Crear: `data/taxa/<slug>.ts` (89 archivos), `data/taxa/index.ts`

## Pasos

1. Cada archivo `data/taxa/<slug>.ts` tiene esta forma exacta (cambiando los metadatos):
   ```ts
   import type { Taxon } from '@/lib/types';

   const taxon: Taxon = {
     slug: 'annelida',
     nombre: 'Annelida',
     nombreComun: 'Anélidos',
     nivel: 'phylum',
     padre: 'lophotrochozoa',
     orden: 4,
     resumen: [],
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
   ```
   - Si la fila tiene **Sinónimos**, agregar `sinonimos: [...]` después de `nombreComun`.
   - Podés escribir un script temporal de Node (fuera del repo o borrándolo antes del commit) que genere los
     archivos a partir de la tabla. **No commitear el script.**
2. `data/taxa/index.ts`:
   ```ts
   import type { Taxon } from '@/lib/types';
   import animalia from './animalia';
   // … un import por archivo, en el MISMO orden que la tabla
   export const TAXA: readonly Taxon[] = [animalia, /* … */];
   ```

## Tabla de taxones

Columnas: slug · nombre · nombreComun · nivel · padre · orden · sinónimos

### Grupos superiores

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| animalia | Animalia | Reino Animal (Metazoa) | reino | null | 1 | Metazoa |
| parazoa | Parazoa | Parazoos | subreino | animalia | 1 | |
| eumetazoa | Eumetazoa | Eumetazoos | subreino | animalia | 2 | |
| radiata | Radiata | Radiados | rama | eumetazoa | 1 | |
| bilateria | Bilateralia | Bilaterales | rama | eumetazoa | 2 | Bilateria |
| protostomia | Protostomia | Protostomados | clado | bilateria | 1 | |
| deuterostomia | Deuterostomia | Deuterostomados | clado | bilateria | 2 | |
| lophotrochozoa | Lophotrochozoa | Lofotrocozoos | clado | protostomia | 1 | |
| ecdysozoa | Ecdysozoa | Ecdisozoos | clado | protostomia | 2 | |

### Phyla

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| porifera | Porifera | Esponjas | phylum | parazoa | 1 | |
| cnidaria | Cnidaria | Cnidarios | phylum | radiata | 1 | |
| ctenophora | Ctenophora | Ctenóforos | phylum | radiata | 2 | |
| platyhelminthes | Platyhelminthes | Gusanos planos | phylum | lophotrochozoa | 1 | Platyhelmintha, Platelmintos |
| gastrotricha | Gastrotricha | Gastrotricos | phylum | lophotrochozoa | 2 | |
| rotifera | Rotifera | Rotíferos | phylum | lophotrochozoa | 3 | |
| annelida | Annelida | Anélidos | phylum | lophotrochozoa | 4 | |
| mollusca | Mollusca | Moluscos | phylum | lophotrochozoa | 5 | |
| bryozoa | Bryozoa | Briozoos | phylum | lophotrochozoa | 6 | Ectoprocta |
| brachiopoda | Brachiopoda | Braquiópodos | phylum | lophotrochozoa | 7 | |
| chaetognatha | Chaetognatha | Quetognatos (gusanos flecha) | phylum | lophotrochozoa | 8 | Quetognathos |
| nemata | Nemata | Nematodos | phylum | ecdysozoa | 1 | Nematoda |
| nematomorpha | Nematomorpha | Nematomorfos | phylum | ecdysozoa | 2 | |
| arthropoda | Arthropoda | Artrópodos | phylum | ecdysozoa | 3 | |
| echinodermata | Echinodermata | Equinodermos | phylum | deuterostomia | 1 | Equinodermata |
| hemichordata | Hemichordata | Hemicordados | phylum | deuterostomia | 2 | |
| chordata | Chordata | Cordados | phylum | deuterostomia | 3 | |

### Subgrupos de invertebrados

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| hydrozoa | Hydrozoa | Hidrozoos | clase | cnidaria | 1 | |
| scyphozoa | Scyphozoa | Escifozoos | clase | cnidaria | 2 | |
| cubozoa | Cubozoa | Cubozoos | clase | cnidaria | 3 | |
| anthozoa | Anthozoa | Antozoos | clase | cnidaria | 4 | |
| turbellaria | Turbellaria | Turbelarios | clase | platyhelminthes | 1 | |
| trematoda | Trematoda | Trematodos | clase | platyhelminthes | 2 | |
| cestoda | Cestoda | Cestodos | clase | platyhelminthes | 3 | Cestodea |
| polychaeta | Polychaeta | Poliquetos | clase | annelida | 1 | |
| oligochaeta | Oligochaeta | Oligoquetos | clase | annelida | 2 | |
| hirudinea | Hirudinea | Hirudíneos (sanguijuelas) | clase | annelida | 3 | |
| polyplacophora | Polyplacophora | Poliplacóforos (quitones) | clase | mollusca | 1 | Amphineura |
| gastropoda | Gastropoda | Gasterópodos | clase | mollusca | 2 | Gasteropoda |
| bivalvia | Bivalvia | Bivalvos | clase | mollusca | 3 | Pelecypoda, Lamellibranchia |
| scaphopoda | Scaphopoda | Escafópodos | clase | mollusca | 4 | |
| cephalopoda | Cephalopoda | Cefalópodos | clase | mollusca | 5 | Siphonopoda |
| articulata | Articulata | Braquiópodos articulados | clase | brachiopoda | 1 | |
| inarticulata | Inarticulata | Braquiópodos inarticulados | clase | brachiopoda | 2 | |
| chelicerata | Chelicerata | Quelicerados | subphylum | arthropoda | 1 | |
| myriapoda | Myriapoda | Miriápodos | subphylum | arthropoda | 2 | Miriapoda |
| crustacea | Crustacea | Crustáceos | subphylum | arthropoda | 3 | Chrustacea |
| hexapoda | Hexapoda | Hexápodos | subphylum | arthropoda | 4 | |
| merostomata | Merostomata | Merostomados (cangrejos cacerola) | clase | chelicerata | 1 | |
| pycnogonida | Pycnogonida | Picnogónidos (arañas de mar) | clase | chelicerata | 2 | Pygnogonida |
| arachnida | Arachnida | Arácnidos | clase | chelicerata | 3 | |
| araneida | Araneida | Arañas | subclase | arachnida | 1 | Araneae |
| scorpionida | Scorpionida | Escorpiones | subclase | arachnida | 2 | |
| acari | Acari | Ácaros y garrapatas | subclase | arachnida | 3 | |
| chilopoda | Chilopoda | Quilópodos (ciempiés) | clase | myriapoda | 1 | |
| diplopoda | Diplopoda | Diplópodos (milpiés) | clase | myriapoda | 2 | |
| pauropoda | Pauropoda | Paurópodos | clase | myriapoda | 3 | |
| symphyla | Symphyla | Sínfilos | clase | myriapoda | 4 | Simphyla |
| malacostraca | Malacostraca | Malacostráceos | clase | crustacea | 1 | |
| branchiopoda | Branchiopoda | Branquiópodos | clase | crustacea | 2 | |
| maxillopoda | Maxillopoda | Maxilópodos | clase | crustacea | 3 | |
| copepoda | Copepoda | Copépodos | subclase | maxillopoda | 1 | |
| cirripedia | Cirripedia | Cirrípedos | subclase | maxillopoda | 2 | |
| insecta | Insecta | Insectos | clase | hexapoda | 1 | |
| protura | Protura | Proturos | clase | hexapoda | 2 | |
| diplura | Diplura | Dipluros | clase | hexapoda | 3 | |
| collembola | Collembola | Colémbolos | clase | hexapoda | 4 | |
| asteroidea | Asteroidea | Estrellas de mar | clase | echinodermata | 1 | |
| ophiuroidea | Ophiuroidea | Ofiuros | clase | echinodermata | 2 | |
| echinoidea | Echinoidea | Erizos de mar | clase | echinodermata | 3 | |
| holothuroidea | Holothuroidea | Pepinos de mar | clase | echinodermata | 4 | |
| crinoidea | Crinoidea | Lirios de mar | clase | echinodermata | 5 | |
| enteropneusta | Enteropneusta | Enteropneustos | clase | hemichordata | 1 | |
| pterobranchia | Pterobranchia | Pterobranquios | clase | hemichordata | 2 | |

### Cordados

| slug | nombre | nombreComun | nivel | padre | orden | sinónimos |
|---|---|---|---|---|---|---|
| urochordata | Urochordata | Urocordados (tunicados) | subphylum | chordata | 1 | Tunicata |
| cephalochordata | Cephalochordata | Cefalocordados (anfioxos) | subphylum | chordata | 2 | Acrania |
| vertebrata | Vertebrata | Vertebrados | subphylum | chordata | 3 | Craniata |
| ascidiacea | Ascidiacea | Ascidias | clase | urochordata | 1 | Ascidacea |
| thaliacea | Thaliacea | Taliáceos | clase | urochordata | 2 | |
| larvacea | Larvacea | Larváceos | clase | urochordata | 3 | |
| agnatha | Agnatha | Agnatos (peces sin mandíbulas) | superclase | vertebrata | 1 | |
| gnathostomata | Gnathostomata | Gnatóstomos (vertebrados con mandíbulas) | superclase | vertebrata | 2 | Gnatostomatha |
| myxini | Myxini | Mixines | clase | agnatha | 1 | Myxines |
| cephalaspidomorphi | Cephalaspidomorphi | Lampreas | clase | agnatha | 2 | Cefalaspidomorfos |
| chondrichthyes | Chondrichthyes | Peces cartilaginosos | clase | gnathostomata | 1 | Condrichthyes |
| osteichthyes | Osteichthyes | Peces óseos | clase | gnathostomata | 2 | |
| selachii | Selachii | Elasmobranquios (tiburones y rayas) | subclase | chondrichthyes | 1 | Elasmobranchii |
| holocephali | Holocephali | Quimeras | subclase | chondrichthyes | 2 | |
| actinopterygii | Actinopterygii | Peces de aletas radiadas | subclase | osteichthyes | 1 | |
| sarcopterygii | Sarcopterygii | Peces de aletas lobuladas | subclase | osteichthyes | 2 | |

Total: 9 + 17 + 47 + 16 = **89**.

## Criterios de aceptación

- [ ] Existen exactamente 89 archivos en `data/taxa/` (sin contar `index.ts`).
- [ ] El nombre de cada archivo es igual a su `slug`.
- [ ] `TAXA` contiene los 89 en el orden de la tabla.
- [ ] Todos los arrays de contenido vacíos, `embriologia: {}`, `sistemas: {}`.
- [ ] `pnpm typecheck` pasa.

## Verificación

```bash
ls data/taxa | wc -l   # debe dar 90 (89 + index.ts)
pnpm lint && pnpm typecheck && pnpm test
```

## Fuera de alcance

- Cualquier contenido. Las validaciones automáticas se agregan en T06.
