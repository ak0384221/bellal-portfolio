const frontendTech = [
  // Languages
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",

  // Frameworks & Libraries
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

  // Styling & Animation
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",

  // Tools

  "Git / GitHub",
  "Firebase",
  "Supabase",
];

const projects = [
  {
    name: "Vibehives",
    type: "social media",
    tech: ["React.js", "Firebase", "Tailwind CSS", "React Context API"],
    date: "2025-05-01",
    summary:
      "A full-stack social media application built with React.js, Firebase, and Supabase, designed to deliver a smooth, modern user experience. The platform includes core social features such as post creation, editing, deletion, commenting, and profile updates. It uses Firebase Authentication for secure login/signup, while Firestore and Supabase Storage power fast and reliable media uploads (images and videos Real-time one-to-one chat is enabled via Firestore, supporting text, emojis, images, and videos, with previews and an emoji picker for richer communication. The app is optimized with infinite scrolling, lazy loading, and modular architecture, improving performance by ~30%. A clean and responsive UI was built with Tailwind CSS, enhanced by Framer Motion animations and micro-interactions. React Context API and React Router were used for scalable state management and client-side routing",
    github: "https://github.com/ak0384221/skill-up",
    live: "https://skill-up-704a7.web.app/",
  },

  {
    name: "M-Manager",
    type: "Merchandise Manager",

    tech: ["React.js", "Tailwind CSS", "Firebase"],
    date: "2025-07-19",
    summary:
      "A business-focused inventory and transaction management system built with React.js and Firebase, designed for scalability and operational efficiency. The platform supports 1,000+ transactions with full CRUD functionality and generates printable invoices, improving accuracy and professionalism in record-keeping.The Firestore database architecture separates collections per business, enhancing scalability, security, and performance. An advanced inventory system tracks item quantities in real-time, auto-syncing with purchases and sales.The system supports smart filters for payment status, transaction type, and date/date ranges, reducing lookup time by 40%. A responsive dashboard provides live transaction summaries and key business insights for faster decision-making. Additionally, a hidden admin panel enables secure real-time monitoring and surveillance of business activities without exposing sensitive tools to regular users.",
    github: "https://github.com/ak0384221/MerchandiseManager",
    live: "https://m-manager-258fb.web.app/",
  },
];
const contacts = [
  {
    platform: "LinkedIn",
    id: "your-linkedin-id", // your LinkedIn username or profile id
    link: "linkedin.com/in/md-bellal-hossain-50a027373",
    img: "https://img.freepik.com/premium-vector/vector-linkedin-apps-logo-rounded-asset-isolated_1004619-457.jpg?semt=ais_hybrid&w=740&q=80", // path to LinkedIn logo image
  },
  {
    platform: "GitHub",
    id: "your-github-username",
    link: "github.com/ak0384221",
    img: "https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png", // path to GitHub logo image
  },
  {
    platform: "Email",
    id: "your.email@example.com",
    link: "bh0384221@gmail.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHbcrRBpAzA-pIA9nKEf3ZphaQeNCTzkZSQ&s", // path to email icon
  },
];

export { frontendTech, projects, contacts };
