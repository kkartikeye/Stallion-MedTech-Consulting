import type { LifecycleStageId } from "./lifecycle";

/**
 * MedTech sectors.
 *
 * Capabilities describe what Stallion does; sectors describe where those
 * capabilities get applied. Sectors with `hasPage: true` generate a route
 * at /medtech/<slug>; every sector currently has one.
 *
 * A new sector can still be added with `hasPage: false` and only the
 * summary filled in — it then appears as a supported area without a route,
 * and is promoted later by adding the detail fields. The UI handles both
 * states, so the architecture does not change either way.
 *
 * Language here is deliberately "areas we support" rather than claimed
 * track record. Nothing on these pages asserts prior client work that is
 * not documented.
 */

export type Sector = {
  slug: string;
  title: string;
  shortTitle: string;
  /** One line for cards and menus. */
  summary: string;
  hasPage: boolean;
  metaDescription?: string;
  heroHeadline?: string;
  heroCopy?: string;
  /** "What is changing" — forces the page beyond a service list. */
  shifts?: string[];
  challenges?: string[];
  /** Capability slugs most often relevant to this sector. */
  relevantCapabilities?: string[];
  lifecycleEmphasis?: LifecycleStageId[];
};

export const sectors: Sector[] = [
  {
    slug: "medical-devices",
    title: "Medical Devices",
    shortTitle: "Medical Devices",
    summary:
      "Class I through Class III devices across development, transfer, launch, and the long sustaining tail.",
    hasPage: true,
    metaDescription:
      "Medical device consulting across product development, design transfer, regulatory strategy, quality systems, manufacturing, and sustaining engineering.",
    heroHeadline: "The full arc of a device program",
    heroCopy:
      "Most of Stallion's capability set was built around conventional device development: cross-functional programs where engineering, quality, regulatory, and operations have to move together, and where the sustaining obligation outlives the launch by a decade.",
    shifts: [
      "Evidence expectations continue to rise, pulling clinical and post-market work earlier into program planning.",
      "Supply base consolidation and component obsolescence are creating continuity risk on mature products.",
      "Design control expectations increasingly reach into software and connectivity even on primarily mechanical devices.",
    ],
    challenges: [
      "Development programs where design controls and technical work have drifted apart",
      "Design transfer with unproven manufacturing readiness",
      "Sustaining portfolios competing with new product development for the same engineers",
      "Quality findings requiring resourced, credible remediation",
      "Programs that have slipped repeatedly and need recovery",
    ],
    relevantCapabilities: [
      "product-development-rd",
      "program-portfolio-transformation",
      "quality-compliance",
      "manufacturing-supply-chain",
      "post-market-lifecycle",
    ],
    lifecycleEmphasis: ["develop", "validate", "industrialize", "sustain"],
  },
  {
    slug: "capital-equipment",
    title: "Capital Equipment",
    shortTitle: "Capital Equipment",
    summary:
      "Complex, long-lived systems where serviceability, installed-base support, and obsolescence dominate the lifecycle.",
    hasPage: true,
    metaDescription:
      "Capital medical equipment consulting: systems development programs, design transfer, service strategy, installed base support, obsolescence planning, and sustaining engineering.",
    heroHeadline: "Systems that live in the field for a decade or more",
    heroCopy:
      "Capital equipment shifts the centre of gravity toward the back half of the lifecycle. Serviceability, spare parts, field upgrades, and component obsolescence become the programs that consume engineering capacity long after launch.",
    shifts: [
      "Connectivity and remote service are becoming baseline expectations, bringing cybersecurity obligations to previously standalone systems.",
      "Electronic component obsolescence cycles are far shorter than equipment service life, forcing continuous redesign.",
      "Service revenue and uptime commitments are raising the operational stakes of field reliability.",
    ],
    challenges: [
      "Multi-discipline system programs with heavy integration risk",
      "Field reliability issues that need coordinated root-cause resolution",
      "Component obsolescence threatening product continuity",
      "Service and serviceability strategy lagging the product",
      "Installed-base upgrade programs competing with new development",
    ],
    relevantCapabilities: [
      "engineering-technical",
      "post-market-lifecycle",
      "program-portfolio-transformation",
      "manufacturing-supply-chain",
      "digital-software-ai",
    ],
    lifecycleEmphasis: ["develop", "industrialize", "sustain"],
  },
  {
    slug: "surgical-interventional",
    title: "Surgical & Interventional",
    shortTitle: "Surgical & Interventional",
    summary:
      "Procedure-driven technologies where usability, clinical evidence, and training readiness shape the program.",
    hasPage: true,
    metaDescription:
      "Surgical and interventional device consulting: development programs, human factors coordination, evidence planning, launch readiness, and training program coordination.",
    heroHeadline: "Technology defined by the procedure around it",
    heroCopy:
      "Surgical and interventional products are inseparable from technique. Usability, training, and clinical evidence are not launch activities bolted on at the end — they constrain the design and the program from the beginning.",
    shifts: [
      "Human factors and usability expectations are increasingly determinative in design decisions.",
      "Evidence requirements for procedural claims continue to expand.",
      "Training and proctoring readiness are becoming gating items for commercial launch.",
    ],
    challenges: [
      "Usability and human factors work arriving too late to influence the design",
      "Evidence strategy misaligned with the claims the commercial team intends to make",
      "Instrument and consumable interdependencies complicating the program",
      "Training and field readiness lagging product availability",
      "Launch coordination across regulatory, supply, and commercial",
    ],
    relevantCapabilities: [
      "product-development-rd",
      "clinical-evidence",
      "commercialization",
      "regulatory-market-access",
      "engineering-technical",
    ],
    lifecycleEmphasis: ["develop", "validate", "launch"],
  },
  {
    slug: "diagnostics-ivd",
    title: "Diagnostics & IVD",
    shortTitle: "Diagnostics & IVD",
    summary:
      "Assay, instrument, and software systems where analytical performance and evidence drive the program.",
    hasPage: true,
    metaDescription:
      "Diagnostics and IVD consulting: instrument and assay development coordination, evidence planning, regulatory strategy, software and data workflows, and manufacturing transfer.",
    heroHeadline: "Three products in one program",
    heroCopy:
      "A diagnostic system is usually an instrument, a consumable, and software developed on different clocks by different teams — then validated as one system. Most diagnostics program difficulty traces back to that coordination problem.",
    shifts: [
      "Software and data workflows are becoming as consequential as the assay itself.",
      "Evidence and analytical performance expectations are rising alongside regulatory scrutiny.",
      "Decentralized and point-of-care formats are changing usability and supply assumptions.",
    ],
    challenges: [
      "Instrument, consumable, and software programs running on different timelines",
      "Analytical and clinical performance evidence needing coherent planning",
      "Software and data workflow obligations inside a device quality system",
      "Manufacturing transfer of consumables at volume",
      "Regulatory pathway complexity across markets",
    ],
    relevantCapabilities: [
      "product-development-rd",
      "clinical-evidence",
      "digital-software-ai",
      "regulatory-market-access",
      "manufacturing-supply-chain",
    ],
    lifecycleEmphasis: ["develop", "validate", "industrialize"],
  },
  {
    slug: "digital-health-samd",
    title: "Digital Health & SaMD",
    shortTitle: "Digital Health & SaMD",
    summary:
      "Software as a medical device and digital therapeutics, where iterative delivery meets device-grade lifecycle control.",
    hasPage: true,
    metaDescription:
      "Digital health and SaMD consulting: software lifecycle definition, SaMD scoping, regulatory strategy, cybersecurity coordination, AI-enabled features, and post-market monitoring.",
    heroHeadline: "Shipping software inside a device quality system",
    heroCopy:
      "Software organizations release continuously. Device quality systems were designed around discrete, controlled change. Making those two facts coexist — without either paralysing the engineering team or hollowing out the quality system — is the central problem in this sector.",
    shifts: [
      "AI-enabled features are raising new questions about change control, performance monitoring, and evidence.",
      "Cybersecurity expectations now extend across the full product lifecycle, not just at release.",
      "Reimbursement and evidence pathways for digital products remain uneven across markets.",
    ],
    challenges: [
      "Software lifecycle process that satisfies both engineering practice and the quality system",
      "SaMD scoping and classification questions",
      "AI-enabled features needing a defensible change-management and monitoring approach",
      "Cybersecurity obligations spanning development and post-market",
      "Evidence and access strategy for a digital product",
    ],
    relevantCapabilities: [
      "digital-software-ai",
      "regulatory-market-access",
      "quality-compliance",
      "clinical-evidence",
      "commercialization",
    ],
    lifecycleEmphasis: ["develop", "validate", "launch", "sustain"],
  },
  {
    slug: "connected-devices",
    title: "Connected Medical Devices",
    shortTitle: "Connected Devices",
    summary:
      "Devices with cloud, interoperability, and remote-service dependencies layered onto physical product obligations.",
    hasPage: true,
    metaDescription:
      "Connected medical device consulting: architecture coordination, interoperability, cybersecurity activity coordination, field update strategy, and post-market monitoring.",
    heroHeadline: "A physical product with a software supply chain",
    heroCopy:
      "Adding connectivity adds a second product: cloud services, update mechanisms, interoperability commitments, and a cybersecurity obligation that persists for the life of the device. Organizations built around hardware release cycles are rarely structured for it.",
    shifts: [
      "Remote update capability is shifting post-market response from field visits to release management.",
      "Interoperability commitments are increasingly explicit in customer procurement requirements.",
      "Cybersecurity obligations extend across the full supported life of the device.",
    ],
    challenges: [
      "Hardware and cloud release cycles that need to be reconciled",
      "Cybersecurity activity spanning development, launch, and post-market",
      "Interoperability and standards commitments",
      "Field update and remote-service strategy",
      "Sustaining a connected fleet across firmware and cloud versions",
    ],
    relevantCapabilities: [
      "digital-software-ai",
      "engineering-technical",
      "post-market-lifecycle",
      "quality-compliance",
      "product-development-rd",
    ],
    lifecycleEmphasis: ["develop", "launch", "sustain"],
  },
  {
    slug: "drug-delivery-combination-products",
    title: "Drug Delivery & Combination Products",
    shortTitle: "Drug Delivery & Combination",
    summary:
      "Products sitting across device and pharmaceutical frameworks, with two sets of expectations to satisfy at once.",
    hasPage: true,
    metaDescription:
      "Drug delivery and combination product consulting: cross-framework program coordination, design controls, human factors, manufacturing transfer, and partner coordination.",
    heroHeadline: "Two regulatory frameworks, one program",
    heroCopy:
      "Combination products have to satisfy device design controls and pharmaceutical expectations simultaneously, frequently across two organizations with different vocabularies, timelines, and governance. Coordination is the whole job.",
    shifts: [
      "Human factors and use-related risk analysis carry increasing weight for self-administered products.",
      "Partner and CDMO arrangements are adding coordination layers to already complex programs.",
      "Sustainability and materials considerations are entering device component decisions.",
    ],
    challenges: [
      "Device and pharmaceutical development frameworks running in parallel",
      "Partner and CDMO coordination across organizational boundaries",
      "Human factors and use-related risk for self-administration",
      "Manufacturing transfer with high-volume component requirements",
      "Change control spanning both frameworks",
    ],
    relevantCapabilities: [
      "product-development-rd",
      "regulatory-market-access",
      "manufacturing-supply-chain",
      "quality-compliance",
      "program-portfolio-transformation",
    ],
    lifecycleEmphasis: ["develop", "validate", "industrialize"],
  },
  {
    slug: "contract-manufacturing-suppliers",
    title: "Contract Manufacturing & Suppliers",
    shortTitle: "CMOs & Suppliers",
    summary:
      "Suppliers and manufacturing partners building MedTech capability, and the OEMs who depend on them.",
    hasPage: true,
    metaDescription:
      "MedTech contract manufacturing and supplier consulting: capability development, quality expectation alignment, transfer readiness, OEM coordination, and India supplier ecosystem development.",
    heroHeadline: "Both sides of the supplier relationship",
    heroCopy:
      "Stallion works with OEMs coordinating a supply base and with suppliers building the capability to serve MedTech customers. The recurring failure is the same from either direction: expectations communicated once, assumed understood, and discovered to be misaligned during a build.",
    shifts: [
      "OEMs are actively diversifying supply geography, creating demand for qualified capacity in new regions.",
      "MedTech quality expectations are a genuine barrier to entry for suppliers arriving from other industries.",
      "Supplier technical capability is increasingly a selection criterion, not just cost and capacity.",
    ],
    challenges: [
      "Supplier capability gaps against MedTech quality expectations",
      "Transfer readiness between OEM and manufacturing partner",
      "Recurring supplier quality issues without systemic resolution",
      "Building qualified capacity in a new region",
      "Technical coordination across the OEM–supplier boundary",
    ],
    relevantCapabilities: [
      "manufacturing-supply-chain",
      "india-global-execution",
      "quality-compliance",
      "engineering-technical",
      "program-portfolio-transformation",
    ],
    lifecycleEmphasis: ["industrialize", "scale"],
  },

  {
    slug: "cardiovascular",
    title: "Cardiovascular Technologies",
    shortTitle: "Cardiovascular",
    summary:
      "High-acuity implantable and interventional technologies, where the evidence bar and the consequences of a field issue are both at their highest.",
    hasPage: true,
    metaDescription:
      "Cardiovascular device consulting: evidence strategy, design change control on implanted products, biocompatibility coordination, supplier control, and post-market surveillance programs.",
    heroHeadline: "Where the evidence bar is highest",
    heroCopy:
      "Cardiovascular products carry the longest evidence tail in medical technology. Decisions taken during development determine what can be claimed years later, and a design change on an implanted product is never a local change.",
    shifts: [
      "Transcatheter and structural heart approaches continue to move procedure volumes, changing the competitive set for established products.",
      "Long-term follow-up expectations are extending the evidence obligation well past market authorization.",
      "Miniaturization and power constraints on implantables are pushing more of the difficulty into materials and electronics.",
    ],
    challenges: [
      "Evidence strategy that has to satisfy premarket, reimbursement, and long-term follow-up at once",
      "Design or supplier changes on an implanted product, where change impact assessment is unforgiving",
      "Biocompatibility and materials decisions taken before their downstream cost is understood",
      "Supplier control for components with no acceptable second source",
      "Post-market surveillance obligations accumulating faster than the team managing them",
    ],
    relevantCapabilities: [
      "clinical-evidence",
      "regulatory-market-access",
      "product-development-rd",
      "quality-compliance",
      "post-market-lifecycle",
    ],
    lifecycleEmphasis: ["concept", "develop", "validate", "sustain"],
  },
  {
    slug: "imaging-systems",
    title: "Diagnostic & Imaging Systems",
    shortTitle: "Imaging Systems",
    summary:
      "Imaging platforms combining hardware, software, and multi-year service obligations on a single installed base.",
    hasPage: true,
    metaDescription:
      "Diagnostic and imaging systems consulting: multi-discipline development programs, software and AI features inside a device quality system, installed base upgrades, service strategy, and obsolescence planning.",
    heroHeadline: "Hardware lifetimes, software release cycles",
    heroCopy:
      "An imaging system is a decade-long hardware commitment carrying software that wants to ship quarterly. Most of the programme difficulty comes from those two clocks running in the same product.",
    shifts: [
      "Reconstruction, triage, and workflow features are moving imaging value into software, and into software lifecycle obligations.",
      "Service revenue and uptime commitments are raising the operational stakes of field reliability.",
      "Detector and compute component lifecycles are far shorter than system service life, forcing continuous redesign.",
    ],
    challenges: [
      "Multi-discipline system integration where a schedule slip in one subsystem stalls the rest",
      "Software and AI features that need a lifecycle process the quality system will accept",
      "Installed base upgrade programs competing with new development for the same engineers",
      "Field reliability issues requiring coordinated root-cause work across mechanical, electrical, and software",
      "Component obsolescence threatening continuity on systems still under service contract",
    ],
    relevantCapabilities: [
      "engineering-technical",
      "digital-software-ai",
      "post-market-lifecycle",
      "manufacturing-supply-chain",
      "program-portfolio-transformation",
    ],
    lifecycleEmphasis: ["develop", "industrialize", "launch", "sustain"],
  },
  {
    slug: "consumables-disposables",
    title: "Consumables & Disposables",
    shortTitle: "Consumables",
    summary:
      "High-volume single-use products where unit cost, yield, sterilization, and supply continuity decide whether the business case holds.",
    hasPage: true,
    metaDescription:
      "Medical consumables and disposables consulting: yield and scrap improvement, multi-cavity tooling validation, sterilization strategy, supply continuity, and cost improvement without revalidation churn.",
    heroHeadline: "Where a cent per unit is a strategy",
    heroCopy:
      "At single-use volumes, decisions that look like rounding errors in development become the whole margin. Yield, cavitation, cycle time, and sterilization modality are strategic choices, not manufacturing details.",
    shifts: [
      "Sustained cost pressure is pushing localization and resin substitution onto products that were never designed for either.",
      "Scrutiny of established sterilization modalities is forcing organizations to hold credible alternatives.",
      "Materials and packaging sustainability expectations are entering specifications that were stable for years.",
    ],
    challenges: [
      "Yield and scrap that do not hold at production volume and rate",
      "Multi-cavity tooling and process validation across cavities and shifts",
      "Sterilization strategy, validation, and the cost of holding a second modality",
      "Supply continuity for resins and components with long qualification lead times",
      "Cost-down programs that trigger more revalidation than they save",
    ],
    relevantCapabilities: [
      "manufacturing-supply-chain",
      "quality-compliance",
      "engineering-technical",
      "india-global-execution",
      "post-market-lifecycle",
    ],
    lifecycleEmphasis: ["industrialize", "scale", "sustain"],
  },
  {
    slug: "ai-enabled-medtech",
    title: "AI-Enabled Medical Technology",
    shortTitle: "AI-Enabled MedTech",
    summary:
      "Products whose behaviour can change after shipping, where change control, data provenance, and performance monitoring become core obligations.",
    hasPage: true,
    metaDescription:
      "AI-enabled medical technology consulting: change control for evolving models, data provenance, performance monitoring, evidence planning, and integrating model development with a device quality system.",
    heroHeadline: "A product that can change after you ship it",
    heroCopy:
      "Device quality systems assume a product is fixed at release. A model that can be retrained, or whose performance drifts with the population it sees, breaks that assumption — and the organization has to decide deliberately what a controlled change now means.",
    shifts: [
      "Expectations around predetermined change control are maturing, rewarding organizations that planned for model updates rather than retrofitting a process.",
      "Data provenance and population representativeness are receiving scrutiny equal to the algorithm itself.",
      "Post-market performance monitoring is becoming a design requirement rather than a reporting afterthought.",
    ],
    challenges: [
      "Defining what counts as a controlled change when a model is retrained",
      "Data provenance, representativeness, and the ability to evidence both",
      "Monitoring performance drift in the field and deciding what triggers action",
      "Evidence that supports the claim actually being made, not the capability demonstrated",
      "Model development practice and the quality system operating as one process rather than two",
    ],
    relevantCapabilities: [
      "digital-software-ai",
      "regulatory-market-access",
      "clinical-evidence",
      "quality-compliance",
      "product-development-rd",
    ],
    lifecycleEmphasis: ["concept", "develop", "validate", "sustain"],
  },
  {
    slug: "wearables-remote-monitoring",
    title: "Wearables & Remote Monitoring",
    shortTitle: "Wearables & Monitoring",
    summary:
      "Continuous-use products spanning device, connectivity, and data workflows, where adherence matters as much as accuracy.",
    hasPage: true,
    metaDescription:
      "Wearables and remote monitoring consulting: human factors for long wear, sensing accuracy under power and comfort constraints, data and alarm workflows, regulatory boundaries, and connected fleet sustaining.",
    heroHeadline: "Continuous use, continuous obligation",
    heroCopy:
      "A monitoring product only produces the data its business case assumes if people keep wearing it. Adherence, comfort, and power are not secondary to sensing accuracy — they determine whether accuracy is ever achieved in the field.",
    shifts: [
      "Reimbursement pathways for remote monitoring are maturing unevenly across markets, making sequencing a strategic decision.",
      "Consumer-grade expectations for form factor and battery life are colliding with medical-grade requirements.",
      "Continuous data volumes are turning alarm design and signal quality into primary engineering problems.",
    ],
    challenges: [
      "Human factors and adherence across weeks of wear rather than a single procedure",
      "Sensing accuracy under real power, thermal, and comfort constraints",
      "Data pipeline, signal quality, and alarm management at continuous volume",
      "The regulatory boundary between wellness positioning and device claims",
      "Sustaining a connected fleet across firmware, app, and cloud versions",
    ],
    relevantCapabilities: [
      "product-development-rd",
      "digital-software-ai",
      "clinical-evidence",
      "regulatory-market-access",
      "commercialization",
    ],
    lifecycleEmphasis: ["concept", "develop", "launch", "sustain"],
  },
  {
    slug: "robotics-advanced-systems",
    title: "Robotics & Advanced Medical Systems",
    shortTitle: "Robotics",
    summary:
      "Multi-discipline systems where integration, safety architecture, and service readiness dominate the program.",
    hasPage: true,
    metaDescription:
      "Medical robotics consulting: system integration and interface control, safety architecture, verification for a system of systems, training and field service readiness, and installed base version management.",
    heroHeadline: "Integration is the program",
    heroCopy:
      "In robotics the individual disciplines are rarely the constraint. Mechanical, electrical, software, controls, and clinical workflow all work — the difficulty is the interfaces between them, and the fact that verification has to cover the system rather than the parts.",
    shifts: [
      "Capital scrutiny is pushing purchasers toward utilization-based justification, which raises the stakes on uptime and throughput.",
      "Expanding autonomy is deepening the safety architecture and risk analysis required to support it.",
      "Service, training, and proctoring capacity are becoming gating constraints on commercial rollout.",
    ],
    challenges: [
      "System integration and interface control across five or more disciplines",
      "Safety architecture and risk analysis depth proportionate to the level of autonomy",
      "Verification and validation for a system of systems rather than a set of subsystems",
      "Training, proctoring, and field service readiness gating commercial launch",
      "Installed base upgrades and version control across a deployed fleet",
    ],
    relevantCapabilities: [
      "engineering-technical",
      "product-development-rd",
      "program-portfolio-transformation",
      "post-market-lifecycle",
      "clinical-evidence",
    ],
    lifecycleEmphasis: ["concept", "develop", "validate", "launch"],
  },
];

export const sectorMap: Record<string, Sector> = Object.fromEntries(
  sectors.map((sector) => [sector.slug, sector]),
);

export function getSector(slug: string): Sector | undefined {
  return sectorMap[slug];
}

export const sectorsWithPages = sectors.filter((sector) => sector.hasPage);
export const sectorsWithoutPages = sectors.filter((sector) => !sector.hasPage);

export const sectorsIntro = {
  eyebrow: "MEDTECH SECTORS",
  heading: "Where these capabilities get applied",
  copy: "The engineering discipline changes by sector; the failure modes rarely do. These are the areas of medical technology Stallion supports, and what tends to make each one difficult.",
};

/**
 * Shown on the sector index. Keeps the distinction between areas Stallion
 * supports and claimed track record explicit.
 */
export const sectorDisclaimer =
  "These are areas Stallion supports and can staff appropriately. Sector pages describe common challenges and applicable capabilities rather than claimed prior engagements.";
