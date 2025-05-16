import Image from "next/image";
export type Course = {
  id: number;
  title: string;
  Image?: string;
  category: string;
  subjects?: string[];
  rate?: string;
  duration?: string;
  sessions?: string;
  fee: string;
  discount?: string;
  includes?: string[];
  schedule?: string;
  flexibility?: string;
  action: string;
  overview?: string;
};

export const courseCategories: string[] = [
  "Primary",
  "Secondary",
  "National 5",
  "Highers",
  "Advanced Highers",
  "Exam Revision",
  "Mock Exams",
  "Tips & Hints",
];

export const courses: Course[] = [
  {
    id: 1,
    title: "P3 to P7 (All Year Round)",
    Image: "/images/courses/c1.jpg",
    category: "Primary",
    subjects: ["Maths", "English", "Science"],
    rate: "£10 per hour",
    sessions: "2 hours",
    fee: "£10.00",
    action: "Enroll Now",
    overview:
      "Year-round support in Maths, English, and Science, designed to develop a strong academic foundation and genuine interest in learning.",
    includes: [
      "Interactive & curiosity-based learning",
      "Weekly homework and skill-building tasks",
      "Regular feedback to track progress",
      "Supportive, child-friendly tutors",
    ],
  },
  {
    id: 2,
    title: "S1 & S2 (All Year Round)",
    Image: "/images/courses/c1.jpg",
    category: "Secondary",
    subjects: ["Maths", "Science"],
    rate: "£12 per hour",
    sessions: "2 hours",
    fee: "£12.00",
    action: "Enroll Now",
    overview:
      "Bridges the transition from primary to secondary with academic and emotional support.",
    includes: [
      "Study habit development",
      "Focused topic reviews & skill checks",
      "Personalised support & mentoring",
      "Parent updates every few weeks",
    ],
  },
  {
    id: 3,
    title: "S3 (All Year Round)",
    Image: "/images/courses/c1.jpg",
    category: "Secondary",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£16 per hour",
    sessions: "1 hour",
    fee: "£16.00",
    action: "Enroll Now",
    overview:
      "Early preparation for National 5-level work, helping students deepen understanding of key concepts.",
    includes: [
      "Early intro to National 5-style questions",
      "Concept-focused teaching",
      "Study planning & feedback",
      "Encouragement of independent learning",
    ],
  },
  {
    id: 4,
    title: "National 5 (August – February)",
    Image: "/images/courses/c1.jpg",
    category: "National 5",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£17 per hour",
    sessions: "1.5 hours",
    fee: "£17.00",
    action: "Enroll Now",
    overview:
      "Curriculum-aligned sessions covering Maths and Sciences from August to February.",
    includes: [
      "Homework + feedback included",
      "Curriculum-aligned teaching",
      "Concept building before intense exam prep starts",
      "Progress reviews",
      "Structured lessons with mini quizzes",
      "Personalised tutor support",
    ],
  },
  {
    id: 5,
    title: "National 5 Exam Revision Course (January to April)",
    Image: "/images/courses/c1.jpg",
    category: "Exam Revision",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£20 per hour",
    sessions: "2 hours",
    duration: "30 hours total",
    fee: "£600.00",
    action: "Enroll Now",
    overview:
      "Intensive 30-hour revision course preparing students for National 5 exams.",
    includes: [
      "2 Mock Exams included",
      "Full syllabus revision",
      "Exam strategies + tips",
      "Marked mocks with tutor feedback",
      "Progress reports for parents",
      "Model answer walkthroughs and writing structure guidance",
      "Performance review sessions",
      "Breakdown of SQA marking schemes and grade boundaries",
    ],
  },
  {
    id: 6,
    title: "Highers (August – February)",
    Image: "/images/courses/c1.jpg",
    category: "Highers",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£25 per hour",
    sessions: "1.5 hours",
    fee: "£25.00",
    action: "Enroll Now",
    overview:
      "Expert support for students aiming for strong results in S5/S6 and beyond.",
    includes: [
      "In-depth syllabus coverage",
      "Study planning and workload management",
      "Personalised academic support with writing, problem-solving, and theory",
      "Weekly tasks and feedback",
      "University preparation guidance",
    ],
  },
  {
    id: 7,
    title: "Highers Exam Revision Course (January to April)",
    Image: "/images/courses/c1.jpg",
    category: "Exam Revision",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£25 per hour",
    sessions: "2 hours",
    duration: "30 hours total",
    fee: "£750.00",
    action: "Enroll Now",
    overview:
      "Focused exam prep programme for Highers with mock exams and detailed reviews.",
    includes: [
      "2 Mock Exams included with grading, feedback & improvement tips",
      "Intensive revision of critical topics",
      "Timed paper practice",
      "Practice with long-answer and problem-solving questions",
      "Mistake analysis + Tips & strategies for exams",
      "Visual Revision tools: mind maps, flow charts, summaries",
      "Performance review sessions",
      "Breakdown of SQA marking schemes and grade boundaries",
      "Regular tutor feedback and confidence tracking",
    ],
  },
  {
    id: 8,
    title: "National 5 Mock Exam",
    Image: "/images/courses/c1.jpg",
    category: "Mock Exams",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£50 per subject",
    fee: "£50.00",
    action: "Book Now",
    overview:
      "Full-length mock exam under real exam conditions with detailed feedback.",
    includes: [
      "Full test + marking",
      "Individual feedback report",
      "Improvement advice",
    ],
  },
  {
    id: 9,
    title: "Highers Mock Exam",
    Image: "/images/courses/c1.jpg",
    category: "Mock Exams",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£70 per subject",
    fee: "£70.00",
    action: "Book Now",
    overview: "Real-exam style mocks to evaluate readiness before finals.",
    includes: [
      "Full mock exam",
      "Marked scripts with comments",
      "Performance insights",
    ],
  },
  {
    id: 10,
    title: "Advanced Highers Mock Exam",
    Image: "/images/courses/c1.jpg",
    category: "Mock Exams",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    rate: "£100 per subject",
    fee: "£100.00",
    action: "Book Now",
    overview: "Challenging mock exams designed to simulate actual exam stress.",
    includes: [
      "Real exam conditions",
      "Expert-marked scripts",
      "Feedback on technique",
      "Suggested next steps",
    ],
  },
  {
    id: 11,
    title: "National 5 – Tips & Hints Session",
    Image: "/images/courses/c1.jpg",
    category: "Tips & Hints",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],

    fee: "£100.00",
    action: "Book Now",
    overview:
      "Strategic lesson designed to give students an edge before their exams.",
    includes: [
      "Breakdown of common question types & how to answer them",
      "Tips for understanding command words: 'describe', 'explain', 'justify'",
      "Highlighting commonly missed marks and how to avoid them",
      "Time-saving strategies for high-pressure questions",
      "Quick recall tricks for formulas, processes, and definitions",
      "What NOT to do — real student errors and how to dodge them",
      "Final-week revision checklist & study planner",
      "Q&A with experienced SQA-focused tutors",
      "Take-home tips sheet with condensed advice",
    ],
  },
  {
    id: 12,
    title: "Highers – Tips & Hints Session",
    Image: "/images/courses/c1.jpg",
    category: "Tips & Hints",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    fee: "£150.00",
    action: "Book Now",
    overview:
      "Expert-led session with insider strategies for approaching Higher exams confidently.",
    includes: [
      "Advanced exam strategies tailored to each subject",
      "How to structure high-mark written responses",
      "Techniques for analysing question language and unlocking intent",
      "Time management: allocating minutes per section or marks",
      "Tips for long-answer planning and data-handling questions",
      "High-frequency topics and what to prioritise in revision",
      "Final-day prep checklist & study map",
      "Live question dissection & group discussion",
      "Post-session cheat sheet with tips and reminders",
    ],
  },
  {
    id: 13,
    title: "Advanced Highers – Tips & Hints Session",
    Image: "/images/courses/c1.jpg",
    category: "Tips & Hints",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    fee: "£250.00",
    action: "Book Now",
    overview:
      "Intensive premium session for ambitious students where every mark counts.",
    includes: [
      "Advanced techniques for tackling high-mark and essay-style questions",
      "Exam blueprint: how SQA examiners allocate marks",
      "Guidance on showing analytical depth in responses",
      "Subject-specific advice for interpreting tricky problems",
      "Breakdown of sample A-grade answers and how to replicate them",
      "Time-saving structures for extended responses",
      "Final revision priorities and efficiency plan",
      "One-to-one feedback on question approach (if needed)",
      "Exclusive tip booklet for Advanced Highers",
    ],
  },
];
