// // import React from 'react';
// // import { Search, Lightbulb } from 'lucide-react';

// // export const SolutionsSection = () => {
// //   const solution = {
// //     id: 1,
// //     problem: {
// //       title: "Pitch in the right way, The Winning Way !",
// //       description: "First time founders find it difficult to make the right pitch to the right people."
// //     },
// //     solution: {
// //       title: "PitchMaster",
// //       description: "Our very own PitchMasterAI will help and guid you from creating the perfect winner pitch -- to getting funded."
// //     }
// //   };

// //   return (
// //     <div id="solution" className="bg-background transition-colors duration-300">
// //       <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-16 md:pt-20 md:pb-20 max-w-7xl">
// //         {/* Header */}
// //         <div className="text-center mb-12 md:mb-20">
// //           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// //             <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// //             Founderoo
// //           </div>
// //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800 dark:text-white">
// //             Solution To The Problem
// //           </h1>
// //         </div>

// //         {/* Single Solution Row */}
// //         {/* Changed gap to vertical gap-y-12 for better stacking on mobile */}
// //         <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
// //           {/* Left Side - Problem */}
// //           {/* Main flex container for problem section:
// //               - flex-col for stacking on mobile (default)
// //               - md:flex-row for side-by-side on medium screens and up
// //               - items-start for aligning content at the top when stacked, or center if preferred
// //               - space-y-6 md:space-y-0 adds vertical gap when stacked, removes horizontal gap on larger screens
// //               - md:space-x-8 adds horizontal gap on medium screens and up
// //           */}
// //           <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
// //             {/* Problem Card:
// //                 - order-1 on mobile (card first)
// //                 - md:order-2 on medium screens (card second, aligned right)
// //                 - w-full on mobile, ensures card takes full width
// //                 - max-w-xs or max-w-sm to control maximum width on mobile if w-full is too wide
// //             */}
// //             <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-muted border border-border order-1 md:order-2">
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="p-3 rounded-full bg-background">
// //                   <Search className="h-6 w-6 text-foreground" />
// //                 </div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-md font-medium mb-2 text-gray-700 dark:text-neutral-300">
// //                   Problem
// //                 </div>
// //                 <div className="text-3xl font-light text-gray-900 dark:text-white">
// //                   01
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Problem Text:
// //                 - order-2 on mobile (text second)
// //                 - md:order-1 on medium screens (text first, aligned left)
// //                 - text-center on mobile, md:text-left on larger screens
// //             */}
// //             <div className="flex-1 text-center md:text-left order-2 md:order-1">
// //               <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800 dark:text-white">
// //                 {solution.problem.title}
// //               </h3>
// //               <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-300">
// //                 {solution.problem.description}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right Side - Solution */}
// //           {/* Main flex container for solution section:
// //               - flex-col for stacking on mobile (default)
// //               - md:flex-row for side-by-side on medium screens and up
// //               - items-start for aligning content at the top when stacked
// //               - space-y-6 md:space-y-0 adds vertical gap when stacked, removes horizontal gap on larger screens
// //               - md:space-x-8 adds horizontal gap on medium screens and up
// //           */}
// //           <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
// //             {/* Solution Card:
// //                 - order-1 on mobile (card first)
// //                 - md:order-1 on medium screens (card first, aligned left)
// //                 - w-full on mobile, max-w-xs to control width
// //             */}
// //             <div className="rounded-3xl p-6 sm:p-8 w-full max-w-xs mx-auto md:w-64 flex-shrink-0 bg-primary text-primary-foreground border border-primary order-1 md:order-1">
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="p-3 rounded-full bg-primary-foreground">
// //                   <Lightbulb className="h-6 w-6 text-primary" />
// //                 </div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-md font-medium mb-2 text-white dark:text-black">
// //                   Solution
// //                 </div>
// //                 <div className="text-3xl font-light text-white dark:text-black">
// //                   01
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Solution Text:
// //                 - order-2 on mobile (text second)
// //                 - md:order-2 on medium screens (text second, aligned right)
// //                 - text-center on mobile, md:text-left on larger screens
// //             */}
// //             <div className="flex-1 text-center md:text-left order-2 md:order-2">
// //               <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-800 dark:text-white">
// //                 {solution.solution.title}
// //               </h3>
// //               <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-300">
// //                 {solution.solution.description}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // import React from 'react';
// // import { Search, AlertTriangle, Lightbulb } from 'lucide-react';

// // const steps = [
// //   {
// //     icon: <Search className="w-6 h-6 text-primary" />,
// //     title: 'Step 1 — Identify the Problem',
// //     description: 'First-time founders struggle to pitch their startup to the right people.',
// //     bg: 'bg-muted'
// //   },
// //   {
// //     icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
// //     title: 'Step 2 — The Challenge',
// //     description: 'It’s hard to know what investors expect or how to structure the pitch.',
// //     bg: 'bg-yellow-50'
// //   },
// //   {
// //     icon: <Lightbulb className="w-6 h-6 text-white" />,
// //     title: 'Step 3 — The Solution',
// //     description: 'PitchMasterAI helps you craft a winning pitch, step-by-step.',
// //     bg: 'bg-black text-white'
// //   }
// // ];

// // export const SolutionsSection = () => {
// //   return (
// //     <section id="solution" className="bg-background py-20">
// //       <div className="container max-w-6xl mx-auto px-6">
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// //             <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// //             Founderoo
// //           </div>
// //           <h2 className="text-4xl font-bold mt-6 text-foreground">
// //             Solution To The Problem
// //           </h2>
// //         </div>

// //         {/* Steps */}
// //         <div className="grid gap-10 md:grid-cols-3">
// //           {steps.map((step, index) => (
// //             <div
// //               key={index}
// //               className={`rounded-3xl p-6 md:p-8 shadow-lg border border-border ${step.bg} transition-all hover:-translate-y-2 hover:shadow-xl duration-300`}
// //               data-aos="fade-up"
// //               data-aos-delay={index * 100}
// //             >
// //               <div className="mb-4 flex items-center justify-center">
// //                 <div className="p-3 rounded-full bg-white">{step.icon}</div>
// //               </div>
// //               <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
// //               <p className="text-center text-sm text-muted-foreground">
// //                 {step.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA */}
// //         <div className="text-center mt-14">
// //           <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/80 transition">
// //             Try PitchMasterAI
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// // import React, { useEffect } from 'react';
// // import { Search, AlertTriangle, Lightbulb } from 'lucide-react';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // export const SolutionsSection = () => {
// //   useEffect(() => {
// //     AOS.init({ once: true });
// //   }, []);

// //   return (
// //     <section className="bg-background py-20" id="solution">
// //       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Title */}
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
// //             <div className="w-2 h-2 rounded-full mr-3 bg-green-500"></div>
// //             Founderoo
// //           </div>
// //           <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-foreground">
// //             Solution To The Problem
// //           </h2>
// //         </div>

// //         {/* 3 Block Cards */}
// //         <div className="grid sm:grid-cols-3 gap-6">
// //           {/* Problem */}
// //           <div
// //             className="rounded-xl p-6 border bg-muted text-center transition hover:shadow-lg"
// //             data-aos="fade-up"
// //           >
// //             <Search className="mx-auto mb-3 text-primary" />
// //             <h3 className="font-semibold mb-1">The Problem</h3>
// //             <p className="text-sm text-muted-foreground">
// //               First-time founders struggle to pitch their idea to the right people.
// //             </p>
// //           </div>

// //           {/* Challenge */}
// //           <div
// //             className="rounded-xl p-6 border bg-yellow-50 text-center transition hover:shadow-lg"
// //             data-aos="fade-up"
// //             data-aos-delay="100"
// //           >
// //             <AlertTriangle className="mx-auto mb-3 text-yellow-500" />
// //             <h3 className="font-semibold mb-1">The Challenge</h3>
// //             <p className="text-sm text-muted-foreground">
// //               They don’t know how to structure it or what investors expect.
// //             </p>
// //           </div>

// //           {/* Solution */}
// //           <div
// //             className="rounded-xl p-6 border bg-black text-white text-center transition hover:shadow-lg"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             <Lightbulb className="mx-auto mb-3 text-white" />
// //             <h3 className="font-semibold mb-1">The Solution</h3>
// //             <p className="text-sm">
// //               PitchMasterAI helps you build the perfect pitch, step-by-step.
// //             </p>
// //           </div>
// //         </div>

// //         {/* CTA */}
// //         <div className="text-center mt-10">
// //           <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
// //             Try PitchMasterAI
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// import React, { useEffect } from 'react'
// import { Search, AlertTriangle, Lightbulb } from 'lucide-react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export const SolutionsSection = () => {
//   useEffect(() => {
//     AOS.init({ once: true })
//   }, [])

//   return (
//     <section className="bg-white py-20" id="solution">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
//             <div className="w-2 h-2 rounded-full mr-3 bg-green-500" />
//             Founderoo
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-900">
//             Solution To The Problem
//           </h2>
//         </div>

//         {/* 3 Block Cards */}
//         <div className="grid sm:grid-cols-3 gap-6">
//           {/* Problem */}
//           <div
//             className="rounded-xl p-6 border border-pink-100 bg-pink-50 text-center transition hover:shadow-lg"
//             data-aos="fade-up"
//           >
//             <Search className="mx-auto mb-3 text-pink-500" size={32} />
//             <h3 className="font-semibold mb-1 text-gray-800">The Problem</h3>
//             <p className="text-sm text-gray-600">
//               First‑time founders struggle to pitch their idea to the right people.
//             </p>
//           </div>

//           {/* Challenge */}
//           <div
//             className="rounded-xl p-6 border border-blue-100 bg-blue-50 text-center transition hover:shadow-lg"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <AlertTriangle className="mx-auto mb-3 text-blue-500" size={32} />
//             <h3 className="font-semibold mb-1 text-gray-800">The Challenge</h3>
//             <p className="text-sm text-gray-600">
//               They don’t know how to structure it or what investors expect.
//             </p>
//           </div>

//           {/* Solution */}
//           <div
//             className="rounded-xl p-6 border border-green-100 bg-green-50 text-center transition hover:shadow-lg"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <Lightbulb className="mx-auto mb-3 text-green-500" size={32} />
//             <h3 className="font-semibold mb-1 text-gray-800">The Solution</h3>
//             <p className="text-sm text-gray-600">
//               PitchMasterAI helps you build the perfect pitch, step‑by‑step.
//             </p>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-10">
//           <button className="bg-blue-200 text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-300 transition">
//             Try PitchMasterAI
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }
// import React, { useEffect } from 'react'
// import { Search, AlertTriangle, Lightbulb } from 'lucide-react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export const SolutionsSection = () => {
//   useEffect(() => {
//     AOS.init({ once: true })
//   }, [])

//   return (
//     <section className="py-20" id="solution">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto">

//         {/* Left Side - Always White */}
//         <div className="w-full md:w-1/2 bg-white text-gray-900 px-6 py-12">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-800" style={{ backgroundColor: '#a0ced9' }}>
//               <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#70d6ff' }} />
//               Founderoo
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold mt-6">
//               Solution To The Problem
//             </h2>
//           </div>

//           {/* CTA */}
//           <div className="text-center mt-10">
//             <button
//               className="px-6 py-3 rounded-full font-medium shadow-sm transition hover:shadow-lg"
//               style={{ backgroundColor: '#70d6ff', color: '#1a202c' }}
//             >
//               Try PitchMasterAI
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Theme dependent */}
//         <div className="w-full md:w-1/2 bg-gray-100 dark:bg-black px-6 py-12">
//           <div className="grid sm:grid-cols-1 gap-6">
//             {/* Problem */}
//             <div
//               className="rounded-xl p-6 border transition hover:shadow-xl"
//               data-aos="fade-up"
//               style={{ backgroundColor: '#ffc09f', borderColor: '#ff9770' }}
//             >
//               <Search className="mx-auto mb-3" size={32} style={{ color: '#ff9770' }} />
//               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Problem</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 First‑time founders struggle to pitch their idea to the right people.
//               </p>
//             </div>

//             {/* Challenge */}
//             <div
//               className="rounded-xl p-6 border transition hover:shadow-xl"
//               data-aos="fade-up"
//               data-aos-delay="100"
//               style={{ backgroundColor: '#c1d3fe', borderColor: '#abc4ff' }}
//             >
//               <AlertTriangle className="mx-auto mb-3" size={32} style={{ color: '#7ec4cf' }} />
//               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Challenge</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 They don’t know how to structure it or what investors expect.
//               </p>
//             </div>

//             {/* Solution */}
//             <div
//               className="rounded-xl p-6 border transition hover:shadow-xl"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               style={{ backgroundColor: '#a0ced9', borderColor: '#55d6c2' }}
//             >
//               <Lightbulb className="mx-auto mb-3" size={32} style={{ color: '#55d6c2' }} />
//               <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Solution</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 PitchMasterAI helps you build the perfect pitch, step‑by‑step.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }
// src/components/Solutions.jsx

import React, { useEffect } from 'react'
import { Search, AlertTriangle, Lightbulb } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Solutions = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="bg-white dark:bg-background py-20" id="solution">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200">
            <div className="w-2 h-2 rounded-full mr-3 bg-green-500" />
            Founderoo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-900 dark:text-white">
            Solution To The Problem
          </h2>
        </div>

        {/* 3 Block Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Problem */}
          <div
            className="rounded-xl p-6 border border-pink-100 dark:border-pink-900 bg-pink-50 dark:bg-[#2a1a1a] text-center transition hover:shadow-lg"
            data-aos="fade-up"
          >
            <Search className="mx-auto mb-3 text-pink-500" size={32} />
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Problem</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              First‑time founders struggle to pitch their idea to the right people.
            </p>
          </div>

          {/* Challenge */}
          <div
            className="rounded-xl p-6 border border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-[#1a1a2a] text-center transition hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <AlertTriangle className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Challenge</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              They don’t know how to structure it or what investors expect.
            </p>
          </div>

          {/* Solution */}
          <div
            className="rounded-xl p-6 border border-green-100 dark:border-green-900 bg-green-50 dark:bg-[#1a2a1a] text-center transition hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Lightbulb className="mx-auto mb-3 text-green-500" size={32} />
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-white">The Solution</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              PitchMasterAI helps you build the perfect pitch, step‑by‑step.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-blue-300 dark:hover:bg-blue-600 transition">
            Try PitchMasterAI
          </button>
        </div>
      </div>
    </section>
  )
}

export default Solutions
