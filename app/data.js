const frontendTech = {
  languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],

  ["frameworks And Libraries"]: [
    "React.js",
    "Next.js",
    "Redux / Redux Toolkit",
    "React Router",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Axios",
    "Clerk",
  ],

  ["styling And Animation"]: ["Tailwind CSS", "Framer Motion", "GSAP"],

  ["tools And Platforms"]: ["Git / GitHub", "Firebase", "Supabase"],

  ["monitoring And Analytics (basics)"]: ["Sentry"],

  ["testing (basics)"]: ["Vitest", "Jest", "React Testing Library", "Cypress"],
  ["backend techs (basics)"]: ["Node js", "Express js", "Mongo DB", "MySql"],
};

const projects = [
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
      "Used zod and react hook form for handling forms"
    ],
    github: "https://github.com/ak0384221/skill-up",
    live: "https://skill-up-704a7.web.app/",
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
    github: "https://github.com/ak0384221/MerchandiseManager",
    live: "https://m-manager-258fb.web.app/",
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
