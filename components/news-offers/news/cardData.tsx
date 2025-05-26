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
  location?: string;
  capacity?: string;

  // OFFERS
  logo?: string;
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
    title: "Summer Learning Package",
    description:
      "Get our comprehensive summer learning package including online courses, study materials, and 1-on-1 tutoring sessions at a special discounted rate!",
    originalPrice: "£199.99",
    salePrice: "£129.99",
    discount: "35",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    validUntil: "August 31, 2024",
    phone: "+44 20 1234 5678",
    actionButton: { text: "Claim This Offer", url: "/register" },
    category: "offers",
  },

  // Event card
  {
    id: "1",
    title: "Annual Education Summit",
    description:
      "Join leading educators and students for our biggest event of the year in iLearnersHub. Featuring workshops on innovative learning techniques, career guidance, and networking opportunities with top UK universities.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    actionButton: {
      text: "Register Now",
      url: "/register",
    },
    category: "events",
    date: "October 12, 2024",
    location: "iLearnersHub Campus, London",
    capacity: "150 attendees",
  },
  {
    id: "5",
    title: "New GCSE Preparation Courses",
    subtitle: "CURRICULUM UPDATE",
    description:
      "iLearnersHub UK is proud to announce our newly updated GCSE preparation courses aligned with the latest curriculum changes. Our expert tutors have developed comprehensive study materials to ensure student success.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    category: "news",
    actionButton: {
      text: "Learn More",
      url: "/courses",
    },
    date: "July 22, 2024",
  },
];
