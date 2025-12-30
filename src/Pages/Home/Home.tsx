import React from "react";
import PageOverview from "../../Components/PageOverview/PageOverview";
import { Sparkles, Zap, Globe } from "lucide-react";

const pageConfig = {
  pageTitle: "Build faster with Copy UI",
  pageDescription:
    "Copy UI helps you create beautiful user interfaces in minutes. Discover ready-made blocks, preview designs live, and ship your product without starting from scratch.",
  pageFeatures: [
    {
      name: "discover",
      description:
        "Explore a growing collection of hand-crafted UI blocks designed for real-world products and modern web apps.",
      icon: Sparkles,
      iconColor: "text-violet-600",
      bg: "bg-violet-100",
      hover: "hover:bg-violet-200",
    },
    {
      name: "preview",
      description:
        "Instantly preview every block in multiple screen sizes before copying the code into your project.",
      icon: Zap,
      iconColor: "text-amber-600",
      bg: "bg-amber-100",
      hover: "hover:bg-amber-200",
    },
    {
      name: "ship",
      description:
        "Deploy production-ready interfaces with confidence using clean, optimized code tailored for performance.",
      icon: Globe,
      iconColor: "text-sky-600",
      bg: "bg-sky-100",
      hover: "hover:bg-sky-200",
    },
  ],
};

const Home: React.FC = () => {
  return (
    <div className="dashboard-page">
      <PageOverview
        pageTitle={pageConfig.pageTitle}
        pageDescription={pageConfig.pageDescription}
        pageFeatures={pageConfig.pageFeatures}
      />
    </div>
  );
};

export default Home;
