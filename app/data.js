const frontendTech = {
  languages: ["SQL", "JavaScript (ES6+)", "TypeScript", "Python (Basic)"],

  dataAnalytics: [
    "Data Cleaning",
    "Data Transformation",
    "ETL Pipelines",
    "Data Warehousing",
    "Medallion Architecture",
    "Star Schema Design",
    "Data Modeling",
    "EDA",
    "KPI Tracking",
    "Trend Analysis",
    "Business Reporting",
  ],

  visualization: [
    "Power BI",
    "Metabase",
    "Excel Dashboards",
    "Interactive Reports",
  ],

  databases: ["SQL Server", "PostgreSQL", "MongoDB"],

  backend: ["Node.js", "Express.js", "REST APIs", "API Integration"],

  frontend: ["React.js", "Next.js", "Redux Toolkit", "RTK Query"],

  tools: ["Excel", "Power Query", "Git", "GitHub", "Postman"],

  deployment: ["Vercel", "Railway", "GitHub Pages"],
};

const projects = [
  {
    name: "Modern Data Warehouse Project",

    type: "Data Engineering & Analytics",

    category: ["data", "etl", "analytics"],

    tech: [
      "SQL Server",
      "ETL Pipelines",
      "Data Modeling",
      "Star Schema",
      "SQL",
    ],

    featured: true,

    date: "2026-05-10",

    summary: [
      "Built a Modern Data Warehouse in SQL Server using Medallion Architecture (Bronze, Silver, Gold).",
      "Processed and transformed 80K+ sales records and 18K+ customer records from ERP and CRM CSV datasets.",
      "Developed end-to-end ETL pipelines for data ingestion, cleansing, standardization, and transformation.",
      "Designed a Star Schema with fact and dimension tables optimized for reporting and analytical workloads.",
      "Implemented layered SQL scripts and project documentation following industry-standard data engineering practices.",
    ],

    link: [
      {
        name: "GitHub",
        url: "https://github.com/ak0384221/sql-data-warehouse-project",
      },
    ],

    status: "finished & active",
  },

  {
    name: "Production, Sales & Operations Analysis Dashboard",

    type: "Data Analysis & Visualization",

    category: ["data", "analytics", "dashboard"],

    tech: [
      "Microsoft Excel",
      "Pivot Tables",
      "Charts",
      "Slicers",
      "Data Analysis",
    ],

    featured: true,

    date: "2026-04-25",

    summary: [
      "Analyzed 1000+ rows of sales and production data to evaluate business and operational performance.",
      "Performed Top Buyer and Product Analysis to identify revenue contribution and key performers.",
      "Conducted Order vs Production and Defect Analysis to highlight production gaps and quality issues.",
      "Calculated KPIs including On-Time Delivery Rate, Sales Trends, and Defect Percentage.",
      "Built a dynamic dashboard using Pivot Tables, Charts, and Slicers for interactive reporting and insights.",
    ],

    link: [
      {
        name: "GitHub",
        url: "https://github.com/ak0384221/production-sales-analysis",
      },
    ],

    status: "finished & active",
  },

  {
    name: "StudentDiary – Academic Task & Reporting System",

    type: "Backend-Centric Web Application",

    category: ["software", "analytics"],

    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM"],

    date: "2026-02-24",

    summary: [
      "Academic management system for tracking homework, student records, and reporting workflows.",
      "Designed relational PostgreSQL schemas with structured student and homework data modeling.",
      "Built CRUD APIs and automated parent notification workflows using WhatsApp integration.",
      "Generated scheduled academic summary reports using automated backend workflows.",
      "Focused on scalable backend architecture and structured data management.",
    ],

    link: [
      {
        name: "Backend GitHub",
        url: "https://github.com/ak0384221/studentDiary_backend",
      },
    ],

    status: "ongoing & active",
  },

  {
    name: "ArticleHub – News Aggregation Platform",

    type: "Data Aggregation & Filtering System",

    category: ["data", "backend", "automation"],

    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Mongoose"],

    date: "2026-02-20",

    summary: [
      "Built a news aggregation platform that fetches and processes data from external news APIs.",
      "Implemented automated article ingestion, filtering, deduplication, and metadata extraction workflows.",
      "Designed advanced multi-filter querying for category, country, author, and date-based analysis.",
      "Optimized MongoDB schema structures and indexing for high-performance read-heavy operations.",
      "Created scalable REST APIs with pagination and structured response handling.",
    ],

    link: [
      {
        name: "Frontend GitHub",
        url: "https://github.com/ak0384221/ArticleHub-Frontend",
      },
      {
        name: "Backend GitHub",
        url: "https://github.com/ak0384221/ArticleHub-Backend",
      },
    ],

    status: "active",
  },

  {
    name: "M-Manager",

    type: "Inventory & Transaction Management",

    category: ["analytics", "software"],

    tech: ["React.js", "Firebase", "Tailwind CSS"],

    date: "2025-07-19",

    summary: [
      "Business-focused inventory and transaction management system supporting 1000+ transactions.",
      "Implemented inventory tracking, invoice generation, and real-time stock monitoring workflows.",
      "Designed structured Firestore collections for scalable business transaction management.",
      "Built advanced filtering systems for transaction lookup, payment tracking, and reporting.",
      "Created dashboard interfaces displaying business summaries and operational insights.",
    ],

    link: [
      {
        name: "GitHub",
        url: "https://github.com/ak0384221/MerchandiseManager",
      },
      {
        name: "Live",
        url: "https://m-manager-258fb.web.app/",
      },
    ],

    status: "finished & active",
  },
];

const contacts = [
  {
    platform: "LinkedIn",
    id: "your-linkedin-id", // your LinkedIn username or profile id
    link: "https://linkedin.com/in/md-bellal-hossain-50a027373",
    img: "./linkedin.png",
  },
  {
    platform: "GitHub",
    id: "your-github-username",
    link: "https://github.com/ak0384221",
    img: "./github.png",
  },
  {
    platform: "Email",
    id: "your.email@example.com",
    link: "mailto:bellal.hossain.dev@gmail.com",
    img: "./google.png",
  },
];

export { frontendTech, projects, contacts };
