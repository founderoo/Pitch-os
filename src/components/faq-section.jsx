
















"use client";
import * as React from "react";
import { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-xl p-1 text-gray-600 bg-white/50 backdrop-blur-sm border border-purple-200 shadow-md shadow-purple-200/30",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-500 data-[state=active]:text-gray-800 data-[state=active]:font-semibold data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 hover:bg-purple-50 hover:text-purple-700",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const improvedGeneralFAQs = [
  {
    id: "what-is-pitchos",
    question: "What is PitchOS and describe its goal ?",
    answer:
      "PitchOS is an AI-powered platform that helps entrepreneurs and startups create impressive pitch decks quickly and smartly. It streamlines your fundraising journey by generating compelling presentations with minimal effort.",
  },
  {
    id: "pricing-plan",
    question: "What are the pricing plans?",
    answer:
      "You can start using PitchOS for free (₹0) with core features. For advanced tools and enhanced support, upgrade to the Pro plan at just ₹499/month.",
  },
  {
    id: "mobile-compatible",
    question: "Is PitchOS available for both mobile and desktop?",
    answer:
      "Yes! PitchOS works seamlessly on both desktop and mobile devices, so you can create and edit your pitch deck anywhere.",
  },
  {
    id: "customer-support",
    question: "What kind of customer support do you offer?",
    answer:
      "We provide 24/7 chatbot support, so you can get instant assistance whenever you need it.",
  },
  {
    id: "is-it-for-beginner",
    question: "Is PitchOS suitable for beginners?",
    answer:
      "Absolutely! We provide beginner-friendly resources, mentorship, and an AI-powered pitch generator to make the pitching process easy for everyone.",
  },
];

const FAQ_SECTIONS = {
  general: {
    category: "General",
    items: improvedGeneralFAQs,
  },
  technical: {
    category: "Technical",
    items: [
      {
        id: "tech-requirements",
        question: "What kind of technical requirements does PitchOS have? Do I need special software?",
        answer:
          "PitchOS is a cloud-based platform, so you don't need to install any special software. Access it directly via any modern web browser with a stable internet connection.",
      },
      {
        id: "data-security-privacy",
        question: "How does PitchOS ensure the security and privacy of my pitch data?",
        answer:
          "Your data's security is paramount. We use industry-standard encryption in transit and at rest, and have robust authentication and strict privacy policies.",
      },
      {
        id: "technical-support",
        question: "What kind of technical support can I expect if I encounter an issue?",
        answer:
          "You can reach our support team via help desk or email. We provide assistance with navigation, troubleshooting, and general guidance.",
      },
      {
        id: "feature-updates",
        question: "How often does PitchOS get updated?",
        answer:
          "We regularly roll out updates with new features, AI improvements and performance enhancements – so you'll always have the latest tools!",
      },
      {
        id: "api-integrations",
        question: "Is there API or integration for PitchOS?",
        answer:
          "We're planning API access and integration features soon, to help you connect PitchOS with your workflows. Stay tuned!",
      },
    ],
  },
};

const FAQAccordion = ({ items }) => (
  <div className="space-y-6">
    <div className="bg-white/50 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg shadow-purple-200/30 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        {items.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={`border-b border-purple-200/50 last:border-b-0 ${index % 2 === 0 ? "bg-white/30" : "bg-transparent"}`}
          >
            <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-gray-700 hover:text-purple-700 transition-colors duration-300 font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export const Component = () => {
  const [activeView, setActiveView] = useState("general");

  return (
    <div
      id="faq"
      className="w-full py-20 lg:py-40 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50"
      style={{ backgroundColor: "#F5F2E8" }}
    >
     
      <div
        aria-hidden
        className="z-[1] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block"
      >
        <div className="w-[30rem] h-[70rem] -translate-y-[300px] absolute left-1/4 top-0 -rotate-12 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-[2]">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-700">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </header>

      
        <div className="flex justify-center sticky top-2 mb-8 z-[3]">
          <Tabs
            defaultValue="general"
            onValueChange={(value) => setActiveView(value)}
            className="max-w-xl"
          >
            <TabsList className="w-full justify-center">
              <TabsTrigger value="general">General FAQs</TabsTrigger>
              <TabsTrigger value="technical">Technical FAQs</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeView && FAQ_SECTIONS[activeView] ? (
          <FAQAccordion items={FAQ_SECTIONS[activeView].items} />
        ) : (
          <div className="text-center bg-white/50 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg shadow-purple-200/30 p-8">
            <p className="text-gray-600">No FAQs found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
