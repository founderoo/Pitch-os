import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react"; 

const pricingPlans = [
  {
    name: "Basic",
    price: "₹0",
    frequency: "/ month",
    description: "Perfect for individual founders getting started with their first pitch.",
    buttonText: "Start a Basic Plan",
    buttonVariant: "outline",
    icon: MoveRight,
  },
  {
    name: "Regular",
    price: "₹499",
    frequency: "/ month",
    description: "For growing startups ready to refine and scale their pitching efforts.",
    buttonText: "Start Regular Plan",
    buttonVariant: "default",
    icon: MoveRight,
  },
];

const features = [
  { name: "Console", basic: true, regular: true },
  { name: "PitchMaster Deck", basic: true, regular: true },
  { name: "Enhanced PitchMasterAI feedback", basic: false, regular: true },
  { name: "Evaluate", basic: false, regular: true },
  { name: "Mentorship & Guidance", basic: false, regular: false },
  { name: "Founders Copilot", basic: false, regular: false },
];
function Pricing() {
  return (
    <div 
      id="pricing" 
      className="w-full py-20 lg:py-40 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" 
      style={{ backgroundColor: '#F5F2E8' }}
    >
      <div
        aria-hidden
        className="z-[1] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block"
      >
        <div className="w-[25rem] h-[60rem] -translate-y-[250px] absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
      </div>

      <div className="container mx-auto relative z-[2]">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="bg-white/80 group mx-auto flex w-fit items-center gap-2 rounded-full border border-purple-200 px-4 py-2 shadow-md shadow-purple-200/50 backdrop-blur-sm">
            <span className="text-purple-600 text-sm font-medium">Pricing</span>
          </div>

          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-gray-700">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-center">
              Tailored plans to help every type of founder to achieve their funding goals.
            </p>
          </div>

          {/* Desktop Pricing Grid */}
          <div className="hidden lg:grid text-left w-full grid-cols-3 divide-x divide-y pt-10 md:pt-20 border border-purple-200 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg shadow-purple-200/30">
            <div className="col-span-1 px-3 py-4"></div>

            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`px-3 py-6 md:px-6 md:py-8 gap-2 flex flex-col items-center text-center transition-all duration-300 ${
                  plan.name === "Regular"
                    ? "bg-gradient-to-br from-purple-50 to-yellow-50 border-x-2 border-purple-300 relative"
                    : "hover:bg-white/80"
                }`}
              >
                {plan.name === "Regular" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                <p className="text-2xl font-semibold text-gray-700">{plan.name}</p>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.frequency}</span>
                </p>

                <div className={`${plan.name === "Regular" ? "bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5" : ""} transition-all duration-300 mt-8 w-full`}>
                  <Button
                    variant={plan.name === "Regular" ? "default" : "outline"}
                    className={`gap-4 w-full ${
                      plan.name === "Regular"
                        ? "rounded-xl px-5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold shadow-lg hover:shadow-yellow-500/25"
                        : "border-purple-200 hover:border-yellow-500/50 hover:bg-yellow-50 text-gray-700"
                    }`}
                  >
                    {plan.buttonText} <plan.icon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="col-span-1 px-3 lg:px-6 py-4 border-t text-left bg-gradient-to-r from-purple-50 to-yellow-50">
              <b className="text-gray-700">Features</b>
            </div>
            <div></div>
            <div></div>

            {features.map((feature, index) => (
              <React.Fragment key={feature.name}>
                <div className={`col-span-1 px-3 lg:px-6 py-4 border-t text-left text-gray-700 ${index % 2 === 0 ? "bg-white/30" : "bg-transparent"}`}>
                  {feature.name}
                </div>
                {pricingPlans.map((plan) => {
                  const featureValue = feature[plan.name.toLowerCase()];
                  return (
                    <div key={`${plan.name}-${feature.name}-desktop`} className={`px-3 py-4 flex justify-center border-t ${index % 2 === 0 ? "bg-white/30" : "bg-transparent"}`}>
                      {typeof featureValue === "boolean" ? (
                        featureValue ? (
                          <Check className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        <p className="text-gray-600 text-sm">{featureValue}</p>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden w-full flex flex-col gap-8 pt-10 md:pt-20">
            {pricingPlans.map((plan) => (
              <div
                key={`mobile-${plan.name}`}
                className={`border rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 relative ${
                  plan.name === "Regular"
                    ? "bg-gradient-to-br from-purple-50 to-yellow-50 border-purple-300 shadow-lg shadow-purple-200/30"
                    : "bg-white/50 border-purple-200 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
                } backdrop-blur-sm`}
              >
                {plan.name === "Regular" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                <p className="text-2xl font-semibold text-gray-700">{plan.name}</p>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.frequency}</span>
                </p>

                <div className={`${plan.name === "Regular" ? "bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5" : ""} transition-all duration-300 mt-8 w-full`}>
                  <Button
                    variant={plan.name === "Regular" ? "default" : "outline"}
                    className={`gap-4 w-full ${
                      plan.name === "Regular"
                        ? "rounded-xl px-5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold shadow-lg hover:shadow-yellow-500/25"
                        : "border-purple-200 hover:border-yellow-500/50 hover:bg-yellow-50 text-gray-700"
                    }`}
                  >
                    {plan.buttonText} <plan.icon className="w-4 h-4" />
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-purple-200/50 w-full text-left">
                  <p className="font-bold mb-4 text-gray-700">Features included:</p>
                  <ul className="space-y-3">
                    {features.map((feature) => {
                      const featureValue = feature[plan.name.toLowerCase()];
                      const shouldShow = typeof featureValue === "boolean" ? featureValue : !!featureValue;
                      if (!shouldShow) return null;

                      return (
                        <li key={`${plan.name}-${feature.name}-mobile`} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700">{feature.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
