
type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "classroom" | "activities" | "events" | "videos";
  type: "image" | "video";
  thumbnail?: string; // For video thumbnails
  youtubeId?: string; // For YouTube videos
};

export const galleryItems: GalleryItem[] = [
  // Classroom Images
  {
    id: 1,
    src: "/images/gallery/gp1.jpg",
    alt: "Bright classroom with colorful learning materials",
    category: "classroom",
    type: "image",
  },
  {
    id: 2,
    src: "/images/gallery/gp2.jpg",
    alt: "Clean and organized classroom",
    category: "classroom",
    type: "image",
  },
  {
    id: 3,
    src: "/images/gallery/gp3.jpg",
    alt: "Chair and table setup in a classroom",
    category: "classroom",
    type: "image",
  },

  // Activities Images
  {
    id: 4,
    src: "/images/gallery/gp4.jpg",
    alt: "Students engaged in a group activity",
    category: "activities",
    type: "image",
  },
  {
    id: 5,
    src: "/images/gallery/gp5.jpg",
    alt: "Teacher demonstrating a subject in class",
    category: "activities",
    type: "image",
  },
  {
    id: 7,
    src: "/images/gallery/gp7.jpg",
    alt: "Students studying in a group setting",
    category: "activities",
    type: "image",
  },
  {
    id: 8,
    src: "/images/gallery/gp8.jpg",
    alt: "Tutoring session with students",
    category: "activities",
    type: "image",
  },

  // Events Images
  {
    id: 6,
    src: "/images/gallery/gp6.jpg",
    alt: "Events booklet with colorful cover",
    category: "events",
    type: "image",
  },

  // Videos - Using existing sample video and creating placeholders
  {
    id: 9,
    src: "",
    alt: "Interactive learning session with students",
    category: "videos",
    type: "video",
    thumbnail: "/images/gallery/gp1.jpg", // Using existing image as thumbnail
    youtubeId: "dQw4w9WgXcQ", // Example YouTube video ID
  },

  // Placeholder videos for demonstration
  {
    id: 10,
    src: "",
    alt: "Virtual tour of our modern classrooms",
    category: "videos",
    type: "video",
    thumbnail: "/images/gallery/gp2.jpg",
    youtubeId: "3JZ_D3ELwOQ",
  },
  {
    id: 11,
    src: "",
    alt: "Exciting science experiments in action",
    category: "videos",
    type: "video",
    thumbnail: "/images/gallery/gp3.jpg",
    youtubeId: "V-_O7nl0Ii0",
  },
];