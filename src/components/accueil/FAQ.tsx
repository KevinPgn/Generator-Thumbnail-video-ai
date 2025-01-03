import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "How does the AI thumbnail generation work?",
      answer: "Our AI analyzes your video content and generates optimized thumbnails using advanced machine learning algorithms. It considers factors like composition, color theory, and viewer engagement patterns to create eye-catching thumbnails that drive clicks.",
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 2 thumbnail generations, basic AI features, 720p export quality, and access to our community support. It's perfect for trying out our service and seeing the results firsthand.",
    },
    {
      question: "Can I customize the generated thumbnails?",
      answer: "Yes! Pro users can customize their thumbnails with branding elements, custom text, and different styles. You can also generate multiple variations and choose the one that best fits your content.",
    },
    {
      question: "How many thumbnails can I generate with the Pro plan?",
      answer: "With the Pro plan, you get unlimited thumbnail generations. This means you can create as many thumbnails as you need for all your videos without any restrictions.",
    },
    {
      question: "What image quality do you support?",
      answer: "Free users can export thumbnails in 720p quality, while Pro users get access to 4K resolution exports, ensuring your thumbnails look crisp and professional across all platforms.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your Pro subscription at any time. There are no long-term commitments, and you'll continue to have access to Pro features until the end of your billing period.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Everything you need to know about our AI thumbnail generator
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 md:mt-12 lg:mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 