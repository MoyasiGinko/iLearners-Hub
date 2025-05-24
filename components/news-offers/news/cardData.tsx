// TypeScript interface for our data structure
export interface CardDataType {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  actionButton: {
    text: string;
    url: string;
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
  publishedAt?: string;
  readTime?: string;
  isBreaking?: boolean;
  views?: string;
  comments?: string;
  source?: string;
}
// Centralized data variable
export const cardData: CardDataType[] = [
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
    featured: true,
  },
  {
    id: "2",
    title: "Summer Workshop Series",
    description:
      "Enhance your skills with our comprehensive workshop series covering web development, design thinking, and project management.",
    image:
      "https://images.unsplash.com/photo-1559223607-d9176c8a1cd3?w=800&h=600&fit=crop",
    actionButton: {
      text: "Join Workshop",
      url: "#workshop",
    },
    category: "events",
    date: "July 10-12, 2025",
    time: "10:00 AM - 4:00 PM",
    capacity: "50 per workshop",
  },
  {
    id: "3",
    title: "50% Off Premium Membership",
    subtitle: "Limited Time Offer",
    description:
      "Unlock exclusive features, priority support, and advanced tools with our premium membership. Limited time offer for new subscribers only.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    actionButton: {
      text: "Claim Offer",
      url: "#premium",
    },
    category: "offers",
    discount: "50% OFF",
    date: "Valid until July 31, 2025",
    validUntil: "July 31, 2025",
    offerType: "Membership",
  },
  {
    id: "4",
    title: "Early Bird Special - Course Bundle",
    description:
      "Get access to our complete course library including advanced tutorials, project files, and lifetime updates. Save big with early bird pricing.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    actionButton: {
      text: "Get Bundle",
      url: "#bundle",
    },
    category: "offers",
    discount: "30% OFF",
    date: "Ends August 15, 2025",
    validUntil: "August 15, 2025",
    offerType: "Early Bird",
    originalPrice: "$249",
    salePrice: "$174",
  },
  {
    id: "5",
    title: "BREAKING NEWS",
    subtitle: "LIVE UPDATE",
    description:
      "Stay informed with the latest developments as this story unfolds. Our reporters are on the ground providing real-time coverage of this significant event.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    readTime: "3 min read",
    category: "news",
    isBreaking: true,
    views: "12.5K",
    comments: "248",
    source: "Global News Network",
    location: "Washington, DC",
    actionButton: {
      text: "Read Full Story",
      url: "#",
    },
  },
  {
    id: "6",
    title: "BREAKING NEWS",
    subtitle: "LIVE UPDATE",
    description:
      "Stay informed with the latest developments as this story unfolds. Our reporters are on the ground providing real-time coverage of this significant event.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    readTime: "3 min read",
    category: "news",
    isBreaking: true,
    views: "12.5K",
    comments: "248",
    source: "Global News Network",
    location: "Washington, DC",
    actionButton: {
      text: "Read Full Story",
      url: "#",
    },
  },
  {
    id: "7",
    title: "MEGA SALE",
    subtitle: "LIMITED TIME",
    description:
      "Don't miss out on this incredible opportunity! Get amazing discounts on all our premium courses and educational materials.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    discount: "70% OFF",
    originalPrice: "$299",
    salePrice: "$89",
    validUntil: "Dec 31, 2024",
    offerType: "Flash Sale",
    featured: true,
    category: "offers",
    actionButton: {
      text: "Claim Offer Now",
      url: "#",
    },
  },
];
