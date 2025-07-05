// // import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";

// // // --- Unified Data for Pricing Plans and Features (India Data) ---
// // const pricingPlans = [
// //   {
// //     name: "Basic",
// //     price: "₹0",
// //     frequency: "/ month",
// //     description: "Perfect for individual founders getting started with their first pitch.",
// //     buttonText: "Start a Basic Plan",
// //     buttonVariant: "outline",
// //     icon: MoveRight,
// //   },
// //   {
// //     name: "Regular",
// //     price: "₹499",
// //     frequency: "/ month",
// //     description: "For growing startups ready to refine and scale their pitching efforts.",
// //     buttonText: "Start Regular Plan",
// //     buttonVariant: "default",
// //     icon: MoveRight,
// //   },
// //   {
// //     name: "Pro",
// //     price: "₹999",
// //     frequency: "/ month",
// //     description: "Intricate solutions for accelerators, large teams, and specific organizational needs.",
// //     buttonText: "Get Pro",
// //     buttonVariant: "outline",
// //     icon: MoveRight,
// //   },
// // ];

// // const features = [
// //   { name: "Console", basic: true, regular: true, pro: true },
// //   { name: "PitchMaster Deck", basic: true, regular: true, pro: true },
// //   { name: "Enhanced PitchMasterAI feedback", basic: false, regular: true, pro: true },
// //   { name: "Evaluate", basic: false, regular: true, pro: true },
// //   { name: "Mentorship & Guidance", basic: false, regular: false, pro: true },
// //   { name: "Founders Copilot", basic: false, regular: false, pro: true },

// // ];

// // function Pricing() {
// //   return (
// //     <div id="pricing" className="w-full py-20 lg:py-40">
// //       <div className="container mx-auto">
// //         <div className="flex text-center justify-center items-center gap-4 flex-col">
// //           <Badge>Pricing</Badge>
// //           <div className="flex gap-2 flex-col">
// //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// //               Prices that make sense!
// //             </h2>
// //             <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
// //               Tailored plans to help every type of founder to achieve their funding goals.
// //             </p>
// //           </div>

// //           {/* --- Desktop Pricing Grid (visible only on lg and larger screens) --- */}
// //           {/* This section now dynamically uses the 'pricingPlans' and 'features' data */}
// //           <div className="hidden lg:grid text-left w-full grid-cols-4 divide-x divide-y pt-10 md:pt-20 border rounded-lg overflow-hidden">
// //             {/* Empty column for alignment on large screens */}
// //             <div className="col-span-1 px-3 py-4"></div>

// //             {/* Pricing Plan Headers */}
// //             {pricingPlans.map((plan, index) => (
// //               <div
// //                 key={plan.name}
// //                 className={`px-3 py-6 md:px-6 md:py-8 gap-2 flex flex-col items-center text-center ${
// //                   plan.name === "Pro"
// //                     ? "bg-gray-50 dark:bg-neutral-900 border-x border-gray-100 dark:border-neutral-800"
// //                     : ""
// //                 }`}
// //               >
// //                 <p className="text-2xl font-semibold">{plan.name}</p>
// //                 <p className="text-sm text-muted-foreground mt-2">
// //                   {plan.description}
// //                 </p>
// //                 <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
// //                   <span className="text-4xl">{plan.price}</span>
// //                   <span className="text-sm text-muted-foreground">
// //                     {" "}
// //                     {plan.frequency}
// //                   </span>
// //                 </p>
// //                 <Button variant={plan.buttonVariant} className="gap-4 mt-8 w-full">
// //                   {plan.buttonText} <plan.icon className="w-4 h-4" />
// //                 </Button>
// //               </div>
// //             ))}

// //             {/* Feature Header */}
// //             <div className="col-span-1 px-3 lg:px-6 py-4 border-t text-left bg-gray-50 dark:bg-neutral-900">
// //               <b>Features</b>
// //             </div>
// //             {/* These empty divs ensure the feature column aligns with the pricing columns visually. */}
// //             {/* These are needed to fill the grid row for the "Features" header row on desktop */}
// //             <div className=""></div>
// //             <div className=""></div>
// //             <div className=""></div>

// //             {/* Feature Rows */}
// //             {features.map((feature) => (
// //               <>
// //                 <div key={feature.name} className="col-span-1 px-3 lg:px-6 py-4 border-t text-left">
// //                   {feature.name}
// //                 </div>
// //                 {/* Render feature availability for each plan */}
// //                 {pricingPlans.map((plan) => {
// //                   const featureValue = feature[plan.name.toLowerCase()]; // Get feature value for the current plan
// //                   return (
// //                     <div key={`${plan.name}-${feature.name}-desktop`} className="px-3 py-4 flex justify-center border-t">
// //                       {typeof featureValue === "boolean" ? (
// //                         featureValue ? (
// //                           <Check className="w-4 h-4 text-primary" />
// //                         ) : (
// //                           <Minus className="w-4 h-4 text-muted-foreground" />
// //                         )
// //                       ) : (
// //                         <p className="text-muted-foreground text-sm">{featureValue}</p>
// //                       )}
// //                     </div>
// //                   );
// //                 })}
// //               </>
// //             ))}
// //           </div>

// //           {/* --- Pricing Cards for Smaller Screens (visible only on screens smaller than lg) --- */}
// //           <div className="lg:hidden w-full flex flex-col gap-8 pt-10 md:pt-20">
// //             {pricingPlans.map((plan) => (
// //               <div
// //                 key={`mobile-${plan.name}`}
// //                 className={`border rounded-lg p-6 flex flex-col items-center text-center ${
// //                   plan.name === "Pro"
// //                     ? "bg-gray-50 dark:bg-neutral-900 border-gray-100 dark:border-neutral-800"
// //                     : ""
// //                 }`}
// //               >
// //                 <p className="text-2xl font-semibold">{plan.name}</p>
// //                 <p className="text-sm text-muted-foreground mt-2">
// //                   {plan.description}
// //                 </p>
// //                 <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
// //                   <span className="text-4xl">{plan.price}</span>
// //                   <span className="text-sm text-muted-foreground">
// //                     {" "}
// //                     {plan.frequency}
// //                   </span>
// //                 </p>
// //                 <Button variant={plan.buttonVariant} className="gap-4 mt-8 w-full">
// //                   {plan.buttonText} <plan.icon className="w-4 h-4" />
// //                 </Button>

// //                 <div className="mt-8 pt-8 border-t w-full text-left">
// //                   <p className="font-bold mb-4">Features included:</p>
// //                   <ul className="space-y-3">
// //                     {features.map((feature) => {
// //                       const featureValue = feature[plan.name.toLowerCase()]; // Get feature value for the current plan

// //                       // Determine if the feature should be explicitly listed on mobile
// //                       const shouldShowFeature = typeof featureValue === "boolean"
// //                         ? featureValue // If boolean, show if true
// //                         : !!featureValue; // If string, show if it has a value

// //                       if (shouldShowFeature) {
// //                         return (
// //                           <li key={`${plan.name}-${feature.name}-mobile`} className="flex items-center gap-2">
// //                             {typeof featureValue === "boolean" ? (
// //                               featureValue ? (
// //                                 <Check className="w-4 h-4 text-primary" />
// //                               ) : (
// //                                 <Minus className="w-4 h-4 text-muted-foreground" />
// //                               )
// //                             ) : (
// //                               <Check className="w-4 h-4 text-primary" /> // Assume string values mean included
// //                             )}
// //                             {feature.name} {typeof featureValue === "string" && <span className="text-muted-foreground">({featureValue})</span>}
// //                           </li>
// //                         );
// //                       }
// //                       return null; // Don't render if not included and no specific detail for mobile
// //                     })}
// //                   </ul>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export { Pricing };
// // // import { Check, Minus, MoveRight } from "lucide-react";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";

// // // const pricingPlans = [
// // //   {
// // //     name: "Starter Plan",
// // //     price: "$19",
// // //     frequency: "per month",
// // //     description: "",
// // //     buttonText: "Start Free Trial",
// // //     buttonVariant: "outline",
// // //     highlight: false,
// // //   },
// // //   {
// // //     name: "Growth Plan",
// // //     price: "$49",
// // //     frequency: "per month",
// // //     description: "",
// // //     buttonText: "Start Free Trial",
// // //     buttonVariant: "default",
// // //     highlight: true,
// // //   },
// // //   {
// // //     name: "Enterprise plan",
// // //     price: "$99",
// // //     frequency: "per month",
// // //     description: "",
// // //     buttonText: "Start Free Trial",
// // //     buttonVariant: "outline",
// // //     highlight: false,
// // //   },
// // // ];

// // // const features = [
// // //   { name: "Users", starter: "2", growth: "Up to 10", enterprise: "Unlimited" },
// // //   { name: "Workspace", starter: "1", growth: "Unlimited", enterprise: "Unlimited" },
// // //   { name: "Campaign Automation", starter: "Basic", growth: "Advanced", enterprise: "Advanced + AI" },
// // //   { name: "Audience Segmentation", starter: false, growth: true, enterprise: true },
// // //   { name: "Performance Optimization Dashboard", starter: "Basic", growth: "Full Access", enterprise: "Advanced" },
// // //   { name: "Scheduled Campaign", starter: false, growth: true, enterprise: true },
// // //   { name: "Team Collaboration", starter: false, growth: "Basic Sharing", enterprise: "Full Team Tools" },
// // //   { name: "Access Roles & Permissions", starter: false, growth: true, enterprise: true },
// // //   { name: "Custom Templates", starter: "Limited", growth: true, enterprise: "Sharable sites" },
// // //   { name: "Integration Support", starter: "Basic", growth: "Standard", enterprise: "Premium + API" },
// // //   { name: "White-label Branding", starter: false, growth: true, enterprise: true },
// // //   { name: "Customer Support", starter: "Email", growth: "Priority Email", enterprise: "Dedicated Manager" },
// // // ];

// // // function Pricing() {
// // //   return (
// // //     <div id="pricing" className="w-full py-20 lg:py-40">
// // //       <div className="container mx-auto">
// // //         <div className="flex text-center justify-center items-center gap-4 flex-col">
// // //           <h2 className="text-4xl md:text-5xl font-bold">
// // //             Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">All Plans</span>
// // //           </h2>
// // //           <p className="text-muted-foreground mt-2 text-sm">
// // //             Choose a plan that fits your needs, from startups to enterprises
// // //           </p>

// // //           <div className="mt-10 w-full overflow-hidden border rounded-xl">
// // //             <div className="hidden lg:grid grid-cols-4 text-sm divide-x divide-y">
// // //               {/* Empty top-left */}
// // //               <div></div>

// // //               {/* Plan Cards */}
// // //               {pricingPlans.map((plan) => (
// // //                 <div
// // //                   key={plan.name}
// // //                   className={`p-6 flex flex-col gap-2 text-center ${
// // //                     plan.highlight ? "bg-[#F4F0FF]" : ""
// // //                   }`}
// // //                 >
// // //                   <p className="text-lg font-medium">{plan.name}</p>
// // //                   <p className="text-3xl font-bold">{plan.price}</p>
// // //                   <p className="text-muted-foreground">{plan.frequency}</p>
// // //                   <Button
// // //                     variant={plan.buttonVariant}
// // //                     className="mt-4"
// // //                   >
// // //                     {plan.buttonText}
// // //                   </Button>
// // //                 </div>
// // //               ))}

// // //               {/* Features Heading Row */}
// // //               <div className="font-semibold px-6 py-4 bg-muted col-span-1">Features</div>
// // //               <div className="bg-muted"></div>
// // //               <div className="bg-muted"></div>
// // //               <div className="bg-muted"></div>

// // //               {/* Feature Rows */}
// // //               {features.map((feature) => (
// // //                 <>
// // //                   <div key={feature.name} className="px-6 py-4 font-medium">
// // //                     {feature.name}
// // //                   </div>
// // //                   {["starter", "growth", "enterprise"].map((planKey) => {
// // //                     const value = feature[planKey];
// // //                     return (
// // //                       <div
// // //                         key={`${feature.name}-${planKey}`}
// // //                         className="px-6 py-4 flex justify-center items-center"
// // //                       >
// // //                         {typeof value === "boolean" ? (
// // //                           value ? (
// // //                             <Check className="w-5 h-5 text-[#9B7BFF]" />
// // //                           ) : (
// // //                             <Minus className="w-5 h-5 text-[#FFD782]" />
// // //                           )
// // //                         ) : (
// // //                           <span className="text-muted-foreground">{value}</span>
// // //                         )}
// // //                       </div>
// // //                     );
// // //                   })}
// // //                 </>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export { Pricing };
// import { Check } from "lucide-react";

// const pricingPlans = [
//   {
//     name: "Free",
//     price: "$0",
//     frequency: "/month",
//     description: "Free plan for all users.",
//     features: [
//       "Console",
//       "PitchMaster Deck"
//     ],
//     bg: "from-[#FFECE2] to-[#FFF5EF]", // pastel peach-orange
//   },
//   {
//     name: "$15",
//     price: "$15",
//     frequency: "/month",
//     description: "Ideal for small businesses.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate"
//     ],
//     bg: "from-[#EAE4FF] to-[#F4F0FF]", // pastel purple
//   },
//   {
//     name: "$25",
//     price: "$25",
//     frequency: "/month",
//     description: "Works best for enterprise companies.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot"
//     ],
//     bg: "from-[#D7F4FF] to-[#ECF9FF]", // pastel blue
//   },
// ];

// export function Pricing() {
//   return (
//     <section className="w-full py-16 md:py-24 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-2">Pricing plans</h2>
//         <p className="text-gray-600 mb-10">StartAI features that will help your company scale faster</p>

//         <div className="grid gap-6 md:grid-cols-3">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl shadow-md p-8 bg-gradient-to-b ${plan.bg} text-left flex flex-col justify-between`}
//             >
//               <div>
//                 <h3 className="text-3xl font-bold mb-1">{plan.name}</h3>
//                 <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

//                 <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 mb-6">
//                   Get Started
//                 </button>

//                 <ul className="space-y-3">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm">
//                       <Check className="w-4 h-4 text-black" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     frequency: "/month",
//     description: "Free plan for all users.",
//     features: ["Console", "PitchMaster Deck"],
//     background:
//       "from-[#FFEFE5] to-[#FFE0C7] dark:from-[#3a2c2b] dark:to-[#2d1f1e]",
//   },
//   {
//     name: "$15",
//     price: "$15",
//     frequency: "/month",
//     description: "Ideal for small businesses.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//     ],
//     background:
//       "from-[#EDE7FE] to-[#D9CEFF] dark:from-[#332c49] dark:to-[#2a2540]",
//   },
//   {
//     name: "$25",
//     price: "$25",
//     frequency: "/month",
//     description: "Works best for enterprise companies.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot",
//     ],
//     background:
//       "from-[#E4F1FA] to-[#C8E6F9] dark:from-[#20343f] dark:to-[#1a2c36]",
//   },
// ];
// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     frequency: "/month",
//     description: "Free plan for all users.",
//     features: ["Console", "PitchMaster Deck"],
//     background:
//       "from-[#FFEFE5] to-[#FFE0C7] dark:from-[#4B2E2B] dark:to-[#3B211F]",
//   },
//   {
//     name: "$15",
//     price: "$15",
//     frequency: "/month",
//     description: "Ideal for small businesses.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//     ],
//     background:
//       "from-[#EDE7FE] to-[#D9CEFF] dark:from-[#463366] dark:to-[#33234D]",
//   },
//   {
//     name: "$25",
//     price: "$25",
//     frequency: "/month",
//     description: "Works best for enterprise companies.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot",
//     ],
//     background:
//       "from-[#E4F1FA] to-[#C8E6F9] dark:from-[#23434F] dark:to-[#1A2F36]",
//   },
// ];


// const allFeatures = [
//   "Console",
//   "PitchMaster Deck",
//   "Enhanced PitchMasterAI feedback",
//   "Evaluate",
//   "Mentorship & Guidance",
//   "Founders Copilot",
// ];

// export function Pricing() {
//   return (
//     <section className="w-full py-16 md:py-24 bg-white dark:bg-black transition-colors">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">
//           Pricing plans
//         </h2>
//         <p className="text-muted-foreground dark:text-gray-400">
//           StartAI features that will help your company scale faster
//         </p>
//       </div>

//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.03] hover:shadow-xl transition-transform bg-gradient-to-b ${plan.background}`}
//           >
//             <h3 className="text-3xl font-bold mb-1 text-black dark:text-white">
//               {plan.name === "$0" ? "Free" : plan.price}
//               <span className="text-base font-normal text-gray-600 dark:text-gray-300">
//                 {plan.frequency}
//               </span>
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               {plan.description}
//             </p>

//             <button className="w-full py-2 rounded-full font-medium border border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
//               Get Started
//             </button>

//             <ul className="mt-6 space-y-3">
//               {allFeatures.map((feature, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
//                 >
//                   {plan.features.includes(feature) ? (
//                     <span className="w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center">
//                       <Check className="w-3 h-3 text-white dark:text-black" />
//                     </span>
//                   ) : (
//                     <span className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
//                       {/* Empty circle for missing feature */}
//                     </span>
//                   )}
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     frequency: "/month",
//     description: "Great for trying PitchOS and for tiny teams.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//     ],
//     buttonText: "Start for Free",
//     highlight: false,
//   },
//   {
//     name: "Pro",
//     price: "$15",
//     frequency: "/month",
//     description: "Ideal for small businesses.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//     ],
//     buttonText: "Sign up with Pro Plan",
//     highlight: true,
//   },
//   {
//     name: "Enterprise",
//     price: "$25",
//     frequency: "/month",
//     description: "Works best for enterprise companies.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot",
//     ],
//     buttonText: "Sign up with Enterprise",
//     highlight: false,
//   },
// ];

// const allFeatures = [
//   "Console",
//   "PitchMaster Deck",
//   "Enhanced PitchMasterAI feedback",
//   "Evaluate",
//   "Mentorship & Guidance",
//   "Founders Copilot",
// ];

// export function Pricing() {
//   return (
//     <section className="w-full py-24 bg-[#0C0C0D] text-white">
//       <div className="text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-transparent">
//           Simple and Affordable Pricing Plans
//         </h2>
//         <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
//           StartAI features that will help your company scale faster
//         </p>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-8 bg-gradient-to-b from-[#1A1A1A] to-[#111] border border-zinc-700 relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-300`}
//           >
//             {plan.highlight && (
//               <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-full -z-10" />
//             )}

//             <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
//             <p className="text-3xl font-extrabold mb-1 text-green-300">{plan.price}<span className="text-base font-medium text-zinc-400">{plan.frequency}</span></p>
//             <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>

//             <button
//               className={`w-full py-2 rounded-full font-medium transition duration-200 ${
//                 plan.highlight
//                   ? "bg-orange-500 text-white hover:bg-orange-600"
//                   : "bg-zinc-800 text-white hover:bg-zinc-700"
//               }`}
//             >
//               {plan.buttonText}
//             </button>

//             <div className="mt-6 border-t border-zinc-700 pt-4">
//               <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
//                 Features
//               </p>
//               <ul className="space-y-3">
//                 {allFeatures.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-sm">
//                     {plan.features.includes(feature) ? (
//                       <span className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
//                         <Check className="w-3 h-3 text-black" />
//                       </span>
//                     ) : (
//                       <span className="w-5 h-5 rounded-full border border-zinc-600" />
//                     )}
//                     <span className={plan.features.includes(feature) ? "text-white" : "text-zinc-500"}>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import { Check } from "lucide-react";

// import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     frequency: "/month",
//     description: "Free plan for all users.",
//     features: ["Console", "PitchMaster Deck"],
//     background:
//       "from-[#FFEFE5] to-[#FFE0C7] dark:from-[#3a2c2b] dark:to-[#2d1f1e]",
//   },
//   {
//     name: "$15",
//     price: "$15",
//     frequency: "/month",
//     description: "Ideal for small businesses.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//     ],
//     background:
//       "from-[#EDE7FE] to-[#D9CEFF] dark:from-[#332c49] dark:to-[#2a2540]",
//   },
//   {
//     name: "$25",
//     price: "$25",
//     frequency: "/month",
//     description: "Works best for enterprise companies.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot",
//     ],
//     background:
//       "from-[#E4F1FA] to-[#C8E6F9] dark:from-[#20343f] dark:to-[#1a2c36]",
//   },
// ];

// const allFeatures = [
//   "Console",
//   "PitchMaster Deck",
//   "Enhanced PitchMasterAI feedback",
//   "Evaluate",
//   "Mentorship & Guidance",
//   "Founders Copilot",
// ];

// export function Pricing() {
//   return (
//     <section className="w-full py-16 md:py-24 bg-white dark:bg-black transition-colors">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">
//           Pricing plans
//         </h2>
//         <p className="text-muted-foreground dark:text-gray-400">
//           StartAI features that will help your company scale faster
//         </p>
//       </div>

//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-6 md:p-8 shadow-md hover:scale-[1.03] hover:shadow-xl transition-transform bg-gradient-to-b ${plan.background}`}
//           >
//             <h3 className="text-3xl font-bold mb-1 text-black dark:text-white">
//               {plan.name === "$0" ? "Free" : plan.price}
//               <span className="text-base font-normal text-gray-600 dark:text-gray-300">
//                 {plan.frequency}
//               </span>
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               {plan.description}
//             </p>

//             <button className="w-full py-2 rounded-full font-medium border border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
//               Get Started
//             </button>

//             <ul className="mt-6 space-y-3">
//               {allFeatures.map((feature, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
//                 >
//                   {plan.features.includes(feature) ? (
//                     <span className="w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center">
//                       <Check className="w-3 h-3 text-white dark:text-black" />
//                     </span>
//                   ) : (
//                     <span className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
//                       {/* Empty circle for missing feature */}
//                     </span>
//                   )}
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import { Check } from "lucide-react";

// cimport { Check } from "lucide-react";



// import { Check } from "lucide-react";

// cimport { Check } from "lucide-react";




// const plans = [
//   {
//     name: "Basic",
//     price: "$0",
//     frequency: "/month",
//     description: "Great for trying out StartAI and for tiny teams.",
//     features: ["Console", "PitchMaster Deck"],
//     buttonText: "Start for Free",
//     highlight: false,
//     lightBg: "from-[#FFEFE5] to-[#FFE0C7]",
//   },
//   {
//     name: "Pro Plan",
//     price: "$15",
//     frequency: "/month",
//     description: "Best for small teams scaling fast.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//     ],
//     buttonText: "Sign up with Pro Plan",
//     highlight: true,
//     lightBg: "from-[#EDE7FE] to-[#D9CEFF]",
//   },
//   {
//     name: "Enterprise",
//     price: "$25",
//     frequency: "/month",
//     description: "Great for growing startups and enterprises.",
//     features: [
//       "Console",
//       "PitchMaster Deck",
//       "Enhanced PitchMasterAI feedback",
//       "Evaluate",
//       "Mentorship & Guidance",
//       "Founders Copilot",
//     ],
//     buttonText: "Sign up with Enterprise",
//     highlight: false,
//     lightBg: "from-[#E4F1FA] to-[#C8E6F9]",
//   },
// ];

// const allFeatures = [
//   "Console",
//   "PitchMaster Deck",
//   "Enhanced PitchMasterAI feedback",
//   "Evaluate",
//   "Mentorship & Guidance",
//   "Founders Copilot",
// ];

// export function Pricing() {
//   return (
//     <section className="relative w-full py-16 bg-white dark:bg-[#0C0C0D] text-black dark:text-white overflow-hidden">
//       {/* Dark background effects */}
//       <div className="absolute inset-0 z-0 hidden dark:block">
//         <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/10 rounded-full blur-[160px] opacity-30" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-[#0C0C0D]" />
//       </div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-12 px-4">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
//           Simple and Affordable Pricing Plans
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto">
//           Start tracking and improving your finance management
//         </p>
//       </div>

//       {/* Grid that always shows 3 columns */}
//       <div className="relative z-10 px-2 sm:px-6">
//         <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-full overflow-hidden">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-3 sm:p-4 md:p-6 backdrop-blur-lg border overflow-hidden shadow-md hover:shadow-xl transition duration-300
//                 bg-gradient-to-b ${plan.lightBg} dark:bg-black/30 dark:bg-none dark:backdrop-blur-lg
//                 border-zinc-200 dark:border-white/10 text-xs sm:text-sm
//               `}
//             >
//               <h3 className="text-base sm:text-lg font-semibold mb-1 text-black dark:text-[#d0bfff]">
//                 {plan.name}
//               </h3>
//               <p className="text-xl font-bold mb-1 text-black dark:text-[#d0bfff]">
//                 {plan.price}
//                 <span className="text-xs font-medium text-gray-600 dark:text-zinc-400">
//                   {plan.frequency}
//                 </span>
//               </p>
//               <p className="text-xs text-gray-600 dark:text-zinc-400 mb-4">
//                 {plan.description}
//               </p>

//               <button
//                 className="w-full py-1.5 rounded-full text-xs font-medium border bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-black hover:text-white dark:hover:bg-zinc-700 dark:border-white border-black"
//               >
//                 {plan.buttonText}
//               </button>

//               {/* Features */}
//               <div className="mt-4 border-t border-gray-300 dark:border-zinc-700 pt-3">
//                 <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-zinc-500 mb-2">
//                   Features
//                 </p>
//                 <ul className="space-y-2">
//                   {allFeatures.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className={`flex items-center gap-2 text-xs ${
//                         plan.features.includes(feature)
//                           ? "text-black dark:text-[#d0bfff]"
//                           : "text-gray-400 dark:text-zinc-500"
//                       }`}
//                     >
//                       {plan.features.includes(feature) ? (
//                         <span className="w-4 h-4 rounded-full bg-black dark:bg-[#d0bfff] flex items-center justify-center">
//                           <Check className="w-2 h-2 text-white dark:text-black" />
//                         </span>
//                       ) : (
//                         <span className="w-4 h-4 rounded-full border border-gray-300 dark:border-zinc-600" />
//                       )}
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { Check } from "lucide-react";
// import { Check } from "lucide-react";
// import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    frequency: "/month",
    description: "Great for trying out StartAI and for tiny teams.",
    features: ["Console", "PitchMaster Deck"],
    buttonText: "Start for Free",
    highlight: false,
    lightBg: "from-[#FFEFE5] to-[#FFE0C7]",
  },
  {
    name: "Pro Plan",
    price: "$15",
    frequency: "/month",
    description: "Best for small teams scaling fast.",
    features: [
      "Console",
      "PitchMaster Deck",
      "Enhanced PitchMasterAI feedback",
      "Evaluate",
    ],
    buttonText: "Sign up with Pro Plan",
    highlight: true,
    lightBg: "from-[#EDE7FE] to-[#D9CEFF]",
  },
  {
    name: "Enterprise",
    price: "$25",
    frequency: "/month",
    description: "Great for growing startups and enterprises.",
    features: [
      "Console",
      "PitchMaster Deck",
      "Enhanced PitchMasterAI feedback",
      "Evaluate",
      "Mentorship & Guidance",
      "Founders Copilot",
    ],
    buttonText: "Sign up with Enterprise",
    highlight: false,
    lightBg: "from-[#E4F1FA] to-[#C8E6F9]",
  },
];

const allFeatures = [
  "Console",
  "PitchMaster Deck",
  "Enhanced PitchMasterAI feedback",
  "Evaluate",
  "Mentorship & Guidance",
  "Founders Copilot",
];

export function Pricing() {
  return (
    <section className="relative w-full py-16 bg-white dark:bg-[#0C0C0D] text-black dark:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/10 rounded-full blur-[160px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-[#0C0C0D]" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          Simple and Affordable Pricing Plans
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto">
          Start tracking and improving your finance management
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="relative z-10 px-2 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-full overflow-hidden">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 md:p-6 backdrop-blur-lg border overflow-hidden shadow-md transition duration-300 transform
                bg-gradient-to-b ${plan.lightBg} dark:bg-black/30 dark:bg-none dark:backdrop-blur-lg
                border-zinc-200 dark:border-zinc-700 min-h-[520px]
                hover:scale-[1.025] hover:shadow-xl
              `}
            >
              {/* Title & Price */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-[#d0bfff]">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold mb-1 text-black dark:text-[#d0bfff]">
                {plan.price}
                <span className="text-sm font-medium text-gray-600 dark:text-zinc-400 ml-1">
                  {plan.frequency}
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-zinc-400 mb-5">
                {plan.description}
              </p>

              {/* Features */}
              <div className="mt-6 border-t border-gray-300 dark:border-zinc-700 pt-4">
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-zinc-500 mb-3">
                  Features
                </p>
                <ul className="space-y-3">
                  {allFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm ${
                        plan.features.includes(feature)
                          ? "text-black dark:text-[#d0bfff]"
                          : "text-gray-400 dark:text-zinc-500"
                      }`}
                    >
                      {plan.features.includes(feature) ? (
                        <span className="w-5 h-5 rounded-full bg-black dark:bg-[#d0bfff] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white dark:text-black" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-gray-300 dark:border-zinc-600" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-6">
                <button
                  className="w-full py-2 rounded-full text-sm font-medium border bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-black hover:text-white dark:hover:bg-zinc-700 dark:border-white border-black"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
