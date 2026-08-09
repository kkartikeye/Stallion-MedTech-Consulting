import type { PlateVariant } from "@/components/visuals/TechnicalPlate";

/**
 * Image slot registry.
 *
 * Every photographic moment on the site is declared here once. Until a
 * licensed photograph is supplied, the Figure component renders the
 * declared technical plate instead — custom drafting linework matched to
 * the subject, so the page reads as art-directed rather than broken.
 *
 * TO INSTALL A REAL IMAGE
 *   1. Place the file at the documented path under /public/images/.
 *   2. Set `src` to that path and fill in `alt`, `credit`, and `license`.
 *   3. Nothing else changes — layout, captions, and cropping already work.
 *
 * Full briefs (composition, ratio, search terms, what to avoid) live in
 * IMAGE-SOURCING.md at the repository root. The `brief` field here is the
 * one-line version shown in the placeholder itself.
 *
 * NOTE: no third-party imagery is committed to this repository. Do not add
 * an image here without recording its licence.
 */

export type ImageSlot = {
  id: string;
  /** Where the file belongs once licensed. */
  path: string;
  /** Set once the licensed file is in place; null renders the plate. */
  src: string | null;
  /** Required whenever src is set. Describes the subject, not the mood. */
  alt: string | null;
  credit?: string;
  license?: string;
  /** One-line subject description, surfaced on the placeholder. */
  brief: string;
  /** Drafting plate shown while src is null. */
  plate: PlateVariant;
  /** Figure number, where the slot is captioned as a figure. */
  figure?: string;
  caption?: string;
};

export const imageSlots = {
  homeHero: {
    id: "homeHero",
    path: "/images/home/hero-device-internals.jpg",
    src: null,
    alt: null,
    brief: "Macro detail of medical device internals — board, connectors, precision housing",
    plate: "electronics",
  },
  homeManufacturing: {
    id: "homeManufacturing",
    path: "/images/home/manufacturing-precision.jpg",
    src: null,
    alt: null,
    brief: "Precision fabrication — CNC or sheet-metal forming, components mid-process",
    plate: "fabrication",
    figure: "05",
    caption:
      "Design transfer is where development assumptions meet process capability, tooling, and a supplier's real tolerances.",
  },
  homeIndia: {
    id: "homeIndia",
    path: "/images/home/india-manufacturing.jpg",
    src: null,
    alt: null,
    brief: "Advanced manufacturing or supplier facility in India — industrial, not cultural",
    plate: "network",
    figure: "06",
    caption:
      "Distributed programs succeed or fail on the handoffs between sites, not on the work done at either end.",
  },
  capabilityEngineering: {
    id: "capabilityEngineering",
    path: "/images/capabilities/engineering-bench.jpg",
    src: null,
    alt: null,
    brief: "Electronics bench — test equipment, probes, instrumented board under measurement",
    plate: "electronics",
  },
  capabilityManufacturing: {
    id: "capabilityManufacturing",
    path: "/images/capabilities/manufacturing-cell.jpg",
    src: null,
    alt: null,
    brief: "Manufacturing cell or inspection station — fixtures, metrology, parts in process",
    plate: "fabrication",
  },
  capabilityProduct: {
    id: "capabilityProduct",
    path: "/images/capabilities/prototype-iterations.jpg",
    src: null,
    alt: null,
    brief: "Prototype iterations laid out on an engineering table — successive revisions",
    plate: "assembly",
  },
  capabilityGlobal: {
    id: "capabilityGlobal",
    path: "/images/capabilities/supplier-logistics.jpg",
    src: null,
    alt: null,
    brief: "Industrial packaging, component racking, or freight staging — supply chain reality",
    plate: "network",
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageSlotId = keyof typeof imageSlots;

export function getImageSlot(id: ImageSlotId): ImageSlot {
  return imageSlots[id];
}

/** True once at least one licensed photograph has been installed. */
export const hasAnyLicensedImage = Object.values(imageSlots).some((slot) => slot.src !== null);
