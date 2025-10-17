






import React, { useState } from 'react';
import { Search, Lightbulb, Check, Minus, MoveRight, PhoneCall, ArrowRight, ChevronRight } from 'lucide-react';
import { 
  IconAdjustmentsBolt, 
  IconCloud, 
  IconCurrencyDollar, 
  IconEaseInOut, 
  IconHeart, 
  IconHelp, 
  IconRouteAltLeft, 
  IconTerminal2 
} from '@tabler/icons-react';

// Features Section with Hero Theme
export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-powered pitch deck generator with guided prompts",
      description: "Generate decks with guided prompts, smart formatting, and investor-oriented language suggestions.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Console",
      description: "A dashboard that gives founder visibility over tasks, milestones, market status",
      icon: <IconEaseInOut />,
    },
    {
      title: "PitchMaster",
      description: "Practice the pitch with live AI feedback on tone, clarity, engagement",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Founder's Copilot",
      description: "AI FAQ chatbot for instant answers to legal, funding, product strategy",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Evaluate",
      description: "Getting a score on how investment ready are you based upon numerous parameters",
      icon: <IconHelp />,
    },
    {
      title: "Mentorship and Guidance",
      description: "Access strategic mentorship from experienced founders, operators and investors",
      icon: <IconAdjustmentsBolt />,
    },
  ];

  return (
    <section id="features" className="w-full py-12 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" style={{backgroundColor: '#F5F2E8'}}>
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col pb-10 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/80 border border-purple-200 shadow-md shadow-purple-200/50 text-purple-600">
            <div className="w-2 h-2 rounded-full mr-3 bg-purple-500"></div>
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-gray-800">
            Core Features
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-center">
            Explore the powerful features designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div className="flex flex-col p-6 relative group/feature rounded-2xl bg-white/70 border border-purple-200 shadow-lg shadow-purple-200/30 hover:shadow-purple-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50">
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-2xl pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300 w-fit group-hover/feature:from-yellow-100 group-hover/feature:to-yellow-200 group-hover/feature:border-yellow-400 transition-all duration-300">
          <div className="text-purple-600 group-hover/feature:text-yellow-600 transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-4">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple-300 group-hover/feature:bg-yellow-500 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-gray-800 group-hover/feature:text-gray-800">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-4">
        {description}
      </p>
    </div>
  );
};
