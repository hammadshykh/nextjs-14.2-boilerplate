import Icons from "@/components/common/icons";

export interface NavItem {
 title?: string;
 href?: string;
 disabled?: boolean;
 external?: boolean;
 icon?: keyof typeof Icons;
 label?: string;
}

export interface NavItemWithChildren extends NavItem {
 items: NavItemWithChildren[];
}

// If you want to keep these for readability or future extension, use `type` instead of `interface`
export type MainNavItem = NavItem;
export type SidebarNavItem = NavItemWithChildren;
