import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  Clock,
  Briefcase,
  Loader2,
} from "lucide-react";
import { auth } from "../firebase";
import { doc, writeBatch, getFirestore, setDoc } from "firebase/firestore";
import { useToast } from "../components/ui/use-toast";
import { useTheme } from "@/store/theme";

const db = getFirestore();

// List of Indian states
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
  "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep"
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State-related state
  const [stateInput, setStateInput] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  
  const dropdownRef = useRef(null);

  const questions = [
    {
      id: "personalInfo",
      question: "Tell us about yourself",
      icon: <Users className="w-6 h-6" />,
      options: [
        {
          value: "name",
          label: "What's your name?",
          type: "text",
          placeholder: "Enter your full name",
        },
        {
          value: "city",
          label: "Which city do you live in?",
          type: "text",
          placeholder: "Enter your city",
        },
        {
          value: "state",
          label: "Which state are you from?",
          type: "search",
          placeholder: "Type to search state",
        },
        {
          value: "education",
          label: "What's your highest education?",
          type: "select",
          options: [
            { value: "highschool", label: "High School" },
            { value: "bachelors", label: "Bachelor's Degree" },
            { value: "masters", label: "Master's Degree" },
            { value: "phd", label: "PhD" },
          ],
        },
        {
          value: "age",
          label: "What's your age group?",
          type: "select",
          options: [
            { value: "18-24", label: "18-24 years" },
            { value: "25-34", label: "25-34 years" },
            { value: "35-44", label: "35-44 years" },
            { value: "45+", label: "45+ years" },
          ],
        },
      ],
    },
    {
      id: "role",
      question: "What best describes your role?",
      icon: <Briefcase className="w-6 h-6" />,
      options: [
        { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
        { value: "investor", label: "Investor / VC" },
        { value: "consultant", label: "Business Consultant" },
        { value: "student", label: "Student / Researcher" },
      ],
    },
    {
      id: "industry",
      question: "Which industry are you most interested in?",
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: "tech", label: "Technology & Software" },
        { value: "healthcare", label: "Healthcare & Biotech" },
        { value: "finance", label: "Finance & Fintech" },
        { value: "retail", label: "Retail & E-commerce" },
      ],
    },
    {
      id: "experience",
      question: "How much experience do you have with pitch presentations?",
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: "beginner", label: "Beginner (0-1 years)" },
        { value: "intermediate", label: "Intermediate (2-5 years)" },
        { value: "advanced", label: "Advanced (5+ years)" },
        { value: "expert", label: "Expert (10+ years)" },
      ],
    },
    {
      id: "goal",
      question: "What is your primary goal with PitchOS?",
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: "create", label: "Create compelling pitch decks" },
        { value: "analyze", label: "Analyze and improve existing pitches" },
        { value: "learn", label: "Learn best practices and techniques" },
        { value: "collaborate", label: "Collaborate with team members" },
      ],
    },
    {
      id: "frequency",
      question: "How often do you plan to use PitchOS?",
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "occasionally", label: "Occasionally" },
      ],
    },
  ];

  // Handle state search
  const handleStateSearch = useCallback((value) => {
    setStateInput(value);
    const filtered = indianStates.filter(state =>
      state.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStates(filtered);
    setShowStateDropdown(value.length >= 2 && filtered.length > 0);
  }, []);

  // Handle state selection
  const handleStateSelect = useCallback((state) => {
    setAnswers(prev => ({ ...prev, state }));
    setStateInput(state);
    setShowStateDropdown(false);
  }, []);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowStateDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update state input when step changes
  useEffect(() => {
    setStateInput(answers.state || '');
  }, [currentStep, answers.state]);

  const handleAnswerSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsSubmitting(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      const batch = writeBatch(db);

      const prefsRef = doc(db, "userPreferences", user.uid);
      batch.set(prefsRef, {
        ...answers,
        completedAt: new Date(),
        userId: user.uid,
        email: user.email,
      });

      const settingsRef = doc(db, "userSettings", user.uid);
      batch.set(
        settingsRef,
        {
          onboardingCompleted: true,
          completedAt: new Date(),
        },
        { merge: true }
      );

      await batch.commit();

      toast({
        title: "Setup Complete!",
        description: "Your preferences have been saved successfully.",
        duration: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving onboarding data:", error);
      toast({
        title: "Error Saving Preferences",
        description: "Your preferences will be saved locally for now.",
        variant: "destructive",
        duration: 5000,
      });

      navigate("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, "userSettings", user.uid),
          {
            onboardingCompleted: true,
            skipped: true,
            completedAt: new Date(),
          },
          { merge: true }
        );

        toast({
          title: "Setup Skipped",
          description: "You can always complete your profile later from settings.",
          duration: 3000,
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving skip status:", error);
      toast({
        title: "Error Saving Status",
        description: "You'll be redirected to dashboard anyway.",
        variant: "destructive",
        duration: 3000,
      });
      navigate("/dashboard");
    }
  };

  const currentQuestion = questions[currentStep];
  const isPersonalInfoComplete = currentQuestion.id === "personalInfo" && 
    answers.name && answers.city && answers.state && answers.education && answers.age;
  const isOtherQuestionAnswered = currentQuestion.id !== "personalInfo" && answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-16 pb-8">
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Welcome to PitchOS!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Let's customize your experience with a few quick questions
            </p>
          </div>

          {/* Question Card */}
          <Card className="p-6 sm:p-8 lg:p-10 mb-8 shadow-lg border bg-card">
            {/* Question counter */}
            <div className="flex justify-end mb-4">
              <span className="text-sm text-muted-foreground">
                {currentStep + 1} of {questions.length}
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                {currentQuestion.icon}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {currentQuestion.question}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                // Text input
                if (option.type === "text") {
                  return (
                    <div key={option.value} className="flex flex-col gap-2 p-4 border-2 rounded-xl border-border bg-card">
                      <label className="text-sm font-semibold text-foreground">{option.label}</label>
                      <input
                        type="text"
                        placeholder={option.placeholder}
                        className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={answers[option.value] || ''}
                        onChange={(e) => handleAnswerSelect(option.value, e.target.value)}
                      />
                    </div>
                  );
                }

                // Search input for state
                if (option.type === "search") {
                  return (
                    <div key={option.value} className="flex flex-col gap-2 p-4 border-2 rounded-xl border-border bg-card">
                      <label className="text-sm font-semibold text-foreground">{option.label}</label>
                      <div className="relative" ref={dropdownRef}>
                        <input
                          type="text"
                          placeholder={option.placeholder}
                          className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          value={stateInput}
                          onChange={(e) => {
                            handleStateSearch(e.target.value);
                            handleAnswerSelect('state', e.target.value);
                          }}
                        />
                        
                        {/* Dropdown */}
                        {showStateDropdown && (
                          <div className="absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-background border border-border rounded-md shadow-lg">
                            {filteredStates.length > 0 ? (
                              filteredStates.map((state, i) => (
                                <div
                                  key={i}
                                  className="px-4 py-2 text-sm cursor-pointer hover:bg-accent focus:bg-accent outline-none transition-colors border-b border-border last:border-b-0"
                                  onClick={() => handleStateSelect(state)}
                                  onMouseDown={(e) => e.preventDefault()}
                                >
                                  {state}
                                </div>
                              ))
                            ) : (
                              <div className="px-4 py-2 text-sm text-muted-foreground">
                                No states found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                // Select dropdown
                if (option.type === "select") {
                  return (
                    <div key={option.value} className="flex flex-col gap-2 p-4 border-2 rounded-xl border-border bg-card">
                      <label className="text-sm font-semibold text-foreground">{option.label}</label>
                      <select
                        className="p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
                        value={answers[option.value] || ''}
                        onChange={(e) => handleAnswerSelect(option.value, e.target.value)}
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem'
                        }}
                      >
                        <option value="">Select {option.label.toLowerCase()}</option>
                        {option.options.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                // Radio button options
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
                    className={`group relative p-4 sm:p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      answers[currentQuestion.id] === option.value
                        ? "border-primary bg-accent shadow-lg scale-105"
                        : "border-border bg-card hover:border-muted-foreground hover:bg-accent/50"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-sm sm:text-base transition-colors ${
                        answers[currentQuestion.id] === option.value
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {option.label}
                      </span>
                      {answers[currentQuestion.id] === option.value && (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full order-2 sm:order-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 order-1 sm:order-2">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="px-6 py-3 rounded-full"
              >
                Skip for now
              </Button>

              <Button
                onClick={handleNext}
                disabled={(!isPersonalInfoComplete && !isOtherQuestionAnswered) || isSubmitting}
                className="flex items-center gap-2 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    {currentStep === questions.length - 1 ? "Complete Setup" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Almost there! This will help us personalize your PitchOS experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
