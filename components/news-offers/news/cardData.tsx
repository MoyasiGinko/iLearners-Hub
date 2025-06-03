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
  // Offer card: Homework Club
  {
    id: "1",
    logo: "📚",
    title: "Homework Club – Extra Support for Your Child",
    description:
      "Looking for a calm space where your child can focus and get schoolwork done—with expert support just a call away? Our Homework Club helps learners of any level complete homework, revise, and build confidence. Flexible attendance and affordable plans mean it fits right into your schedule.\n\nDon’t forget to subscribe to our News & Offers page to stay updated!",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    actionButton: {
      text: "Find out more and sign up",
      url: "/courses/homework-club/16",
    },
    category: "offers",
  },

  // Event card: Eid on the Terrace
  {
    id: "2",
    logo: "🎉",
    title: "Visit Us at Eid on the Terrace – Sunday 22nd June!",
    description:
      "We’ll be at “Eid on the Terrace,” a lively community celebration in the centre of Aberdeen!\n\nCome along and visit the iLearners Hub stall – we’d love to see you there!",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    actionButton: {
      text: "Event Details",
      url: "/register", // Replace with actual event link
    },
    category: "events",
    date: "Sunday 22nd June 2025, 11:00 AM – 5:00 PM",
    location: "Union Terrace Gardens, Aberdeen AB10 1NJ",
  },

  // News card: All Courses Starting August
  {
    id: "3",
    title: "ALL Courses Starting This August",
    subtitle: "ENROLMENT OPEN",
    description:
      "Whether you’re aiming to strengthen skills or take on new challenges, our courses across Primary and Secondary levels, including National 5, Highers, and Advanced Highers, have something for everyone. Don’t miss your chance to enrol and boost your confidence this school year.\n\nKeep up with all the latest — subscribe to our News & Offers page!",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    category: "news",
    actionButton: {
      text: "Explore courses and enroll",
      url: "/courses/all-courses",
    },
  },
];
