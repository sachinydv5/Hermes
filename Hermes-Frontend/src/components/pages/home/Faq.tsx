
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of our homepage. Fill in your details including your name, email address, and password. Once submitted, you'll receive a confirmation email. Click the link in the email to verify your account and you're all set!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments. All transactions are secured with industry-standard encryption.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "If you've forgotten your password, click on the 'Login' button and then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our service, you can request a refund within 30 days of your purchase. Please contact our support team through the 'Contact Us' page to initiate the refund process.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through by sending an email to vivarent.us@gmail.com. We typically respond to email inquiries within 24 hours.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F6EBDA] rounded-lg shadow-md overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex === index ? "transform rotate-180" : "",
                  )}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "px-6 overflow-hidden transition-all duration-200 ease-in-out  bg-white",
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0",
                )}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-600">Still have questions?</p>
          <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Contact Support
          </button>
        </div> */}
      </div>
    </div>
  )
}
