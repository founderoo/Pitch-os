// // // "use client";
// // // import * as React from "react";
// // // import { useState } from "react";
// // // import * as TabsPrimitive from "@radix-ui/react-tabs";
// // // import { cn } from "@/lib/utils";
// // // import {
// // //   Accordion,
// // //   AccordionContent,
// // //   AccordionItem,
// // //   AccordionTrigger,
// // // } from "@/components/ui/accordion";
// // // import { Badge } from "@/components/ui/badge";

// // // // These are your shadcn/ui components for Tabs
// // // const Tabs = TabsPrimitive.Root;

// // // const TabsList = React.forwardRef(({ className, ...props }, ref) => (
// // //   <TabsPrimitive.List
// // //     ref={ref}
// // //     className={cn(
// // //       "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
// // //       className
// // //     )}
// // //     {...props} />
// // // ));
// // // TabsList.displayName = TabsPrimitive.List.displayName;

// // // const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
// // //   <TabsPrimitive.Trigger
// // //     ref={ref}
// // //     className={cn(
// // //       "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:text-foreground",
// // //       className
// // //     )}
// // //     {...props} />
// // // ));
// // // TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// // // const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
// // //   <TabsPrimitive.Content
// // //     ref={ref}
// // //     className={cn(
// // //       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
// // //       className
// // //     )}
// // //     {...props} />
// // // ));
// // // TabsContent.displayName = TabsPrimitive.Content.displayName;

// // // // Consolidated FAQ_SECTIONS to only include the 'technical' category for PitchOS
// // // const FAQ_SECTIONS = {
// // //   technical: {
// // //     category: "Technical",
// // //     items: [
// // //       {
// // //         id: "tech-requirements",
// // //         question: "What kind of technical requirements does PitchOS have? Do I need special software?",
// // //         answer:
// // //           "PitchOS is a cloud-based platform, so you won't need to install any special software. You can access it directly through your web browser on any modern device (desktop, laptop, tablet, or smartphone). A stable internet connection is all you need to get the most out of our service.",
// // //       },
// // //       {
// // //         id: "data-security-privacy",
// // //         question: "How does PitchOS ensure the security and privacy of my pitch data?",
// // //         answer:
// // //           "We prioritize the security and confidentiality of your sensitive pitch data. PitchOS employs industry-standard encryption protocols for data in transit and at rest. Access to your account is secured through robust authentication methods, and we adhere to strict privacy policies to ensure your intellectual property remains yours.",
// // //       },
// // //       {
// // //         id: "technical-support",
// // //         question: "What kind of technical support can I expect if I encounter an issue?",
// // //         answer:
// // //           "Our team is here to help! If you encounter any technical difficulties, you can reach out to our support team through our dedicated help desk or email. We offer assistance with platform navigation, troubleshooting common issues, and general guidance to ensure a smooth experience with PitchOS.",
// // //       },
// // //       {
// // //         id: "feature-updates",
// // //         question: "How often does PitchOS get updated with new features or improvements?",
// // //         answer:
// // //           "We're continuously working to enhance PitchOS with new features, AI model improvements, and performance optimizations. Updates are rolled out regularly to ensure you always have access to the latest tools and a cutting-edge experience. We strive for a seamless update process that won't disrupt your workflow.",
// // //       },
// // //       {
// // //         id: "api-integrations",
// // //         question: "Is there an API or any integration capabilities for PitchOS down the line?",
// // //         answer:
// // //           "While not fully launched yet, we are actively exploring and planning API access and various integration possibilities for PitchOS. Our goal is to enable seamless connections with other tools and workflows in the future, providing more flexibility and automation for our users. Stay tuned for updates on our development roadmap!",
// // //       },
// // //     ],
// // //   },
// // // };

// // // // Component to render an Accordion for a given FAQ category
// // // const FAQAccordion = ({ category, items }) => (
// // //   <div className="">
// // //     <Badge variant={"outline"} className="py-2 px-6 rounded-md">
// // //       {category}
// // //     </Badge>
// // //     <Accordion type="single" collapsible className="w-full">
// // //       {items.map((faq) => (
// // //         <AccordionItem key={faq.id} value={faq.id}>
// // //           <AccordionTrigger className="text-left hover:no-underline">
// // //             {faq.question}
// // //           </AccordionTrigger>
// // //           <AccordionContent>{faq.answer}</AccordionContent>
// // //         </AccordionItem>
// // //       ))}
// // //     </Accordion>
// // //   </div>
// // // );

// // // // Main FAQ Component
// // // export const Component = () => {
// // //   // Initialize activeView to 'technical' as it's the only category now
// // //   const [activeView, setActiveView] = useState("technical");

// // //   return (
// // //     <div id="faq" className="container mx-auto px-4 py-16 max-w-4xl">
// // //       <header className="text-center mb-12">
// // //         <p className="text-sm font-medium text-primary mb-2">FAQs</p>
// // //         <h1 className="text-4xl font-bold tracking-tight mb-4">
// // //           Frequently asked questions
// // //         </h1>
// // //         <p className="text-xl text-muted-foreground">
// // //           Need help with something? Here are our most frequently asked
// // //           questions.
// // //         </p>
// // //       </header>
// // //       <div className="flex justify-center sticky top-2">
// // //         <Tabs
// // //           // Set defaultValue to 'technical' to ensure the correct tab is active on load
// // //           defaultValue="technical"
// // //           // In this setup, onValueChange isn't strictly necessary as there's only one tab,
// // //           // but it's kept for future expansion if more categories are added.
// // //           onValueChange={(value) => setActiveView(value)}
// // //           className="mb-8 max-w-xl border rounded-xl bg-background">
// // //           <TabsList className="w-full justify-center h-12 p-1">
// // //             {/* Only the 'Technical FAQs' tab is rendered */}
// // //             <TabsTrigger value="technical">Technical FAQs</TabsTrigger>
// // //           </TabsList>
// // //         </Tabs>
// // //       </div>
// // //       {/* Conditionally render FAQAccordion:
// // //           It will always render the 'technical' category as activeView is initialized to 'technical'
// // //           and FAQ_SECTIONS.technical exists. */}
// // //       {activeView && FAQ_SECTIONS[activeView] ? (
// // //         <FAQAccordion
// // //           category={FAQ_SECTIONS[activeView].category}
// // //           items={FAQ_SECTIONS[activeView].items}
// // //         />
// // //       ) : (
// // //         // This fallback text will generally not be shown in this configuration
// // //         // unless 'activeView' somehow becomes invalid or FAQ_SECTIONS is empty.
// // //         <p className="text-center text-muted-foreground">No FAQs found for this category.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };
// // "use client";
// // import * as React from "react";
// // import { useState } from "react";
// // import * as TabsPrimitive from "@radix-ui/react-tabs";
// // import { cn } from "@/lib/utils";
// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";

// // const Tabs = TabsPrimitive.Root;

// // const TabsList = React.forwardRef(({ className, ...props }, ref) => (
// //   <TabsPrimitive.List
// //     ref={ref}
// //     className={cn(
// //       "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
// //       className
// //     )}
// //     {...props}
// //   />
// // ));
// // TabsList.displayName = TabsPrimitive.List.displayName;

// // const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
// //   <TabsPrimitive.Trigger
// //     ref={ref}
// //     className={cn(
// //       "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:text-foreground",
// //       className
// //     )}
// //     {...props}
// //   />
// // ));
// // TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// // const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
// //   <TabsPrimitive.Content
// //     ref={ref}
// //     className={cn(
// //       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
// //       className
// //     )}
// //     {...props}
// //   />
// // ));
// // TabsContent.displayName = TabsPrimitive.Content.displayName;

// // const FAQ_SECTIONS = {
// //   technical: {
// //     items: [
// //       {
// //         id: "what-to-bring",
// //         question: "What do I need to bring to take out finance on my chosen car?",
// //         answer:
// //           "You'll need a valid ID (e.g., driver’s license), proof of income, proof of address, and any other documents required by the lender. Contact us to confirm the exact list.",
// //       },
// //       {
// //         id: "pre-approval",
// //         question: "Can I get pre-approved for finance?",
// //         answer:
// //           "Yes, pre-approval is available. It helps you understand your budget and speeds up the process when you're ready to buy.",
// //       },
// //       {
// //         id: "negotiate",
// //         question: "Does Carbase negotiate on price?",
// //         answer:
// //           "Carbase vehicles are priced competitively with no-haggle pricing to ensure a fair deal for everyone.",
// //       },
// //       {
// //         id: "payment-methods",
// //         question: "What are our payment methods?",
// //         answer:
// //           "We accept major debit and credit cards, bank transfers, and financing options. Please check with our team for full details.",
// //       },
// //       {
// //         id: "third-party-lenders",
// //         question: "Do we accept 3rd party finance lenders?",
// //         answer:
// //           "Yes, we do accept third-party finance. Make sure your lender contacts us beforehand to arrange the necessary steps.",
// //       },
// //     ],
// //   },
// // };

// // const FAQAccordion = ({ items }) => (
// //   <div className="p-6 bg-[#F5F0FF] rounded-xl shadow-sm">
// //     <Accordion type="single" collapsible className="w-full space-y-4">
// //       {items.map((faq) => (
// //         <AccordionItem
// //           key={faq.id}
// //           value={faq.id}
// //           className="bg-white rounded-md px-4 py-3 shadow-sm border hover:border-gray-300 transition-all">
// //           <AccordionTrigger className="text-left font-medium text-base text-gray-800 hover:no-underline">
// //             {faq.question}
// //           </AccordionTrigger>
// //           <AccordionContent className="text-sm text-gray-600 pt-2">
// //             {faq.answer}
// //           </AccordionContent>
// //         </AccordionItem>
// //       ))}
// //     </Accordion>
// //   </div>
// // );

// // export const Component = () => {
// //   const [activeView, setActiveView] = useState("technical");

// //   return (
// //     <div id="faq" className="container mx-auto px-4 py-16 max-w-4xl">
// //       <header className="text-center mb-12">
// //         <p className="text-sm font-medium text-primary mb-2">FAQs</p>
// //         <h1 className="text-4xl font-bold tracking-tight mb-4">
// //           Frequently asked questions
// //         </h1>
// //         <p className="text-xl text-muted-foreground">
// //           Need help with something? Here are our most frequently asked questions.
// //         </p>
// //       </header>
// //       <div className="flex justify-center sticky top-2">
// //         <Tabs
// //           defaultValue="technical"
// //           onValueChange={(value) => setActiveView(value)}
// //           className="mb-8 max-w-xl border rounded-xl bg-background">
// //           <TabsList className="w-full justify-center h-12 p-1">
// //             <TabsTrigger value="technical">FAQs</TabsTrigger>
// //           </TabsList>
// //         </Tabs>
// //       </div>
// //       {activeView && FAQ_SECTIONS[activeView] ? (
// //         <FAQAccordion items={FAQ_SECTIONS[activeView].items} />
// //       ) : (
// //         <p className="text-center text-muted-foreground">No FAQs found for this category.</p>
// //       )}
// //     </div>
// //   );
// // };
// "use client";
// import * as React from "react";
// import { useState } from "react";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { cn } from "@/lib/utils";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const Tabs = TabsPrimitive.Root;

// const TabsList = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsList.displayName = TabsPrimitive.List.displayName;

// const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "relative inline-block uppercase font-medium text-sm px-6 py-3 rounded-full bg-white text-black transition-all duration-200 ease-in-out",
//       "hover:-translate-y-[3px] hover:shadow-lg active:translate-y-[-1px] active:shadow-md",
//       "after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-[#D1FADF] after:z-[-1] after:transition-all after:duration-500 after:scale-100 after:opacity-100",
//       "hover:after:scale-[1.4] hover:after:opacity-0",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsContent.displayName = TabsPrimitive.Content.displayName;

// const FAQ_SECTIONS = {
//   technical: {
//     items: [
//       {
//         id: "tech-requirements",
//         question: "What kind of technical requirements does PitchOS have? Do I need special software?",
//         answer:
//           "PitchOS is a cloud-based platform, so you won't need to install any special software. You can access it directly through your web browser on any modern device (desktop, laptop, tablet, or smartphone). A stable internet connection is all you need to get the most out of our service.",
//       },
//       {
//         id: "data-security-privacy",
//         question: "How does PitchOS ensure the security and privacy of my pitch data?",
//         answer:
//           "We prioritize the security and confidentiality of your sensitive pitch data. PitchOS employs industry-standard encryption protocols for data in transit and at rest. Access to your account is secured through robust authentication methods, and we adhere to strict privacy policies to ensure your intellectual property remains yours.",
//       },
//       {
//         id: "technical-support",
//         question: "What kind of technical support can I expect if I encounter an issue?",
//         answer:
//           "Our team is here to help! If you encounter any technical difficulties, you can reach out to our support team through our dedicated help desk or email. We offer assistance with platform navigation, troubleshooting common issues, and general guidance to ensure a smooth experience with PitchOS.",
//       },
//       {
//         id: "feature-updates",
//         question: "How often does PitchOS get updated with new features or improvements?",
//         answer:
//           "We're continuously working to enhance PitchOS with new features, AI model improvements, and performance optimizations. Updates are rolled out regularly to ensure you always have access to the latest tools and a cutting-edge experience. We strive for a seamless update process that won't disrupt your workflow.",
//       },
//       {
//         id: "api-integrations",
//         question: "Is there an API or any integration capabilities for PitchOS down the line?",
//         answer:
//           "While not fully launched yet, we are actively exploring and planning API access and various integration possibilities for PitchOS. Our goal is to enable seamless connections with other tools and workflows in the future, providing more flexibility and automation for our users. Stay tuned for updates on our development roadmap!",
//       },
//     ],
//   },
// };

// const FAQAccordion = ({ items }) => (
//   <div className="p-6 bg-[#F5F0FF] rounded-xl shadow-sm">
//     <Accordion type="single" collapsible className="w-full space-y-4">
//       {items.map((faq) => (
//         <AccordionItem
//           key={faq.id}
//           value={faq.id}
//           className="bg-white rounded-md px-4 py-3 shadow-sm border hover:border-gray-300 transition-all"
//         >
//           <AccordionTrigger className="text-left font-medium text-base text-gray-800 hover:no-underline">
//             {faq.question}
//           </AccordionTrigger>
//           <AccordionContent className="text-sm text-gray-600 pt-2">
//             {faq.answer}
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   </div>
// );

// export const Component = () => {
//   const [activeView, setActiveView] = useState("technical");

//   return (
//     <div id="faq" className="container mx-auto px-4 py-16 max-w-4xl">
//       <header className="text-center mb-12">
//         <p className="text-sm font-medium text-primary mb-2">FAQs</p>
//         <h1 className="text-4xl font-bold tracking-tight mb-4 flex flex-wrap justify-center gap-2 text-center">
//           <span className="bg-[#76B900] text-white px-3 py-1 rounded-lg">Frequently</span>
//           <span className="bg-white text-black px-3 py-1 rounded-lg border">asked</span>
//           <span className="bg-black text-white px-3 py-1 rounded-lg border">questions</span>
//         </h1>
//         <p className="text-xl text-muted-foreground">
//           Need help with something? Here are our most frequently asked questions.
//         </p>
//       </header>
//       <div className="flex justify-center sticky top-2">
//         <Tabs
//           defaultValue="technical"
//           onValueChange={(value) => setActiveView(value)}
//           className="mb-8 max-w-xl border rounded-xl bg-background"
//         >
//           <TabsList className="w-full justify-center h-12 p-1">
//             <TabsTrigger value="technical">Technical FAQs</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </div>
//       {activeView && FAQ_SECTIONS[activeView] ? (
//         <FAQAccordion items={FAQ_SECTIONS[activeView].items} />
//       ) : (
//         <p className="text-center text-muted-foreground">No FAQs found for this category.</p>
//       )}
//     </div>
//   );
// };
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
      "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
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
      "relative inline-block uppercase font-medium text-sm px-6 py-3 rounded-full bg-white text-black transition-all duration-200 ease-in-out",
      "hover:-translate-y-[3px] hover:shadow-lg active:translate-y-[-1px] active:shadow-md",
      "after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-white after:z-[-1] after:transition-all after:duration-500 after:scale-100 after:opacity-100",
      "hover:after:scale-[1.4] hover:after:opacity-0",
      "dark:bg-[#2a2a2a] dark:text-white dark:after:bg-[#2a2a2a]",
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
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const FAQ_SECTIONS = {
  technical: {
    items: [
      {
        id: "tech-requirements",
        question:
          "What kind of technical requirements does PitchOS have? Do I need special software?",
        answer:
          "PitchOS is a cloud-based platform, so you won't need to install any special software. You can access it directly through your web browser on any modern device (desktop, laptop, tablet, or smartphone). A stable internet connection is all you need to get the most out of our service.",
      },
      {
        id: "data-security-privacy",
        question: "How does PitchOS ensure the security and privacy of my pitch data?",
        answer:
          "We prioritize the security and confidentiality of your sensitive pitch data. PitchOS employs industry-standard encryption protocols for data in transit and at rest. Access to your account is secured through robust authentication methods, and we adhere to strict privacy policies to ensure your intellectual property remains yours.",
      },
      {
        id: "technical-support",
        question: "What kind of technical support can I expect if I encounter an issue?",
        answer:
          "Our team is here to help! If you encounter any technical difficulties, you can reach out to our support team through our dedicated help desk or email. We offer assistance with platform navigation, troubleshooting common issues, and general guidance to ensure a smooth experience with PitchOS.",
      },
      {
        id: "feature-updates",
        question: "How often does PitchOS get updated with new features or improvements?",
        answer:
          "We're continuously working to enhance PitchOS with new features, AI model improvements, and performance optimizations. Updates are rolled out regularly to ensure you always have access to the latest tools and a cutting-edge experience. We strive for a seamless update process that won't disrupt your workflow.",
      },
      {
        id: "api-integrations",
        question: "Is there an API or any integration capabilities for PitchOS down the line?",
        answer:
          "While not fully launched yet, we are actively exploring and planning API access and various integration possibilities for PitchOS. Our goal is to enable seamless connections with other tools and workflows in the future, providing more flexibility and automation for our users. Stay tuned for updates on our development roadmap!",
      },
    ],
  },
};

const FAQAccordion = ({ items }) => (
  <div className="p-6 rounded-xl shadow-sm bg-[#F5F0FF] dark:bg-[#1e1e1e] transition-colors">
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="bg-white dark:bg-[#2a2a2a] text-black dark:text-white rounded-md px-4 py-3 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          <AccordionTrigger className="text-left font-medium text-base hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-600 dark:text-gray-300 pt-2">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export const Component = () => {
  const [activeView, setActiveView] = useState("technical");

  return (
    <div id="faq" className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-2">FAQs</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex flex-wrap justify-center gap-2 text-center">
          <span className="bg-[#702D9B] text-white px-3 py-1 rounded-lg">Frequently</span>
          <span className="bg-white text-black dark:bg-[#2a2a2a] dark:text-white px-3 py-1 rounded-lg border dark:border-white">
            asked
          </span>
          <span className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-lg border dark:border-black">
            questions
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Need help with something? Here are our most frequently asked questions.
        </p>
      </header>

      <div className="flex justify-center sticky top-2">
        <Tabs
          defaultValue="technical"
          onValueChange={(value) => setActiveView(value)}
          className="mb-8 max-w-xl border rounded-xl bg-background"
        >
          <TabsList className="w-full justify-center h-12 p-1">
            <TabsTrigger value="technical">Technical FAQs</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {activeView && FAQ_SECTIONS[activeView] ? (
        <FAQAccordion items={FAQ_SECTIONS[activeView].items} />
      ) : (
        <p className="text-center text-muted-foreground">No FAQs found for this category.</p>
      )}
    </div>
  );
};
