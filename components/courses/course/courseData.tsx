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
  fee?: string;
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
    sessions: "2 hours",
    rate: "£10/hr",
    fee: "£10.00",
    action: "Enroll Now",
    overview: `Our P3 to P7 tutoring programme offers year-round support in Maths, English, and Science, designed to develop a strong academic foundation and genuine interest in learning. Sessions are interactive and tailored to each child’s pace, helping them grow confident, creative, and curious learners. Each 2-hour session comprises activities that build core skills while encouraging independent thinking. Students are guided in a supportive, non-lecture-based environment with regular homework, creative tasks, and personalised feedback.`,
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
    rate: "£12/hr",
    sessions: "2 hours",
    fee: "£12.00",
    action: "Enroll Now",
    overview: `Our S1 & S2 programme bridges the transition from primary to secondary with academic and
emotional support. Covering Maths and Science, sessions are designed to reinforce
classroom learning while introducing independent study habits and critical thinking.
Students engage in group discussions, guided tasks, and problem-solving sessions. Tutors
provide personalised attention, homework tasks, and regular updates on progress to
parents. `,
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
    rate: "£16/hr",
    sessions: "1 hour",
    fee: "£16.00",
    action: "Enroll Now",
    overview: `In S3, students begin early preparation for National 5-level work. Our tutoring focuses on Maths and Science subjects, helping students deepen their understanding of key concepts and begin light exam-style practice in a stress-free way.
Sessions involve concept exploration, guided questions, structured note-making, and revision strategy building. Tutors assign light homework and provide consistent feedback to help students progress.`,
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
    rate: "£17/hr",
    sessions: "1.5 hours",
    fee: "£17.00",
    action: "Enroll Now",
    overview: `Our National 5 tutoring covers Maths, Physics, Chemistry, and Biology in focused,
curriculum-aligned sessions starting in August to February.
Each 1.5-hour session includes topic walkthroughs, question practice, and individual
support. Homework is assigned regularly and checked by tutors, with feedback shared to
guide improvement. Our tutors also help build exam confidence and study discipline. `,
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
    rate: "£20/hr",
    sessions: "2 hours",
    duration: "30 hours total",
    fee: "£20.00",
    action: "Enroll Now",
    overview: `This 30-hour intensive revision course, starting from January to April, prepares students for
the National 5 exams in Maths, Physics, Chemistry, and Biology. It includes 2 full Mock
Exams, revision materials, and expert guidance.
Each two-hour session focuses on key topics, past paper practice, timed tests, and tips &
tricks for tackling tricky questions. Mock tests are followed by dedicated review sessions with
detailed feedback and improvement strategies.`,
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
    rate: "£25/hr",
    sessions: "1.5 hours",
    fee: "£25.00",
    action: "Enroll Now",
    overview: `Our Higher-level tutoring starting August to February offers expert support in Maths, Physics,
Chemistry, and Biology. These sessions are perfect for students aiming for strong results in
S5/S6 and beyond.
Each 1.5-hour session includes topic deep dives, past paper-style questions, and structured
feedback. Homework is tailored and marked with progress tracking. Tutors also support
students with time management and exam preparation strategies.`,
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
    rate: "£25/hr",
    sessions: "2 hours",
    duration: "30 hours total",
    fee: "£25.00",
    action: "Enroll Now",
    overview: `This 30-hour course is a focused exam prep programme for Highers in Maths, Physics,
Chemistry, and Biology. It includes 2 full Mock Exams, timed practice, and detailed review
sessions.
We help students master content, develop smart revision techniques, and stay confident
under exam pressure. Tutors provide marked scripts with actionable feedback.`,
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
    rate: "£50/subject",
    fee: "£50.00",
    action: "Book Now",
    overview: `Take a full-length mock exam in Maths, Physics, Chemistry, or Biology under real exam conditions. Papers are marked by our tutors and returned with detailed feedback.`,
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
    rate: "£70/subject",
    fee: "£70.00",
    action: "Book Now",
    overview: `Real-exam style mocks for Maths, Physics, Chemistry, and Biology—perfect to evaluate
readiness before finals. Includes personalised tutor marking and feedback.`,
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
    rate: "£100/subject",
    fee: "£100.00",
    action: "Book Now",
    overview: `Challenging mock exams for Advanced Highers in science and maths. Designed to simulate actual exam stress and help students refine their approach.`,
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
    rate: "£100",
    fee: "£100.00",
    action: "Book Now",
    overview: `This is not just another revision session — it’s a strategic lesson designed to give students
an edge before their exams. Our expert tutors break down what really matters, what to
expect in the exam, and how to maximise marks with smart techniques.`,
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
    rate: "£150",
    fee: "£150.00",
    action: "Book Now",
    overview: `This focused, expert-led session equips students with insider strategies to approach Higher
exams precisely and confidently. It’s packed with actionable techniques, time management
tools, and insights from tutors who know the SQA exam inside out.`,
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
    rate: "£250",
    fee: "£250.00",
    action: "Book Now",
    overview: `This intensive premium session is designed for ambitious students sitting Advanced Highers,
where every mark counts. Our tutors provide deep strategic insight, show how to tackle
complex questions, and share techniques that set A-band candidates apart.`,
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
