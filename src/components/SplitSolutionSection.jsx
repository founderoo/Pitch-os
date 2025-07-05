// // // // // // // import React from 'react';
// // // // // // // import {
// // // // // // //   Lightbulb,
// // // // // // //   AlertTriangle,
// // // // // // //   Search,
// // // // // // //   ClipboardCheck,
// // // // // // //   UserX,
// // // // // // //   Star,
// // // // // // //   Sparkles
// // // // // // // } from 'lucide-react';

// // // // // // // export const SplitSolutionSection = () => {
// // // // // // //   const problems = [
// // // // // // //     {
// // // // // // //       icon: <Search className="text-rose-600" />,
// // // // // // //       text: "Don’t know where to start with their pitch.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <AlertTriangle className="text-rose-600" />,
// // // // // // //       text: "Struggle to highlight the problem they solve.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <ClipboardCheck className="text-rose-600" />,
// // // // // // //       text: "Unsure what investors want to hear.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <UserX className="text-rose-600" />,
// // // // // // //       text: "Pitch deck lacks structure and clarity.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <Star className="text-rose-600" />,
// // // // // // //       text: "Find it hard to stand out among other startups.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const solutions = [
// // // // // // //     {
// // // // // // //       icon: <Lightbulb className="text-green-600" />,
// // // // // // //       text: "PitchMasterAI gives you a guided starting point.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <Sparkles className="text-green-600" />,
// // // // // // //       text: "Helps refine your unique value proposition.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <ClipboardCheck className="text-green-600" />,
// // // // // // //       text: "Includes investor-tested pitch frameworks.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <Search className="text-green-600" />,
// // // // // // //       text: "Templates and prompts to build a clear deck.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <Star className="text-green-600" />,
// // // // // // //       text: "Makes your pitch stand out with story-first structure.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section className="bg-background py-20 px-4 md:px-12" id="split-solution">
// // // // // // //       <div className="text-center mb-16">
// // // // // // //   <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// // // // // // //     <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// // // // // // //     Founderoo
// // // // // // //   </div>
// // // // // // //   <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
// // // // // // //   Solution To The Problem
// // // // // // // </h2>

// // // // // // // </div>

// // // // // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
// // // // // // //         {/* Problems Column */}
// // // // // // //         <div>
// // // // // // //           <h3 className="text-sm font-semibold text-muted-foreground mb-2">For Founders</h3>
// // // // // // //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
// // // // // // //             Why pitching feels hard
// // // // // // //           </h2>

// // // // // // //           <ul className="space-y-6">
// // // // // // //             {problems.map((item, idx) => (
// // // // // // //               <li key={idx} className="flex items-start space-x-4">
// // // // // // //                 <div className="p-2 bg-rose-100 rounded-full">{item.icon}</div>
// // // // // // //                 <p className="text-foreground">{item.text}</p>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>

// // // // // // //           <div className="mt-10 flex gap-4">
// // // // // // //             <button className="border px-6 py-2 rounded-full font-medium hover:bg-muted transition">
// // // // // // //               Learn more
// // // // // // //             </button>
// // // // // // //             <button className="bg-foreground text-background px-6 py-2 rounded-full font-medium hover:bg-foreground/90 transition">
// // // // // // //               Get Started
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Solutions Column */}
// // // // // // //         <div className="bg-muted p-8 rounded-xl">
// // // // // // //           <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // // // // //             With PitchMasterAI
// // // // // // //           </h3>
// // // // // // //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
// // // // // // //             How we make it easy
// // // // // // //           </h2>

// // // // // // //           <ul className="space-y-6">
// // // // // // //             {solutions.map((item, idx) => (
// // // // // // //               <li key={idx} className="flex items-start space-x-4">
// // // // // // //                 <div className="p-2 bg-green-100 rounded-full">{item.icon}</div>
// // // // // // //                 <p className="text-foreground">{item.text}</p>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>

// // // // // // //           <div className="mt-10 flex gap-4">
// // // // // // //             <button className="border px-6 py-2 rounded-full font-medium hover:bg-muted transition">
// // // // // // //               Learn more
// // // // // // //             </button>
// // // // // // //             <button className="bg-foreground text-background px-6 py-2 rounded-full font-medium hover:bg-foreground/90 transition">
// // // // // // //               Try Now
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };
// // // // // // import React from "react";
// // // // // // import {
// // // // // //   Lightbulb,
// // // // // //   AlertTriangle,
// // // // // //   Search,
// // // // // //   ClipboardCheck,
// // // // // //   UserX,
// // // // // //   Star,
// // // // // //   Sparkles,
// // // // // // } from "lucide-react";

// // // // // // export const SplitSolutionSection = () => {
// // // // // //   const problems = [
// // // // // //     {
// // // // // //       icon: Search,
// // // // // //       text: "Don’t know where to start with their pitch.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: AlertTriangle,
// // // // // //       text: "Struggle to highlight the problem they solve.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: ClipboardCheck,
// // // // // //       text: "Unsure what investors want to hear.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: UserX,
// // // // // //       text: "Pitch deck lacks structure and clarity.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Star,
// // // // // //       text: "Find it hard to stand out among other startups.",
// // // // // //     },
// // // // // //   ];

// // // // // //   const solutions = [
// // // // // //     {
// // // // // //       icon: Lightbulb,
// // // // // //       text: "PitchMasterAI gives you a guided starting point.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Sparkles,
// // // // // //       text: "Helps refine your unique value proposition.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: ClipboardCheck,
// // // // // //       text: "Includes investor-tested pitch frameworks.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Search,
// // // // // //       text: "Templates and prompts to build a clear deck.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Star,
// // // // // //       text: "Makes your pitch stand out with story-first structure.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section
// // // // // //       className="bg-background pt-20 pb-36 px-4 md:px-12"
// // // // // //       id="split-solution"
// // // // // //     >
// // // // // //       <div className="text-center mb-16">
// // // // // //         <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// // // // // //           <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// // // // // //           Founderoo
// // // // // //         </div>
// // // // // //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
// // // // // //           Solution To The Problem
// // // // // //         </h2>
// // // // // //       </div>

 
// // // // // //           <div className="border border-neutral-300 shadow-lg shadow-black/10 rounded-xl p-8">
// // // // // //   <div className="mb-4 mt-[2.2rem]">
// // // // // //     <h3 className="text-sm font-semibold text-muted-foreground mb-2">For Founders</h3>
// // // // // //     <h2 className="text-3xl md:text-4xl font-bold text-foreground">
// // // // // //       Why pitching feels hard
// // // // // //     </h2>
// // // // // //   </div>

// // // // // //   <div className="mt-[2.5rem]">
// // // // // //     <ul className="space-y-6">
// // // // // //       {problems.map(({ icon: Icon, text }, idx) => (
// // // // // //         <li key={idx} className="flex items-start gap-4">
// // // // // //           <div className="p-2 bg-rose-100 rounded-full">
// // // // // //             <Icon className="h-6 w-6 text-rose-600" />
// // // // // //           </div>
// // // // // //           <p className="text-base text-left text-foreground">{text}</p>
// // // // // //         </li>
// // // // // //       ))}
// // // // // //     </ul>
// // // // // //   </div>
// // // // // // </div>


// // // // // //           <div className="mt-[2.5rem]">
// // // // // //             <ul className="space-y-6">
// // // // // //               {problems.map(({ icon: Icon, text }, idx) => (
// // // // // //                 <li key={idx} className="flex items-start gap-4">
// // // // // //                   <div className="p-2 bg-rose-100 rounded-full">
// // // // // //                     <Icon className="h-6 w-6 text-rose-600" />
// // // // // //                   </div>
// // // // // //                   <p className="text-base text-left text-foreground">{text}</p>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Solutions Column */}
// // // // // //         <div className="bg-muted p-8 rounded-xl">
// // // // // //           <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // // // //             With PitchMasterAI
// // // // // //           </h3>
// // // // // //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
// // // // // //             How we make it easy
// // // // // //           </h2>

// // // // // //           <ul className="space-y-6">
// // // // // //             {solutions.map(({ icon: Icon, text }, idx) => (
// // // // // //               <li key={idx} className="flex items-start gap-4">
// // // // // //                 <div className="p-2 bg-green-100 rounded-full">
// // // // // //                   <Icon className="h-6 w-6 text-green-600" />
// // // // // //                 </div>
// // // // // //                 <p className="text-base text-left text-foreground">{text}</p>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };
// // // // // import React from "react";
// // // // // import {
// // // // //   Lightbulb,
// // // // //   AlertTriangle,
// // // // //   Search,
// // // // //   ClipboardCheck,
// // // // //   UserX,
// // // // //   Star,
// // // // //   Sparkles,
// // // // // } from "lucide-react";

// // // // // export const SplitSolutionSection = () => {
// // // // //   const problems = [
// // // // //     {
// // // // //       icon: Search,
// // // // //       text: "Don’t know where to start with their pitch.",
// // // // //     },
// // // // //     {
// // // // //       icon: AlertTriangle,
// // // // //       text: "Struggle to highlight the problem they solve.",
// // // // //     },
// // // // //     {
// // // // //       icon: ClipboardCheck,
// // // // //       text: "Unsure what investors want to hear.",
// // // // //     },
// // // // //     {
// // // // //       icon: UserX,
// // // // //       text: "Pitch deck lacks structure and clarity.",
// // // // //     },
// // // // //     {
// // // // //       icon: Star,
// // // // //       text: "Find it hard to stand out among other startups.",
// // // // //     },
// // // // //   ];

// // // // //   const solutions = [
// // // // //     {
// // // // //       icon: Lightbulb,
// // // // //       text: "PitchMasterAI gives you a guided starting point.",
// // // // //     },
// // // // //     {
// // // // //       icon: Sparkles,
// // // // //       text: "Helps refine your unique value proposition.",
// // // // //     },
// // // // //     {
// // // // //       icon: ClipboardCheck,
// // // // //       text: "Includes investor-tested pitch frameworks.",
// // // // //     },
// // // // //     {
// // // // //       icon: Search,
// // // // //       text: "Templates and prompts to build a clear deck.",
// // // // //     },
// // // // //     {
// // // // //       icon: Star,
// // // // //       text: "Makes your pitch stand out with story-first structure.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <section
// // // // //       className="bg-background pt-20 pb-36 px-4 md:px-12"
// // // // //       id="split-solution"
// // // // //     >
// // // // //       <div className="text-center mb-16">
// // // // //         <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// // // // //           <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// // // // //           Founderoo
// // // // //         </div>
// // // // //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
// // // // //           Solution To The Problem
// // // // //         </h2>
// // // // //       </div>

// // // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
// // // // //         {/* Problems Column */}
// // // // //         <div className="border border-black/30 shadow-lg shadow-black/10 rounded-xl p-8">
// // // // //           <div className="mb-4 mt-[2.2rem]">
// // // // //             <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // // //               For Founders
// // // // //             </h3>
// // // // //             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
// // // // //               Why pitching feels hard
// // // // //             </h2>
// // // // //           </div>

// // // // //           <div className="mt-[2.5rem]">
// // // // //             <ul className="space-y-6">
// // // // //               {problems.map(({ icon: Icon, text }, idx) => (
// // // // //                 <li key={idx} className="flex items-start gap-4">
// // // // //                   <div className="p-2 bg-rose-100 rounded-full">
// // // // //                     <Icon className="h-6 w-6 text-rose-600" />
// // // // //                   </div>
// // // // //                   <p className="text-base text-left text-foreground">{text}</p>
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Solutions Column */}
// // // // //         <div className="bg-muted p-8 rounded-xl">
// // // // //           <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // // //             With PitchMasterAI
// // // // //           </h3>
// // // // //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
// // // // //             How we make it easy
// // // // //           </h2>

// // // // //           <ul className="space-y-6">
// // // // //             {solutions.map(({ icon: Icon, text }, idx) => (
// // // // //               <li key={idx} className="flex items-start gap-4">
// // // // //                 <div className="p-2 bg-green-100 rounded-full">
// // // // //                   <Icon className="h-6 w-6 text-green-600" />
// // // // //                 </div>
// // // // //                 <p className="text-base text-left text-foreground">{text}</p>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };
// // // // import React from "react";
// // // // import {
// // // //   Lightbulb,
// // // //   AlertTriangle,
// // // //   Search,
// // // //   ClipboardCheck,
// // // //   UserX,
// // // //   Star,
// // // //   Sparkles,
// // // // } from "lucide-react";

// // // // export const SplitSolutionSection = () => {
// // // //   const problems = [
// // // //     {
// // // //       icon: Search,
// // // //       text: "Don’t know where to start with their pitch.",
// // // //     },
// // // //     {
// // // //       icon: AlertTriangle,
// // // //       text: "Struggle to highlight the problem they solve.",
// // // //     },
// // // //     {
// // // //       icon: ClipboardCheck,
// // // //       text: "Unsure what investors want to hear.",
// // // //     },
// // // //     {
// // // //       icon: UserX,
// // // //       text: "Pitch deck lacks structure and clarity.",
// // // //     },
// // // //     {
// // // //       icon: Star,
// // // //       text: "Find it hard to stand out among other startups.",
// // // //     },
// // // //   ];

// // // //   const solutions = [
// // // //     {
// // // //       icon: Lightbulb,
// // // //       text: "PitchMasterAI gives you a guided starting point.",
// // // //     },
// // // //     {
// // // //       icon: Sparkles,
// // // //       text: "Helps refine your unique value proposition.",
// // // //     },
// // // //     {
// // // //       icon: ClipboardCheck,
// // // //       text: "Includes investor-tested pitch frameworks.",
// // // //     },
// // // //     {
// // // //       icon: Search,
// // // //       text: "Templates and prompts to build a clear deck.",
// // // //     },
// // // //     {
// // // //       icon: Star,
// // // //       text: "Makes your pitch stand out with story-first structure.",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section
// // // //       className="bg-background pt-20 pb-36 px-4 md:px-12"
// // // //       id="split-solution"
// // // //     >
// // // //       <div className="text-center mb-16">
// // // //         <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// // // //           <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// // // //           Founderoo
// // // //         </div>
// // // //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
// // // //           Solution To The Problem
// // // //         </h2>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
// // // //         {/* Problems Column */}
// // // //         <div className="border border-neutral-300 shadow-lg shadow-black/10 rounded-xl p-8">
// // // //           <div className="mb-4 mt-[2.2rem]">
// // // //             <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // //               For Founders
// // // //             </h3>
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
// // // //               Why pitching feels hard
// // // //             </h2>
// // // //           </div>

// // // //           <div className="mt-[2.5rem]">
// // // //             <ul className="space-y-6">
// // // //               {problems.map(({ icon: Icon, text }, idx) => (
// // // //                 <li key={idx} className="flex items-start gap-4">
// // // //                   <div className="p-2 bg-rose-100 rounded-full">
// // // //                     <Icon className="h-6 w-6 text-rose-600" />
// // // //                   </div>
// // // //                   <p className="text-base text-left text-foreground">{text}</p>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         </div>

// // // //         {/* Solutions Column */}
// // // //         <div className="bg-muted p-8 rounded-xl">
// // // //           <h3 className="text-sm font-semibold text-muted-foreground mb-2">
// // // //             With PitchMasterAI
// // // //           </h3>
// // // //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
// // // //             How we make it easy
// // // //           </h2>

// // // //           <ul className="space-y-6">
// // // //             {solutions.map(({ icon: Icon, text }, idx) => (
// // // //               <li key={idx} className="flex items-start gap-4">
// // // //                 <div className="p-2 bg-green-100 rounded-full">
// // // //                   <Icon className="h-6 w-6 text-green-600" />
// // // //                 </div>
// // // //                 <p className="text-base text-left text-foreground">{text}</p>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // import {
// // // //   Lightbulb,
// // // //   AlertTriangle,
// // // //   Search,
// // // //   ClipboardCheck,
// // // //   UserX,
// // // //   Star,
// // // //   Sparkles,
// // // // } from "lucide-react";

// // // // export const SplitSolutionSection = () => {
// // // //   const problems = [
// // // //     { icon: Search, text: "Don’t know where to start with their pitch." },
// // // //     { icon: AlertTriangle, text: "Struggle to highlight the problem they solve." },
// // // //     { icon: ClipboardCheck, text: "Unsure what investors want to hear." },
// // // //     { icon: UserX, text: "Pitch deck lacks structure and clarity." },
// // // //     { icon: Star, text: "Find it hard to stand out among other startups." },
// // // //   ];

// // // //   const solutions = [
// // // //     { icon: Lightbulb, text: "PitchMasterAI gives you a guided starting point." },
// // // //     { icon: Sparkles, text: "Helps refine your unique value proposition." },
// // // //     { icon: ClipboardCheck, text: "Includes investor‑tested pitch frameworks." },
// // // //     { icon: Search, text: "Templates and prompts to build a clear deck." },
// // // //     { icon: Star, text: "Makes your pitch stand out with story‑first structure." },
// // // //   ];

// // // //   return (
// // // //     <section className="bg-white pt-20 pb-36 px-4 md:px-12" id="split-solution">
// // // //       <div className="text-center mb-16">
// // // //         <div
// // // //           className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gray-100 text-gray-700 transition-transform duration-500"
// // // //           style={{ display: 'inline-flex', cursor: 'pointer' }}
// // // //           onMouseEnter={e => e.currentTarget.style.transform = 'rotate(360deg)'}
// // // //           onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
// // // //         >
// // // //           <div className="w-2 h-2 rounded-full mr-3 bg-green-500" />
// // // //           Founderoo
// // // //         </div>
// // // //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
// // // //           Solution To The Problem
// // // //         </h2>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
// // // //         {/* Problems Column */}
// // // //         <div className="bg-gray-100 border-[5px] border-[#702D9B] rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
// // // //           <div className="mb-4 mt-6">
// // // //             <h3 className="text-base font-semibold text-gray-700 mb-2">For Founders</h3>
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
// // // //               Why pitching feels hard
// // // //             </h2>
// // // //           </div>
// // // //           <ul className="mt-8 space-y-6 flex-1">
// // // //             {problems.map(({ icon: Icon, text }, idx) => (
// // // //               <li key={idx} className="flex items-start gap-4">
// // // //                 <div className="p-2 bg-[#ede2f5] rounded-full">
// // // //                   <Icon className="h-6 w-6 text-[#702D9B]" />
// // // //                 </div>
// // // //                 <p className="text-lg text-gray-900">{text}</p>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Solutions Column */}
// // // //         <div className="bg-[#702D9B] border-[5px] border-gray-300 rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
// // // //           <div className="mb-4 mt-6">
// // // //             <h3 className="text-base font-semibold text-white mb-2">With PitchMasterAI</h3>
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-white">
// // // //               How we make it easy
// // // //             </h2>
// // // //           </div>
// // // //           <ul className="mt-8 space-y-6 flex-1">
// // // //             {solutions.map(({ icon: Icon, text }, idx) => (
// // // //               <li key={idx} className="flex items-start gap-4">
// // // //                 <div className="p-2 bg-[#ede2f5] rounded-full">
// // // //                   <Icon className="h-6 w-6 text-white" />
// // // //                 </div>
// // // //                 <p className="text-lg text-white">{text}</p>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // // src/components/SplitSoln.jsx

// // // import React, { useEffect } from 'react'
// // // import { Search, AlertTriangle, Lightbulb } from 'lucide-react'
// // // import AOS from 'aos'
// // // import 'aos/dist/aos.css'

// // // const SplitSoln = () => {
// // //   useEffect(() => {
// // //     AOS.init({ once: true })
// // //   }, [])

// // //   return (
// // //     <section className="py-20" id="solution">
// // //       <div className="flex flex-col md:flex-row max-w-7xl mx-auto">

// // //         {/* Left Side - Always White */}
// // //         <div className="w-full md:w-1/2 bg-white text-gray-900 px-6 py-12">
// // //           <div className="text-center mb-12">
// // //             <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-800 bg-[#a0ced9]">
// // //               <div className="w-2 h-2 rounded-full mr-3 bg-[#70d6ff]" />
// // //               Founderoo
// // //             </div>
// // //             <h2 className="text-3xl sm:text-4xl font-bold mt-6">
// // //               Solution To The Problem
// // //             </h2>
// // //           </div>

// // //           <div className="text-center mt-10">
// // //             <button className="px-6 py-3 rounded-full font-medium shadow-sm transition hover:shadow-lg bg-[#70d6ff] text-gray-900 hover:bg-black hover:text-white">
// // //               Try PitchMasterAI
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Right Side - Dark Mode Aware */}
// // //         <div className="w-full md:w-1/2 bg-gray-100 dark:bg-black px-6 py-12">
// // //           <div className="grid sm:grid-cols-1 gap-6">

// // //             <div
// // //               className="rounded-xl p-6 border transition hover:shadow-xl
// // //                          bg-[#ffc09f] border-[#ff9770]
// // //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// // //               data-aos="fade-up"
// // //             >
// // //               <Search className="mx-auto mb-3" size={32} style={{ color: '#ff9770' }} />
// // //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Problem</h3>
// // //               <p className="text-sm text-gray-600 dark:text-gray-300">
// // //                 First‑time founders struggle to pitch their idea to the right people.
// // //               </p>
// // //             </div>

// // //             <div
// // //               className="rounded-xl p-6 border transition hover:shadow-xl
// // //                          bg-[#c1d3fe] border-[#abc4ff]
// // //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// // //               data-aos="fade-up"
// // //               data-aos-delay="100"
// // //             >
// // //               <AlertTriangle className="mx-auto mb-3" size={32} style={{ color: '#7ec4cf' }} />
// // //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Challenge</h3>
// // //               <p className="text-sm text-gray-600 dark:text-gray-300">
// // //                 They don’t know how to structure it or what investors expect.
// // //               </p>
// // //             </div>

// // //             <div
// // //               className="rounded-xl p-6 border transition hover:shadow-xl
// // //                          bg-[#a0ced9] border-[#55d6c2]
// // //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// // //               data-aos="fade-up"
// // //               data-aos-delay="200"
// // //             >
// // //               <Lightbulb className="mx-auto mb-3" size={32} style={{ color: '#55d6c2' }} />
// // //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Solution</h3>
// // //               <p className="text-sm text-gray-600 dark:text-gray-300">
// // //                 PitchMasterAI helps you build the perfect pitch, step‑by‑step.
// // //               </p>
// // //             </div>

// // //           </div>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export  SplitSolutionSection;
// // import React, { useEffect } from 'react'
// // import { Search, AlertTriangle, Lightbulb } from 'lucide-react'
// // import AOS from 'aos'
// // import 'aos/dist/aos.css'

// // const SplitSolutionSection = () => {
// //   useEffect(() => {
// //     AOS.init({ once: true })
// //   }, [])

// //   return (
// //     <section className="py-20" id="solution">
// //       <div className="flex flex-col md:flex-row max-w-7xl mx-auto">

// //         {/* Left Side - Always White */}
// //         <div className="w-full md:w-1/2 bg-white text-gray-900 px-6 py-12">
// //           <div className="text-center mb-12">
// //             <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-800 bg-[#a0ced9]">
// //               <div className="w-2 h-2 rounded-full mr-3 bg-[#70d6ff]" />
// //               Founderoo
// //             </div>
// //             <h2 className="text-3xl sm:text-4xl font-bold mt-6">
// //               Solution To The Problem
// //             </h2>
// //           </div>

// //           <div className="text-center mt-10">
// //             <button className="px-6 py-3 rounded-full font-medium shadow-sm transition hover:shadow-lg bg-[#70d6ff] text-gray-900 hover:bg-black hover:text-white">
// //               Try PitchMasterAI
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Side - Dark Mode Aware */}
// //         <div className="w-full md:w-1/2 bg-gray-100 dark:bg-black px-6 py-12">
// //           <div className="grid sm:grid-cols-1 gap-6">
// //             <div
// //               className="rounded-xl p-6 border transition hover:shadow-xl
// //                          bg-[#ffc09f] border-[#ff9770]
// //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// //               data-aos="fade-up"
// //             >
// //               <Search className="mx-auto mb-3" size={32} style={{ color: '#ff9770' }} />
// //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Problem</h3>
// //               <p className="text-sm text-gray-600 dark:text-gray-300">
// //                 First‑time founders struggle to pitch their idea to the right people.
// //               </p>
// //             </div>

// //             <div
// //               className="rounded-xl p-6 border transition hover:shadow-xl
// //                          bg-[#c1d3fe] border-[#abc4ff]
// //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// //               data-aos="fade-up"
// //               data-aos-delay="100"
// //             >
// //               <AlertTriangle className="mx-auto mb-3" size={32} style={{ color: '#7ec4cf' }} />
// //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Challenge</h3>
// //               <p className="text-sm text-gray-600 dark:text-gray-300">
// //                 They don’t know how to structure it or what investors expect.
// //               </p>
// //             </div>

// //             <div
// //               className="rounded-xl p-6 border transition hover:shadow-xl
// //                          bg-[#a0ced9] border-[#55d6c2]
// //                          dark:bg-[#1f1f1f] dark:border-gray-700"
// //               data-aos="fade-up"
// //               data-aos-delay="200"
// //             >
// //               <Lightbulb className="mx-auto mb-3" size={32} style={{ color: '#55d6c2' }} />
// //               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Solution</h3>
// //               <p className="text-sm text-gray-600 dark:text-gray-300">
// //                 PitchMasterAI helps you build the perfect pitch, step‑by‑step.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// // export default SplitSolutionSection
// import {
//   Lightbulb,
//   AlertTriangle,
//   Search,
//   ClipboardCheck,
//   UserX,
//   Star,
//   Sparkles,
// } from "lucide-react";

// export const SplitSolutionSection = () => {
//   const problems = [
//     { icon: Search, text: "Don’t know where to start with their pitch." },
//     { icon: AlertTriangle, text: "Struggle to highlight the problem they solve." },
//     { icon: ClipboardCheck, text: "Unsure what investors want to hear." },
//     { icon: UserX, text: "Pitch deck lacks structure and clarity." },
//     { icon: Star, text: "Find it hard to stand out among other startups." },
//   ];

//   const solutions = [
//     { icon: Lightbulb, text: "PitchMasterAI gives you a guided starting point." },
//     { icon: Sparkles, text: "Helps refine your unique value proposition." },
//     { icon: ClipboardCheck, text: "Includes investor‑tested pitch frameworks." },
//     { icon: Search, text: "Templates and prompts to build a clear deck." },
//     { icon: Star, text: "Makes your pitch stand out with story‑first structure." },
//   ];

//   return (
//     <section className="bg-white pt-20 pb-36 px-4 md:px-12" id="split-solution">
//       <div className="text-center mb-16">
//         <div
//           className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gray-100 text-gray-700 transition-transform duration-500"
//           style={{ display: 'inline-flex', cursor: 'pointer' }}
//           onMouseEnter={e => e.currentTarget.style.transform = 'rotate(360deg)'}
//           onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
//         >
//           <div className="w-2 h-2 rounded-full mr-3 bg-green-500" />
//           Founderoo
//         </div>
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
//           Solution To The Problem
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
//         {/* Problems Column */}
//         <div className="bg-gray-100 border-[5px] border-[#702D9B] rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
//           <div className="mb-4 mt-6">
//             <h3 className="text-base font-semibold text-gray-700 mb-2">For Founders</h3>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Why pitching feels hard
//             </h2>
//           </div>
//           <ul className="mt-8 space-y-6 flex-1">
//             {problems.map(({ icon: Icon, text }, idx) => (
//               <li key={idx} className="flex items-start gap-4">
//                 <div className="p-2 bg-[#ede2f5] rounded-full">
//                   <Icon className="h-6 w-6 text-[#702D9B]" />
//                 </div>
//                 <p className="text-lg text-gray-900">{text}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Solutions Column */}
//         <div className="bg-[#702D9B] border-[5px] border-gray-300 rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
//           <div className="mb-4 mt-6">
//             <h3 className="text-base font-semibold text-white mb-2">With PitchMasterAI</h3>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               How we make it easy
//             </h2>
//           </div>
//           <ul className="mt-8 space-y-6 flex-1">
//             {solutions.map(({ icon: Icon, text }, idx) => (
//               <li key={idx} className="flex items-start gap-4">
//                 <div className="p-2 bg-[#ede2f5] rounded-full">
//                   <Icon className="h-6 w-6 text-white" />
//                 </div>
//                 <p className="text-lg text-white">{text}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };
import {
  Lightbulb,
  AlertTriangle,
  Search,
  ClipboardCheck,
  UserX,
  Star,
  Sparkles,
} from "lucide-react";

const SplitSolutionSection = () => {
  const problems = [
    { icon: Search, text: "Don’t know where to start with their pitch." },
    { icon: AlertTriangle, text: "Struggle to highlight the problem they solve." },
    { icon: ClipboardCheck, text: "Unsure what investors want to hear." },
    { icon: UserX, text: "Pitch deck lacks structure and clarity." },
    { icon: Star, text: "Find it hard to stand out among other startups." },
  ];

  const solutions = [
    { icon: Lightbulb, text: "PitchMasterAI gives you a guided starting point." },
    { icon: Sparkles, text: "Helps refine your unique value proposition." },
    { icon: ClipboardCheck, text: "Includes investor‑tested pitch frameworks." },
    { icon: Search, text: "Templates and prompts to build a clear deck." },
    { icon: Star, text: "Makes your pitch stand out with story‑first structure." },
  ];

  return (
    <section className="bg-white dark:bg-black pt-20 pb-36 px-4 md:px-12" id="split-solution">
      <div className="text-center mb-16">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-transform duration-500"
          style={{ display: 'inline-flex', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'rotate(360deg)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
        >
          <div className="w-2 h-2 rounded-full mr-3 bg-green-500" />
          Founderoo
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Solution To The Problem
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Problems Column - White in light mode, black in dark */}
        <div className="bg-gray-100 dark:bg-[#111111] border-[5px] border-[#702D9B] rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="mb-4 mt-6">
            <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">For Founders</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why pitching feels hard
            </h2>
          </div>
          <ul className="mt-8 space-y-6 flex-1">
            {problems.map(({ icon: Icon, text }, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="p-2 bg-[#ede2f5] dark:bg-[#3b2a4e] rounded-full">
                  <Icon className="h-6 w-6 text-[#702D9B] dark:text-[#caa8f5]" />
                </div>
                <p className="text-lg text-gray-900 dark:text-gray-200">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Column - Purple in light mode, white in dark */}
        <div className="bg-[#702D9B] dark:bg-white border-[5px] border-gray-300 dark:border-gray-700 rounded-2xl p-10 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="mb-4 mt-6">
            <h3 className="text-base font-semibold text-white dark:text-gray-700 mb-2">With PitchMasterAI</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900">
              How we make it easy
            </h2>
          </div>
          <ul className="mt-8 space-y-6 flex-1">
            {solutions.map(({ icon: Icon, text }, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="p-2 bg-[#ede2f5] dark:bg-[#e8e4f0] rounded-full">
                  <Icon className="h-6 w-6 text-white dark:text-[#702D9B]" />
                </div>
                <p className="text-lg text-white dark:text-gray-800">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SplitSolutionSection;
