export type StrategicPartnership = {
 id: string;
 href?: string; // Optional, as some items may not have this field
 name: string;
 url: string;
};
export interface PartnerType {
 logo: string;
 name: string;
 description: string;
}

export type NewsType = {
 title: string;
 description: string;
 imageUrl: string;
};

export type ServiceCard = {
 name: string;
 link?: string;
 isActive?: boolean;
};

// Define the type for each step
export type IndustryInnovatingCardsDataType = {
 id?: string;
 title: string;
 description: string;
};
export type ExploreCardDataType = {
 id?: string;
 title: string;
 description: string;
};

export interface Item {
 name: string;
 link: string;
}

export interface Subcategory {
 category: string;
 title: string;
 items: Item[];
}

export interface Service {
 type: string;
 title: string;
 subcategories: Subcategory[];
}

// Type definition for a service

// Root data structure
export type ServicesData = {
 service: Service;
 subcategory: Subcategory;
 item?: Item;
};
