const frontendTech = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "SQL",
    "NoSQL",
    "HTML5",
    "CSS3",
  ],

  frontend: [
    "React.js",
    "Next.js",
    "Redux ,Redux toolkit ,RTK Query",
    "Zustand",
    "TanStack Query",
    "React Router",
    "React Hook Form",
    "Axios",
    "Zod",
  ],

  styling: ["Tailwind CSS", "Framer Motion", "GSAP"],

  backend: ["Node.js", "Express.js"],

  databases: ["MongoDB", "Mongoose", "PostgreSQL", "Neon", "Drizzle ORM"],

  auth: [
    "Firebase",
    "Clerk",
    "next-auth",
    "JWT based auth",
    "Session based auth",
  ],

  storage: ["Supabase Storage", "Firebase Storage", "Cloudinary"],

  tools: ["Git", "GitHub", "Postman"],
  " Package Manager": ["npm", "yarn", "pnpm"],

  deployment: [
    "Vercel",
    "Render",
    "Railway",
    "Firebase Hosting",
    "GitHub Pages",
  ],
};

const projects = [
  {
    name: "StudentDiary – Academic Task & Reporting System",
    type: "Backend-Centric Web Application",
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "Neon (PostgreSQL)",
      "Drizzle ORM",
      "Cron Jobs",
      "WhatsApp API Integration",
    ],
    date: "2026-02-24",
    summary: [
      "Backend-focused academic management system built with Node.js, Express, and TypeScript following clean architectural separation.",
      "PostgreSQL database hosted on Neon with Drizzle ORM for type-safe schema definitions and query building.",
      "Full CRUD operations for students and homework entities with relational schema modeling.",
      "Automated daily homework notification system that sends WhatsApp messages to parents 15 minutes after homework creation.",
      "Scheduled weekly academic summary reports dispatched every Thursday at 6:00 PM via cron-based job scheduling.",
      "Structured database design with proper constraints and relational integrity between students and homework records.",
      "Designed for future extensibility (authentication, dashboards, analytics, role management).",
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
    name: "ArticleHub – News Aggregation & Filtering Platform",
    type: "Full-Stack Web Application",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Cron Jobs",
    ],
    date: "2026-02-20",
    summary: [
      "Full-stack news aggregation platform built with Next.js and a TypeScript-based Express backend following modular architecture principles.",
      "Automated article ingestion using cron jobs to fetch, deduplicate, and persist news data from external APIs.",
      "Advanced multi-filtering system with strict AND-based query logic supporting date range, author, language, country, and category filters.",
      "Dynamic filter option generation by extracting unique metadata (authors, countries, categories) directly from stored articles.",
      "Optimized MongoDB schema design with indexing strategies for high-performance read-heavy feed queries.",
      "RESTful API design with centralized error handling and standardized response structure for predictable frontend integration.",
      "Pagination-enabled feed endpoints for scalable content browsing.",
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
    name: "YourStore v2.0 poduction backend",
    type: "E-Commerce",
    tech: [
      "Node.js",
      "Express",
      "Eraser",
      "MongoDB",
      "Mongoose",
      "Multer",
      "TypeScript",
      "Railway",
      "Render",
    ],
    date: "2026-01-10",
    summary: [
      "Production-grade Node.js and Express backend with a modular, service-oriented TypeScript architecture, ensuring clean separation of controllers, services, models, and middleware for long-term scalability.",
      "JWT-based authentication and role-based access control (RBAC) securing protected routes, admin operations, and sensitive business logic across all core services.",
      "Schema-driven validation and sanitization pipelines enforcing data integrity, predictable API contracts, and protection against malformed or malicious input.",
      "Scalable MongoDB schema design modeled in Eraser.io, leveraging indexing strategies and aggregation pipelines to optimize high-performance reads, writes, and analytics queries.",
      "Optimized Mongoose queries and population strategies for reliable product, order, and user services in production commerce workflows.",
      "Secure file upload and asset management pipeline with server-side validation, storage policies, and controlled access for product images and media.",
      "RESTful API design with standardized response formats, centralized error handling, and pagination for seamless frontend and third-party integrations.",
      "Production observability with structured logging, environment-based configuration, and centralized error monitoring to improve stability and debugging.",
      "CI/CD-ready deployment workflows on Railway and Render, enabling reliable releases, environment isolation, and automated build pipelines.",
      "Comprehensive API and system architecture documentation supporting team onboarding, maintainability, and future scalability.",
    ],
    link: [
      {
        name: " GitHub",
        url: "https://github.com/ak0384221/yourstore-backend-2.0",
      },
    ],
    status: "ongoing & active",
  },
  ,
  {
    name: "YourStore",
    type: "E-Commerce",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "TypeScript",
      "Zod",
      "Tailwind CSS",
      "Vercel",
      "Railway",
    ],
    date: "2025-11-01",
    summary: [
      "Full-stack eCommerce platform with complete role-based access for users and admins.",
      "Users can browse products, add to cart, apply discounts, and place orders; admins manage inventory, orders, and product analytics.",
      "Product pages use Static Site Generation (SSG) with 10-minute ISR revalidation to keep stock, pricing, and discount status always fresh.",
      "Smart commerce features: advanced filtering, search, pagination, automated discount rules, and a secure checkout system.",
      "Optimized MongoDB queries using proper indexing and Mongoose populate() for fast and efficient relational lookups.",
      "Modular, scalable TypeScript architecture with clean separation of controllers, services, models, and utilities.",
      "End-to-end validation powered by Zod, ensuring type-safe and predictable input handling on both frontend and backend.",
      "Custom UI states: empty-data screens, fetch-failed error UIs, loading states, and responsive animations.",
      "Admin dashboard with interactive charts for revenue metrics, product performance, and order insights.",
      "Deployed frontend on Vercel and backend on Railway with a CI/CD-ready production workflow.",
    ],
    link: [
      {
        name: "Frontend GitHub",
        url: "https://github.com/ak0384221/Yourstore-frontend",
      },
      {
        name: "Backend GitHub",
        url: "https://github.com/ak0384221/Yourstore-backend",
      },
      { name: "Live", url: "https://yourstore-frontend.vercel.app/" },
    ],
    status: "ongoing & active",
  },
  {
    name: "Vibehives",
    type: "Social Media",
    tech: ["React.js", "Firebase", "Tailwind CSS", "React Context API"],
    date: "2025-05-01",
    summary: [
      "Full-stack social media application built with React.js, Firebase, and Supabase.",
      "Includes post creation, editing, deletion, commenting, and profile updates.",
      "Firebase Authentication for secure login/signup.",
      "Firestore and Supabase Storage power fast and reliable media uploads .",
      "Real-time one-to-one chat with text and images.",
      "Optimized with  lazy loading, and modular architecture.",
      "Responsive and clean UI built with Tailwind CSS, enhanced with Framer Motion animations.",
      "Implemented image compression for handling large images",
      "Used zod and react hook form for handling forms",
    ],
    link: [
      { name: "github", url: "https://github.com/ak0384221/skill-up" },
      { name: "Live", url: "https://skill-up-704a7.web.app/" },
    ],
    status: "finished & active",
  },

  {
    name: "M-Manager",
    type: "Merchandise Manager",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
    date: "2025-07-19",
    summary: [
      "Business-focused inventory and transaction management system built with React.js and Firebase.",
      "Supports 1,000+ transactions with full CRUD functionality and printable invoices.",
      "Firestore database architecture separates collections per business for scalability and security.",
      "Advanced inventory system tracks item quantities in real-time, auto-syncing with purchases and sales.",
      "Smart filters for payment status, transaction type, and date/date ranges (40% faster lookup).",
      "Responsive dashboard provides live transaction summaries and key business insights.",
      "Hidden admin panel for secure real-time monitoring without exposing sensitive tools to regular users.",
    ],
    link: [
      {
        name: "github",
        url: "https://github.com/ak0384221/MerchandiseManager",
      },
      { name: "live", url: "https://m-manager-258fb.web.app/" },
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
