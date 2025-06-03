interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is iLearner’s Hub?",
    answer: (
      <div className="bg-yellow-100/80 rounded-2xl shadow-lg p-5 border-4 border-yellow-300">
        <p className="text-blue-800 text-lg font-semibold flex items-center gap-2">
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
      <div className="bg-pink-100/80 rounded-2xl shadow-lg p-5 border-4 border-pink-300">
        <p className="text-purple-800 mb-2 flex items-center gap-2 text-lg font-semibold">
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
        <p className="text-green-900 text-lg font-semibold flex items-center gap-2">
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
      <div className="bg-blue-100/80 rounded-2xl shadow-lg p-5 border-4 border-blue-300">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-blue-900 text-lg font-bold">
              Homework Club
            </span>
          </div>
          <p className="text-blue-900 text-base">
            A quiet, focused study space open every weekday from{" "}
            <span className="font-bold">3:30 PM to 6:00 PM</span>. Students can
            work independently on homework, revision, or study.
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-1 pl-6">
            <li>Supportive tutors always nearby for guidance</li>
            <li>Encouraging, distraction-free environment</li>
            <li>Perfect for building good study habits</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Can my child bring any work to the Homework Club?",
    answer: (
      <div className="bg-orange-100/80 rounded-2xl shadow-lg p-5 border-4 border-orange-300">
        <p className="text-orange-900 text-lg font-semibold flex items-center gap-2">
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
        <p className="text-purple-900 mb-2 text-lg font-semibold flex items-center gap-2">
          We support students across the following levels:
        </p>
        <ul className="list-disc list-inside text-purple-800 space-y-1 pl-6">
          <li>
            <span className="font-bold">Primary:</span> Maths, Science, English
          </li>
          <li>
            <span className="font-bold">Secondary:</span> Maths & Science
          </li>
          <li>
            <span className="font-bold">
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
      <div className="bg-teal-100/80 rounded-2xl shadow-lg p-5 border-4 border-teal-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <div className="font-bold text-teal-900">Visit us</div>
              <div className="text-teal-800">
                1–3 Albyn Terrace, Aberdeen, AB10 1YP
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <div className="font-bold text-teal-900">Call or WhatsApp</div>
              <div className="text-teal-800">+44 7448 231096</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✉️</span>
            <div>
              <div className="font-bold text-teal-900">Email</div>
              <div className="text-teal-800">info@ilearnershub.co.uk</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="font-bold text-teal-900">Contact Form</div>
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
      <div className="bg-red-100/80 rounded-2xl shadow-lg p-5 border-4 border-red-300">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👩‍🏫</span>
            <span className="text-red-900 text-lg font-bold">
              Small Groups, Big Impact
            </span>
          </div>
          <p className="text-red-900 text-base">
            To ensure every learner gets the attention they need, we keep our
            groups small — with a maximum of{" "}
            <span className="font-bold">
              5 to 7 students per tutor per session
            </span>
            .
          </p>
          <ul className="list-disc list-inside text-red-800 space-y-1 pl-6">
            <li>Focused support for each student</li>
            <li>More interaction and engagement</li>
            <li>Personalised guidance throughout the session</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default faqItems;
