// Performance GT — TypeScript interfaces

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceTile {
  id: string;
  title: string;
  image: string;
  href: string;
  size?: "large" | "small"; // large = full width, small = 1/3 width
}

export interface VehicleCard {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface SearchFilter {
  label: string;
  name: string;
  options: string[];
}

export interface LocationOffice {
  region: string;
  addresses: {
    city?: string;
    address: string;
  }[];
  email: string;
  phone: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface InstagramPost {
  id: string;
  image: string;
  href: string;
  alt: string;
}
