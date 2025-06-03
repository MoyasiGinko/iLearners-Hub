interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is iLearner’s Hub?",
    answer: (
      <div className="bg-yellow-100/80 rounded-2xl shadow-lg p-5 border-4 border-yellow-300">
        <h3 className="text-blue-800 text-lg font-semibold mb-2">About Us</h3>
        <p className="text-blue-800">
          We’re a friendly, in-person tutoring centre in Aberdeen supporting
          learners from P3 to Advanced Highers.
          <br />
          Whether it’s building confidence, catching up, or getting ahead, we
          help young people make real academic progress in a supportive
          environment.
        </p>
      </div>
    ),
  },
  {
    question: "How do you know what my child needs help with?",
    answer: (
      <div className="bg-pink-100/80 rounded-2xl shadow-lg p-5 border-4 border-pink-300">
        <h3 className="text-purple-800 text-lg font-semibold mb-2">
          Personalised Assessment
        </h3>
        <p className="text-purple-800 mb-2">
          Before your child joins a group, we carry out a relaxed 20-minute
          assessment — not to test them, but to understand where they’re at.
          This helps us:
        </p>
        <ul className="list-disc list-inside text-purple-700 space-y-1 pl-6">
          <li>🌟 Identify strengths and gaps</li>
          <li>👫 Place your child in the right group</li>
          <li>🧑‍🏫 Equip the tutor to personalise their teaching</li>
        </ul>
        <p className="text-purple-800 mt-2">
          It’s how we make sure every learner starts strong and never feels
          lost.
        </p>
      </div>
    ),
  },
  {
    question: "How do you make sure the teaching is high quality?",
    answer: (
      <div className="bg-green-100/80 rounded-2xl shadow-lg p-5 border-4 border-green-300">
        <h3 className="text-green-900 text-lg font-semibold mb-2">
          Quality Teaching
        </h3>
        <p className="text-green-900">
          All of our tutors are university students with strong academic results
          and great communication skills.
          <br />
          They’re trained to follow SQA learning goals and supported by our team
          to ensure every session is focused, clear, and genuinely helpful.
        </p>
      </div>
    ),
  },
  {
    question: "What is the Homework Club?",
    answer: (
      <div className="bg-blue-100/80 rounded-2xl shadow-lg p-5 border-4 border-blue-300">
        <h3 className="text-blue-900 text-lg font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">📚</span> Homework Club
        </h3>
        <p className="text-blue-900 mb-2">
          A quiet, focused study space open every weekday from{" "}
          <strong>3:30 PM to 6:00 PM</strong>.<br />
          Students can work independently on homework, revision, or study.
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-1 pl-6">
          <li>Supportive tutors always nearby for guidance</li>
          <li>Encouraging, distraction-free environment</li>
          <li>Perfect for building good study habits</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can my child bring any work to the Homework Club?",
    answer: (
      <div className="bg-orange-100/80 rounded-2xl shadow-lg p-5 border-4 border-orange-300">
        <h3 className="text-orange-900 text-lg font-semibold mb-2">
          Bring Any Work
        </h3>
        <p className="text-orange-900">
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
      <div className="bg-purple-100/80 rounded-2xl shadow-lg p-5 border-4 border-purple-300">
        <h3 className="text-purple-900 text-lg font-semibold mb-2">
          Subjects We Offer
        </h3>
        <ul className="list-disc list-inside text-purple-800 space-y-1 pl-6">
          <li>
            <strong>Primary:</strong> Maths, Science, English
          </li>
          <li>
            <strong>Secondary:</strong> Maths & Science
          </li>
          <li>
            <strong>National 5, Highers & Advanced Highers:</strong> Physics,
            Chemistry, Biology, Maths
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I contact iLearners Hub?",
    answer: (
      <div className="bg-teal-100/80 rounded-2xl shadow-lg p-5 border-4 border-teal-300">
        <h3 className="font-bold text-teal-900 mb-3">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <strong>Visit us:</strong>
              <br />
              <span className="text-teal-800">
                1–3 Albyn Terrace, Aberdeen, AB10 1YP
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <strong>Call or WhatsApp:</strong>
              <br />
              <span className="text-teal-800">+44 7448 231096</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✉️</span>
            <div>
              <strong>Email:</strong>
              <br />
              <span className="text-teal-800">info@ilearnershub.co.uk</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <strong>Contact Form:</strong>
              <br />
              <a
                href="/register"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Click Here
              </a>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What’s the student-to-tutor ratio at iLearners Hub?",
    answer: (
      <div className="bg-red-100/80 rounded-2xl shadow-lg p-5 border-4 border-red-300">
        <h3 className="text-red-900 text-lg font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">👩‍🏫</span> Small Groups, Big Impact
        </h3>
        <p className="text-red-900 mb-2">
          To ensure every learner gets the attention they need, we keep our
          groups small — with a maximum of{" "}
          <strong>5 to 7 students per tutor per session</strong>.
        </p>
        <ul className="list-disc list-inside text-red-800 space-y-1 pl-6">
          <li>Focused support for each student</li>
          <li>More interaction and engagement</li>
          <li>Personalised guidance throughout the session</li>
        </ul>
      </div>
    ),
  },
];

export default faqItems;
