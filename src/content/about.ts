/**
 * About.
 *
 * The story begins with why the firm exists — the structural gap it was
 * created to work in — and only then introduces the founder. Nothing here
 * asserts credentials, career length, or certifications that have not been
 * confirmed. `founder.certification` stays a bracketed placeholder until a
 * real credential is supplied; the UI omits the line entirely rather than
 * displaying an empty label.
 */

export const aboutIntro = {
  eyebrow: "ABOUT",
  heading: "Built to work in the space between functions",
  copy: "Most MedTech problems that matter do not belong to a single team. Stallion exists to take ownership of them.",
};

export const whyWeExist = {
  eyebrow: "WHY STALLION EXISTS",
  heading: "The hardest problems have no natural owner",
  paragraphs: [
    "In medical technology, the difficult work rarely sits inside one function. A design transfer is an engineering problem, a quality problem, a supplier problem, and a schedule problem simultaneously. A recurring field issue involves service, engineering, quality, and regulatory before it is resolved. A market entry requires regulatory, evidence, supply, and commercial decisions that depend on each other.",
    "Organizations are structured by function, which is sensible for running operations and unhelpful for problems that cross them. Cross-functional work tends to be assigned to whoever has the most capacity rather than the most authority, and progress depends on goodwill rather than accountability.",
    "Stallion was created to work in exactly that space: to take ownership of problems that cross boundaries, bring the right expertise to them, and stay accountable until the client can carry the work forward.",
  ],
};

/**
 * A short first-person statement from the founder.
 *
 * Kept to observations about the work itself — no invented biography, no
 * origin anecdote, no claimed career length. It exists so the site reads as
 * written by a person with a view, rather than by a firm with a template.
 * Review and edit the voice before publishing; the substance is drawn from
 * the positioning already documented elsewhere in this file.
 */
export const founderStatement = {
  quote:
    "Stallion was built around one observation: the hardest MedTech problems rarely belong to a single function.",
  paragraphs: [
    "I have spent my career on the cross-functional side of medical technology — the programs where engineering, quality, regulatory, and operations each hold part of the answer and none of them hold the schedule. What struck me repeatedly was how rarely those problems failed for technical reasons. They failed because nobody owned the space between the teams.",
    "That is the work I wanted to do properly. Not advising from outside the program, and not executing a task list handed down from it — sitting inside the problem with enough technical depth to argue about the engineering and enough delivery experience to keep it moving.",
  ],
  attribution: "Kartikeye Khanna, Founder & Principal",
};

export const operatingPhilosophy = {
  eyebrow: "HOW WE THINK ABOUT THE WORK",
  heading: "Operating philosophy",
  principles: [
    {
      title: "The stated problem is not always the real one",
      detail:
        "Engagements that begin by accepting the brief at face value frequently solve something adjacent to what actually mattered. Time spent framing the problem is not overhead.",
    },
    {
      title: "Accountability has to sit somewhere specific",
      detail:
        "Shared ownership across a steering group is functionally the same as no ownership. Someone should be answerable for the outcome by name.",
    },
    {
      title: "Status reporting is only useful if it is honest",
      detail:
        "A program reported green until the month it slips is worse than one reported amber for a quarter. Bad news early is the entire value of reporting.",
    },
    {
      title: "Scope the team to the problem",
      detail:
        "A fixed bench encourages solving every problem with the people already on it. Determining what the work genuinely requires produces better answers and smaller teams.",
    },
    {
      title: "The engagement should end",
      detail:
        "The measure of success is the client owning the work without us. Consulting relationships that quietly become permanent have usually stopped transferring anything.",
    },
  ],
};

export const founder = {
  name: "Kartikeye Khanna",
  title: "Founder & Principal",
  background: "Computer engineering and medical technology program management",
  experienceThemes: [
    "Cross-functional R&D initiatives",
    "Product development",
    "Sustaining engineering portfolios",
    "Design transfer",
    "Process improvement",
    "Global stakeholder coordination",
    "U.S.–India program execution",
  ],
  /**
   * Replace with a confirmed credential, or leave bracketed. The UI hides
   * this line entirely while it remains a placeholder — it never renders an
   * unverified certification.
   */
  certification: "[CONFIRM BEFORE PUBLISHING]",
  bio: [
    "Kartikeye Khanna founded Stallion MedTech Consulting to bring accountable, technically grounded leadership to medical technology organizations working through problems that cross functional boundaries.",
    "His background combines computer engineering with medical technology project and program management, spanning cross-functional R&D initiatives, product development, sustaining engineering portfolios, design transfer, and process improvement — with direct experience coordinating programs between U.S. and India-based teams.",
    "That combination shapes how Stallion works: close enough to the technology to engage with the actual engineering problem, and experienced enough in cross-functional delivery to keep a program moving when it depends on five teams with different priorities.",
  ],
  /**
   * No approved portrait exists. The founder section uses a typographic
   * layout that is complete without one rather than displaying an empty
   * photo frame. Supply an approved image and add it here.
   */
  portraitUrl: null as string | null,
};

export const aboutCta = {
  heading: "Start with the problem.",
  copy: "Describe what you are working through and we will help determine what it actually needs.",
  cta: { label: "Start a Conversation", href: "/contact" },
};
