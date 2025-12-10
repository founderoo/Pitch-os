




















































import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const defaultFeatures = [
  {
    step: "Step 1",
    title: "Sign Up & Create Your Profile",
    content: "Create your account in just 30 seconds with your email address. No credit card required to get started.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
  },
  {
    step: "Step 2",
    title: "Create winning pitches",
    content: "Our PitchMaster will help you to generate and craft precise winning pitches for your idea to become reality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 3",
    title: "Fine Tune Pitch to stand out more!",
    content: "PitchMasterAI will even give you further feedback and improvement scope and help monitor the strength of your pitch.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  },
  {
    step: "Step 4",
    title: "Get your Vision Funded",
    content: "With such highly calibrated pitches win and get your funding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
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


  if (!features || features.length === 0) {
    return (
      <div className={cn("p-8 md:p-12 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50", className)} style={{ backgroundColor: '#F5F2E8' }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-700">
            {title}
          </h2>
          <p className="text-center text-gray-600">No features to display</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-4 md:p-8 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50", className)} style={{ backgroundColor: '#F5F2E8' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center text-gray-700">
          {title}
        </h2>

       
        <div className="lg:hidden space-y-6">
       
          <div className="relative h-[200px] sm:h-[250px] w-full overflow-hidden rounded-xl bg-white shadow-lg border-2 border-gray-200">
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}>
                    <img
                      src={feature.image}
                      alt={feature.step || feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
            </AnimatePresence>

         
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex gap-1.5">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      index === currentFeature
                        ? "bg-yellow-400 flex-1 shadow-sm"
                        : index < currentFeature
                          ? "bg-green-400 w-6"
                          : "bg-white/70 w-6"
                    )}
                  />
                ))}
              </div>
            </div>

          
            <div className="absolute top-3 left-3">
              <div className="bg-white px-2.5 py-1 rounded-full border-2 border-purple-500 shadow-sm">
                <span className="text-xs font-semibold text-purple-600">
                  {features[currentFeature]?.step || `Step ${currentFeature + 1}`}
                </span>
              </div>
            </div>
          </div>

          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start gap-3 cursor-pointer p-3 rounded-lg transition-all duration-300",
                  index === currentFeature
                    ? "bg-white shadow-sm border-l-4 border-l-purple-500 bg-purple-50/30"
                    : index < currentFeature
                      ? "bg-white border-l-4 border-l-green-500 hover:bg-green-50/30"
                      : "bg-gray-50/50 border-l-4 border-l-gray-300 hover:border-l-gray-400 hover:bg-gray-100/50"
                )}
                onClick={() => setCurrentFeature(index)}
                initial={false}
                animate={{
                  scale: index === currentFeature ? 1.02 : 1,
                  opacity: index > currentFeature ? 0.6 : 1
                }}
                transition={{ duration: 0.3 }}>

                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 mt-0.5",
                    index === currentFeature
                      ? "bg-purple-500 border-purple-500 text-white"
                      : index < currentFeature
                        ? "bg-green-500 border-green-500 text-white"
                        : "bg-gray-200 border-gray-300 text-gray-500"
                  )}>
                  {index < currentFeature ? (
                    <span className="text-xs font-bold">✓</span>
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "text-base font-semibold mb-1 transition-colors duration-300",
                    index === currentFeature
                      ? "text-gray-900"
                      : index < currentFeature
                        ? "text-gray-800"
                        : "text-gray-500"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    index === currentFeature
                      ? "text-gray-700"
                      : index < currentFeature
                        ? "text-gray-600"
                        : "text-gray-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-3 flex-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4 cursor-pointer p-4 rounded-lg transition-all duration-300",
                  index === currentFeature
                    ? "bg-white shadow-sm border-l-4 border-l-purple-500 bg-purple-50/30"
                    : index < currentFeature
                      ? "bg-white border-l-4 border-l-green-500 hover:bg-green-50/30"
                      : "bg-gray-50/50 border-l-4 border-l-gray-300 hover:border-l-gray-400 hover:bg-gray-100/50 opacity-60"
                )}
                onClick={() => setCurrentFeature(index)}>

                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 mt-1",
                    index === currentFeature
                      ? "bg-purple-500 border-purple-500 text-white"
                      : index < currentFeature
                        ? "bg-green-500 border-green-500 text-white"
                        : "bg-gray-200 border-gray-300 text-gray-500"
                  )}>
                  {index < currentFeature ? (
                    <span className="text-xs font-bold">✓</span>
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "text-lg font-semibold mb-1 transition-colors duration-300",
                    index === currentFeature
                      ? "text-gray-900"
                      : index < currentFeature
                        ? "text-gray-800"
                        : "text-gray-500"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-base leading-relaxed transition-colors duration-300",
                    index === currentFeature
                      ? "text-gray-700"
                      : index < currentFeature
                        ? "text-gray-600"
                        : "text-gray-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-white shadow-lg border-2 border-gray-200 self-start sticky top-8">
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <img
                      src={feature.image}
                      alt={feature.step || feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
            </AnimatePresence>

        
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      index === currentFeature
                        ? "bg-yellow-400 flex-1 shadow-sm"
                        : index < currentFeature
                          ? "bg-green-400 w-8"
                          : "bg-white/70 w-8"
                    )}
                  />
                ))}
              </div>
            </div>

       
            <div className="absolute top-4 left-4">
              <div className="bg-white px-3 py-1.5 rounded-full border-2 border-purple-500 shadow-sm">
                <span className="text-sm font-semibold text-purple-600">
                  {features[currentFeature]?.step || `Step ${currentFeature + 1}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
