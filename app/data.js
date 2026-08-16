const frontendTech = {
  systemAdministration: [
    "Linux (RHEL/CentOS, Ubuntu/Debian)",
    "User & Group Management",
    "File Permissions & ACLs",
    "Disk Management & LVM",
    "Boot Process & System Logging",
    "Package Management (RPM, DNF, APT)",
  ],

  systemSecurity: [
    "SSH Hardening",
    "sudo/visudo Privilege Management",
    "Password Policy & Account Lockout",
    "GRUB Protection",
    "Rootkit/Malware Scanning",
    "Full Disk Encryption (LUKS/dm-crypt)",
  ],

  networkingAndFirewall: [
    "TCP/IP, DNS, Subnetting",
    "iptables Firewall",
    "Nmap Scanning",
    "Firewall Rules & Logging",
    "SSH Access Control",
  ],

  storageAndBackup: [
    "Logical Volume Management",
    "Filesystem Configuration (ext4/XFS)",
    "Fstab Mount Management",
    "Disk Partitioning",
    "Server Backup Fundamentals",
    "Space & Disk Usage Monitoring",
  ],

  scriptingAndTools: [
    "Bash Scripting",
    "Git & GitHub",
    "SSH & Key Management",
    "journalctl & Log Review",
    "System Monitoring",
    "rkhunter & ClamAV",
  ],
};

const projects = [
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
