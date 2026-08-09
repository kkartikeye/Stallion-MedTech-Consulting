# Image Sourcing Guide

Briefs for every photographic slot on the Stallion MedTech Consulting site.

**Nothing on the site is currently a photograph.** Every slot renders a custom
technical plate — drafting linework drawn specifically for this site — with a
small "Image pending" annotation. The layouts are finished and do not depend on
photography arriving; installing a real image is a swap, not a redesign.

---

## How to install an image

1. Source a properly licensed file (see [Licensing](#licensing)).
2. Save it to the path given in the brief, under `public/images/`.
3. Open `src/content/imagery.ts`, find the slot, and set:
   - `src` — the public path, e.g. `/images/home/hero-device-internals.jpg`
   - `alt` — describe the **subject**, not the mood. "Populated circuit board
     under a bench microscope", not "innovation in medical technology".
   - `credit` and `license` — record where it came from and under what terms.
4. That is all. Cropping, captions, gradients, and responsive behaviour are
   already handled by the `Figure` component.

If a slot should show no image at all, leave `src` as `null` — the technical
plate is a legitimate permanent option, not only a placeholder.

---

## Art direction — applies to every image

The images are the main opportunity to make this site unmistakably MedTech
rather than generically corporate. They should read as **documentary,
technical, close, and restrained**.

**Do:**
- Crop aggressively. Partial objects read as more confident than centred ones.
- Favour real material texture — anodising, machined aluminium, solder mask,
  moulded polymer, brushed steel.
- Use deep shadows and directional light. Let parts of the frame fall dark.
- Keep the frame quiet: one subject, minimal clutter.
- Neutral or slightly warm colour. Natural metal and polymer tones.
- Strong geometry. Repeating elements, edges, planes.

**Do not:**
- People as the subject. No hands, no faces, no staged working.
- Doctors, patients, clinicians, scrubs, stethoscopes, hospital corridors.
- Handshakes, meetings, whiteboards, sticky notes, laptops.
- Teal/cyan "medical technology" colour grading.
- Blue holographic overlays, glowing circuits, sci-fi HUDs, particle networks.
- Bright even stock-photo lighting with white seamless backgrounds.
- Obviously AI-generated imagery — malformed connectors, impossible geometry,
  nonsense text on labels.
- Identifiable proprietary products, or any real manufacturer's branding.

**Format:** JPEG or WebP, sRGB, long edge ≥ 2400px, optimised to under ~400 KB
where possible. Next.js handles responsive resizing.

---

## Slot briefs

### 1. `homeHero` — Homepage hero

| | |
|---|---|
| **Path** | `public/images/home/hero-device-internals.jpg` |
| **Ratio** | 3:2 or 16:10, used as a tall right-hand crop on desktop |
| **Orientation** | Landscape (cropped hard to portrait on wide screens) |

**Subject.** Macro detail of medical device internals — a populated PCB with
connectors and shielding, or a precision-engineered sub-assembly with its
housing partly open.

**Composition.** Detail concentrated toward the right of the frame; the left
40% should be quieter or fall into shadow, because the heading sits over it.
Almost architectural — think structure and edges rather than a product beauty
shot. The image bleeds off the right edge of the viewport, so nothing critical
should sit within 5% of the right border.

**Search terms:** `medical device electronics macro`, `medical equipment
internal components`, `precision electronics assembly close up`, `medical
device PCB detail`, `instrument internals macro`

**Avoid:** a whole device sitting centred on a white background; anything with
a visible brand mark.

---

### 2. `homeManufacturing` — Homepage manufacturing break (full-bleed)

| | |
|---|---|
| **Path** | `public/images/home/manufacturing-precision.jpg` |
| **Ratio** | 21:9 desktop, crops to 4:5 on mobile |
| **Orientation** | Wide landscape |

**Subject.** Precision fabrication in progress — CNC machining with coolant and
swarf, sheet-metal forming, or laser cutting. Components mid-process, not
finished goods on a shelf.

**Composition.** Dark and directional; a bright working area against shadow
works well. Type sits over the left half on desktop and the bottom on mobile,
so keep both those regions relatively quiet. Machinery may be partly abstracted
by framing.

**Search terms:** `cnc machining precision component`, `sheet metal fabrication
press brake`, `laser cutting metal industrial`, `precision manufacturing cell`,
`machined aluminium part production`

**Avoid:** operators posed at machines; bright, evenly lit showroom factories;
sparks-flying stock drama.

---

### 3. `homeIndia` — Homepage global execution

| | |
|---|---|
| **Path** | `public/images/home/india-manufacturing.jpg` |
| **Ratio** | 21:9 |
| **Orientation** | Wide landscape |

**Subject.** An advanced manufacturing, electronics assembly, or supplier
facility **in India**. Industrial and technical context — production lines,
component racking, inspection stations, or organised warehouse systems.

**Composition.** Wide, orderly, showing scale and process discipline. This
image has to carry "credible industrial capability", which is a claim about
competence, not about geography.

**Search terms:** `india electronics manufacturing facility`, `india precision
engineering factory`, `industrial manufacturing plant india interior`, `india
contract manufacturing assembly line`

**Avoid — important:** the Taj Mahal, flags, monuments, city skylines, street
scenes, markets, traffic, or any cultural shorthand. Geography must be
communicated through industrial context alone. If a suitable Indian facility
image cannot be licensed, a neutral advanced-manufacturing image is a better
outcome than a cultural cliché.

---

### 4. `capabilityEngineering` — Engineering & Technical Services

| | |
|---|---|
| **Path** | `public/images/capabilities/engineering-bench.jpg` |
| **Ratio** | 21:9 banner |
| **Orientation** | Wide landscape |

**Subject.** An electronics or test bench: oscilloscope with a live trace,
probes on a board under test, a wired-up fixture, or environmental test
equipment.

**Composition.** Close and cropped. Instrument screens may be visible provided
the trace is genuine and no proprietary data is readable.

**Search terms:** `oscilloscope probe circuit board test`, `electronics test
bench laboratory`, `pcb testing equipment close up`, `engineering test fixture`

**Avoid:** an engineer's face; generic "science lab" glassware.

---

### 5. `capabilityManufacturing` — Manufacturing, Operations & Supply Chain

| | |
|---|---|
| **Path** | `public/images/capabilities/manufacturing-cell.jpg` |
| **Ratio** | 21:9 banner |
| **Orientation** | Wide landscape |

**Subject.** A manufacturing cell or inspection station — CMM or optical
metrology, assembly fixtures, parts in kit trays, or a clean assembly area.

**Composition.** Emphasise order and repeatability: rows, fixtures, trays,
datum surfaces.

**Search terms:** `coordinate measuring machine inspection`, `manufacturing
assembly fixture`, `cleanroom assembly medical device production`, `metrology
inspection precision part`

**Avoid:** cluttered workshops; anything that reads as low-control.

---

### 6. `capabilityProduct` — Product Innovation & R&D

| | |
|---|---|
| **Path** | `public/images/capabilities/prototype-iterations.jpg` |
| **Ratio** | 21:9 banner |
| **Orientation** | Wide landscape |

**Subject.** Successive prototype iterations laid out in sequence — machined
and printed parts showing design evolution, or an exploded assembly arranged on
a bench.

**Composition.** Overhead or near-overhead, ordered in a row or grid. The
narrative is iteration, so visible differences between revisions matter more
than polish.

**Search terms:** `prototype iterations product design`, `3d printed prototype
parts sequence`, `exploded assembly components layout`, `engineering prototype
bench overhead`

**Avoid:** a single hero prototype; designer-at-desk framing.

---

### 7. `capabilityGlobal` — India, APAC & Global Execution

| | |
|---|---|
| **Path** | `public/images/capabilities/supplier-logistics.jpg` |
| **Ratio** | 21:9 banner |
| **Orientation** | Wide landscape |

**Subject.** Supply chain physical reality — industrial packaging, component
racking, staged freight, or an organised distribution facility.

**Composition.** Repetition and scale. Shipping labels or barcodes are fine if
generic and unbranded.

**Search terms:** `industrial warehouse component racking`, `freight logistics
industrial packaging`, `distribution centre shelving systems`, `electronic
components packaging bulk`

**Avoid:** container-ship-at-sunset stock imagery; world maps with glowing arcs.

---

## Optional future slots

Not yet wired up. Add to `src/content/imagery.ts` if wanted:

- **Sector page banners** (`public/images/sectors/<slug>.jpg`) — one technical
  image per sector page, following the same direction. Currently the sector
  pages are deliberately typographic.
- **Founder portrait** (`public/images/editorial/founder.jpg`) — see below.

### Founder portrait

The About page is typographic by design and is complete without a photograph.
**Do not generate or substitute a stock portrait.**

If a real portrait is commissioned: environmental rather than studio — the
founder in a technical, engineering, or manufacturing setting, working rather
than posed, shot with the same restrained and documentary treatment as the rest
of the imagery. Then set `founder.portraitUrl` in `src/content/about.ts`; the
layout switches to include the image automatically.

---

## Licensing

Only use imagery Stallion has the right to publish commercially.

**Acceptable sources**
- Paid stock with a commercial licence — Adobe Stock, Getty, Stocksy, Offset.
- Free-but-permissive libraries where the licence genuinely allows commercial
  use — Unsplash, Pexels. Check each file's terms; they change.
- Photography Stallion commissions or takes directly (best outcome — a real
  supplier or client facility, with written permission).
- Client or partner facility photography **with documented written permission**,
  and only where nothing proprietary is identifiable.

**Never**
- Hotlinking images from other sites.
- Files pulled from image search results.
- Manufacturer press images or product photography.
- Anything showing an identifiable proprietary product without permission.

**Record keeping.** Put the source and licence in the `credit` and `license`
fields in `src/content/imagery.ts` for every image installed. If a licence is
ever challenged, that registry is the record.

---

## Note on the technical plates

The drafting-linework plates currently filling these slots were drawn for this
site and are owned by it. They are not placeholders in the "grey box" sense —
they are usable indefinitely, and on the lifecycle and diagram sections they
are the intended permanent treatment.

A reasonable end state is **photography in the three homepage slots** and
**plates retained on the capability pages**, which keeps the site distinctive
rather than converging on the stock-photography look every consulting site has.
