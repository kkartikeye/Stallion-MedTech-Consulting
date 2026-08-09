/**
 * Client types. The third dimension alongside capabilities (what) and
 * sectors (where): who the work is for, and what changes about an
 * engagement depending on the organization's stage.
 *
 * Wording stays at "potential engagement areas" where Stallion has no
 * documented track record with that client type.
 */

export type ClientType = {
  id: string;
  title: string;
  situation: string;
  /** What this client type typically needs. */
  needs: string[];
  /** Capability slugs most relevant to them. */
  capabilities: string[];
  /** Set where the framing should stay hypothetical. */
  qualifier?: string;
};

export const whoWeServeIntro = {
  eyebrow: "WHO WE SERVE",
  heading: "The same problems arrive in very different organizations",
  copy: "A ten-person startup and a global manufacturer can have the same design transfer problem. What differs is the constraint around it — capacity, process maturity, governance, or geography.",
};

export const clientTypes: ClientType[] = [
  {
    id: "early-stage",
    title: "Early-Stage MedTech",
    situation:
      "Small teams doing genuinely hard technical work, without the process infrastructure a regulated product eventually requires.",
    needs: [
      "Development structure that will survive later scrutiny",
      "Regulatory pathway clarity before design decisions harden",
      "Access to disciplines too specialized to hire yet",
      "Fractional senior leadership rather than a full-time hire",
    ],
    capabilities: [
      "product-development-rd",
      "regulatory-market-access",
      "engineering-technical",
      "strategy-growth",
    ],
  },
  {
    id: "growth-stage",
    title: "Growth-Stage Companies",
    situation:
      "Past first commercialization and scaling — where the informal practices that worked at ten people start failing at eighty.",
    needs: [
      "Operating model and governance that scales",
      "Manufacturing and supply capability to match demand",
      "Portfolio prioritization as programs multiply",
      "Quality system maturity without procedural bloat",
    ],
    capabilities: [
      "program-portfolio-transformation",
      "manufacturing-supply-chain",
      "quality-compliance",
      "commercialization",
    ],
  },
  {
    id: "established-manufacturers",
    title: "Established Manufacturers",
    situation:
      "Mature organizations with capable teams, where the constraint is capacity and competing priorities rather than knowledge.",
    needs: [
      "Dedicated ownership for initiatives nobody has bandwidth to lead",
      "Program recovery without internal political cost",
      "Sustaining and lifecycle programs that keep losing to NPD",
      "Remediation programs that need resourcing and sequencing",
    ],
    capabilities: [
      "program-portfolio-transformation",
      "post-market-lifecycle",
      "quality-compliance",
      "engineering-technical",
    ],
  },
  {
    id: "global-organizations",
    title: "Global MedTech Organizations",
    situation:
      "Multi-site, multi-region programs where coordination cost is the dominant tax on delivery.",
    needs: [
      "Cross-site and cross-region program coordination",
      "Consistent execution practice across geographies",
      "Global-to-India delivery models that work",
      "Executive visibility across a distributed portfolio",
    ],
    capabilities: [
      "india-global-execution",
      "program-portfolio-transformation",
      "manufacturing-supply-chain",
      "strategy-growth",
    ],
  },
  {
    id: "suppliers-cmos",
    title: "Suppliers & Contract Manufacturers",
    situation:
      "Organizations serving MedTech customers, or building the capability to, where quality expectations are the barrier to entry.",
    needs: [
      "Capability development against MedTech expectations",
      "Quality system implementation and maturity",
      "Transfer readiness with OEM customers",
      "Technical coordination across the customer boundary",
    ],
    capabilities: [
      "quality-compliance",
      "manufacturing-supply-chain",
      "india-global-execution",
      "engineering-technical",
    ],
  },
  {
    id: "india-entrants",
    title: "Companies Entering India & APAC",
    situation:
      "International organizations building engineering, manufacturing, supply, or commercial presence in the region.",
    needs: [
      "Grounded assessment of what entry actually requires",
      "Supplier and manufacturing ecosystem development",
      "Local engineering capability building",
      "Cross-border operating models and distributor coordination",
    ],
    capabilities: [
      "india-global-execution",
      "manufacturing-supply-chain",
      "strategy-growth",
      "commercialization",
    ],
    qualifier:
      "Stallion supports assessment, planning, and execution. Legal, tax, and local regulatory representation are handled by licensed local advisors.",
  },
  {
    id: "investors",
    title: "Investors & Corporate Development Teams",
    situation:
      "Teams evaluating or supporting MedTech assets who need technical and operational perspective alongside financial analysis.",
    needs: [
      "Technical and operational perspective on a product or platform",
      "Assessment of development or manufacturing readiness",
      "Post-investment operational support planning",
      "Independent view of program status and risk",
    ],
    capabilities: [
      "strategy-growth",
      "program-portfolio-transformation",
      "product-development-rd",
      "manufacturing-supply-chain",
    ],
    qualifier:
      "Listed as potential engagement areas. Stallion provides technical and operational perspective only, and does not provide financial, investment, legal, or transaction advice.",
  },
];

export const whoWeServeCta = {
  heading: "Where does your organization sit?",
  copy: "If none of these describe the situation exactly, that is normal. The conversation starts with the problem, not the category.",
  cta: { label: "Start a Conversation", href: "/contact" },
};
