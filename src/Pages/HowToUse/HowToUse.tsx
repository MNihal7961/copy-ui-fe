import React from "react";
import { Search, Copy, SlidersHorizontal } from "lucide-react";
import PageOverview from "../../Components/PageOverview/PageOverview";

const pageConfig = {
  pageTitle: "How to use Copy UI",
  pageDescription:
    "Learn how to find, copy, and customize UI components from Copy UI and integrate them into your project in just a few simple steps.",
  pageFeatures: [
    {
      name: "find",
      description:
        "Search or browse categories to quickly locate the UI component you need for your project.",
      icon: Search,
      iconColor: "text-sky-600",
      bg: "bg-sky-100",
      hover: "hover:bg-sky-200",
    },
    {
      name: "copy",
      description:
        "Click the copy button to instantly copy the component code to your clipboard.",
      icon: Copy,
      iconColor: "text-violet-600",
      bg: "bg-violet-100",
      hover: "hover:bg-violet-200",
    },
    {
      name: "customize",
      description:
        "Paste the code into your project and tweak styles, layout, or behavior using Tailwind utilities.",
      icon: SlidersHorizontal,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
      hover: "hover:bg-emerald-200",
    },
  ],
};

const HowToUse: React.FC = () => {
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

export default HowToUse;
