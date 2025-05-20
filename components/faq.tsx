"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import * as animationData from "../public/animation/faq_animation.json";

const faqs = [
  {
    question: "How accurate is the spam detection?",
    answer:
      "The AI is trained on real-world spam datasets. It's fast and highly accurate but always use judgment.",
  },
  {
    question: "Do you store or log my messages?",
    answer:
      "Nope. We process your text on-the-fly. Nothing is saved or shared — ever.",
  },
  {
    question: "Can I check WhatsApp or Telegram messages?",
    answer:
      "Yep. Just paste any message — email, SMS, WhatsApp, anything. It all works.",
  },
  {
    question: "What happens after I click 'Check'?",
    answer:
      "Your message is sent to our FastAPI backend. A trained ML model evaluates it and sends back the result.",
  },
  {
    question: "Is it free to use?",
    answer:
      "100%. This is a free demo — no logins, no fees, no spam (ironically).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center ">
      <DotLottieReact
        data={animationData}
        autoplay
        loop
        className="size-48 md:size-60 self-center  object-cover"
      />

      <div className="w-full md:w-2/3 mt-4 flex flex-col items-center md:items-start md:mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Frequently Asked <span className="text-[#6A93CC]">Questions</span> ?
        </h2>
        <div className="w-full mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 md:p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium text-base text-gray-800">
                {faq.question}
              </h3>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 mt-2 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
