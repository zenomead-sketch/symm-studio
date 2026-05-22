export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "video"; src: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  titleHighlight?: string;
  category: string;
  tags: string[];
  excerpt: string;
  date: string;
  author: string;
  status: "published" | "in-progress";
  readTime: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-clearpath-anesthesia-clearance-agent",
    title: "Building ClearPath: An AI Pre-Op Anesthesia Clearance Agent",
    titleHighlight: "ClearPath",
    category: "Hackathon",
    tags: ["AI", "Healthcare", "FHIR", "A2A", "Claude", "Hackathon"],
    excerpt:
      "Our build for the Healthcare AI Endgame hackathon. A clinical agent that reads a patient's FHIR chart, runs deterministic risk engines, and uses Claude Sonnet to return a structured pre-operative clearance decision.",
    date: "May 14, 2026",
    author: "Symm Studios",
    status: "published",
    readTime: "8 min read",
    content: [
      {
        type: "callout",
        text: "ClearPath was built for Agents Assemble: The Healthcare AI Endgame, on the Prompt Opinion platform. Source on GitHub at jbrodev/clearpath.",
      },
      {
        type: "paragraph",
        text: "Pre-operative anesthesia clearance is one of the most painful workflows in healthcare. Before a patient can safely go to surgery, a clinician has to pull conditions, medications, vitals, labs, and clinical notes from across systems, weigh them against published risk frameworks, and decide whether the patient is good to go, or needs a specialist consult, a medication hold, or a deferral. That decision can take thirty to sixty minutes per patient, and it gets repeated thousands of times a day across the country.",
      },
      {
        type: "paragraph",
        text: "ClearPath is our take on automating that workflow without taking clinical judgment out of the loop. It's an A2A-protocol agent that plugs into any FHIR-based EHR, ingests the patient's chart, runs it through deterministic clinical engines, and uses Claude Sonnet to produce a structured clearance decision with a plain-English narrative and specific next steps.",
      },
      {
        type: "video",
        src: "/clearpath-demo.mp4",
        caption: "ClearPath end-to-end: FHIR ingestion → clinical engines → Claude reasoning → structured clearance output.",
      },
      {
        type: "heading",
        text: "The Brief",
      },
      {
        type: "paragraph",
        text: "The Healthcare AI Endgame brief asked for a production-grade clinical agent. Not a demo, not a toy. It had to run on the Prompt Opinion platform, speak A2A v0.3, declare its FHIR scopes, and produce output a clinician could actually use. That set of constraints is what pushed us toward a perioperative use case: clearance is high-frequency, structured, evidence-driven, and the inputs map cleanly to FHIR resources we could pull on demand.",
      },
      {
        type: "heading",
        text: "How It Works",
      },
      {
        type: "paragraph",
        text: "The pipeline is four stages. Each one is independently testable, which mattered a lot during the hackathon. When something went wrong, we needed to know whether it was a FHIR parsing bug, a rule-engine bug, an LLM reasoning bug, or a protocol bug.",
      },
      {
        type: "list",
        items: [
          "FHIR ingestion: fetches Patient, Condition, MedicationRequest, Procedure, DocumentReference, Observation, Encounter, and AllergyIntolerance over FHIR R4, with refresh-token support for long-lived sessions",
          "Normalization: collapses the bundle into a PatientSnapshot with classified medications (drug class, specialty mapping), recent vitals and labs, and parsed PCP and specialist notes",
          "Clinical engines: evaluates Tier-1 hard-stop triggers, Tier-2 risk factors, and computes the RCRI cardiac score, then escalates based on the procedure's institutional protocol",
          "Claude Sonnet reasoning: enriches the deterministic engine output with clinical narrative, named-guideline citations, specialist referral logic, and plain-language next steps",
        ],
      },
      {
        type: "paragraph",
        text: "The response goes back over A2A as a structured Task artifact: a markdown summary in one part, a typed ClearanceOutput JSON in another. The SHARP/FHIR context extension is propagated back, so any downstream agent in the same Prompt Opinion session inherits the same patient context without re-authenticating.",
      },
      {
        type: "heading",
        text: "Deterministic First, LLM Second",
      },
      {
        type: "paragraph",
        text: "The biggest architectural call was where to draw the line between deterministic code and LLM reasoning. We landed on a hard rule: the disposition is decided by deterministic engines, never by Claude. Risk scores, hard-stop triggers, anticoagulation flags, RCRI: all computed in Python against published thresholds. Claude is responsible for narrative, specialist selection nuance, and next-step phrasing, but it cannot change the disposition the engines produced.",
      },
      {
        type: "paragraph",
        text: "That separation is what makes the output defensible. If a reviewer asks why a patient was flagged for a cardiology consult, we can point to a named rule, a specific medication, and a published guideline, not a model's vibe.",
      },
      {
        type: "subheading",
        text: "Dispositions",
      },
      {
        type: "list",
        items: [
          "NO_CLEARANCE_NEEDED: healthy patient, low-risk procedure, no triggers",
          "CLEARANCE_RECOMMENDED: cleared with PCP-level medical clearance",
          "SPECIALIST_REQUIRED: one or more specialist consults required before surgery",
          "ANESTHESIA_REVIEW_REQUIRED: anesthesia team must review before clearance",
          "INSUFFICIENT_INFORMATION: chart is too sparse or FHIR token expired",
        ],
      },
      {
        type: "heading",
        text: "Clearance Letters",
      },
      {
        type: "paragraph",
        text: "Beyond the clearance decision itself, ClearPath can draft the actual clearance correspondence: one letter to the PCP for general medical clearance, or one focused letter per specialist when multiple consults are needed. Letters are generated in parallel and personalized with the patient's name, DOB, and the PCP's actual name extracted from FHIR DocumentReference.author. Nothing is invented; if the chart doesn't have a PCP name, the letter says so.",
      },
      {
        type: "heading",
        text: "The Stack",
      },
      {
        type: "list",
        items: [
          "Python 3.11 and FastAPI for the A2A endpoint and JSON-RPC handling",
          "Claude Sonnet (claude-sonnet-4-6) via the Anthropic SDK, with streaming for follow-up Q&A and web-search grounding for guideline citations",
          "FHIR R4 client with OAuth refresh support, talking to the Prompt Opinion FHIR endpoint",
          "A2A v0.3 protocol, A2A v1 agent-card spec, and the SHARP/FHIR Context Extension for cross-agent context propagation",
          "Deployed on Render with the agent card published at /.well-known/agent-card.json",
        ],
      },
      {
        type: "heading",
        text: "The Demo Patients",
      },
      {
        type: "paragraph",
        text: "We engineered six synthetic FHIR patients to cover the disposition spectrum. Sarah Bennett, 34, healthy, in for a wisdom-tooth extraction, should resolve to NO_CLEARANCE_NEEDED in seconds. David Okafor, 68, atrial fibrillation on rivaroxaban, type 2 diabetes, hypertension, in for a colonoscopy, should land on SPECIALIST_REQUIRED with a cardiology consult and an anticoagulation hold protocol. The other four sit at intermediate points: optimized cardiac history, decompensated CHF, OSA without titration, multi-specialty orthopedic. They're the test suite, and they're also the demo.",
      },
      {
        type: "heading",
        text: "Guideline Grounding",
      },
      {
        type: "paragraph",
        text: "Every threshold and every recommendation traces back to a named, published standard. The engine doesn't invent numbers and Claude isn't allowed to invent doctor names or citations. The references are ACC/AHA perioperative cardiovascular guidelines, the ASA preoperative evaluation framework, RCRI, STOP-BANG for OSA screening, ARISCAT for postoperative pulmonary complications, and FDA drug labeling for perioperative medication management. Follow-up questions get web-search grounding so Claude can cite current guidance live.",
      },
      {
        type: "heading",
        text: "What We Learned",
      },
      {
        type: "paragraph",
        text: "Three things. First, FHIR data in the wild is messier than the spec implies. Note parsing, in particular, ate more time than the entire LLM layer combined. Second, the deterministic-first split paid for itself the moment we had to debug a wrong specialty recommendation; the engine output made it trivial to localize the bug. Third, A2A is a genuinely useful protocol once you accept that the agent card is the contract: declaring scopes, skills, and extension URIs up front forced us into a cleaner design than we'd have written otherwise.",
      },
      {
        type: "heading",
        text: "What's Next",
      },
      {
        type: "paragraph",
        text: "ClearPath is a hackathon build, but it's also a real product surface. The roadmap is wider clinical-guideline coverage, more surgical specialties, deeper FHIR data, and making the agent drop-in compatible with any healthcare platform, fine-tunable on their own protocols and patient data so it fits the way their clinicians already work. The agent card lives at clearpath-htiy.onrender.com/.well-known/agent-card.json if you want to point a client at it.",
      },
      {
        type: "callout",
        text: "ClearPath is open source under MIT. Source, sample FHIR patients, and the full skill manifest are at github.com/jbrodev/clearpath.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
