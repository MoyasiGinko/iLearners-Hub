interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is iLearner’s Hub?",
    answer: (
      <p>
        iLearner’s Hub is a private tuition centre in Aberdeen providing
        specialised tuition in Maths and English for P4 to P7 students, and
        Maths, English, and Physics for S3 to National 5 students.
      </p>
    ),
  },
  {
    question: "Where is iLearner’s Hub located?",
    answer: (
      <p>
        We are conveniently located in the <strong>heart of Aberdeen</strong>.
        Please visit our Contact Us page for the exact address and directions.
      </p>
    ),
  },
  {
    question: "What is the duration of each tuition session?",
    answer: (
      <p>
        Each tuition session typically lasts <strong>1 to 1.5 hours</strong>.
        Please check with us for specific timings.
      </p>
    ),
  },
  {
    question: "How can I contact iLearner’s Hub?",
    answer: (
      <p>
        You can contact us via phone <strong>+44 7448 231096</strong>, email{" "}
        <strong>info@ilearnershub.co.uk</strong>, or through our website’s
        registration form. Visit our <strong>Book a Lesson</strong> page for
        more details.
      </p>
    ),
  },
  {
    question: "Do you offer one-on-one or group tuition?",
    answer: (
      <p>
        We offer both one-on-one and small group tuition sessions, depending on
        the student’s preference and learning style.
      </p>
    ),
  },
  {
    question:
      "Do you provide support for students with dyslexia or other learning difficulties?",
    answer: (
      <p>
        Yes, we have experience in supporting students with a range of learning
        difficulties and can provide tailored strategies to assist them.
      </p>
    ),
  },
  {
    question: "Who are your tutors?",
    answer: (
      <p>
        Our tutors are highly qualified professionals with extensive experience
        in teaching and subject-specific expertise.
      </p>
    ),
  },
  {
    question: "Can I choose a specific tutor for my child?",
    answer: (
      <p>
        Yes, we try to accommodate requests for specific tutors based on
        availability and the student’s needs.
      </p>
    ),
  },
  {
    question: "Do you provide learning materials?",
    answer: (
      <p>
        Yes, we provide all necessary learning materials, including worksheets,
        practice tests, and revision notes.
      </p>
    ),
  },
  {
    question: "Is online tuition available?",
    answer: (
      <p>
        Is online tuition available? No as we believe in face to face being the
        most effective method.
      </p>
    ),
  },
  {
    question: "Do you offer holiday tuition?",
    answer: (
      <p>
        Yes, we provide holiday tuition programmes to help students stay on
        track or get ahead during school breaks.
      </p>
    ),
  },
  {
    question: "Can you accommodate students with special educational needs?",
    answer: (
      <p>
        Yes, we have experience in supporting students with a variety of special
        educational needs and can tailor our approach accordingly.
      </p>
    ),
  },
  {
    question:
      "Do you offer support for students aiming for university entrance exams?",
    answer: (
      <p>
        Yes, we provide tailored preparation for university entrance exams,
        including subject-specific support and exam strategies.
      </p>
    ),
  },
];

export default faqItems;
