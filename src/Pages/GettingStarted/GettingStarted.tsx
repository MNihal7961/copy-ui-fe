import React from "react";
import PageOverview from "../../Components/PageOverview/PageOverview";
import { PlayCircle, MousePointerClick, CheckCircle } from "lucide-react";

const pageConfig = {
  pageTitle: "Get started with Copy UI",
  pageDescription:
    "Follow a simple three-step flow to start building stunning interfaces with Copy UI in just a few minutes.",
  pageFeatures: [
    {
      name: "explore",
      description:
        "Browse through categorized UI blocks and find components that fit your product idea.",
      icon: PlayCircle,
      iconColor: "text-blue-600",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
    },
    {
      name: "copy",
      description:
        "Click on any block to instantly copy the clean, production-ready code to your clipboard.",
      icon: MousePointerClick,
      iconColor: "text-teal-600",
      bg: "bg-teal-100",
      hover: "hover:bg-teal-200",
    },
    {
      name: "build",
      description:
        "Paste the code into your project and customize it using Tailwind CSS to match your design system.",
      icon: CheckCircle,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
      hover: "hover:bg-emerald-200",
    },
  ],
};

const GettingStarted: React.FC = () => {
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

export default GettingStarted;
