export interface PartnerType {
 logo: string;
 name: string;
 description: string;
}
import { PARTNERS } from "./partners";

export type ContentType = {
 ABOUT: {
  portfolio: string;
 };
 EXPLORE_OUR_SERVICES: {
  MISSION: {
   title: string;
   description: string;
  };
  VISION: {
   title: string;
   description: string;
  };
 };
 PARTNERS: {
  title: string;
  description: string;
  PARTNERS: PartnerType[];
 };
};

export const CONTENT: ContentType = {
 ABOUT: {
  portfolio:
   "We offer a comprehensive portfolio of services designed to enhance operational efficiency, protect critical assets, and foster long-term business growth. From IT infrastructure and cybersecurity to data protection and compliance, our solutions are crafted to empower businesses to achieve their goals with confidence.",
 },
 EXPLORE_OUR_SERVICES: {
  MISSION: {
   title: "Mission",
   description:
    "At Verbox Systems, our mission is to empower organizations by delivering cutting-edge solutions that manage and safeguard their data, ensuring its availability and integrity. We are committed to helping businesses thrive in an ever-evolving digital landscape by providing secure, resilient, and future-proof IT infrastructure.",
  },
  VISION: {
   title: "Vision",
   description:
    "Our vision is to become a globally recognized leader in enterprise IT services, setting the standard for excellence in data management and infrastructure protection. We aim to expand our international presence, becoming the preferred partner for businesses seeking innovative, secure, and scalable IT solutions.",
  },
 },
 PARTNERS: {
  title: "",
  description:
   "At Verbox Systems, we are proud to collaborate with some of the most innovative and trusted names in the cybersecurity industry. Our partnerships with these leading companies enable us to deliver cutting-edge solutions and comprehensive protection to our clients. Together, we are committed to safeguarding your digital assets and ensuring a secure future.",
  PARTNERS: PARTNERS,
 },
};
