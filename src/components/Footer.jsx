


















































































































































































import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

const footerLinks = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "/testimonials", isRoute: true },
      { title: "Integrations", href: "/integrations", isRoute: true },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "#faq", scrollTo: "faq" },
      { title: "About Us", href: "/about", isRoute: true },
      { title: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { title: "Terms of Service", href: "/terms", isRoute: true },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog", isRoute: true },
      { title: "Changelog", href: "/changelog", isRoute: true },
      { title: "Brand", href: "/brand", isRoute: true },
      { title: "Help", href: "/help", isRoute: true },
    ],
  },
];

const socialLinks = [
  { title: "Facebook", href: "#", icon: FacebookIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Youtube", href: "#", icon: YoutubeIcon },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/founderoo-circle/posts/?feedView=all",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (href) => {
    const showPopupFor = ["/blog", "/changelog", "/brand", "/help"];
    if (showPopupFor.includes(href)) {
      setShowComingSoon(true);
      return;
    }
    if (location.pathname !== href) {
      navigate(href);
    }
  };

  const closePopup = () => setShowComingSoon(false);

  return (
    <>
      <footer className="w-full bg-[#FAF8F2] border-t">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-10 pr-0 md:pr-32">
          {/* Decorative Divider */}
          <div className="bg-foreground/20 absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

          {/* Brand (mobile: static, desktop: absolute) */}
          <div
            className="mt-2 pt-4
                       static mb-8
                       md:absolute md:left-[-120px] md:top-24 md:mb-0"
          >
            <div>
              <h3 className="text-2xl font-bold text-black">PitchOS</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                © {new Date().getFullYear()} PitchOS. All rights reserved.
              </p>
            </div>
          </div>

          {/* Footer Grid, mobile layouts: cols-1, drop margin, adjust gap */}
          <div className="
            grid grid-cols-1
            sm:grid-cols-2 md:grid-cols-4
            gap-8 md:ml-56
            text-sm text-muted-foreground
          ">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div>
                  <h3 className="text-sm font-semibold text-purple-700 tracking-wide uppercase mb-3">
                    {section.label}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        {link.scrollTo ? (
                          <button
                            onClick={() => handleScrollToSection(link.scrollTo)}
                            className="hover:text-purple-700 transition bg-transparent border-none p-0 cursor-pointer text-left"
                          >
                            {link.title}
                          </button>
                        ) : link.isRoute ? (
                          <button
                            onClick={() => handleNavigate(link.href)}
                            className="hover:text-purple-700 transition bg-transparent border-none p-0 cursor-pointer text-left"
                          >
                            {link.title}
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="hover:text-purple-700 transition"
                          >
                            {link.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}

            {/* Social Links always last */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-700 mb-2">Social Links</h4>
                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-purple-700 transition-all duration-300"
                      >
                        <link.icon className="w-4 h-4 text-purple-700" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile friendly Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[94vw] sm:max-w-sm mx-auto shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="mb-6 text-base">This feature is coming soon. Stay tuned!</p>
            <button
              onClick={closePopup}
              className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function AnimatedContainer({ className = "", delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center min-h-[80vh] bg-background px-2">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
