import React from "react";
import PageOverview from "../../Components/PageOverview/PageOverview";
import { Layers, Palette, Code2 } from "lucide-react";

const pageConfig = {
  pageTitle: "Components Overview",
  pageDescription:
    "Ready-to-use UI components for building modern applications faster.",
  pageFeatures: [
    {
      name: "Reusable UI Blocks",
      description: "Copy and use clean UI components instantly.",
      icon: Layers,
      iconColor: "text-indigo-600",
      bg: "bg-indigo-100",
      hover: "hover:bg-indigo-200",
    },
    {
      name: "Easy Customization",
      description: "Modify styles easily using Tailwind classes.",
      icon: Palette,
      iconColor: "text-pink-600",
      bg: "bg-pink-100",
      hover: "hover:bg-pink-200",
    },
    {
      name: "Multi Framework Code",
      description: "Available in HTML, React, and Vue formats.",
      icon: Code2,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
      hover: "hover:bg-emerald-200",
    },
  ],
};

const ComponentPage: React.FC = () => {
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

export default ComponentPage;
