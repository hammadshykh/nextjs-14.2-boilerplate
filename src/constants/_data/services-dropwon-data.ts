import { Service } from "@/types";

export const services: Service[] = [
 {
  type: "information-security-services",
  title: "Information Security Services",
  subcategories: [
   {
    category: "information-security",
    title: "Information Security",
    items: [
     {
      name: "Advanced Endpoint Protection (EDR/XDR/MDR)",
      link: "advanced-endpoint-protection-edr-xdr-mdr",
     },
     {
      name: "Data Center Security for server and workload protection",
      link: "data-center-security-for-server-and-workload-protection",
     },
     { name: "Data Loss Prevention (DLP)", link: "data-loss-prevention-dlp" },
     { name: "Database Security", link: "database-security" },
     { name: "Email Security", link: "email-security" },
     { name: "Web Gateway Solutions", link: "web-gateway-solutions" },
    ],
   },
   {
    category: "cybersecurity",
    title: "Cybersecurity & GRC (Governance, Risk, and Compliance)",
    items: [
     {
      name: "Security Information and Event Management (SIEM)",
      link: "security-information-and-event-management-siem",
     },
     {
      name: "Security Orchestration Automation and Response (SOAR)",
      link: "security-orchestration-automation-and-response-soar",
     },
     {
      name: "Security Operations Center (SOC) setup",
      link: "security-operations-center-soc-setup",
     },
     {
      name: "Implementation of comprehensive security frameworks",
      link: "implementation-of-comprehensive-security-frameworks",
     },
    ],
   },
   {
    category: "vulnerability-assessment-penetration-testing-vapt",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    items: [
     { name: "Vulnerability assessments", link: "vulnerability-assessments" },
     { name: "Penetration testing", link: "penetration-testing" },
    ],
   },
  ],
 },
 {
  type: "enterprise-infrastructure-services",
  title: "Enterprise Infrastructure Services",
  subcategories: [
   {
    category: "network-infrastructure",
    title: "Network Infrastructure",
    items: [
     {
      name: "Design and implementation of LAN/WAN",
      link: "design-and-implementation-of-lan-wan",
     },
     {
      name: "Software-Defined Networking (SDN)",
      link: "software-defined-networking-sdn",
     },
     {
      name: "Network Security solutions (Firewalls, VPNs)",
      link: "network-security-solutions-firewalls-vpns",
     },
     {
      name: "Wireless Network Optimization",
      link: "wireless-network-optimization",
     },
    ],
   },
   {
    category: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    items: [
     {
      name: "Cloud migration and management",
      link: "cloud-migration-and-management",
     },
     {
      name: "Hybrid cloud architecture setup",
      link: "hybrid-cloud-architecture-setup",
     },
     {
      name: "Containerization and orchestration (Docker, Kubernetes)",
      link: "containerization-and-orchestration-docker-kubernetes",
     },
     {
      name: "Cost optimization for cloud services",
      link: "cost-optimization-for-cloud-services",
     },
    ],
   },
   {
    category: "data-center-solutions",
    title: "Data Center Solutions",
    items: [
     {
      name: "High availability and disaster recovery planning",
      link: "high-availability-and-disaster-recovery-planning",
     },
     { name: "Storage solutions (SAN/NAS)", link: "storage-solutions-san-nas" },
     { name: "Data center virtualization", link: "data-center-virtualization" },
     {
      name: "Power and cooling optimization",
      link: "power-and-cooling-optimization",
     },
    ],
   },
  ],
 },
 {
  type: "design-development-devops",
  title: "Design Development & DevOps",
  subcategories: [
   {
    category: "ui/ux-design",
    title: "UI/UX Design",
    items: [
     {
      name: "User research and persona creation",
      link: "user-research-and-persona-creation",
     },
     {
      name: "Wireframing and prototyping",
      link: "wireframing-and-prototyping",
     },
     {
      name: "Interactive design with a focus on accessibility",
      link: "interactive-design-with-a-focus-on-accessibility",
     },
     { name: "Design system creation", link: "design-system-creation" },
    ],
   },
   {
    category: "Web-application-development",
    title: "Web & Application Development",
    items: [
     {
      name: "Frontend and backend development",
      link: "frontend-and-backend-development",
     },
     {
      name: "Full-stack application development",
      link: "full-stack-application-development",
     },
     {
      name: "Progressive Web Applications (PWAs)",
      link: "progressive-web-applications-pwas",
     },
     {
      name: "Mobile app development (iOS, Android)",
      link: "mobile-app-development-ios-android",
     },
    ],
   },
   {
    category: "dev-ops-services",
    title: "DevOps Services",
    items: [
     { name: "CI/CD pipeline setup", link: "ci-cd-pipeline-setup" },
     {
      name: "Infrastructure as Code (IaC)",
      link: "infrastructure-as-code-iac",
     },
     {
      name: "Monitoring and logging solutions",
      link: "monitoring-and-logging-solutions",
     },
     {
      name: "Automated testing and deployment",
      link: "automated-testing-and-deployment",
     },
    ],
   },
  ],
 },
 {
  type: "professional-staffing-services",
  title: "Professional Staffing Services",
  subcategories: [
   {
    category: "it-staffing",
    title: "IT Staffing",
    items: [
     {
      name: "Temporary and contract-based IT staffing",
      link: "temporary-and-contract-based-it-staffing",
     },
     {
      name: "Permanent IT staff placement",
      link: "permanent-it-staff-placement",
     },
     {
      name: "Technical interview and assessment services",
      link: "technical-interview-and-assessment-services",
     },
     {
      name: "Skill development and training programs",
      link: "skill-development-and-training-programs",
     },
    ],
   },
   {
    category: "project-based-staffing",
    title: "Project-Based Staffing",
    items: [
     {
      name: "Short-term project staffing",
      link: "short-term-project-staffing",
     },
     {
      name: "On-demand resources for specific technologies",
      link: "on-demand-resources-for-specific-technologies",
     },
     {
      name: "Outsourced development teams",
      link: "outsourced-development-teams",
     },
     {
      name: "End-to-end project execution staffing",
      link: "end-to-end-project-execution-staffing",
     },
    ],
   },
   {
    category: "executive-search",
    title: "Executive Search",
    items: [
     {
      name: "Hiring for leadership and C-level roles",
      link: "hiring-for-leadership-and-c-level-roles",
     },
     {
      name: "Market insights and talent mapping",
      link: "market-insights-and-talent-mapping",
     },
     {
      name: "Confidential recruitment processes",
      link: "confidential-recruitment-processes",
     },
     {
      name: "Succession planning support",
      link: "succession-planning-support",
     },
    ],
   },
  ],
 },
];
