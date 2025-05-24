// TypeScript interface for our data structure
export interface CardDataType {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  actionButton: {
    text: string;
    url?: string;
  };
  category: string;
  date?: string;
  time?: string;
  location?: string;
  capacity?: string;
  registrationUrl?: string;
  featured?: boolean;
  discount?: string;
  originalPrice?: string;
  salePrice?: string;
  validUntil?: string;
  offerType?: string;
  author?: string;
  likes?: string;
  publishedAt?: string;
  readTime?: string;
  isBreaking?: boolean;
  views?: string;
  comments?: string;
  source?: string;
  // New fields
  logo?: string;
  companyName?: string;
  offerDate?: string;
  phone?: string;
  email?: string;
  website?: string;
  tagline?: string;
}

// Centralized data variable
export const cardData: CardDataType[] = [
  // Existing data...
  {
    id: "1",
    title: "Annual Tech Conference 2025",
    description:
      "Join us for the biggest technology conference of the year featuring keynotes from industry leaders, networking opportunities, and hands-on workshops.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    actionButton: {
      text: "Register Now",
      url: "#register",
    },
    category: "events",
    date: "June 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center",
    capacity: "50 per workshop",
    featured: true,
  },
  // Other existing items...
  {
    id: "2",
    title: "Summer Workshop Series",
    description:
      "Enhance your skills with our comprehensive workshop series covering web development, design thinking, and project management.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    actionButton: {
      text: "Join Workshop",
      url: "#workshop",
    },
    category: "events",
    date: "July 10-12, 2025",
    time: "10:00 AM - 4:00 PM",
    capacity: "50 per workshop",
    location: "Tech Hub",
    registrationUrl: "https://example.com/register",
  },

  {
    id: "5",
    title: "BREAKING NEWS",
    subtitle: "LIVE UPDATE",
    description:
      "Stay informed with the latest developments as they unfold. Get real-time updates and expert analysis on this developing story.",
    author: "News Team",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    views: "125K",
    comments: "1.2K",
    likes: "8.5K",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    category: "news",
    source: "Global News Network",
    location: "New York",
    isBreaking: true,
    actionButton: {
      text: "Read Full Story",
    },
    date: "Sept 15, 2024",
    time: "10:00 AM",
  },
  {
    id: "6",
    title: "BREAKING NEWS",
    subtitle: "LIVE UPDATE",
    description:
      "Stay informed with the latest developments as they unfold. Get real-time updates and expert analysis on this developing story.",
    author: "News Team",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    views: "125K",
    comments: "1.2K",
    likes: "8.5K",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    category: "news",
    source: "Global News Network",
    location: "New York",
    isBreaking: true,
    actionButton: {
      text: "Read Full Story",
    },
    date: "Sept 15, 2024",
    time: "10:00 AM",
  },
  {
    id: "7",
    logo: "🎒",
    companyName: "Happy Learning Store",
    title: "Back to School Sale!",
    tagline: "Super Fun Learning",
    description:
      "Get ready for an amazing school year with our colorful notebooks, fun pencils, and exciting learning materials that make studying feel like play!",
    originalPrice: "$25.99",
    salePrice: "$15.99",
    discount: "40",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    offerDate: "Aug 15, 2024",
    validUntil: "Sept 30, 2024",
    phone: "(555) 123-KIDS",
    email: "fun@happylearning.com",
    website: "www.happylearning.com",
    actionButton: { text: "Get My School Supplies!" },
    offerType: "BACK TO SCHOOL SPECIAL",
    category: "offers",
  },
  // New card
  {
    id: "8",
    logo: "🎒",
    companyName: "Happy Learning Store",
    title: "Back to School Sale!",
    tagline: "Super Fun Learning",
    description:
      "Get ready for an amazing school year with our colorful notebooks, fun pencils, and exciting learning materials that make studying feel like play!",
    originalPrice: "$25.99",
    salePrice: "$15.99",
    discount: "40",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    offerDate: "Aug 15, 2024",
    validUntil: "Sept 30, 2024",
    phone: "(555) 123-KIDS",
    email: "fun@happylearning.com",
    website: "www.happylearning.com",
    actionButton: { text: "Get My School Supplies!" },
    offerType: "BACK TO SCHOOL SPECIAL",
    category: "offers",
  },
];
