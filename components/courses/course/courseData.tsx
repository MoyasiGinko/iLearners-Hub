export type Course = {
  id: number;
  title: string;
  category: string;
  subjects?: string[];
  rate: string;
  duration?: string;
  sessions?: string;
  fee: string;
  discount?: string;
  includes?: string[];
  schedule?: string;
  flexibility?: string;
  action: string;
};

export const courseCategories: string[] = [
  "Intensive",
  "Higher",
  "Revision",
  "Secondary",
  "Primary",
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Intensive Exam Preparation Course",
    category: "Intensive",
    subjects: ["English", "Maths", "Science"],
    rate: "£20/hour per subject",
    duration: "12 weeks per subject",
    sessions: "2.5 hours/week per subject",
    fee: "£600.00",
    discount: "25% for first 20 students",
    action: "Get Now",
  },
  {
    id: 2,
    title: "Higher Physics Course",
    category: "Higher",
    rate: "£25/hour",
    fee: "£200.00",
    action: "Get Now",
  },
  {
    id: 3,
    title: "Higher Mathematics Course",
    category: "Higher",
    rate: "£25/hour",
    fee: "£200.00",
    action: "Get Now",
  },
  {
    id: 4,
    title: "National 5 Physics Revision",
    category: "Revision",
    rate: "£20/hour",
    duration: "12 weeks",
    sessions: "2.5 hours/week",
    fee: "£600.00",
    action: "Get Now",
  },
  {
    id: 5,
    title: "National 5 Maths Revision",
    category: "Revision",
    rate: "£20/hour",
    duration: "12 weeks",
    sessions: "2.5 hours/week",
    fee: "£600.00",
    action: "Get Now",
  },
  {
    id: 6,
    title: "S4 Physics",
    category: "Secondary",
    rate: "£189/month",
    duration: "16 weeks",
    sessions: "Two 1.5-hour sessions/week",
    includes: ["Mock Exams"],
    fee: "£189.00",
    action: "Get Now",
  },
  {
    id: 7,
    title: "S4 Mathematics",
    category: "Secondary",
    rate: "£189/month",
    duration: "16 weeks",
    sessions: "Two 1.5-hour sessions/week",
    includes: ["Mock Exams"],
    fee: "£189.00",
    action: "Get Now",
  },
  {
    id: 8,
    title: "S3 Physics",
    category: "Secondary",
    rate: "£99/month",
    duration: "36 weeks",
    sessions: "1.5 hours/week",
    includes: ["Mock Exams"],
    fee: "£99.00",
    action: "Get Now",
  },
  {
    id: 9,
    title: "S3 Mathematics",
    category: "Secondary",
    rate: "£99/month",
    duration: "36 weeks",
    sessions: "1.5 hours/week",
    includes: ["Mock Exams"],
    fee: "£99.00",
    action: "Get Now",
  },
  {
    id: 10,
    title: "S1 & S2",
    category: "Secondary",
    subjects: ["Mathematics", "English", "Science"],
    rate: "£10/hour",
    schedule: "Monday to Friday (3:30pm to 6:30pm)",
    flexibility: "Enrol for your suitable no. of days and hours",
    fee: "£10.00",
    action: "Get Now",
  },
  {
    id: 11,
    title: "Primary 4 to Primary 7",
    category: "Primary",
    subjects: ["Mathematics", "English", "Science"],
    rate: "£10/hour",
    schedule: "Monday to Friday (3:30pm to 6:30pm)",
    flexibility: "Enrol for your suitable no. of days and hours",
    fee: "£10.00",
    action: "Get Now",
  },
];
