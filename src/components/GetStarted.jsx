// // // import React, { useState, useEffect } from "react"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import { cn } from "@/lib/utils"

// // // // Demo data
// // // const defaultFeatures = [
// // //   {
// // //     step: "Step 1",
// // //     title: "Put your prompt",
// // //     content: "Give the prompt about the topic you want to explore",
// // //     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 2", 
// // //     title: "Review your prompt ",
// // //     content: "Review the Message whether it includes the necessary information",
// // //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 3",
// // //     title: "Click generate ", 
// // //     content: "Click on generate in order to get the information about the given idea",
// // //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 4",
// // //     title: "Pitch deck generated!",
// // //     content: "Now pitch deck is genrated ",
// // //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
// // //   }
// // // ]

// // // export function FeatureSteps({
// // //   features = defaultFeatures,
// // //   className,
// // //   title = "How to get Started",
// // //   autoPlayInterval = 3000,
// // //   imageHeight = "h-[400px]"
// // // }) {
// // //   const [currentFeature, setCurrentFeature] = useState(0)
// // //   const [progress, setProgress] = useState(0)

// // //   // Early return if no features provided
// // //   if (!features || features.length === 0) {
// // //     return (
// // //       <div className={cn("p-8 md:p-12", className)}>
// // //         <div className="max-w-7xl mx-auto w-full">
// // //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // //             {title}
// // //           </h2>
// // //           <p className="text-center text-muted-foreground">No features to display</p>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       if (progress < 100) {
// // //         setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
// // //       } else {
// // //         setCurrentFeature((prev) => (prev + 1) % features.length)
// // //         setProgress(0)
// // //       }
// // //     }, 100)

// // //     return () => clearInterval(timer);
// // //   }, [progress, features.length, autoPlayInterval])

// // //   return (
// // //     <div className={cn("p-8 md:p-8", className)}>
// // //       <div className="max-w-7xl mx-auto w-full">
// // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // //           {title}
// // //         </h2>

// // //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// // //           <div className="order-2 md:order-1 space-y-8">
// // //             {features.map((feature, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 className="flex items-center gap-6 md:gap-8"
// // //                 initial={{ opacity: 0.3 }}
// // //                 animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
// // //                 transition={{ duration: 0.5 }}>
// // //                 <motion.div
// // //                   className={cn(
// // //                     "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
// // //                     index === currentFeature
// // //                       ? "bg-primary border-primary text-primary-foreground scale-110"
// // //                       : "bg-muted border-muted-foreground"
// // //                   )}>
// // //                   {index <= currentFeature ? (
// // //                     <span className="text-lg font-bold">✓</span>
// // //                   ) : (
// // //                     <span className="text-lg font-semibold">{index + 1}</span>
// // //                   )}
// // //                 </motion.div>

// // //                 <div className="flex-1">
// // //                   <h3 className="text-xl md:text-2xl font-semibold">
// // //                     {feature.title || feature.step}
// // //                   </h3>
// // //                   <p className="text-sm md:text-lg text-muted-foreground">
// // //                     {feature.content}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           <div
// // //             className={cn(
// // //               "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
// // //             )}>
// // //             <AnimatePresence mode="wait">
// // //               {features.map((feature, index) =>
// // //                 index === currentFeature && (
// // //                   <motion.div
// // //                     key={index}
// // //                     className="absolute inset-0 rounded-lg overflow-hidden"
// // //                     initial={{ y: 100, opacity: 0, rotateX: -20 }}
// // //                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
// // //                     exit={{ y: -100, opacity: 0, rotateX: 20 }}
// // //                     transition={{ duration: 0.5, ease: "easeInOut" }}>
// // //                     <img
// // //                       src={feature.image}
// // //                       alt={feature.step || feature.title}
// // //                       className="w-full h-full object-cover transition-transform transform"
// // //                       loading="lazy"
// // //                     />
// // //                     <div
// // //                       className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
// // //                   </motion.div>
// // //                 ))}
// // //             </AnimatePresence>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { cn } from "@/lib/utils"

// // // // Polished and realistic content
// // // const defaultFeatures = [
// // //   {
// // //     step: "Step 1",
// // //     title: "Put your prompt",
// // //     content:
// // //       "Start by entering a prompt that describes your idea, product, or problem you want to solve. Be as specific or broad as you'd like — our AI will handle the rest.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 2",
// // //     title: "Review your prompt",
// // //     content:
// // //       "Our AI will analyze your prompt and help you refine it for clarity, completeness, and investor appeal before generating the pitch.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 3",
// // //     title: "Click generate",
// // //     content:
// // //       "With a single click, generate a complete pitch deck tailored to your idea. The AI ensures the messaging is aligned with startup best practices.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
// // //   },
// // //   {
// // //     step: "Step 4",
// // //     title: "Pitch deck generated!",
// // //     content:
// // //       "Your pitch deck is ready — professionally structured and visually cohesive. Use it to pitch to investors, accelerators, or share with your team.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
// // //   }
// // // ]
// // const defaultFeatures = [
// //   {
// //     step: "Step 1",
// //     title: "Put your prompt",
// //     content: "Describe your idea or problem in a few lines. Keep it simple — we’ll handle the structure.",
// //     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
// //   },
// //   {
// //     step: "Step 2",
// //     title: "Review your prompt",
// //     content: "Check for clarity and relevance. We'll help polish it for the best results.",
// //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
// //   },
// //   {
// //     step: "Step 3",
// //     title: "Click generate",
// //     content: "Let the AI turn your prompt into a well-structured pitch deck instantly.",
// //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
// //   },
// //   {
// //     step: "Step 4",
// //     title: "Pitch deck generated!",
// //     content: "Your deck is ready to pitch — clean, clear, and investor-friendly.",
// //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
// //   }
// // ]


// // export function FeatureSteps({
// //   features = defaultFeatures,
// //   className,
// //   title = "How to get Started",
// //   autoPlayInterval = 3000,
// //   imageHeight = "h-[400px]"
// // }) {
// //   const [currentFeature, setCurrentFeature] = useState(0)
// //   const [progress, setProgress] = useState(0)

// //   if (!features || features.length === 0) {
// //     return (
// //       <div className={cn("p-8 md:p-12", className)}>
// //         <div className="max-w-7xl mx-auto w-full">
// //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// //             {title}
// //           </h2>
// //           <p className="text-center text-muted-foreground">
// //             No features to display
// //           </p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       if (progress < 100) {
// //         setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
// //       } else {
// //         setCurrentFeature((prev) => (prev + 1) % features.length)
// //         setProgress(0)
// //       }
// //     }, 100)

// //     return () => clearInterval(timer)
// //   }, [progress, features.length, autoPlayInterval])

// //   return (
// //     <div className={cn("p-8 md:p-8", className)}>
// //       <div className="max-w-7xl mx-auto w-full">
// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// //           {title}
// //         </h2>

// //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// //           <div className="order-2 md:order-1 space-y-8">
// //             {features.map((feature, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="flex items-center gap-6 md:gap-8"
// //                 initial={{ opacity: 0.3 }}
// //                 animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 <motion.div
// //                   className={cn(
// //                     "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
// //                     index === currentFeature
// //                       ? "bg-primary border-primary text-primary-foreground scale-110"
// //                       : "bg-muted border-muted-foreground"
// //                   )}
// //                 >
// //                   {index <= currentFeature ? (
// //                     <span className="text-lg font-bold">✓</span>
// //                   ) : (
// //                     <span className="text-lg font-semibold">{index + 1}</span>
// //                   )}
// //                 </motion.div>

// //                 <div className="flex-1">
// //                   <h3 className="text-xl md:text-2xl font-semibold">
// //                     {feature.title || feature.step}
// //                   </h3>
// //                   <p className="text-sm md:text-lg text-muted-foreground">
// //                     {feature.content}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <div
// //             className={cn(
// //               "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
// //             )}
// //           >
// //             <AnimatePresence mode="wait">
// //               {features.map(
// //                 (feature, index) =>
// //                   index === currentFeature && (
// //                     <motion.div
// //                       key={index}
// //                       className="absolute inset-0 rounded-lg overflow-hidden"
// //                       initial={{ y: 100, opacity: 0, rotateX: -20 }}
// //                       animate={{ y: 0, opacity: 1, rotateX: 0 }}
// //                       exit={{ y: -100, opacity: 0, rotateX: 20 }}
// //                       transition={{ duration: 0.5, ease: "easeInOut" }}
// //                     >
// //                       <img
// //                         src={feature.image}
// //                         alt={feature.step || feature.title}
// //                         className="w-full h-full object-cover transition-transform transform"
// //                         loading="lazy"
// //                       />
// //                       <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
// //                     </motion.div>
// //                   )
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { cn } from "@/lib/utils"

// // Pastel-style, realistic content
// const defaultFeatures = [
//   {
//     step: "Step 1",
//     title: "Put your prompt",
//     content: "Describe your idea or problem in a few lines. Keep it simple — we’ll handle the structure.",
//     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
//   },
//   {
//     step: "Step 2",
//     title: "Review your prompt",
//     content: "Check for clarity and relevance. We'll help polish it for the best results.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
//   },
//   {
//     step: "Step 3",
//     title: "Click generate",
//     content: "Let the AI turn your prompt into a well-structured pitch deck instantly.",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
//   },
//   {
//     step: "Step 4",
//     title: "Pitch deck generated!",
//     content: "Your deck is ready to pitch — clean, clear, and investor-friendly.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
//   }
// ]

// export function FeatureSteps({
//   features = defaultFeatures,
//   className,
//   title = "How to get Started",
//   autoPlayInterval = 3000,
//   imageHeight = "h-[400px]"
// }) {
//   const [currentFeature, setCurrentFeature] = useState(0)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (progress < 100) {
//         setProgress(prev => prev + 100 / (autoPlayInterval / 100))
//       } else {
//         setCurrentFeature(prev => (prev + 1) % features.length)
//         setProgress(0)
//       }
//     }, 100)
//     return () => clearInterval(timer)
//   }, [progress, features.length, autoPlayInterval])

//   if (!features || features.length === 0) {
//     return (
//       <div className={cn("p-8 md:p-12", className)}>
//         <div className="max-w-7xl mx-auto w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
//             {title}
//           </h2>
//           <p className="text-center text-muted-foreground">No features to display</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className={cn("p-8 md:p-8", className)}>
//       <div className="max-w-7xl mx-auto w-full">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
//           {title}
//         </h2>

//         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
//           {/* Text Steps */}
//           <div className="order-2 md:order-1 space-y-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center gap-6 md:gap-8"
//                 initial={{ opacity: 0.3 }}
//                 animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {/* Step Circle */}
//                 <motion.div
//                   className={cn(
//                     "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold",
//                     index === currentFeature
//                       ? "bg-pink-200 border-pink-400 text-pink-900 scale-110"
//                       : "bg-gray-100 border-gray-300 text-gray-500"
//                   )}
//                 >
//                   {index <= currentFeature ? "✓" : index + 1}
//                 </motion.div>

//                 {/* Step Text */}
//                 <div className="flex-1">
//                   <h3 className="text-xl md:text-2xl font-semibold">
//                     {feature.title || feature.step}
//                   </h3>
//                   <p className="text-sm md:text-lg text-muted-foreground">
//                     {feature.content}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Image Side */}
//           <div className={cn("order-1 md:order-2 relative overflow-hidden rounded-xl border border-pink-100 shadow-md", imageHeight)}>
//             <AnimatePresence mode="wait">
//               {features.map((feature, index) =>
//                 index === currentFeature && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 rounded-lg overflow-hidden"
//                     initial={{ y: 100, opacity: 0, rotateX: -20 }}
//                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
//                     exit={{ y: -100, opacity: 0, rotateX: 20 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                   >
//                     <img
//                       src={feature.image}
//                       alt={feature.step || feature.title}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//                   </motion.div>
//                 )
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const defaultFeatures = [
  {
    step: "Step 1",
    title: "Put your prompt",
    content: "Describe your idea or problem in a few lines. Keep it simple — we’ll handle the structure.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
  },
  {
    step: "Step 2",
    title: "Review your prompt",
    content: "Check for clarity and relevance. We'll help polish it for the best results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 3",
    title: "Click generate",
    content: "Let the AI turn your prompt into a well-structured pitch deck instantly.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 4",
    title: "Pitch deck generated!",
    content: "Your deck is ready to pitch — clean, clear, and investor-friendly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
]

// 💜 Consistent pastel purple step styling
const pastelStyles = [
  "bg-[#E6D6F6] border-[#C69AF3] text-[#702D9B]"
]

export function FeatureSteps({
  features = defaultFeatures,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]"
}) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature(prev => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  if (!features || features.length === 0) {
    return (
      <div className={cn("p-8 md:p-12", className)}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            {title}
          </h2>
          <p className="text-center text-muted-foreground">No features to display</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("p-8 md:p-8", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Text Steps */}
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {/* Step Circle */}
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-all",
                    index === currentFeature
                      ? pastelStyles[0] + " scale-110"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  )}
                >
                  {index <= currentFeature ? "✓" : index + 1}
                </motion.div>

                {/* Step Text */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Side */}
          <div className={cn(
            "order-1 md:order-2 relative overflow-hidden rounded-xl border border-gray-200 shadow-md",
            imageHeight
          )}>
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    initial={{ y: 100, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.step || feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
