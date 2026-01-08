import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../Components/ui/breadcrumb";
import { Separator } from "@/Components/ui/separator";
import { SidebarTrigger } from "../Components/ui/sidebar";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

const Header: React.FC = () => {
    const breadcrumbs = useBreadcrumbs();  
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.url}>
                <BreadcrumbItem
                  className={
                    index === 0 && breadcrumbs.length > 1
                      ? "hidden md:block"
                      : ""
                  }
                >
                  {crumb.isLast ? (
                    <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={crumb.url}>{crumb.title}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!crumb.isLast && (
                  <BreadcrumbSeparator
                    className={index === 0 ? "hidden md:block" : ""}
                  />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default Header;
