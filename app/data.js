const frontendTech = {
  softwareDevelopment: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Python (Basic)",
    "Bash Scripting",
  ],

  dataAnalytics: [
    "SQL",
    "ETL Pipelines",
    "Data Modeling",
    "Medallion Architecture",
    "Star Schema Design",
    "EDA",
    "KPI Tracking",
    "Trend Analysis",
    "Business Reporting",
  ],

  systemAdministration: [
    "Linux (RHEL/CentOS/Ubuntu/Debian)",
    "Windows",
    "User & Group Management",
    "File Permissions & ACLs",
    "Disk Management & LVM",
    "Boot Process & System Logging",
  ],

  systemSecurity: [
    "SSH Hardening",
    "GRUB Security",
    "Password Policy Enforcement",
    "sudo/visudo Privilege Management",
    "File Integrity Monitoring (AIDE)",
    "Malware & Rootkit Scanning",
    "Full Disk Encryption (LUKS/dm-crypt)",
  ],

  networkingAndFirewall: [
    "TCP/IP, DNS, Subnetting",
    "iptables (Stateful Firewalls)",
    "Network Scanning (Nmap)",
    "Firewall Rules & Logging",
  ],

  databases: ["SQL Server", "PostgreSQL", "MongoDB", "Database Design"],

  businessIntelligence: [
    "Power BI",
    "Excel Dashboards",
    "Power Query",
    "Interactive Reports",
  ],

  tools: [
    "Git",
    "GitHub",
    "Postman",
    "SSH",
    "AIDE",
    "John the Ripper",
    "Vercel",
    "Railway",
  ],
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
      "Built a modern data warehouse in SQL Server using Medallion Architecture for reliable analytics workflows.",
      "Processed and transformed large business datasets with a focus on data quality, consistency, and reporting readiness.",
      "Developed end-to-end ETL pipelines for ingestion, cleansing, standardization, and transformation.",
      "Designed star-schema models that support reporting, KPI tracking, and analytical scalability.",
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

    type: "Analytics & BI Reporting",

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
      "Analyzed sales and production data to highlight operational performance, revenue trends, and quality gaps.",
      "Built KPI-focused dashboards for on-time delivery, sales movement, defect rates, and top-performing products.",
      "Used Excel and business reporting techniques to create a practical decision-support interface for stakeholders.",
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

    type: "Backend & Data Management",

    category: ["software", "analytics"],

    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM"],

    date: "2026-02-24",

    summary: [
      "Built a backend-driven academic workflow platform for tracking tasks, student records, and reporting processes.",
      "Designed relational database structures and automated backend workflows for structured record management.",
      "Created reporting features that support academic operations with reliable data handling and scalable APIs.",
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

    type: "Data Aggregation & Automation",

    category: ["data", "backend", "automation"],

    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Mongoose"],

    date: "2026-02-20",

    summary: [
      "Built a data aggregation platform that fetches and processes content from external APIs with structured filtering.",
      "Implemented automated ingestion, deduplication, and metadata workflows for reliable content delivery.",
      "Developed scalable APIs and query logic that support filtered, searchable, and organized data access.",
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

    type: "Inventory & Operations Platform",

    category: ["analytics", "software"],

    tech: ["React.js", "Firebase", "Tailwind CSS"],

    date: "2025-07-19",

    summary: [
      "Built a business-focused inventory and transaction management system supporting 1000+ operational records.",
      "Delivered a practical web application with dashboard views, invoice generation, and transaction tracking.",
      "Combined frontend usability with structured data handling to support business reliability and day-to-day operations.",
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
