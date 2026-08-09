import type { LifecycleStageId } from "./lifecycle";

/**
 * Capability architecture.
 *
 * Each entry generates a route at /capabilities/<slug>, a card on the
 * capability index, an entry in the desktop mega-menu, a row in the
 * capability matrix, and its own metadata. To add a capability, add an
 * object here — no component changes required.
 *
 * `qualifierNote` exists so that capabilities touching regulated or
 * licensed work state plainly where Stallion coordinates qualified
 * specialists rather than implying in-house credentials.
 */

export type CapabilityGroupId = "strategy-product" | "regulated" | "build-operate" | "deliver-grow";

export type CapabilityGroup = {
  id: CapabilityGroupId;
  label: string;
  /** Shown as the column caption in the mega-menu. */
  caption: string;
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "strategy-product",
    label: "Strategy & Product",
    caption: "Deciding what to build, and designing it",
  },
  {
    id: "regulated",
    label: "Regulated Development",
    caption: "Evidence, compliance, and market authorization",
  },
  {
    id: "build-operate",
    label: "Build & Operate",
    caption: "Software, manufacturing, and the installed base",
  },
  {
    id: "deliver-grow",
    label: "Deliver & Grow",
    caption: "Getting to market and running the programs",
  },
];

export type CapabilityLayout = "diagram" | "technical" | "documentation" | "delivery";

export type ServiceArea = {
  title: string;
  items: string[];
};

export type Capability = {
  slug: string;
  /** Full name, used as the page H1 subject and card title. */
  title: string;
  /** Compact name for navigation and matrix rows. */
  shortTitle: string;
  group: CapabilityGroupId;
  /** One sentence. Used on cards and in the mega-menu. */
  summary: string;
  metaDescription: string;
  heroHeadline: string;
  heroCopy: string;
  challenges: string[];
  serviceAreas: ServiceArea[];
  deliverables: string[];
  lifecycleStages: LifecycleStageId[];
  relatedCapabilities: string[];
  relatedSectors: string[];
  qualifierNote?: string;
  /**
   * Controls how the detail page is composed. Content-specific storytelling
   * on a shared design system: strategy pages argue with diagrams, hardware
   * pages lead with technical imagery, regulated pages present structured
   * documentation, delivery pages show timelines and governance.
   */
  layout: CapabilityLayout;
  /** Image slot for layouts that lead with photography. */
  imageSlot?: "capabilityEngineering" | "capabilityManufacturing" | "capabilityProduct" | "capabilityGlobal";
};

export const capabilities: Capability[] = [
  {
    slug: "strategy-growth",
    title: "Strategy & Growth",
    shortTitle: "Strategy & Growth",
    group: "strategy-product",
    summary:
      "Portfolio, product, and market decisions grounded in what the organization can realistically build and support.",
    metaDescription:
      "MedTech strategy consulting: portfolio and product strategy, market assessment, competitive analysis, business cases, and operating-model design for medical technology companies.",
    heroHeadline: "Strategy that survives contact with engineering",
    heroCopy:
      "Plenty of MedTech strategy work is directionally right and operationally impossible. We pressure-test growth and portfolio decisions against development effort, regulatory pathway, supply reality, and the capacity of the team expected to deliver them.",
    challenges: [
      "The portfolio has more committed programs than the organization can resource.",
      "A market opportunity looks attractive but the pathway and cost to serve it are unclear.",
      "Product strategy and engineering roadmaps have drifted apart.",
      "A new geography or segment is under consideration without a grounded view of what entry requires.",
      "Leadership needs a defensible business case for an investment decision.",
    ],
    serviceAreas: [
      {
        title: "Business & portfolio strategy",
        items: [
          "Portfolio assessment and prioritization",
          "Product and platform strategy",
          "Growth strategy and adjacency evaluation",
          "Business case development and investment framing",
          "Build, buy, or partner assessment",
        ],
      },
      {
        title: "Market & competitive analysis",
        items: [
          "Market assessment and segmentation",
          "Competitive and technology landscape review",
          "New-market and geographic entry evaluation",
          "Customer and stakeholder input synthesis",
        ],
      },
      {
        title: "Operating model",
        items: [
          "Operating-model and organizational design input",
          "Capability gap assessment",
          "Strategic planning cadence and governance",
          "Partnership and alliance structuring support",
        ],
      },
    ],
    deliverables: [
      "Portfolio assessment with prioritization rationale",
      "Market or opportunity assessment",
      "Business case with cost, timeline, and risk assumptions made explicit",
      "Capability gap analysis and recommended operating model",
      "Executive decision briefing",
    ],
    lifecycleStages: ["strategy", "concept", "scale"],
    relatedCapabilities: ["product-development-rd", "commercialization", "india-global-execution"],
    relatedSectors: ["medical-devices", "digital-health-samd", "capital-equipment"],
    layout: "diagram",
  },
  {
    slug: "product-development-rd",
    title: "Product Innovation & R&D",
    shortTitle: "Product & R&D",
    group: "strategy-product",
    summary:
      "Development planning, requirements, and design-control coordination that keep technical work and compliance work moving as one program.",
    metaDescription:
      "MedTech product development consulting: development planning, requirements management, design controls coordination, design review readiness, V&V strategy, and design transfer preparation.",
    heroHeadline: "Development programs that hold together across functions",
    heroCopy:
      "Medical device development fails at the seams more often than at the bench. Requirements drift from design inputs, design controls become a parallel paperwork exercise, and verification strategy gets settled too late. We keep the technical program and the compliance program as a single plan.",
    challenges: [
      "Requirements are unstable, incomplete, or not traceable to design inputs.",
      "Design control documentation is being reconstructed after the fact rather than generated by the work.",
      "Design reviews are treated as status meetings instead of decision gates.",
      "Verification and validation strategy is being defined too late to influence the design.",
      "The program has no single owner across engineering, quality, and regulatory.",
    ],
    serviceAreas: [
      {
        title: "Development planning",
        items: [
          "Phase-gate and development plan definition",
          "Cross-functional deliverable mapping",
          "Technical program planning and sequencing",
          "Product architecture coordination",
          "Systems thinking and interface definition",
        ],
      },
      {
        title: "Design controls & reviews",
        items: [
          "Requirements and design-input coordination",
          "Traceability structure and upkeep",
          "Design review readiness and action closure",
          "Design history file coordination",
          "Change-impact assessment during development",
        ],
      },
      {
        title: "Verification, validation & transfer",
        items: [
          "V&V strategy development",
          "Test planning coordination",
          "Usability and human factors coordination",
          "Design transfer readiness assessment",
          "Pilot build and readiness planning",
        ],
      },
    ],
    deliverables: [
      "Integrated development plan with cross-functional deliverables",
      "Requirements and traceability structure",
      "Design review readiness packages and action logs",
      "V&V strategy and test plan structure",
      "Design transfer readiness assessment",
    ],
    lifecycleStages: ["strategy", "concept", "develop", "validate", "industrialize"],
    relatedCapabilities: ["engineering-technical", "quality-compliance", "regulatory-market-access"],
    relatedSectors: ["medical-devices", "surgical-interventional", "drug-delivery-combination-products"],
    layout: "technical",
    imageSlot: "capabilityProduct",
    qualifierNote:
      "Stallion coordinates and structures design-control activity. Approval of design outputs, design history file records, and quality-system decisions remains with the client's authorized personnel.",
  },
  {
    slug: "engineering-technical",
    title: "Engineering & Technical Services",
    shortTitle: "Engineering & Technical",
    group: "strategy-product",
    summary:
      "Specialist engineering capacity — systems, mechanical, electrical, embedded, software, test, and manufacturing — scoped to a defined body of work.",
    metaDescription:
      "Medical device engineering consulting: systems, mechanical, electrical, embedded, software, test, and manufacturing engineering support scoped to defined project requirements.",
    heroHeadline: "Engineering depth, scoped to the problem",
    heroCopy:
      "Sometimes the constraint is not coordination — it is that a specific discipline is unavailable when the program needs it. We define the technical scope, identify appropriately qualified specialists, and keep their work integrated with the wider program rather than running as a detached workstream.",
    challenges: [
      "A discipline the program depends on has no available internal capacity.",
      "A technical problem has resisted internal diagnosis and needs a fresh, structured investigation.",
      "Test or verification work is the schedule bottleneck.",
      "Technical documentation has fallen behind the design.",
      "Outsourced engineering work is arriving disconnected from the rest of the program.",
    ],
    serviceAreas: [
      {
        title: "Product engineering",
        items: [
          "Systems engineering and requirements decomposition",
          "Mechanical engineering and design support",
          "Electrical and electronics engineering",
          "Embedded systems and firmware",
          "Application and platform software",
        ],
      },
      {
        title: "Test & manufacturing engineering",
        items: [
          "Test engineering and fixture definition",
          "Verification and validation execution support",
          "Manufacturing and process engineering",
          "Supplier engineering support",
          "Design for manufacturability review",
        ],
      },
      {
        title: "Analysis & documentation",
        items: [
          "Structured problem solving and root-cause analysis",
          "Data analysis and reporting",
          "Technical documentation and specifications",
          "Design and process risk analysis support",
        ],
      },
    ],
    deliverables: [
      "Scoped technical deliverables aligned to program requirements",
      "Test plans, protocols, and result summaries",
      "Analysis reports with methodology stated",
      "Documentation consistent with the client's existing standards",
    ],
    lifecycleStages: ["concept", "develop", "validate", "industrialize", "sustain"],
    relatedCapabilities: ["product-development-rd", "manufacturing-supply-chain", "post-market-lifecycle"],
    relatedSectors: ["medical-devices", "capital-equipment", "consumables-disposables"],
    layout: "technical",
    imageSlot: "capabilityEngineering",
    qualifierNote:
      "Technical specialists are identified and engaged based on the specific scope of each engagement. Stallion does not maintain every discipline permanently in-house, and says so rather than implying otherwise.",
  },
  {
    slug: "digital-software-ai",
    title: "Digital Health, Software & AI",
    shortTitle: "Digital, Software & AI",
    group: "build-operate",
    summary:
      "Software as a medical device, connected products, data strategy, and AI-enabled technology — with lifecycle and cybersecurity expectations built in from the start.",
    metaDescription:
      "Digital health and SaMD consulting: software lifecycle support, connected medical devices, interoperability, data strategy, AI-enabled medical technology, and cybersecurity coordination.",
    heroHeadline: "Software that has to behave like a medical device",
    heroCopy:
      "Software teams and device quality systems tend to speak different languages. Iterative delivery, cloud dependencies, model updates, and post-market monitoring all have to work inside a framework built for physical products. We help make that coexistence deliberate rather than improvised.",
    challenges: [
      "A software product needs a lifecycle process that satisfies both the engineering team and the quality system.",
      "A connected device introduces cloud, interoperability, and cybersecurity obligations the organization has not carried before.",
      "An AI-enabled feature needs a defensible approach to data, performance monitoring, and change management.",
      "Software validation is being treated as a documentation exercise at the end.",
      "Digital ambitions are outpacing the data foundation available to support them.",
    ],
    serviceAreas: [
      {
        title: "Software & SaMD lifecycle",
        items: [
          "Software development lifecycle definition",
          "SaMD classification and scoping support",
          "Software risk management coordination",
          "Software verification and validation strategy",
          "Configuration and release management structure",
        ],
      },
      {
        title: "Connected & interoperable products",
        items: [
          "Connected device architecture coordination",
          "Cloud and platform dependency planning",
          "Interoperability and standards alignment",
          "Cybersecurity activity coordination",
          "Field update and remote-service strategy",
        ],
      },
      {
        title: "Data & AI-enabled technology",
        items: [
          "Digital health strategy",
          "Data strategy and analytics planning",
          "AI-enabled feature scoping and evidence planning",
          "Model performance monitoring approach",
          "Change-control approach for evolving algorithms",
        ],
      },
    ],
    deliverables: [
      "Software lifecycle process definition mapped to the existing quality system",
      "SaMD scoping and classification working document",
      "Cybersecurity and connectivity activity plan",
      "Data and analytics roadmap",
      "Release and change-management structure for software products",
    ],
    lifecycleStages: ["strategy", "concept", "develop", "validate", "launch", "sustain"],
    relatedCapabilities: ["product-development-rd", "regulatory-market-access", "quality-compliance"],
    relatedSectors: ["digital-health-samd", "connected-devices", "diagnostics-ivd"],
    layout: "diagram",
    qualifierNote:
      "Cybersecurity, software validation, and AI evidence activities are coordinated by Stallion and executed with appropriately qualified specialists. Stallion does not present itself as a certifying or testing body.",
  },
  {
    slug: "regulatory-market-access",
    title: "Regulatory Affairs & Global Market Access",
    shortTitle: "Regulatory & Market Access",
    group: "regulated",
    summary:
      "Regulatory strategy, pathway assessment, and submission-program coordination — run as a managed program, not a document handoff.",
    metaDescription:
      "MedTech regulatory consulting: regulatory strategy, pathway assessment, global market planning, submission program coordination, and regulatory project management for medical devices.",
    heroHeadline: "Regulatory work managed like the program it actually is",
    heroCopy:
      "A submission is the output of a dozen functions delivering on time, not a document a regulatory team writes at the end. We coordinate the program around the pathway: what evidence is required, who produces it, when it has to exist, and what changes if the strategy shifts.",
    challenges: [
      "The regulatory pathway has been assumed rather than assessed.",
      "A submission timeline depends on inputs from teams that do not know they are on the critical path.",
      "Expansion into additional markets needs sequencing against evidence and resource constraints.",
      "A design or supplier change may affect an existing authorization and no one has assessed the impact.",
      "Regulatory activity is a bottleneck without visibility for leadership.",
    ],
    serviceAreas: [
      {
        title: "Strategy & pathway",
        items: [
          "Regulatory strategy development",
          "Pathway and classification assessment",
          "Global market planning and sequencing",
          "Predicate and comparator analysis support",
          "Evidence requirement mapping",
        ],
      },
      {
        title: "Submission program management",
        items: [
          "Submission program planning and tracking",
          "Cross-functional deliverable coordination",
          "Technical documentation readiness review",
          "Authority interaction preparation support",
          "Timeline and dependency management",
        ],
      },
      {
        title: "Change & operations",
        items: [
          "Change-impact assessment coordination",
          "Regulatory operations process improvement",
          "Market-expansion program coordination",
          "Registration maintenance planning",
        ],
      },
    ],
    deliverables: [
      "Regulatory strategy and pathway assessment",
      "Submission program plan with owners and dependencies",
      "Evidence and documentation gap analysis",
      "Market-expansion sequencing plan",
      "Change-impact assessment structure",
    ],
    lifecycleStages: ["strategy", "concept", "develop", "validate", "launch", "scale"],
    relatedCapabilities: ["quality-compliance", "clinical-evidence", "product-development-rd"],
    relatedSectors: ["medical-devices", "digital-health-samd", "diagnostics-ivd"],
    layout: "documentation",
    qualifierNote:
      "Stallion provides regulatory strategy, planning, and program coordination, and engages appropriately qualified regulatory professionals where an engagement requires them. Stallion does not act as regulatory agent or authorized representative, and does not provide legal advice. Submission content and regulatory decisions remain the client's responsibility.",
  },
  {
    slug: "quality-compliance",
    title: "Quality & Compliance",
    shortTitle: "Quality & Compliance",
    group: "regulated",
    summary:
      "Quality-system improvement, remediation programs, and CAPA execution treated as change programs rather than documentation exercises.",
    metaDescription:
      "Medical device quality consulting: QMS improvement, audit and remediation program support, CAPA execution, risk management coordination, design control improvement, and supplier quality initiatives.",
    heroHeadline: "Quality programs that change how work is done",
    heroCopy:
      "Most quality findings are not knowledge problems — the organization usually knows what good looks like. They are execution problems: no owner, no capacity, competing priorities. We run quality initiatives as programs with accountability, sequencing, and visible progress.",
    challenges: [
      "Audit or inspection findings need a credible, resourced remediation plan.",
      "CAPAs are open long past their due dates with no clear path to closure.",
      "The quality system has grown procedurally complex and slows work without reducing risk.",
      "Design control practice varies between teams and programs.",
      "Supplier quality issues recur without systemic resolution.",
    ],
    serviceAreas: [
      {
        title: "Quality system improvement",
        items: [
          "QMS assessment and simplification",
          "Procedure and workflow redesign",
          "Design-control process improvement",
          "Quality-system implementation projects",
          "Training and adoption planning",
        ],
      },
      {
        title: "Remediation & CAPA programs",
        items: [
          "Audit and inspection response program support",
          "Remediation program planning and tracking",
          "CAPA program execution and closure discipline",
          "Effectiveness-check planning",
          "Backlog reduction programs",
        ],
      },
      {
        title: "Risk & supplier quality",
        items: [
          "Risk management process coordination",
          "Risk file maintenance planning",
          "Supplier quality improvement initiatives",
          "Supplier audit follow-up coordination",
          "Compliance program management",
        ],
      },
    ],
    deliverables: [
      "Quality-system assessment with prioritized findings",
      "Remediation program plan with owners, sequencing, and milestones",
      "CAPA backlog analysis and closure plan",
      "Redesigned procedures and workflow documentation",
      "Supplier quality improvement plan",
    ],
    lifecycleStages: ["develop", "validate", "industrialize", "scale", "sustain"],
    relatedCapabilities: ["regulatory-market-access", "manufacturing-supply-chain", "post-market-lifecycle"],
    relatedSectors: ["medical-devices", "contract-manufacturing-suppliers", "consumables-disposables"],
    layout: "documentation",
    qualifierNote:
      "Stallion provides quality consulting and program execution support. Auditing, quality-system approval, and release decisions requiring designated or certified personnel are performed by appropriately qualified individuals, and accountability for the quality system remains with the client.",
  },
  {
    slug: "clinical-evidence",
    title: "Clinical, Medical & Evidence Strategy",
    shortTitle: "Clinical & Evidence",
    group: "regulated",
    summary:
      "Evidence planning and clinical program coordination that connect what the product claims to what the organization can demonstrate.",
    metaDescription:
      "MedTech clinical and evidence consulting: clinical strategy support, evidence planning, clinical operations coordination, and post-market evidence program management.",
    heroHeadline: "Evidence planned against the claim, not the calendar",
    heroCopy:
      "Evidence strategy sits between regulatory requirements, commercial claims, and reimbursement expectations — and is frequently owned by none of them. We coordinate the planning so the evidence being generated is the evidence the product will actually need.",
    challenges: [
      "Evidence requirements for regulatory, reimbursement, and commercial claims have never been reconciled.",
      "A clinical program needs cross-functional coordination beyond the clinical team.",
      "Post-market evidence obligations are accumulating without a program to manage them.",
      "Clinical timelines are on the critical path but not managed as such.",
      "Data from multiple studies or sources needs a coherent narrative.",
    ],
    serviceAreas: [
      {
        title: "Evidence strategy",
        items: [
          "Evidence requirement mapping across regulatory, clinical, and commercial needs",
          "Evidence gap analysis",
          "Claims and substantiation alignment support",
          "Study portfolio sequencing input",
        ],
      },
      {
        title: "Clinical program coordination",
        items: [
          "Clinical development program coordination",
          "Cross-functional clinical program management",
          "Site and vendor coordination support",
          "Timeline, dependency, and risk management",
        ],
      },
      {
        title: "Post-market evidence",
        items: [
          "Post-market evidence program coordination",
          "Registry and real-world data initiative support",
          "Periodic reporting program coordination",
        ],
      },
    ],
    deliverables: [
      "Evidence requirement map across regulatory, clinical, and commercial needs",
      "Evidence gap analysis with sequencing recommendations",
      "Clinical program plan with cross-functional dependencies",
      "Post-market evidence program structure",
    ],
    lifecycleStages: ["strategy", "concept", "validate", "launch", "sustain"],
    relatedCapabilities: ["regulatory-market-access", "commercialization", "post-market-lifecycle"],
    relatedSectors: ["medical-devices", "diagnostics-ivd", "surgical-interventional"],
    layout: "documentation",
    qualifierNote:
      "Stallion provides evidence planning and program coordination. Clinical investigation design, medical judgment, medical writing, and clinical oversight are performed by appropriately qualified clinical and medical professionals. Stallion does not provide medical advice or hold clinical credentials.",
  },
  {
    slug: "manufacturing-supply-chain",
    title: "Manufacturing, Operations & Supply Chain",
    shortTitle: "Manufacturing & Supply Chain",
    group: "build-operate",
    summary:
      "Design transfer, manufacturing readiness, supplier development, and the operational programs that keep supply predictable.",
    metaDescription:
      "Medical device manufacturing and supply chain consulting: design transfer, manufacturing readiness, supplier development, process improvement, sourcing, capacity, and supply chain resilience.",
    heroHeadline: "Where the design meets the line",
    heroCopy:
      "Design transfer is the point at which optimistic assumptions become measurable. We work the operational side of the program — supplier readiness, process capability, capacity, cost, and continuity — with the same structure applied to the development side.",
    challenges: [
      "A product is approaching transfer and manufacturing readiness is unproven.",
      "Yield, scrap, or cycle time are not where the business case assumed they would be.",
      "A supplier is a single point of failure and no alternative has been developed.",
      "Capacity has to increase without a corresponding increase in quality escapes.",
      "A contract manufacturer relationship needs stronger technical coordination.",
    ],
    serviceAreas: [
      {
        title: "Transfer & readiness",
        items: [
          "Design transfer planning and execution",
          "Manufacturing readiness assessment",
          "Process validation program coordination",
          "Tooling and equipment readiness tracking",
          "Pilot and ramp planning",
        ],
      },
      {
        title: "Supplier & sourcing",
        items: [
          "Supplier development and qualification coordination",
          "Contract manufacturer coordination",
          "Sourcing and localization initiatives",
          "Supplier performance improvement programs",
          "Dual-source and continuity planning",
        ],
      },
      {
        title: "Operations improvement",
        items: [
          "Manufacturing process improvement",
          "Operational excellence initiatives",
          "Capacity and throughput programs",
          "Cost improvement programs",
          "Supply chain resilience planning",
        ],
      },
    ],
    deliverables: [
      "Design transfer plan with readiness criteria",
      "Manufacturing readiness assessment and gap closure plan",
      "Supplier qualification and development plan",
      "Capacity or cost improvement program plan",
      "Continuity and dual-source strategy",
    ],
    lifecycleStages: ["industrialize", "launch", "scale", "sustain"],
    relatedCapabilities: ["engineering-technical", "quality-compliance", "india-global-execution"],
    relatedSectors: ["contract-manufacturing-suppliers", "consumables-disposables", "capital-equipment"],
    layout: "technical",
    imageSlot: "capabilityManufacturing",
  },
  {
    slug: "commercialization",
    title: "Commercialization & Market Access",
    shortTitle: "Commercialization",
    group: "deliver-grow",
    summary:
      "Launch readiness, market entry, and the commercial operating decisions that determine whether a good product lands.",
    metaDescription:
      "MedTech commercialization consulting: launch readiness, market entry planning, value proposition development, channel and distributor strategy, and commercial operating models.",
    heroHeadline: "Launch is a coordination problem first",
    heroCopy:
      "Regulatory clearance, supply, training, service, and commercial readiness have to converge on one date. Most launch difficulty comes from those workstreams being planned separately. We run launch as one integrated program and make the trade-offs visible early.",
    challenges: [
      "Launch depends on functions that are tracking to different dates.",
      "The value proposition has not been reconciled with what the evidence supports.",
      "A new geography requires a channel or distributor model the organization has not run before.",
      "Field and service readiness is lagging behind product availability.",
      "Reimbursement or access considerations were not factored into launch sequencing.",
    ],
    serviceAreas: [
      {
        title: "Launch readiness",
        items: [
          "Integrated launch planning and tracking",
          "Cross-functional readiness assessment",
          "Training and enablement program coordination",
          "Service and support readiness planning",
          "Launch risk and contingency planning",
        ],
      },
      {
        title: "Market entry & access",
        items: [
          "Market entry planning and sequencing",
          "Value proposition development support",
          "Pricing analysis support",
          "Reimbursement and market access coordination",
          "Geographic expansion planning",
        ],
      },
      {
        title: "Channel & commercial model",
        items: [
          "Distributor and channel strategy",
          "Partner selection and onboarding coordination",
          "Commercial operating model design",
          "Sales enablement program coordination",
        ],
      },
    ],
    deliverables: [
      "Integrated launch plan with cross-functional readiness gates",
      "Market entry plan and sequencing rationale",
      "Value proposition and claims alignment summary",
      "Channel or distributor strategy",
      "Commercial readiness assessment",
    ],
    lifecycleStages: ["launch", "scale"],
    relatedCapabilities: ["strategy-growth", "clinical-evidence", "india-global-execution"],
    relatedSectors: ["medical-devices", "capital-equipment", "digital-health-samd"],
    layout: "delivery",
    qualifierNote:
      "Reimbursement and market access activities are coordinated by Stallion and executed with appropriately qualified specialists where local expertise or licensure is required.",
  },
  {
    slug: "program-portfolio-transformation",
    title: "Program, Portfolio & Transformation",
    shortTitle: "Program & Portfolio",
    group: "deliver-grow",
    summary:
      "Program leadership, project recovery, PMO development, and portfolio governance — the discipline that holds the rest together.",
    metaDescription:
      "MedTech program management consulting: program leadership, project recovery, PMO development, portfolio governance, integrated planning, and cross-functional transformation delivery.",
    heroHeadline: "Someone has to own the whole thing",
    heroCopy:
      "Cross-functional programs stall when accountability is distributed to the point of disappearing. This is the discipline Stallion was founded on: a single accountable owner, an integrated plan, honest status, and decisions actually being made.",
    challenges: [
      "A critical initiative has no single accountable owner.",
      "A program has slipped repeatedly and needs recovery rather than another replan.",
      "Leadership lacks credible visibility into execution status.",
      "The portfolio has more priorities than capacity and no mechanism to resolve that.",
      "Project practice varies so widely between teams that comparison is meaningless.",
      "A transformation initiative needs delivery structure, not just a target operating model.",
    ],
    serviceAreas: [
      {
        title: "Program leadership",
        items: [
          "Embedded program and project leadership",
          "Integrated planning and milestone definition",
          "Risk, issue, and dependency management",
          "Cross-functional coordination and escalation",
          "Executive and stakeholder reporting",
        ],
      },
      {
        title: "Recovery & governance",
        items: [
          "Program recovery and turnaround",
          "Independent program assessment",
          "Governance and decision-rights design",
          "Stage-gate and review structure",
          "Status reporting and metric definition",
        ],
      },
      {
        title: "Portfolio & PMO",
        items: [
          "Portfolio visibility and prioritization",
          "PMO design and stand-up",
          "Project intake and demand management",
          "Resource and capacity planning support",
          "Transformation program delivery",
        ],
      },
    ],
    deliverables: [
      "Integrated program plan with dependencies and critical path",
      "Program assessment and recovery plan",
      "Governance model and decision-rights framework",
      "Portfolio view with prioritization logic",
      "Executive reporting structure and cadence",
    ],
    lifecycleStages: ["strategy", "concept", "develop", "validate", "industrialize", "launch", "scale", "sustain"],
    relatedCapabilities: ["product-development-rd", "quality-compliance", "manufacturing-supply-chain"],
    relatedSectors: ["medical-devices", "capital-equipment", "surgical-interventional"],
    layout: "delivery",
  },
  {
    slug: "post-market-lifecycle",
    title: "Post-Market, Sustaining & Lifecycle",
    shortTitle: "Post-Market & Lifecycle",
    group: "build-operate",
    summary:
      "Sustaining engineering, field issue resolution, and lifecycle planning for products that still have years of obligations ahead of them.",
    metaDescription:
      "Medical device sustaining engineering consulting: field issue resolution, complaint-related programs, root cause investigation coordination, engineering changes, obsolescence, and lifecycle planning.",
    heroHeadline: "The installed base deserves a real program",
    heroCopy:
      "Sustaining work loses every prioritization contest against new product development until something escalates. Giving the installed base dedicated leadership — a real backlog, real ownership, real sequencing — is usually cheaper than the escalations it prevents.",
    challenges: [
      "A recurring field issue keeps being handled as individual incidents rather than one problem.",
      "The engineering change backlog is growing faster than it is being cleared.",
      "Complaint-driven investigations need cross-functional coordination to reach closure.",
      "A critical component is going obsolete and no continuity plan exists.",
      "Sustaining priorities are set by whoever escalated most recently.",
      "Product lifecycle decisions are being deferred rather than made.",
    ],
    serviceAreas: [
      {
        title: "Field & complaint programs",
        items: [
          "Field issue program leadership",
          "Complaint-related cross-functional project coordination",
          "Root-cause investigation coordination",
          "Corrective action program support",
          "Customer and field communication coordination",
        ],
      },
      {
        title: "Sustaining engineering",
        items: [
          "Sustaining engineering portfolio management",
          "Engineering change execution",
          "Product improvement initiatives",
          "Design and process update coordination",
          "Technical documentation upkeep",
        ],
      },
      {
        title: "Lifecycle planning",
        items: [
          "Obsolescence and component continuity planning",
          "Product lifecycle and end-of-life planning",
          "Service strategy and serviceability improvement",
          "Product continuity risk assessment",
        ],
      },
    ],
    deliverables: [
      "Sustaining portfolio with prioritization and ownership",
      "Field issue investigation and resolution plan",
      "Engineering change execution plan and burn-down",
      "Obsolescence and continuity roadmap",
      "Product lifecycle plan",
    ],
    lifecycleStages: ["scale", "sustain"],
    relatedCapabilities: ["engineering-technical", "quality-compliance", "program-portfolio-transformation"],
    relatedSectors: ["capital-equipment", "medical-devices", "connected-devices"],
    layout: "delivery",
  },
  {
    slug: "india-global-execution",
    title: "India, APAC & Global Execution",
    shortTitle: "India & Global Execution",
    group: "deliver-grow",
    summary:
      "Cross-border programs connecting global MedTech organizations to India-based engineering, manufacturing, and supply.",
    metaDescription:
      "India MedTech consulting: India market strategy, global-to-India program coordination, supplier and manufacturing ecosystem development, localization, and cross-border engineering execution.",
    heroHeadline: "Cross-border programs that actually converge",
    heroCopy:
      "Distributed programs fail on the handoffs: unclear ownership across time zones, specifications that assume shared context, and quality expectations communicated once. Stallion's founder has worked these seams directly between U.S. and India-based teams, and the engagement model is built around them.",
    challenges: [
      "Work has been distributed to India-based teams or suppliers but coordination overhead is eating the benefit.",
      "A supplier or manufacturing ecosystem in India needs development against MedTech expectations.",
      "Engineering capability is being built in-region and needs structure to become self-sufficient.",
      "Entering the India market requires a grounded view of what that involves.",
      "Time-zone-split programs are losing a day per handoff.",
    ],
    serviceAreas: [
      {
        title: "Cross-border program execution",
        items: [
          "Global-to-India program coordination",
          "Distributed team operating model design",
          "Handoff, cadence, and escalation structure",
          "Technical specification and expectation alignment",
          "Cross-border engineering program delivery",
        ],
      },
      {
        title: "Supplier & manufacturing ecosystem",
        items: [
          "India supplier identification and coordination support",
          "Manufacturing partner development",
          "Localization initiative planning",
          "Supplier capability building programs",
          "Quality expectation alignment with regional partners",
        ],
      },
      {
        title: "Market & capability development",
        items: [
          "India market entry assessment",
          "Regional expansion planning",
          "Distributor and partner coordination",
          "Local engineering capability development",
          "APAC program coordination support",
        ],
      },
    ],
    deliverables: [
      "Cross-border operating model and cadence definition",
      "India supplier or manufacturing partner assessment",
      "Localization or capability-building program plan",
      "Market entry assessment",
      "Distributed program plan with clear ownership by region",
    ],
    lifecycleStages: ["develop", "industrialize", "scale", "sustain"],
    relatedCapabilities: ["manufacturing-supply-chain", "engineering-technical", "strategy-growth"],
    relatedSectors: ["contract-manufacturing-suppliers", "medical-devices", "consumables-disposables"],
    layout: "technical",
    imageSlot: "capabilityGlobal",
    qualifierNote:
      "Stallion supports market assessment and execution planning. It does not provide legal, tax, or local regulatory representation, and does not maintain established offices in every market it supports. Local licensed advisors are engaged where required.",
  },
];

export const capabilityMap: Record<string, Capability> = Object.fromEntries(
  capabilities.map((capability) => [capability.slug, capability]),
);

export function getCapability(slug: string): Capability | undefined {
  return capabilityMap[slug];
}

export function capabilitiesInGroup(groupId: CapabilityGroupId): Capability[] {
  return capabilities.filter((capability) => capability.group === groupId);
}

export const capabilitiesIntro = {
  eyebrow: "CAPABILITIES",
  heading: "Twelve capabilities, one accountable engagement",
  copy: "Most engagements draw on several of these at once — that is usually the reason a client calls. Each area can also stand alone as a focused piece of work.",
};
