import React from "react";
import PageOverview from "../../Components/PageOverview/PageOverview";
import { Users, Lightbulb, Target } from "lucide-react";

const pageConfig = {
  pageTitle: "About Copy UI",
  pageDescription:
    "Copy UI is built by developers for developers. Our mission is to remove friction from front-end development by providing high-quality, reusable UI blocks that help teams move faster without compromising on design or code quality.",
  pageFeatures: [
    {
      name: "who",
      description:
        "We are a small team of passionate engineers and designers focused on simplifying how user interfaces are built in modern web applications.",
      icon: Users,
      iconColor: "text-indigo-600",
      bg: "bg-indigo-100",
      hover: "hover:bg-indigo-200",
    },
    {
      name: "why",
      description:
        "We created Copy UI to eliminate repetitive UI work and help developers focus more on building meaningful product features.",
      icon: Lightbulb,
      iconColor: "text-amber-600",
      bg: "bg-amber-100",
      hover: "hover:bg-amber-200",
    },
    {
      name: "aim",
      description:
        "Our goal is to become the go-to UI toolkit for modern web development, enabling faster delivery with clean, consistent, and maintainable code.",
      icon: Target,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
      hover: "hover:bg-emerald-200",
    },
  ],
};

const About: React.FC = () => {
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

export default About;
