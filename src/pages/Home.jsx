
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  AlertCircle,
  Play,
  Star,
  Zap,
} from "lucide-react";
import { HeroSection } from "@/components/Hero";
import { FeatureSteps } from "@/components/GetStarted";
import { Component } from "@/components/faq-section";
import { FeaturesSectionWithHoverEffects } from "@/components/Features";
import  Pricing  from "@/components/ui/Pricing";
import { PageLoader } from "@/components/ui/page-loader";
import SolutionsSection from "@/components/Solutions"; // ✅ FIXED HERE

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageLoader>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-[#FAF8F2]"
      >
        <motion.div variants={childVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={childVariants}>
          <div className="py-16 md:py-24">
            <FeatureSteps />
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <div className="py-16 md:py-24">
            <SolutionsSection />
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <FeaturesSectionWithHoverEffects />
        </motion.div>

        <motion.div variants={childVariants}>
          <Pricing />
        </motion.div>

        <motion.div variants={childVariants}>
          <Component />
        </motion.div>
      </motion.div>
    </PageLoader>
  );
}
