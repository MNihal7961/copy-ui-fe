import type { LucideIcon } from "lucide-react";
import React from "react";

interface PageOverviewProps {
  pageTitle: string;
  pageDescription: string;
  pageFeatures: {
    name: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    bg: string;
    hover: string;
  }[];
}

const PageOverview: React.FC<PageOverviewProps> = ({
  pageTitle,
  pageDescription,
  pageFeatures,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600">
          Copy UI
        </span>
        <h2 className="text-4xl font-bold text-gray-900 py-5">{pageTitle}</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {pageDescription}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {pageFeatures.map((item, i) => (
          <div
            key={i}
            className="group w-full text-center max-w-sm md:w-2/5 lg:w-1/4"
          >
            <div
              className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-lg transition-all duration-500 ${item.bg} ${item.hover}`}
            >
              <item.icon
                className={`h-8 w-8 transition-all duration-500 ${item.iconColor}`}
              />
            </div>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              {item.name}
            </h4>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageOverview;
