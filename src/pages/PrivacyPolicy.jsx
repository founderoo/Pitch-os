


















// import React from "react";
// import PrivacyIllustration from "../assets/privacy-illustration.jpg"; // Adjust path as needed

// const VECTOR_LIGHT_PINK = "#FBEAFF"; // Use the exact light pink hex from your image here

// const PrivacyPolicy = () => (
//   <div
//     className="w-full min-h-screen flex flex-col justify-center items-center py-12 px-2"
//     style={{ backgroundColor: VECTOR_LIGHT_PINK }}
//   >
//     <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full max-w-5xl gap-10">
//       {/* IMAGE: right on desktop */}
//       <div className="flex-shrink-0 flex justify-center items-start w-full md:w-1/2 mb-6 md:mb-0">
//         <img
//           src={PrivacyIllustration}
//           alt="Privacy Policy Illustration"
//           className="w-80 max-w-full h-auto rounded-xl shadow-md"
//         />
//       </div>
//       {/* CONTENT: left on desktop */}
//       <div className="bg-white bg-opacity-80 p-8 w-full md:w-1/2 rounded-xl shadow-md">
//         <h1 className="text-3xl font-bold text-purple-800 mb-6 text-left md:text-center">
//           Privacy Policy
//         </h1>
//         <p className="mb-5 text-gray-700">
//           Your privacy is important to us. This privacy policy explains what personal information we collect, how we use it, and your rights regarding your data.
//         </p>
//         <h2 className="text-xl font-semibold text-purple-700 mb-2">
//           Information We Collect
//         </h2>
//         <ul className="list-disc ml-7 mb-5 text-gray-700">
//           <li>Information you provide directly (name, email, etc.)</li>
//           <li>Usage data (pages visited, actions taken)</li>
//           <li>Cookies and tracking information</li>
//         </ul>
//         <h2 className="text-xl font-semibold text-purple-700 mb-2">
//           How We Use Your Information
//         </h2>
//         <ul className="list-disc ml-7 mb-5 text-gray-700">
//           <li>To provide and improve our services</li>
//           <li>To communicate with you</li>
//           <li>For analytics and research</li>
//           <li>To comply with legal obligations</li>
//         </ul>
//         <h2 className="text-xl font-semibold text-purple-700 mb-2">
//           Your Rights
//         </h2>
//         <ul className="list-disc ml-7 mb-5 text-gray-700">
//           <li>Access, update, or delete your data</li>
//           <li>Opt-out of certain data uses</li>
//           <li>Contact us for privacy concerns</li>
//         </ul>
//         <p className="text-gray-700">
//           For more details or inquiries, please contact us at{" "}
//           <a
//             href="mailto:support@example.com"
//             className="text-purple-700 underline"
//           >
//             support@example.com
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default PrivacyPolicy;
import React from "react";
import PrivacyIllustration from "../assets/privacy-illustration.jpg"; // Sahi path use karein

const VECTOR_LIGHT_PINK = "#FBEAFF";

const PrivacyPolicy = () => (
  <div
    className="w-full min-h-screen flex flex-col justify-center items-center py-12 px-2"
    style={{ backgroundColor: VECTOR_LIGHT_PINK }}
  >
    <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full max-w-5xl gap-10">
      {/* IMAGE: Right on desktop */}
      <div className="flex-shrink-0 flex justify-center items-start w-full md:w-1/2 mb-6 md:mb-0 md:pl-6">
        <img
          src={PrivacyIllustration}
          alt="Privacy Policy Illustration"
          className="w-[656px] h-[500px] rounded-xl shadow-md"
        />
      </div>

      {/* CONTENT: Left on desktop */}
      <div className="bg-white bg-opacity-80 p-8 w-full md:w-1/2 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-left md:text-center">
          Privacy Policy
        </h1>

        <p className="mb-5 text-gray-700">
          Your privacy is important to us. This privacy policy explains what personal information we collect, how we use it, and your rights regarding your data.
        </p>

        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc ml-7 mb-5 text-gray-700">
          <li>Information you provide directly (name, email, etc.)</li>
          <li>Usage data (pages visited, actions taken)</li>
          <li>Cookies and tracking information</li>
        </ul>

        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc ml-7 mb-5 text-gray-700">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>For analytics and research</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Your Rights
        </h2>
        <ul className="list-disc ml-7 mb-5 text-gray-700">
          <li>Access, update, or delete your data</li>
          <li>Opt-out of certain data uses</li>
          <li>Contact us for privacy concerns</li>
        </ul>

        <p className="text-gray-700">
          For more details or inquiries, please contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-purple-700 underline"
          >
            support@example.com
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
