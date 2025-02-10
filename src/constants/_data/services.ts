// types.ts
export interface ServiceItem {
 name: string;
 description: string;
 link: string;
}

export interface ServiceSubcategory {
 category: string;
 description?: string;
 items: ServiceItem[];
}

export interface Service {
 type: string;
 description: string;
 subcategories: ServiceSubcategory[];
}

// services-data.ts
export const services: Service[] = [
 {
  type: "Advanced Endpoint Protection (EDR/XDR/MDR)",
  description: `In today’s connected world, endpoints are the most vulnerable entry points for cyberattacks. Traditional antivirus tools are no longer sufficient to defend against advanced threats like ransomware, zero-day exploits, and sophisticated phishing schemes.`,
  subcategories: [
   {
    category: "Real-Time Threat Detection",
    items: [
     {
      name: "Endpoint Detection and Response (EDR)",
      description:
       "Continuously monitors endpoints for suspicious activities and potential breaches.",
      link: "/services/edr",
     },
     {
      name: "Extended Detection and Response (XDR)",
      description:
       "Real-time threat detection and incident response for advanced analytics.",
      link: "/services/xdr",
     },
     {
      name: "Managed Detection and Response (MDR)",
      description: "Advanced analytics to protect your endpoints.",
      link: "/services/mdr",
     },
    ],
   },
  ],
 },
 {
  type: "Data Center Security for Server and Workload Protection",
  description:
   "Comprehensive security for servers and workloads in data centers.",
  subcategories: [
   {
    category: "Server Threat Detection",
    items: [
     {
      name: "Server Antivirus",
      description: "Protects your servers against malware and ransomware.",
      link: "/services/server-antivirus",
     },
     {
      name: "Workload Security",
      description: "Ensures safe deployment and operations of workloads.",
      link: "/services/workload-security",
     },
    ],
   },
  ],
 },
 {
  type: "Data Loss Prevention (DLP)",
  description: "Prevent unauthorized sharing of sensitive information.",
  subcategories: [
   {
    category: "Information Protection",
    items: [
     {
      name: "Data Encryption",
      description: "Encrypts sensitive data to protect it from leaks.",
      link: "/services/data-encryption",
     },
     {
      name: "Data Access Control",
      description: "Manages access to confidential information.",
      link: "/services/data-access-control",
     },
    ],
   },
  ],
 },
 {
  type: "Database Security",
  description: "Protect your databases from unauthorized access and threats.",
  subcategories: [
   {
    category: "Database Monitoring",
    items: [
     {
      name: "SQL Injection Protection",
      description: "Defends databases against SQL injection attacks.",
      link: "/services/sql-protection",
     },
     {
      name: "Data Masking",
      description: "Conceals sensitive data to reduce risks.",
      link: "/services/data-masking",
     },
    ],
   },
  ],
 },
 {
  type: "Email Security",
  description: "Safeguard your email communications against phishing and spam.",
  subcategories: [
   {
    category: "Spam Protection",
    items: [
     {
      name: "Anti-Phishing",
      description: "Blocks phishing attempts and protects user credentials.",
      link: "/services/anti-phishing",
     },
     {
      name: "Email Encryption",
      description: "Encrypts email messages to ensure secure delivery.",
      link: "/services/email-encryption",
     },
    ],
   },
  ],
 },
 {
  type: "Web Gateway Solutions",
  description: "Secure your internet traffic with advanced gateway solutions.",
  subcategories: [
   {
    category: "Web Filtering",
    items: [
     {
      name: "URL Filtering",
      description: "Blocks access to malicious and unwanted websites.",
      link: "/services/url-filtering",
     },
     {
      name: "Secure Browsing",
      description: "Ensures safe browsing by filtering web traffic.",
      link: "/services/secure-browsing",
     },
    ],
   },
  ],
 },
];
