import { StrategicPartnership } from "@/types";
type ServiceCard = {
 name: string;
 link?: string;
};

type ServiceData = {
 tabTitle: string;
 tab: string;
 content: string;
 cards: ServiceCard[];
};

const servicesData: ServiceData[] = [
 {
  tabTitle: "Information Security Services",
  tab: "information-security-services", // Slugified version of tab
  content:
   "Protect your organization from cyber threats with comprehensive security solutions, including threat detection, vulnerability management, risk assessment, and incident response.",
  cards: [
   { name: "Information Security", link: "/information-security" },
   {
    name: "Cybersecurity & GRC (Governance, Risk, and Compliance)",
    link: "/cybersecurity",
   },
   {
    name: "Vulnerability Assessment & Penetration Testing (VAPT)",
    link: "/vulnerability-assessment-penetration-testing-vapt",
   },
  ],
 },
 {
  tabTitle: "Enterprise Infrastructure Services",
  tab: "enterprise-infrastructure-services", // Slugified version of tab
  content:
   "Optimize your IT infrastructure with our enterprise-grade solutions, covering network design, cloud integration, data center management, and scalable architecture planning.",
  cards: [
   { name: "Cloud Solutions", link: "#" },
   { name: "Network Infrastructure", link: "#" },
   { name: "Data Center Services", link: "#" },
  ],
 },
 {
  tabTitle: "Design Development & Devops",
  tab: "design-development-devops", // Slugified version of tab
  content:
   "Accelerate your software development lifecycle with our DevOps services, including CI/CD implementation, containerization, infrastructure as code, and automated testing frameworks.",
  cards: [
   { name: "DevOps Consulting", link: "#" },
   { name: "Continuous Integration/Continuous Deployment", link: "#" },
   { name: "Microservices Architecture", link: "#" },
  ],
 },
];

const strategicPartnershipslogos: StrategicPartnership[] = [
 {
  id: "1",
  href: "/",
  name: "Symantec",
  url: "/images/StrategicPartnerships/Symantec-logo.svg",
 },
 {
  id: "2",
  href: "/",
  name: "Microsoft",
  url: "/images/StrategicPartnerships/microsoft-logo.svg",
 },
 {
  id: "3",
  href: "/",
  name: "Hewlett Packard",
  url: "/images/StrategicPartnerships/Hewlett_Packard_logo.svg",
 },
 {
  id: "4",
  href: "/",
  name: "Hikvision",
  url: "/images/StrategicPartnerships/Hikvision-logo.svg",
 },
 {
  id: "5",
  href: "/",
  name: "Trustpilot",
  url: "/images/StrategicPartnerships/hik-vision.svg",
 },
 {
  id: "6",
  name: "Dell",
  url: "/images/StrategicPartnerships/dell-logo.svg",
 },
 {
  id: "7",
  href: "/",
  name: "Vector",
  url: "/images/StrategicPartnerships/vmware-logo.svg",
 },
];
const NEWS_AND_INSIGHTS = [
 {
  id: 1,
  title: "Secure your cloud",
  description:
   "Stop cloud breaches with unified agent and agentless protection.",
  imageUrl: "/images/news/news-one.png",
 },
 {
  id: 2,
  title: "Protect your data",
  description:
   "Ensure data safety with advanced encryption and access controls.",
  imageUrl: "/images/news/news-two.png",
 },
 {
  id: 3,
  title: "Enhance security",
  description:
   "Implement cutting-edge security measures to safeguard your assets.",
  imageUrl: "/images/news/news-three.png",
 },
 {
  id: 4,
  title: "Optimize performance",
  description:
   "Boost your cloud performance while maintaining robust security.",
  imageUrl: "/images/news/news-four.png",
 },
 {
  id: 5,
  title: "Stay compliant",
  description: "Ensure regulatory compliance with our comprehensive solutions.",
  imageUrl: "/images/news/news-one.png",
 },
 {
  id: 1,
  title: "Secure your cloud",
  description:
   "Stop cloud breaches with unified agent and agentless protection.",
  imageUrl: "/images/news/news-two.png",
 },
 {
  id: 2,
  title: "Protect your data",
  description:
   "Ensure data safety with advanced encryption and access controls.",
  imageUrl: "/images/news/news-three.png",
 },
 {
  id: 3,
  title: "Enhance security",
  description:
   "Implement cutting-edge security measures to safeguard your assets.",
  imageUrl: "/images/news/news-four.png",
 },
 {
  id: 4,
  title: "Optimize performance",
  description:
   "Boost your cloud performance while maintaining robust security.",
  imageUrl: "/images/news/news-two.png",
 },
 {
  id: 5,
  title: "Stay compliant",
  description: "Ensure regulatory compliance with our comprehensive solutions.",
  imageUrl: "/images/news/news-three.png",
 },
];

const SECURITY_TABS_DATA = [
 {
  value: "end-to-end",
  label: "End-to-End Solutions",
  content:
   "From IT infrastructure to security systems, we offer a complete suite of services tailored to meet the unique needs of our clients.",
 },
 {
  value: "customer-first",
  label: "Customer-First Approach",
  content:
   "Your needs come first. Our customer-centric approach guarantees personalized solutions that align with your business goals and challenges.",
 },
 {
  value: "experienced-team",
  label: "Experienced Team",
  content:
   "With years of expertise in IT and security, our professionals tackle complex challenges and bring innovative solutions to the table.",
 },
 {
  value: "cutting-edge",
  label: "Cutting-Edge Technology",
  content:
   "We integrate the latest advancements in technology to keep your infrastructure up-to-date, secure, and ahead of the competition.",
 },
 {
  value: "commitment",
  label: "Commitment to Excellence",
  content:
   "Excellence is our standard. We continuously refine our services to provide top-tier solutions and exceed expectations.",
 },
];
export {
 strategicPartnershipslogos,
 NEWS_AND_INSIGHTS,
 SECURITY_TABS_DATA,
 servicesData,
};
