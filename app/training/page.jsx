"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ShieldAlert,
  SprayBottle,
  Checklist,
  User,
  Certificate,
  Video,
  QuizIcon,
  ProgressIcon,
} from "@/components/icons";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

const trainingModules = [
  {
    id: "safety",
    title: "Safety Protocols",
    icon: ShieldAlert,
    courses: [
      {
        title: "Chemical Handling",
        duration: "45m",
        type: "video",
        completed: false,
      },
      {
        title: "PPE Usage",
        duration: "30m",
        type: "interactive",
        completed: true,
      },
    ],
  },
  {
    id: "equipment",
    title: "Equipment Training",
    icon: SprayBottle,
    courses: [
      {
        title: "Floor Machine Operation",
        duration: "1h",
        type: "simulation",
        completed: false,
      },
    ],
  },
  {
    id: "pest-control",
    title: "Pest Control Methods",
    icon: SprayBottle,
    courses: [
      {
        title: "Rodent Control Techniques",
        duration: "30m",
        type: "video",
        completed: false,
      },
      {
        title: "Insect Eradication Procedures",
        duration: "45m",
        type: "interactive",
        completed: false,
      },
      {
        title: "Fumigation Safety",
        duration: "1h",
        type: "simulation",
        completed: false,
      },
    ],
  },
  {
    id: "customer-service",
    title: "Client Relations",
    icon: User,
    courses: [
      {
        title: "Communication Protocols",
        duration: "30m",
        type: "video",
        completed: false,
      },
      {
        title: "Conflict Resolution",
        duration: "45m",
        type: "interactive",
        completed: false,
      },
      {
        title: "Service Documentation",
        duration: "30m",
        type: "quiz",
        completed: false,
      },
    ],
  },
  {
    id: "chemicals",
    title: "Chemical Management",
    icon: BookOpen,
    courses: [
      {
        title: "Dilution Ratios",
        duration: "45m",
        type: "interactive",
        completed: false,
      },
      {
        title: "Hazardous Material Handling",
        duration: "1h",
        type: "simulation",
        completed: false,
      },
      {
        title: "Storage Guidelines",
        duration: "30m",
        type: "video",
        completed: false,
      },
    ],
  },
  {
    id: "advanced-equipment",
    title: "Specialized Equipment",
    icon: SprayBottle,
    courses: [
      {
        title: "Industrial Extractors",
        duration: "1h",
        type: "simulation",
        completed: false,
      },
      {
        title: "Scrubber-Dryer Systems",
        duration: "45m",
        type: "video",
        completed: false,
      },
      {
        title: "HEPA Vacuum Operation",
        duration: "30m",
        type: "interactive",
        completed: false,
      },
    ],
  },
  {
    id: "sanitation",
    title: "Healthcare Sanitation",
    icon: Checklist,
    courses: [
      {
        title: "Biohazard Protocols",
        duration: "1h",
        type: "simulation",
        completed: false,
      },
      {
        title: "Disinfection Standards",
        duration: "45m",
        type: "video",
        completed: false,
      },
      {
        title: "OSHA Compliance",
        duration: "30m",
        type: "interactive",
        completed: false,
      },
    ],
  },
  {
    id: "emergency",
    title: "Crisis Response",
    icon: ShieldAlert,
    courses: [
      {
        title: "Spill Containment",
        duration: "45m",
        type: "simulation",
        completed: false,
      },
      {
        title: "Emergency Evacuation",
        duration: "30m",
        type: "video",
        completed: false,
      },
      {
        title: "First Aid Training",
        duration: "1h",
        type: "interactive",
        completed: false,
      },
    ],
  },
];

export default function TrainingPage() {
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState(35);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [modules, setModules] = useState(trainingModules);

  const calculateProgress = () => {
    const totalCourses = modules.flatMap((m) => m.courses).length;
    const completedCourses = modules
      .flatMap((m) => m.courses)
      .filter((c) => c.completed).length;
    return Math.round((completedCourses / totalCourses) * 100);
  };

  const markCourseComplete = (moduleId, courseIndex) => {
    setModules((prev) =>
      prev.map((module) => {
        if (module.id === moduleId) {
          const updatedCourses = [...module.courses];
          updatedCourses[courseIndex] = {
            ...updatedCourses[courseIndex],
            completed: true,
          };
          return { ...module, courses: updatedCourses };
        }
        return module;
      })
    );
    setProgress(calculateProgress());
  };

  const handleQuizSubmit = (moduleId, courseIndex, answers) => {
    setQuizAnswers((prev) => ({ ...prev, [moduleId]: answers }));
    markCourseComplete(moduleId, courseIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Melostra Training Academy</h1>
          <p className="text-xl mb-8">
            Master professional cleaning and pest control techniques
          </p>
          <div className="max-w-2xl mx-auto bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <span>Overall Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Training Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
              onClick={() => setActiveModule(module)}
            >
              <div className="flex items-center gap-4 mb-4">
                <module.icon className="w-12 h-12 text-blue-600" />
                <h2 className="text-xl font-bold">{module.title}</h2>
              </div>
              <div className="space-y-2">
                {module.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span>{course.title}</span>
                    {course.completed ? (
                      <Checklist className="w-5 h-5 text-green-500" />
                    ) : (
                      <ProgressIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Module Modal */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full p-6"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{activeModule.title}</h3>
                <button
                  onClick={() => setActiveModule(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {activeModule.id === "safety" && (
                  <>
                    <VideoPlayer src="/training/chemical-safety.mp4" />
                    <Quiz
                      questions={[
                        {
                          question: "Proper PPE for acid cleaning?",
                          options: [
                            "Gloves only",
                            "Full face shield + gloves",
                            "No PPE needed",
                          ],
                          correct: 1,
                        },
                      ]}
                      onSubmit={(answers) =>
                        handleQuizSubmit(activeModule.id, 0, answers)
                      }
                    />
                  </>
                )}

                {activeModule.id === "equipment" && (
                  <InteractiveSimulation
                    src="/simulations/floor-machine"
                    onComplete={() => markCourseComplete(activeModule.id, 0)}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certification Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Earn Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Certificate className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-bold">
                  Basic Cleaning Certification
                </h3>
              </div>
              <ul className="space-y-2 list-disc pl-6">
                <li>Complete Safety Protocols</li>
                <li>Pass Equipment Training</li>
                <li>Score 80%+ on Final Exam</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const VideoPlayer = ({ src }) => (
  <div className="aspect-video bg-black rounded-lg overflow-hidden">
    <video controls className="w-full h-full">
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

const Quiz = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium mb-2">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <label
                key={oIndex}
                className="flex items-center gap-2 p-2 bg-white rounded-lg cursor-pointer hover:bg-blue-50"
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  onChange={() => handleAnswer(index, oIndex)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={() => onSubmit(answers)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit Answers
      </button>
    </div>
  );
};

const InteractiveSimulation = ({ src, onComplete }) => (
  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
    <button
      onClick={onComplete}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Complete Simulation
    </button>
  </div>
);
