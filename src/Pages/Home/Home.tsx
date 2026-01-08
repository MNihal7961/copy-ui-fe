import React from "react";
import {
  Palette,
  Code,
  Settings,
  Smartphone,
  BookOpen,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Rich Component Library",
    description:
      "Access a comprehensive collection of pre-built, production-ready UI components to accelerate your development process.",
    icon: Palette,
    bgGradient: "from-purple-100 to-purple-200",
    iconColor: "text-purple-700",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate components into your React projects with simple copy-paste functionality and minimal setup.",
    icon: Code,
    bgGradient: "from-blue-100 to-blue-200",
    iconColor: "text-blue-700",
  },
  {
    title: "Fully Customizable",
    description:
      "Tailor every component to match your brand with extensive customization options and flexible styling.",
    icon: Settings,
    bgGradient: "from-green-100 to-green-200",
    iconColor: "text-green-700",
  },
  {
    title: "Responsive Design",
    description:
      "All components are built with mobile-first approach, ensuring perfect display across all devices and screen sizes.",
    icon: Smartphone,
    bgGradient: "from-orange-100 to-orange-200",
    iconColor: "text-orange-700",
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Get started quickly with detailed documentation, examples, and best practices for each component.",
    icon: BookOpen,
    bgGradient: "from-indigo-100 to-indigo-200",
    iconColor: "text-indigo-700",
  },
  {
    title: "Modern & Fast",
    description:
      "Built with the latest technologies and optimized for performance, ensuring smooth user experiences.",
    icon: Zap,
    bgGradient: "from-yellow-100 to-yellow-200",
    iconColor: "text-yellow-700",
  },
];

const Home: React.FC = () => {
  return (
    <div className="dashboard-page">
      <section className="bg-white">
        <div className="px-4 mx-auto max-w-7xl lg:px-6">
          <div className="max-w-3xl mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Build Beautiful UIs Faster
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Discover our comprehensive collection of modern, customizable
              React components. Copy, paste, and customize to build stunning
              user interfaces in minutes.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index}>
                  <div
                    className={`flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-linear-to-br ${feature.bgGradient} shadow-md hover:shadow-lg transition-shadow duration-300 lg:h-12 lg:w-12`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${feature.iconColor} lg:w-6 lg:h-6`}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
