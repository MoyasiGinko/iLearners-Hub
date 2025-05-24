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
  // Event fields
  date?: string;
  time?: string;
  location?: string;
  capacity?: string;
  registrationUrl?: string;
  // News fields
  author?: string;
  publishedAt?: string;
  readTime?: string;
  // Offer fields
  logo?: string;
  companyName?: string;
  tagline?: string;
  originalPrice?: string;
  salePrice?: string;
  discount?: string;
  validUntil?: string;
  phone?: string;
}

export const cardData: CardDataType[] = [
  // Offer card
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
    validUntil: "Sept 30, 2024",
    phone: "(555) 123-KIDS",
    actionButton: { text: "Get My School Supplies!" },
    category: "offers",
  },

  // Event card
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
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    category: "news",
    actionButton: {
      text: "Read Full Story",
    },
    date: "Sept 15, 2024",
  },
];
