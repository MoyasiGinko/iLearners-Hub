import { Metadata } from "next";
import ClientPage from "./client-page";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  // Map slugs to proper titles and descriptions
  const categoryMap: Record<string, { title: string; description: string }> = {
    "all-courses": {
      title: "All Courses - iLearner's Hub | Complete Course Catalog",
      description:
        "Browse all available courses at iLearner's Hub. From Primary to Advanced Highers, find the perfect course for your educational journey.",
    },
    primary: {
      title: "Primary Courses - iLearner's Hub | Foundation Learning",
      description:
        "Discover engaging Primary courses at iLearner's Hub. Build strong foundations in core subjects with fun, interactive learning experiences.",
    },
    secondary: {
      title: "Secondary Courses - iLearner's Hub | Advanced Learning",
      description:
        "Explore comprehensive Secondary courses at iLearner's Hub. Prepare for your next academic level with expert guidance and support.",
    },
    "national-5": {
      title: "National 5 Courses - iLearner's Hub | Scottish Qualifications",
      description:
        "Excel in your National 5 qualifications with iLearner's Hub. Get expert tutoring and resources for National 5 success.",
    },
    highers: {
      title: "Highers Courses - iLearner's Hub | University Preparation",
      description:
        "Master Higher qualifications with iLearner's Hub. Comprehensive support for university entrance and career preparation.",
    },
    "advanced-highers": {
      title: "Advanced Highers - iLearner's Hub | Elite Academic Preparation",
      description:
        "Achieve excellence in Advanced Higher qualifications. Expert tutoring for the most challenging academic levels at iLearner's Hub.",
    },
    "exam-revision": {
      title: "Exam Revision - iLearner's Hub | Focused Exam Preparation",
      description:
        "Intensive exam revision courses at iLearner's Hub. Strategic preparation and practice for exam success across all levels.",
    },
    "mock-exams": {
      title: "Mock Exams - iLearner's Hub | Practice Makes Perfect",
      description:
        "Take mock exams at iLearner's Hub to prepare for the real thing. Realistic exam conditions and detailed feedback included.",
    },
    "tips-and-hints": {
      title: "Tips & Hints - iLearner's Hub | Study Strategies & Techniques",
      description:
        "Learn effective study tips and helpful hints at iLearner's Hub. Boost your learning efficiency with proven strategies.",
    },
    "homework-club": {
      title: "Homework Club - iLearner's Hub | Guided Study Support",
      description:
        "Join our Homework Club at iLearner's Hub for guided study sessions, homework help, and peer learning opportunities.",
    },
  };

  const category = categoryMap[slug] || categoryMap["all-courses"];

  return {
    title: category.title,
    description: category.description,
  };
}

export default function Page() {
  return <ClientPage />;
}
