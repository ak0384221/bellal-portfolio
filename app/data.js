const frontendTech = {
  devopsCore: [
    "Docker",
    "Docker Compose",
    "CI/CD",
    "GitHub Actions",
    "Git",
    "GitHub",
    "YAML Pipelines",
    "Containerization",
  ],

  cloudAndDeployment: [
    "AWS EC2",
    "AWS Fundamentals",
    "Cloud Deployment Basics",
    "Docker Hub",
    "Render Deployment",
    "Container Registry",
    "Environment Configuration",
  ],

  linuxAndSystems: [
    "Linux (RHEL/CentOS, Ubuntu/Debian)",
    "User & Group Management",
    "File Permissions & ACLs",
    "Disk Management & LVM",
    "Boot Process & System Logging",
    "Package Management (RPM, DNF, APT)",
    "Service Management & Troubleshooting",
    "SSH Hardening",
  ],

  securityAndNetworking: [
    "Firewall (iptables)",
    "SSH Hardening",
    "Nmap",
    "TCP/IP",
    "DNS",
    "Network Troubleshooting",
    "Least-Privilege Access",
    "fail2ban",
  ],

  fullstackSupport: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Authentication & Authorization",
    "Frontend Deployment",
    "Backend Integration",
  ],
};

const projects = [
  {
    name: "YourStore -- Full-Stack Project with Docker & CI/CD Pipeline",

    type: "Full-Stack & DevOps",

    category: ["ecommerce", "devops", "docker", "ci-cd"],

    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Render",
    ],

    featured: true,

    date: "2026-06-12",

    summary: [
      "Built a full-stack e-commerce app and added the DevOps workflow around it: containerization, CI/CD, and cloud deployment.",
      "Containerized the frontend and backend with Docker, using separate internal and public API endpoints for Next.js SSG/ISR scenarios.",
      "Built a multi-job GitHub Actions CI/CD pipeline with linting, testing, Docker image build and push to Docker Hub, and deployment to Render.",
      "Troubleshot production issues such as 502 host binding errors and CORS failures, and documented the setup and fixes in a DevOps journal.",
    ],

    link: [
      {
        name: "Frontend Repo",
        url: "https://github.com/ak0384221/Yourstore-frontend",
      },
      {
        name: "Backend Repo",
        url: "https://github.com/ak0384221/Yourstore-backend",
      },
      {
        name: "Frontend Image",
        url: "https://hub.docker.com/repository/docker/ak0384221/yourstore-frontend/general",
      },
      {
        name: "Backend Image",
        url: "https://hub.docker.com/repository/docker/ak0384221/articlehub-backend/general",
      },
      {
        name: "DevOps Journal",
        url: "https://github.com/ak0384221/docker-yourstore-journal/blob/main/yourstore-journal.md",
      },
    ],

    status: "completed",
  },

  {
    name: "Storage & LVM Management Lab",

    type: "Linux Storage Administration",

    category: ["linux", "storage", "lvm"],

    tech: ["RHEL", "LVM", "ext4", "XFS", "df", "lsblk", "vgs", "lvs"],

    featured: true,

    date: "2026-05-10",

    summary: [
      "Designed and managed disk partitions, created physical volumes, and configured logical volumes on Linux servers.",
      "Performed live resizing of logical volumes and configured filesystems with persistent mounts through /etc/fstab.",
      "Extended volume groups by adding new physical volumes and grew logical volumes without disrupting service.",
      "Verified storage health and disk usage using df, lsblk, vgs, and lvs to support reliable system operations.",
    ],

    link: [
      {
        name: "Lab Overview",
        url: "#",
      },
    ],

    status: "completed",
  },

  {
    name: "Linux User, Group & Permission Control Lab",

    type: "Access Control & Hardening",

    category: ["linux", "security", "permissions"],

    tech: [
      "useradd",
      "usermod",
      "chage",
      "passwd",
      "setfacl",
      "getfacl",
      "sudo",
    ],

    featured: true,

    date: "2026-04-25",

    summary: [
      "Configured user accounts, groups, and sudo privileges to enforce secure, least-privilege access across systems.",
      "Managed account lifecycle with password aging, account locking, and expiration policies for operational control.",
      "Implemented SUID, SGID, and Sticky Bit policies to protect system binaries and shared directories.",
      "Used ACLs to grant fine-grained access for multi-user collaboration while preserving access boundaries.",
    ],

    link: [
      {
        name: "Lab Overview",
        url: "#",
      },
    ],

    status: "completed",
  },

  {
    name: "SSH & Access Hardening Lab",

    type: "Linux Security",

    category: ["linux", "security", "networking"],

    tech: ["SSH", "iptables", "fail2ban", "journalctl", "key-based auth"],

    date: "2026-02-24",

    summary: [
      "Hardened SSH access by changing the default port, disabling password authentication, and enforcing key-based logins.",
      "Configured brute-force protection and firewall rules to restrict access to approved source addresses only.",
      "Disabled unnecessary authentication methods and tightened protocol settings to lower the server attack surface.",
      "Reviewed authentication logs through journalctl and /var/log/auth.log to validate the security controls in use.",
    ],

    link: [
      {
        name: "Lab Overview",
        url: "#",
      },
    ],

    status: "completed",
  },

  {
    name: "Server Package & Log Management Lab",

    type: "System Operations",

    category: ["linux", "monitoring", "operations"],

    tech: ["DNF", "APT", "yum", "journalctl", "logrotate", "systemd"],

    date: "2026-02-20",

    summary: [
      "Managed package installation, updates, and removals in local Linux server environments using DNF and APT workflows.",
      "Monitored system health, service status, and troubleshooting logs to support stability and service continuity.",
      "Configured log rotation to manage disk usage and retain historical logs for auditing and inspection.",
      "Applied practical operational habits for service monitoring, maintenance, and reliable day-to-day server administration.",
    ],

    link: [
      {
        name: "Lab Overview",
        url: "#",
      },
    ],

    status: "completed",
  },

  {
    name: "RHCSA Preparation & Linux Fundamentals",

    type: "Enterprise Linux Training",

    category: ["linux", "certification", "basics"],

    tech: ["RHCSA", "RHEL", "Linux Security", "Networking", "Bash"],

    date: "2025-07-19",

    summary: [
      "Built a focused RHCSA preparation workflow centered on enterprise Linux administration, storage, security, and service management.",
      "Practiced core system tasks including package management, user control, LVM operations, and system troubleshooting.",
      "Applied practical study and lab work to reinforce configuration, access control, and operational knowledge for real environments.",
      "Strengthened understanding of Linux fundamentals through hands-on tasks aligned with enterprise administration practices.",
    ],

    link: [
      {
        name: "Certification Path",
        url: "#",
      },
    ],

    status: "in progress",
  },
];

const certificates = [
  {
    name: "Linux Essentials",
    provider: "Cisco NetAcad",
    status: "Completed",
    year: "2025",
    link: "https://drive.google.com/file/d/1-6Cg4mQ5EY3BNlW3trvvBvRpdUpBKrlV/view?usp=drive_link",
  },
  {
    name: "Linux Administration Bootcamp: Beginner to Advanced",
    provider: "Udemy",
    status: "Completed",
    year: "2025",
    link: "#",
  },
  {
    name: "Network Addressing & Basic Troubleshooting",
    provider: "Cisco NetAcad",
    status: "Completed",
    year: "2025",
    link: "https://drive.google.com/file/d/14IPEbCp1479DOSWapTZBxzcA_CNF_5x0/view?usp=drive_link",
  },
  {
    name: "Docker for Absolute Beginners",
    provider: "KodeKloud",
    status: "Completed",
    year: "2025",
    link: "https://learn.kodekloud.com/learn/certificate/2e5c121a-9e88-4a10-a135-1f9a3a7ecc8d",
  },
  {
    name: "Docker & Kubernetes: The Practical Guide",
    provider: "Udemy",
    status: "Completed",
    year: "2025",
    link: "#",
  },
  {
    name: "SQL (Advanced)",
    provider: "HackerRank",
    status: "Completed",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/fee51e440bb6",
  },
  {
    name: "REST API (Intermediate)",
    provider: "HackerRank",
    status: "Completed",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/e99f81bcad91",
  },
  {
    name: "Node.js",
    provider: "HackerRank",
    status: "Completed",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/ae2f49759238",
  },
  {
    name: "Frontend Developer (React)",
    provider: "HackerRank",
    status: "Completed",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/e32b77d945ec",
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

export { frontendTech, projects, certificates, contacts };
