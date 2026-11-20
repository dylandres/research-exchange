// Static demo data for the Maker Day 2 mockup screens.
// Companies, labs and people here are fictional examples.

export type Role = "company" | "researcher";

export type User = {
  name: string;
  initials: string;
  subtitle: string;
};

export type Company = {
  id: string;
  name: string;
  team: string;
  contact: string;
  initial: string;
};

export type Lab = {
  id: string;
  name: string;
  lead: string;
  leadTitle: string;
  institution: string;
  areas: string[];
  focus: string;
  capacity: string;
  engagementTypes: string[];
  relevantWork: string[];
  dataHandling: string;
  responseTime: string;
};

export type Challenge = {
  id: string;
  companyId: string;
  title: string;
  engagementType: string;
  goal: string[];
  researchAreas: string[];
  tags: string[];
  constraints: string[];
  duration: string;
  details: string[];
};

export type MatchStatus = "notified" | "interested" | "intro_scheduled";

export type Match = {
  id: string;
  challengeId: string;
  labId: string;
  score: number;
  status: MatchStatus;
  whyMatched: string;
  sharedAreas: string[];
};

export type Message = {
  id: string;
  matchId: string;
  from: Role;
  body: string;
  sentAt: string;
};

export const users: Record<Role, User> = {
  company: {
    name: "Dylan Andres",
    initials: "DA",
    subtitle: "Product Team",
  },
  researcher: {
    name: "Dr. Alex Morgan",
    initials: "AM",
    subtitle: "Applied AI Lab",
  },
};

export const researchAreas = [
  "Machine Learning",
  "Computer Vision",
  "Medical Imaging",
  "Model Interpretability",
  "Natural Language Processing",
  "Healthcare AI",
  "Deep Learning",
  "Robustness",
  "Radiology AI",
  "Clinical Translation",
  "Data Science",
  "Cybersecurity",
  "Optimization",
  "Materials Science",
];

export const engagementTypes = [
  "Sponsored Research",
  "Pilot Project",
  "Consulting",
  "Student Placement",
];

export const collaborationSteps = [
  { title: "Intro Call", description: "Meet the researchers and discuss your problem." },
  { title: "Scope Alignment", description: "Refine the research question, feasibility and approach." },
  { title: "Pilot Design", description: "Define milestones, timeline and data requirements." },
  { title: "Funded Project", description: "Launch the collaboration and start research." },
];

export const companies: Company[] = [
  {
    id: "meridian",
    name: "Meridian Health",
    team: "Product Team",
    contact: "Dylan Andres",
    initial: "M",
  },
  {
    id: "harbor",
    name: "Harbor Health Network",
    team: "Clinical Informatics",
    contact: "Priya Nair",
    initial: "H",
  },
  {
    id: "northfield",
    name: "Northfield Manufacturing",
    team: "Quality Engineering",
    contact: "Marcus Lee",
    initial: "N",
  },
];

export const labs: Lab[] = [
  {
    id: "ct-applied-ai",
    name: "Applied AI Lab",
    lead: "Dr. Alex Morgan",
    leadTitle: "Professor, Computer Science",
    institution: "University",
    areas: ["Machine Learning", "Medical Imaging", "Model Interpretability"],
    focus:
      "Interpretable and robust machine learning for medical imaging, with a focus on reducing false positives in clinical screening.",
    capacity: "1 PhD student and 20% PI time, starting January 2027",
    engagementTypes: ["Sponsored Research", "Pilot Project"],
    relevantWork: [
      "Calibrated screening models that cut false alarms in chest X-ray triage (2025)",
      "Saliency maps radiologists can audit, tested with a hospital radiology group (2024)",
    ],
    dataHandling:
      "Has worked inside partner cloud environments under HIPAA agreements. Fits your requirement that data stays in your cloud.",
    responseTime: "Usually replies within a day",
  },
  {
    id: "nyu-med-imaging",
    name: "NYU Medical Imaging Lab",
    lead: "Dr. Michael Torres",
    leadTitle: "Associate Professor, Biomedical Engineering",
    institution: "NYU",
    areas: ["Computer Vision", "Radiology AI", "Clinical Translation"],
    focus: "Computer vision for radiology, from model development through clinical validation.",
    capacity: "1 postdoc, starting February 2027",
    engagementTypes: ["Sponsored Research", "Consulting"],
    relevantWork: [
      "Multi-site validation of a lung nodule detector across four hospitals (2025)",
    ],
    dataHandling: "Works with de-identified data under institutional data use agreements.",
    responseTime: "Usually replies within 2 days",
  },
  {
    id: "columbia-vision",
    name: "Columbia Vision & Learning Group",
    lead: "Prof. Sarah Kim",
    leadTitle: "Professor, Computer Science",
    institution: "Columbia",
    areas: ["Deep Learning", "Robustness", "Healthcare AI"],
    focus: "Deep learning models that stay reliable when real-world data shifts.",
    capacity: "2 PhD students, 10 hours/week each",
    engagementTypes: ["Pilot Project", "Student Placement"],
    relevantWork: [
      "Benchmarking distribution shift in clinical imaging models (2024)",
    ],
    dataHandling: "Prefers synthetic or de-identified data for early pilots.",
    responseTime: "Usually replies within 3 days",
  },
];

export const challenges: Challenge[] = [
  {
    id: "false-positives",
    companyId: "meridian",
    title: "How can we reduce false positives in medical imaging models?",
    engagementType: "Pilot Project",
    goal: ["False positives < 40%", "Sensitivity > 95%"],
    researchAreas: ["Computer Vision", "Medical Imaging"],
    tags: ["Medical Imaging", "Model Interpretability", "Healthcare AI"],
    constraints: [
      "12-week pilot",
      "Data is a de-identified sample of 10k labeled scans",
      "HIPAA-sensitive context",
    ],
    duration: "12-week pilot",
    details: ["12-week pilot", "HIPAA-sensitive", "Data stays in company cloud"],
  },
  {
    id: "discharge-notes",
    companyId: "harbor",
    title: "Summarize discharge notes for primary care follow-up",
    engagementType: "Pilot Project",
    goal: ["Summaries clinicians rate as accurate at least 90% of the time"],
    researchAreas: ["Natural Language Processing", "Healthcare AI"],
    tags: ["Natural Language Processing", "Healthcare AI", "Machine Learning"],
    constraints: ["12-week pilot", "HIPAA-sensitive", "~5,000 de-identified notes"],
    duration: "12-week pilot",
    details: ["12-week pilot", "HIPAA-sensitive", "~5,000 de-identified notes"],
  },
  {
    id: "defect-detection",
    companyId: "northfield",
    title: "Keep defect detection accurate when factory lighting and cameras change",
    engagementType: "Sponsored Research",
    goal: ["Accuracy stays within 2% of baseline across lighting and camera changes"],
    researchAreas: ["Computer Vision", "Robustness"],
    tags: ["Computer Vision", "Robustness", "Deep Learning"],
    constraints: ["8-month project", "~20,000 labeled images", "IP terms negotiable"],
    duration: "8-month project",
    details: ["8-month project", "~20,000 labeled images", "IP terms negotiable"],
  },
];

export const matches: Match[] = [
  {
    id: "m1",
    challengeId: "false-positives",
    labId: "ct-applied-ai",
    score: 95,
    status: "interested",
    whyMatched:
      "Matches your work on interpretable ML for medical imaging. The team wants a visual explanation for each alert.",
    sharedAreas: ["Machine Learning", "Medical Imaging", "Healthcare AI"],
  },
  {
    id: "m2",
    challengeId: "false-positives",
    labId: "nyu-med-imaging",
    score: 88,
    status: "notified",
    whyMatched: "Radiology AI and multi-site clinical validation fit this pilot.",
    sharedAreas: ["Computer Vision", "Medical Imaging"],
  },
  {
    id: "m3",
    challengeId: "false-positives",
    labId: "columbia-vision",
    score: 82,
    status: "notified",
    whyMatched: "Robustness research applies to reducing false alarms on new scanners.",
    sharedAreas: ["Deep Learning", "Healthcare AI"],
  },
  {
    id: "m4",
    challengeId: "discharge-notes",
    labId: "ct-applied-ai",
    score: 81,
    status: "notified",
    whyMatched:
      "Your healthcare ML experience fits. Their evaluation needs clinician-weighted accuracy, which your lab has worked on.",
    sharedAreas: ["Machine Learning", "Healthcare AI"],
  },
  {
    id: "m5",
    challengeId: "defect-detection",
    labId: "ct-applied-ai",
    score: 78,
    status: "notified",
    whyMatched:
      "Robustness to camera and lighting shifts mirrors your work on scanner differences across hospitals.",
    sharedAreas: ["Computer Vision", "Robustness"],
  },
];

export const messages: Message[] = [
  {
    id: "msg1",
    matchId: "m1",
    from: "researcher",
    body: "Hi Dylan, I saw your challenge on reducing false positives in medical imaging. My lab has spent the last two years on calibration and explanation methods for screening models, including work with a hospital radiology group.\n\nI'd be glad to talk about how we might approach your 12-week pilot.",
    sentAt: "2026-11-18T16:12:00-05:00",
  },
];

export const introCallSlots = [
  "2026-11-24T14:00:00-05:00",
  "2026-11-25T10:30:00-05:00",
  "2026-11-30T16:00:00-05:00",
];
