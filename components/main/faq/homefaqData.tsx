interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is iLearner’s Hub?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700">
          We’re a friendly, in-person tutoring centre in Aberdeen supporting
          learners from P3 to Advanced Highers. Whether it’s building
          confidence, catching up, or getting ahead, we help young people make
          real academic progress in a supportive environment.
        </p>
      </div>
    ),
  },
  {
    question: "How do you know what my child needs help with?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700 mb-2">
          Before your child joins a group, we carry out a relaxed 20-minute
          assessment — not to test them, but to understand where they’re at.
          This helps us:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Identify strengths and gaps</li>
          <li>Place your child in the right group</li>
          <li>Equip the tutor to personalise their teaching</li>
        </ul>
        <p className="text-gray-700 mt-2">
          It’s how we make sure every learner starts strong and never feels
          lost.
        </p>
      </div>
    ),
  },
  {
    question: "How do you make sure the teaching is high quality?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700">
          All of our tutors are university students with strong academic results
          and great communication skills. They’re trained to follow SQA learning
          goals and supported by our team to ensure every session is focused,
          clear, and genuinely helpful.
        </p>
      </div>
    ),
  },
  {
    question: "What is the Homework Club?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700">
          A quiet, focused study space that runs every weekday from{" "}
          <span className="font-semibold">3:30 PM to 6:00 PM</span>. Students
          work independently — on homework, revision or study — with tutors
          available nearby for guidance and encouragement.
        </p>
      </div>
    ),
  },
  {
    question: "Can my child bring any work to the Homework Club?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700">
          Absolutely. Whether it’s homework, a school project, or preparing for
          a test, this time is theirs — and our team is there when they need
          help.
        </p>
      </div>
    ),
  },
  {
    question: "What subjects or courses do you offer?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700 mb-2">
          We support students across the following levels:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <span className="font-semibold">Primary:</span> Maths, Science,
            English
          </li>
          <li>
            <span className="font-semibold">Secondary:</span> Maths & Science
          </li>
          <li>
            <span className="font-semibold">
              National 5, Highers & Advanced Highers:
            </span>{" "}
            Physics, Chemistry, Biology, Maths
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I contact iLearners Hub?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <div>
              <div className="font-semibold">Visit us</div>
              <div className="text-gray-700">
                1–3 Albyn Terrace, Aberdeen, AB10 1YP
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📞</span>
            <div>
              <div className="font-semibold">Call or WhatsApp</div>
              <div className="text-gray-700">+44 7448 231096</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✉️</span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-gray-700">info@ilearnershub.co.uk</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🌐</span>
            <div>
              <div className="font-semibold">Contact Form</div>
              <a
                href="/register"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What’s the student-to-tutor ratio at iLearners Hub?",
    answer: (
      <div className="bg-white/70 rounded-lg shadow p-4">
        <p className="text-gray-700">
          To ensure every learner gets the attention they need, we keep our
          groups small — with a maximum of{" "}
          <span className="font-semibold">
            5 to 7 students per tutor per session
          </span>
          . This allows for focused support, more interaction, and personalised
          guidance throughout the session.
        </p>
      </div>
    ),
  },
];

export default faqItems;
