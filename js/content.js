/*
 * CONTENT FILE: edit this file to change what the site says.
 * Layout and behaviour live in js/main.js and css/styles.css; you should not need to touch them.
 *
 * Source: Vipin's resume. Client and project names are removed on purpose, and
 * contact details, phone numbers and internal references are not published.
 * Empty arrays show a "to be added" message on the site.
 * Entries marked "[add ...]" still need a real value.
 *
 * Dates use YYYY-MM-DD (or YYYY for year-only). Leave a url empty ("") to hide its link.
 */
window.SITE_CONTENT = {

  profile: {
    name: "Vipin Gupta",
    title: "Specialist Leader, AI & Data",
    tagline: "Trusted data foundations that let AI deliver in healthcare and life sciences.",
    headshot: "assets/headshot.jpg",
    headshotAlt: "Portrait of Vipin Gupta in a blue suit and white shirt",
    bio: [
      "I lead data strategy, cloud modernization, data integration and advanced analytics programs. I have over 16 years of IT experience, including more than 10 years with healthcare payer and provider clients.",
      "My work centres on value-based care, clinical data integration, interoperability and pricing strategy. I build and lead high-performance teams that deliver data platforms the business can rely on."
    ],
    stats: [
      { value: "16+", label: "Years of IT experience" },
      { value: "10+", label: "Years in healthcare payer and provider" },
      { value: "6", label: "Areas of expertise" },
      { value: "6", label: "Professional certifications" }
    ],
    contact: {
      // Add your email to show the Email button. Leave "" to hide it.
      email: "",
      linkedin: "https://www.linkedin.com/in/gvipin/"
    }
  },

  // Roles from the resume. The site shows no dates for roles.
  experience: [
    {
      title: "Specialist Leader, AI & Data",
      company: "Deloitte Consulting LLP",
      location: "Chicago, IL",
      highlights: [
        "Lead data strategy and solution architecture for healthcare and public-sector clients, from discovery through a multi-year roadmap and scaled rollout.",
        "Led a clinical data repository built on FHIR that aggregates patient data, including labs, imaging, prescriptions and diagnoses, for real-time access by clinicians and patients.",
        "Led a master data management platform migration, covering integration with upstream and downstream systems, address standardization and match/merge design.",
        "Build and lead high-performance teams across data management, cloud modernization and advanced analytics."
      ]
    },
    {
      title: "Technology Project Lead, Healthcare Payer Analytics",
      company: "Deloitte Consulting LLP",
      location: "",
      highlights: [
        "Integrated data from multiple source systems into an analytics platform that gives providers and internal teams performance insight.",
        "Worked with data modelers and DBAs to define data requirements, and with business analysts to define new functional and technical solutions.",
        "Coordinated offshore delivery teams and led release management and implementation."
      ]
    },
    {
      title: "Data Engineer, Healthcare Reporting Programs",
      company: "Deloitte Consulting LLP",
      location: "",
      highlights: [
        "Delivered quarterly reporting for employer, market and provider scorecards, combining data from heterogeneous sources.",
        "Enhanced ACO attribution reporting and implemented new source systems into existing data marts."
      ]
    },
    {
      title: "Senior ETL Consultant",
      company: "[add employer]",
      location: "Chicago, IL",
      highlights: [
        "Built a data warehouse for investment data across fixed income, equities, derivatives and loans, with star and snowflake schema design.",
        "Implemented change data capture and incremental loading, and tuned Informatica mappings and database performance.",
        "Integrated a market risk analytics platform, documenting data flows from source systems to the risk models."
      ]
    },
    {
      title: "ETL Consultant and Developer",
      company: "[add employer]",
      location: "",
      highlights: [
        "Designed dimensional data warehouse models and ETL pipelines for manufacturing sales, cost and product analytics.",
        "Built automated extraction and loading from RDBMS sources into Oracle, and delivered reports for business users."
      ]
    }
  ],

  // Add publications here. Year and type drive the filters on the Research tab.
  publications: [],

  // Add patents and inventions here. Status is one of Granted, Filed, Invention disclosure or In development.
  innovation: [],

  // Add press, articles, podcasts and videos here. Type is one of Article, Podcast, Video or Press.
  media: [],

  // Add talks and panels here. Links are optional.
  speaking: [],

  // Add judging panels, editorial boards and peer review roles here.
  judging: [],

  summary: {
    paragraphs: [
      "I have over 16 years of IT experience, with more than 10 years of client work in healthcare payers and providers. My current focus is data integration, data management, cloud platforms and solution architecture.",
      "I have deep experience in value-based care, clinical data integration, interoperability and pricing strategy. I bring hands-on delivery leadership to large-scale enterprise programs, from data strategy and enterprise data warehouse development through to implementation.",
      "I am passionate about delivering results and building teams around data management, cloud modernization and advanced analytics."
    ],
    focusAreas: [
      "Data strategy and architecture",
      "Cloud data modernization",
      "Master data management",
      "Clinical data integration and interoperability",
      "Value-based care and pricing strategy",
      "Advanced analytics and reporting"
    ],
    skills: [
      { category: "Data platforms and integration", items: ["Snowflake", "Informatica PowerCenter", "Informatica MDM", "Teradata", "Oracle", "SQL Server", "DB2", "Spark", "Hadoop"] },
      { category: "Cloud", items: ["Google Cloud (Healthcare API)", "AWS", "Azure"] },
      { category: "Healthcare data and standards", items: ["FHIR", "Clinical data repositories", "Value-based care", "Claims and member data", "Pricing strategy"] },
      { category: "Analytics and reporting", items: ["Tableau", "Business Objects", "MicroStrategy", "OBIEE", "Discoverer"] },
      { category: "Languages and scripting", items: ["SQL", "PL/SQL", "Python", "Scala", "Shell scripting"] },
      { category: "Delivery and leadership", items: ["Program leadership", "Offshore team management", "Release management", "Agile and Scrum", "Stakeholder management"] }
    ]
  },

  // Add awards and honors here.
  awards: [],

  // Certifications from the resume.
  certifications: [
    { name: "GCP Certified Architect", issuer: "Google Cloud" },
    { name: "Snowflake Pro Certified", issuer: "Snowflake" },
    { name: "Azure Fundamentals Certified", issuer: "Microsoft" },
    { name: "Informatica PowerCenter Certified", issuer: "Informatica" },
    { name: "Oracle Certified Associate, PL/SQL", issuer: "Oracle" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance" }
  ],

  // Add professional memberships here.
  memberships: [],

  // Add downloadable documents here. Put each PDF in the documents/ folder.
  documents: [],

  // Add dated achievements here, newest first.
  achievements: []
};
