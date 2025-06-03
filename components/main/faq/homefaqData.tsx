interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is iLearner’s Hub?",
    answer: (
      <p>
        We’re a friendly, in-person tutoring centre in Aberdeen supporting
        learners from P3 to Advanced Highers. Whether it’s building confidence,
        catching up, or getting ahead, we help young people make real academic
        progress in a supportive environment.
      </p>
    ),
  },
  {
    question: "How do you know what my child needs help with?",
    answer: (
      <p>
        Before your child joins a group, we carry out a relaxed 20-minute
        assessment — not to test them, but to understand where they’re at. This
        helps us: ✔ Identify strengths and gaps ✔ Place your child in the right
        group ✔ Equip the tutor to personalise their teaching It’s how we make
        sure every learner starts strong and never feels lost.
      </p>
    ),
  },
  {
    question: "How do you make sure the teaching is high quality?",
    answer: (
      <p>
        All of our tutors are university students with strong academic results
        and great communication skills. They’re trained to follow SQA learning
        goals and supported by our team to ensure every session is focused,
        clear, and genuinely helpful.
      </p>
    ),
  },
  {
    question: "What is the Homework Club?",
    answer: (
      <p>
        A quiet, focused study space that runs every weekday from 3:30 PM to
        6:00 PM. Students work independently — on homework, revision or study —
        with tutors available nearby for guidance and encouragement.
      </p>
    ),
  },
  {
    question: "Can my child bring any work to the Homework Club?",
    answer: (
      <p>
        Absolutely. Whether it’s homework, a school project, or preparing for a
        test, this time is theirs — and our team is there when they need help.
      </p>
    ),
  },
  {
    question: "What subjects or courses do you offer?",
    answer: (
      <p>
        We support students across the following levels: o Primary: Maths,
        Science, English o Secondary: Maths & Science o National 5, Highers &
        Advanced Highers: Physics, Chemistry, Biology, Maths
      </p>
    ),
  },
  {
    question: "How can I contact iLearners Hub?",
    answer: (
      <p>
        You can get in touch with us in the way that suits you best: 📍 Visit
        us: 1–3 Albyn Terrace, Aberdeen, AB10 1YP 📞 Call or WhatsApp: +44 7448
        231096 ✉ Email: info@ilearnershub.co.uk 🌐 Or use our Contact Form:
        <a href="/register">Click Here</a>"
      </p>
    ),
  },
  {
    question: "What’s the student-to-tutor ratio at iLearners Hub?",
    answer: (
      <p>
        To ensure every learner gets the attention they need, we keep our groups
        small — with a maximum of 5 to 7 students per tutor per session. This
        allows for focused support, more interaction, and personalised guidance
        throughout the session.
      </p>
    ),
  },
];

export default faqItems;
