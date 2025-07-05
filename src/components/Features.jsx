// import { cn } from "@/lib/utils";
// import {
//   IconAdjustmentsBolt,
//   IconCloud,
//   IconCurrencyDollar,
//   IconEaseInOut,
//   IconHeart,
//   IconHelp,
//   IconRouteAltLeft,
//   IconTerminal2,
// } from "@tabler/icons-react";

// export function FeaturesSectionWithHoverEffects() {
//   const features = [
//     {
//       title: "AI-powered pitch deck generator with guided prompts",
//       description:
//         "Generate decks with guided prompts, smart formatting, and investor-oriented language suggestions.",
//       icon: <IconTerminal2 />,
//     },
//     {
//       title: "Console",
//       description:
//         "A dashboard that gives founder visibility over tasks , milestones , market status",
//       icon: <IconEaseInOut />,
//     },
//     {
//       title: "PitchMaster",
//       description:
//         "Practice the pitch with live AI feedback on tone , clarity , engagement ",
//       icon: <IconCurrencyDollar />,
//     },
//     {
//       title: "Founder's Copilot",
//       description: "AI FAQ chatbot for instant answers to legal , funding , product stratergy",
//       icon: <IconRouteAltLeft />,
//     },
//     {
//       title: "Evaluate",
//       description:
//         "getting a score on how investment ready are you based upon numerous parameters",
//       icon: <IconHelp />,
//     },
//     {
//       title: "Mentorship and Guidence",
//       description:
//         "Access stratergic mentorship from experienced founders , operators and investors",
//       icon: <IconAdjustmentsBolt />,
//     },
//   ];
//   return (
//     <section id="features" className="w-full py-12">
//       <div className="container mx-auto px-4">
//         {/* Added Features Heading and Description */}
//         <div className="flex text-center justify-center items-center gap-4 flex-col pb-10 pt-20"> {/* Added pt-20 for more top padding */}
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
//             Core Features
//           </h2>
//           <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
//             Explore the powerful features designed to help you succeed.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
//           {features.map((feature, index) => (
//             <Feature key={feature.title} {...feature} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const Feature = ({ title, description, icon, index }) => {
//   return (
//     <div
//       className={cn(
//         "flex flex-col p-6 relative group/feature rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200",
//         "hover:shadow-lg hover:-translate-y-1"
//       )}
//     >
//       {index < 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       {index >= 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//         {icon}
//       </div>
//       <div className="text-lg font-bold mb-2 relative z-10 px-10">
//         <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
//         <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
//           {title}
//         </span>
//       </div>
//       <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
//         {description}
//       </p>
//     </div>
//   );
// };
import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconClock,
  IconHierarchy3,
  IconSettingsAutomation,
  IconUsersGroup,
  IconQuestionMark,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Faster Exploration With Branching",
      icon: IconBrain,
    },
    {
      title: "Save Time By Reusing Prompts",
      icon: IconClock,
    },
    {
      title: "Spatial Thinking With Infinite Canvas",
      icon: IconHierarchy3,
    },
    {
      title: "More POVs With Multiple Models",
      icon: IconUsersGroup,
    },
    {
      title: "Mentorship and Guidance",
      icon: IconSettingsAutomation,
    },
    {
      title: "AI FAQ Chatbot Support",
      icon: IconQuestionMark,
    },
  ];

  return (
    <section id="features" className="w-full py-24 bg-white dark:bg-black relative">
      <style>{`
        @keyframes slideFadeTop {
          0%, 100% { transform: translateY(0%); opacity: 1; }
          50% { transform: translateY(-100%); opacity: 0.2; }
        }

        @keyframes slideFadeBottom {
          0%, 100% { transform: translateY(0%); opacity: 1; }
          50% { transform: translateY(100%); opacity: 0.2; }
        }

        .animate-slideFadeTop {
          animation: slideFadeTop 1.5s ease-in-out infinite;
        }

        .animate-slideFadeBottom {
          animation: slideFadeBottom 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-20 flex items-center justify-center gap-4">
          <span className="relative inline-block h-[72px] overflow-hidden">
            <span className="absolute animate-slideFadeTop text-[#702D9B]">Core</span>
            <span className="opacity-0">Core</span>
          </span>
          <span className="relative inline-block h-[72px] overflow-hidden">
            <span className="absolute animate-slideFadeBottom text-black dark:text-white">Features</span>
            <span className="opacity-0">Features</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ title, icon: Icon }, index) => (
            <div
              key={index}
              className={cn(
                "group flex flex-col items-center justify-start p-10 rounded-2xl transition-all duration-300 min-h-[240px]",
                // Light mode
                "bg-[#F5F5F7] text-gray-800 hover:bg-black hover:text-white",
                // Dark mode
                "dark:bg-[#1e1e1e] dark:text-gray-100 dark:hover:bg-white dark:hover:text-black",
                // Hover effects
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className={cn(
                "mb-6 flex items-center justify-center w-16 h-16 rounded-full shadow-sm transition-all duration-300",
                // Light
                "bg-white group-hover:bg-[#2B2B2F]",
                // Dark
                "dark:bg-[#2a2a2a] dark:group-hover:bg-gray-200"
              )}>
                <Icon
                  size={30}
                  stroke={1.5}
                  className={cn(
                    "transition-colors duration-300",
                    "text-black group-hover:text-white",
                    "dark:text-white dark:group-hover:text-black"
                  )}
                />
              </div>

              <p className="text-lg font-semibold text-center leading-snug transition-all duration-300">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
