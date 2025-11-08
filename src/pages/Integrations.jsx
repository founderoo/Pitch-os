
import React from "react";

// Sample integration data
const integrationsList = [
  {
    name: "Google Slides",
    description: "Import and sync your pitch deck directly with Google Slides for real-time editing.",
    icon: "🧾",
  },
  {
    name: "Slack",
    description: "Send pitch status updates or feedback directly to your Slack team channel.",
    icon: "💬",
  },
  {
    name: "Notion",
    description: "Export pitch outlines and notes into Notion for centralized collaboration.",
    icon: "📓",
  },
  {
    name: "Zoom",
    description: "Schedule pitch rehearsals and investor meets with Zoom calendar integration.",
    icon: "📹",
  },
  {
    name: "HubSpot",
    description: "Track investor leads, send follow-ups, and sync contact data automatically.",
    icon: "📈",
  },
  {
    name: "Zapier",
    description: "Automate your workflow by connecting PitchOS with 5000+ apps via Zapier.",
    icon: "🔗",
  },
];

const Integrations = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-800 text-center mb-6">
        Seamless Integrations
      </h1>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        PitchOS connects effortlessly with your favorite tools so you can focus on pitching, not switching.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {integrationsList.map((integration, index) => (
          <div
            key={index}
            className="bg-white border border-purple-100 rounded-lg shadow-md hover:shadow-purple-200/50 transition-shadow duration-300 p-6 flex flex-col gap-4"
          >
            <div className="text-5xl">{integration.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{integration.name}</h2>
            <p className="text-gray-600 text-sm">{integration.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
