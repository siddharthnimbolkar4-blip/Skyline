export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  type: string;
  configuration: string;
  startingPrice: string;
  image: string;
  features: string[];
  builtArea: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryForm {
  name: string;
  mobile: string;
  email: string;
  project: string;
  message: string;
}
