const frontendTech = {
  cloudAndInfrastructure: [
    "AWS VPC, EC2, EBS, EFS, and AMIs",
    "IAM, Security Groups, and Auto Scaling",
    "Elastic Load Balancing",
    "S3 and Lambda",
    "Terraform (Infrastructure as Code)",
  ],

  containersAndCiCd: [
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "Multi-job CI/CD Pipelines",
    "Build Caching and Artifact Handoff",
    "Git and GitHub",
  ],

  linuxAndSystems: [
    "RHEL and Ubuntu",
    "Bash Scripting",
    "Python",
    "User & Group Management",
    "File Permissions & ACLs",
    "LVM, EBS, and EFS Storage",
    "Boot Process & System Logging",
    "Package Management (RPM, DNF, APT)",
    "Service Management & Troubleshooting",
    "Persistent Mounts and Live Resizing",
  ],

  securityAndNetworking: [
    "SSH Key-Based Access",
    "Fail2ban and iptables",
    "TCP/IP",
    "VPC Subnets and Routing",
    "Security Groups",
    "Least-Privilege IAM and Linux Access",
    "Log Auditing",
  ],

  databasesAndBackend: [
    "Node.js and Express.js",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "PostgreSQL",
    "MongoDB and Redis Caching",
    "Authentication & Authorization",
  ],
};

const projects = [
  {
    name: "YourStore -- Containerized E-Commerce Stack & CI/CD",

    type: "Full-Stack & DevOps",

    category: ["ecommerce", "devops", "docker", "ci-cd"],

    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Docker Hub",
      "Render",
    ],

    featured: true,

    date: "2026-06-12",

    summary: [
      "Containerized a multi-tier Next.js/TypeScript application stack with Docker, separating internal build-time pre-rendering from runtime client API communication.",
      "Engineered a multi-job GitHub Actions pipeline that separates lint/test verification from image builds, with artifact hand-off and build caching.",
      "Automated Docker Hub image publishing on push and continuous deployment to Render.",
      "Resolved production 502 gateway issues caused by container host binding and addressed CORS failures; documented the setup in a DevOps journal.",
    ],

    link: [
      {
        name: "Frontend Repo",
        url: "https://github.com/ak0384221/Yourstore-frontend",
      },
      {
        name: "Backend v1 Repo",
        url: "https://github.com/ak0384221/Yourstore-backend",
      },
      {
        name: "Backend v2 Repo",
        url: "https://github.com/ak0384221/yourstore-backend-2.0",
      },
      {
        name: "Frontend Image",
        url: "https://hub.docker.com/repository/docker/ak0384221/yourstore-frontend/general",
      },
      {
        name: "Backend Image",
        url: "https://hub.docker.com/repository/docker/ak0384221/yourstore-backend/general",
      },
      {
        name: "DevOps Journal",
        url: "https://github.com/ak0384221/docker-yourstore-journal/blob/main/yourstore-journal.md",
      },
    ],

    status: "completed",
  },

  {
    name: "Highly Available Web Architecture on AWS",

    type: "AWS Cloud Infrastructure",

    category: ["aws", "cloud", "availability", "ec2"],

    tech: ["AWS VPC", "EC2", "Auto Scaling", "Elastic Load Balancer", "Subnets", "Routing", "Security Groups"],

    featured: true,

    summary: [
      "Designed and deployed an application environment in a custom VPC using EC2 instances, an Auto Scaling Group, and an Elastic Load Balancer.",
      "Configured subnets, routing, and security groups to control traffic between the load balancer and application instances.",
      "Used Auto Scaling to adjust EC2 capacity with demand and replace unhealthy instances automatically.",
    ],

    link: [],

    status: "completed",
  },

  {
    name: "AWS EC2, Storage & Image Automation Lab",

    type: "Cloud Operations & Disaster Recovery",

    category: ["aws", "ec2", "storage", "automation"],

    tech: ["EC2", "EBS", "EFS", "IAM", "AWS Budgets", "EC2 Image Builder", "Terraform"],

    featured: true,

    summary: [
      "Configured multi-tier security groups and IAM instance roles, provisioned servers with user-data automation, and set up AWS Budgets alerts.",
      "Managed persistent EBS mounts and live resizing; practiced cross-Availability Zone snapshots and cross-Region replication for disaster recovery.",
      "Automated golden AMI creation with EC2 Image Builder, mounted EFS across Availability Zones, and learned Terraform for infrastructure provisioning.",
    ],

    link: [],

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
        name: "LVM Lab Journal",
        url: "https://github.com/ak0384221/Linux-admin-troubleshooting/blob/main/rhel-lvm-hands-on-lab-journal.md",
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

    link: [],

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

    link: [],

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

    link: [],

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

    link: [],

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
