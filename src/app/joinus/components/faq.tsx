'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'Can I drive with swift in my city?',
    answer: 'swift is available in numerous cities across the world. Check our cities page to see if we are operating in your location.'
  },
  {
    question: 'How do I register to drive with swift?',
    answer: 'Registration is simple and can be completed online. Just fill in your details and upload the required documents.'
  },
  {
    question: 'Do I need a car to drive with swift?',
    answer: 'While many drivers use their own cars, we can also connect you with fleet partners if you need a vehicle.'
  },
  {
    question: 'Do I need a smartphone to drive with swift?',
    answer: 'Yes, you will need a smartphone to use the swift Driver app. The app works with most modern Android and iOS devices.'
  },
  {
    question: 'Is driving with swift a good side hustle?',
    answer: 'Yes! Many drivers choose swift as a flexible way to earn extra income alongside their main job.'
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently asked questions from drivers
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}