/*
 * CONTENT FILE: edit this file to change what the site says.
 * Layout and behaviour live in js/main.js and css/styles.css; you should not need to touch them.
 *
 * Every entry below is SAMPLE content. Replace with real content.
 * Client and employer names are generic on purpose. Do not add confidential client names
 * or unpublished client work.
 *
 * Dates use YYYY-MM-DD (or YYYY for year-only). Leave a url empty ("") to hide its link.
 */
window.SITE_CONTENT = {

  // replace with real content: profile, hero, stat cards and contact links
  profile: {
    name: "Vipin Gupta",
    title: "Specialist Leader, AI & Data",
    tagline: "Trusted data foundations that let AI deliver in healthcare and life sciences.",
    headshot: "assets/headshot.jpg",
    headshotAlt: "Portrait of Vipin Gupta", // replace with real content: describe the real photo
    bio: [
      // replace with real content
      "I lead data modernization, cloud platform, master data management and AI enablement programs for healthcare and life sciences organizations. Across 18 years I have moved teams from fragmented reporting to governed, reusable data platforms.",
      "My approach is practical: get the data foundation right first, then pick AI use cases that clinical, commercial and operations teams will actually adopt and trust."
    ],
    stats: [
      // replace with real content: these numbers are samples
      { value: "18", label: "Years of experience" },
      { value: "6", label: "Areas of expertise" },
      { value: "12", label: "Publications" },
      { value: "3", label: "Patents and invention filings" }
    ],
    contact: {
      // replace with real content
      email: "you@example.com",
      linkedin: "https://www.linkedin.com/in/your-handle"
    }
  },

  // replace with real content: roles, newest first
  experience: [
    {
      title: "Specialist Leader, AI & Data",
      company: "Example Advisory Firm",
      location: "Sample City, USA",
      start: "2021",
      end: "Present",
      highlights: [
        "Lead a multi-year cloud data platform modernization for a large integrated health system, cutting pipeline latency from days to hours.",
        "Set up the master data governance model and stewardship operating rhythm used across clinical and commercial domains.",
        "Stand up a reusable AI enablement accelerator, shortening time from use-case approval to a governed pilot."
      ]
    },
    {
      title: "Director, Master Data Management",
      company: "Example Life Sciences Company",
      location: "Sample City, USA",
      start: "2016",
      end: "2021",
      highlights: [
        "Built an enterprise MDM hub for customer, product and site data across commercial and research functions.",
        "Reduced duplicate HCP and account records by a large share through matching rules and steward workflows.",
        "Partnered with regulatory and quality teams to tie data lineage to validated reporting."
      ]
    },
    {
      title: "Data Architecture Manager",
      company: "Example Payer Organization",
      location: "Sample City, USA",
      start: "2011",
      end: "2016",
      highlights: [
        "Designed the enterprise data warehouse and conformed dimensions for claims and member analytics.",
        "Introduced data quality scorecards that became the reporting baseline for the executive team."
      ]
    },
    {
      title: "Senior Data Engineer",
      company: "Example Analytics Firm",
      location: "Sample City, USA",
      start: "2008",
      end: "2011",
      highlights: [
        "Delivered ETL and reporting pipelines for hospital and pharma clients on on-premise database platforms."
      ]
    }
  ],

  // replace with real content: publications (year and type drive the filters)
  publications: [
    {
      title: "Governing Real-World Data for Machine Learning in Healthcare",
      venue: "Journal of Example Informatics",
      year: 2025,
      type: "Journal article",
      url: "https://example.com/publication-1"
    },
    {
      title: "Master Data Patterns for Multi-Source Clinical Operations",
      venue: "Proceedings of the Example Health Data Conference",
      year: 2024,
      type: "Conference paper",
      url: "https://example.com/publication-2"
    },
    {
      title: "From Pilot to Platform: Scaling AI in Life Sciences",
      venue: "Example Insights (industry white paper)",
      year: 2024,
      type: "White paper",
      url: "https://example.com/publication-3"
    },
    {
      title: "Data Quality as a Clinical Safety Control",
      venue: "Example Handbook of Health Informatics",
      year: 2022,
      type: "Book chapter",
      url: "https://example.com/publication-4"
    },
    {
      title: "Cloud Data Platform Reference Architecture for Regulated Industries",
      venue: "Example Insights (industry white paper)",
      year: 2021,
      type: "White paper",
      url: "https://example.com/publication-5"
    }
  ],

  // replace with real content: status is one of Granted, Filed, Invention disclosure, In development
  innovation: [
    {
      title: "Method for reconciling provider identities across heterogeneous sources",
      status: "Granted",
      year: 2023,
      patentNumber: "[add patent number]",
      description: "A probabilistic matching approach that links provider records from claims, EHR and reference feeds while keeping an auditable trail of each match decision.",
      url: ""
    },
    {
      title: "Adaptive data quality scoring for clinical data feeds",
      status: "Filed",
      year: 2025,
      patentNumber: "[add application number]",
      description: "A scoring model that adjusts completeness and timeliness thresholds per feed based on historical drift, reducing false alerts.",
      url: ""
    },
    {
      title: "Reusable AI enablement accelerator",
      status: "Invention disclosure",
      year: 2025,
      patentNumber: "",
      description: "A set of governed templates for retrieval, evaluation and access control that teams reuse to launch AI pilots on approved data.",
      url: ""
    },
    {
      title: "Self-service semantic layer for life sciences analytics",
      status: "In development",
      year: 2024,
      patentNumber: "",
      description: "A business-glossary-driven semantic model that lets analysts query trusted metrics without rebuilding definitions in each tool.",
      url: ""
    }
  ],

  // replace with real content: type is one of Article, Podcast, Video, Press
  media: [
    {
      title: "Why data foundations come before AI in healthcare",
      outlet: "Example Health Journal",
      date: "2025-03-14",
      type: "Article",
      url: "https://example.com/media-1"
    },
    {
      title: "Scaling master data in the age of AI",
      outlet: "Example Data Podcast",
      date: "2024-09-02",
      type: "Podcast",
      url: "https://example.com/media-2"
    },
    {
      title: "Panel: trustworthy AI in life sciences",
      outlet: "Example TV",
      date: "2024-05-20",
      type: "Video",
      url: "https://example.com/media-3"
    },
    {
      title: "Quoted on cloud modernization trends among provider organizations",
      outlet: "Trade Press Weekly",
      date: "2023-11-08",
      type: "Press",
      url: "https://example.com/media-4"
    }
  ],

  // replace with real content: links are optional, leave a value "" to hide it
  speaking: [
    {
      event: "Example Health Data Summit",
      topic: "Building the data foundation for clinical AI",
      date: "2025-10-09",
      location: "Boston, MA",
      format: "Talk",
      links: {
        slides: "https://example.com/slides-1",
        recording: "https://example.com/recording-1"
      }
    },
    {
      event: "Life Sciences Leadership Forum",
      topic: "Panel: data governance beyond compliance",
      date: "2025-04-16",
      location: "Philadelphia, PA",
      format: "Panel",
      links: {
        slides: "",
        recording: "https://example.com/recording-2"
      }
    },
    {
      event: "Enterprise Data Week",
      topic: "Master data at scale: lessons from three health systems",
      date: "2024-06-11",
      location: "Chicago, IL",
      format: "Talk",
      links: {
        slides: "https://example.com/slides-3",
        recording: ""
      }
    }
  ],

  // replace with real content
  judging: [
    {
      role: "Judge",
      organization: "Example Healthcare Innovation Awards",
      period: "2024 to present",
      description: "Scoring data and AI submissions for clinical impact and governance."
    },
    {
      role: "Editorial Board Member",
      organization: "Journal of Example Informatics",
      period: "2023 to present",
      description: "Reviewing manuscripts on data quality, interoperability and health analytics."
    },
    {
      role: "Peer Reviewer",
      organization: "Health Data Science Conference",
      period: "2022 to present",
      description: "Peer review for conference papers on data platforms and machine learning operations."
    },
    {
      role: "Panel Reviewer",
      organization: "Example Research Grant Program",
      period: "2025",
      description: "Assessing proposals for data infrastructure and AI research funding."
    }
  ],

  // replace with real content
  summary: {
    paragraphs: [
      "I have spent most of my career at the point where data strategy meets operating reality. In healthcare and life sciences, that means building platforms that are trusted by clinicians, regulators and commercial teams at the same time.",
      "My work centres on three questions: where the data is authoritative, who is accountable for it, and whether the people who need it can use it without a workaround. Answering those questions usually matters more than the choice of tool.",
      "On AI, I focus on enablement rather than experiments in isolation. The goal is a governed path from a business question to a validated model in production, with clear ownership at each step."
    ],
    focusAreas: [
      "Data modernization",
      "Cloud data platforms",
      "Master data management",
      "AI enablement and governance",
      "Healthcare and life sciences",
      "Data quality and lineage"
    ],
    skills: [
      // replace with real content
      { category: "Data and AI platforms", items: ["Lakehouse architecture", "Data pipelines", "Feature stores", "Model governance"] },
      { category: "Cloud", items: ["AWS", "Azure", "Infrastructure as code", "Cost management"] },
      { category: "Governance and MDM", items: ["Master data", "Data stewardship", "Data quality", "Metadata and lineage"] },
      { category: "Domain", items: ["Clinical data", "Claims and payer data", "Commercial and HCP data", "Regulatory reporting"] },
      { category: "Leadership", items: ["Program leadership", "Vendor management", "Executive communication", "Team building"] }
    ]
  },

  // replace with real content
  awards: [
    { title: "Example Data Leadership Award", issuer: "Example Industry Association", year: 2024 },
    { title: "Example Innovation in Health Data Recognition", issuer: "Example Healthcare Forum", year: 2023 },
    { title: "Cloud Architecture Certification", issuer: "Example Cloud Provider", year: 2019 }
  ],

  // replace with real content
  memberships: [
    { organization: "Example Data Management Association", role: "Member", since: "2015" },
    { organization: "Example Health Informatics Society", role: "Senior Member", since: "2018" }
  ],

  // replace with real content: files live in the documents/ folder
  documents: [
    {
      title: "Curriculum Vitae",
      type: "CV",
      file: "documents/sample-cv.pdf",
      description: "Full career history, education and selected roles."
    },
    {
      title: "Capability Brief",
      type: "Brochure",
      file: "documents/sample-capability-brief.pdf",
      description: "Overview of data and AI enablement services, described generically."
    },
    {
      title: "Speaker One-Sheet",
      type: "Speaking",
      file: "documents/sample-speaker-one-sheet.pdf",
      description: "Talk topics, audience fit and a short speaker biography."
    },
    {
      title: "Selected Publications List",
      type: "Publications",
      file: "documents/sample-publications-list.pdf",
      description: "Complete publication list with venues and years."
    }
  ],

  // replace with real content: combined list, newest first
  achievements: [
    { date: "2025-10", text: "Keynote panel on data governance for clinical AI" },
    { date: "2025-03", text: "Published article on data foundations for healthcare AI" },
    { date: "2024-06", text: "Invited talk on master data at scale" },
    { date: "2024", text: "Recognized with the Example Data Leadership Award" },
    { date: "2023", text: "Granted patent on provider identity reconciliation" }
  ]
};
