import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What's your hiring process like?",
      answer: "Our hiring process typically includes an initial screening, technical assessment, and team interviews. We aim to be transparent and provide feedback throughout the process."
    },
    {
      question: "Do you offer relocation assistance?",
      answer: "Yes, we offer competitive relocation packages for roles that require on-site presence. This includes moving expenses and temporary housing assistance."
    },
    {
      question: "What's your remote work policy?",
      answer: "We embrace a flexible work environment. Most roles are remote-friendly, with options for hybrid arrangements based on team and project needs."
    },
    {
      question: "How do you support professional growth?",
      answer: "We provide learning budgets, mentorship programs, and regular opportunities for skill development and career advancement."
    },
    {
      question: "What's your company culture like?",
      answer: "We foster an inclusive, collaborative environment where innovation thrives. Our culture emphasizes work-life balance, continuous learning, and mutual respect."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-section-normal">
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-container-normal">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item-normal">
            <button
              className="faq-question-normal"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="faq-icon-normal" />
              ) : (
                <ChevronDown className="faq-icon-normal" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="faq-answer-normal">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
