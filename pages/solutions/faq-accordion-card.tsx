/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";

function ArrowDownIcon() {
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 .799l4 4 4-4"
        stroke="#F47B56"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

const questions = [
  {
    id: "question1",
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: "question2",
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "question3",
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: "question4",
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: "question5",
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

type QuestionWithAnswerProps = {
  question: string;
  answer: string;
  id: string;
};

function QuestionWithAnswer({ id, question, answer }: QuestionWithAnswerProps) {
  return (
    <>
      <input type="checkbox" id={id} className="faq-input hidden" />

      <label
        htmlFor={id}
        className="text-xs md:text-sm cursor-pointer inline-flex w-full items-center justify-between py-4 transition-colors text-[#4a4b5e] hover:text-[#f47c57]"
      >
        {question}
        <ArrowDownIcon />
      </label>

      <p className="faq-content text-[#787887] text-xs md:text-sm">{answer}</p>
    </>
  );
}

export default function FaqAccordionCard() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#af67e9] to-[#6565e7] min-h-screen font-kumbh">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="faq-wrapper relative">
        <main className="faq-container">
          <div className="faq-questions px-4 md:px-0 md:m-4 col-start-2 md:py-12">
            <h1 className="font-bold text-3xl mb-6 text-center md:text-left">
              FAQ
            </h1>

            {questions.map((question) => (
              <React.Fragment key={question.id}>
                <QuestionWithAnswer {...question} />

                <div className="w-full border-t text-[#e7e7e9] border-current" />
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
