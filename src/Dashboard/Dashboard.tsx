import React, { useMemo } from "react";
import { AppSidebar } from "../Components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../Components/ui/breadcrumb";
import { Separator } from "@/Components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../Components/ui/sidebar";
import { Outlet, useLocation, Link } from "react-router-dom";
import { navigationData } from "../config/navigation";

function useBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  return useMemo(() => {
    const breadcrumbs: Array<{ title: string; url: string; isLast: boolean }> = [];

    // Handle home route
    if (pathname === "/" || pathname === "/home") {
      breadcrumbs.push({ title: "Home", url: "/", isLast: true });
      return breadcrumbs;
    }

    // Search through navigation structure to find matching route
    for (const navItem of navigationData.navMain) {
      // Check if current path matches a parent item
      if (pathname === navItem.url && navItem.url !== "#") {
        breadcrumbs.push({ title: navItem.title, url: navItem.url, isLast: true });
        return breadcrumbs;
      }

      // Check if current path matches a child item
      if (navItem.items) {
        for (const childItem of navItem.items) {
          if (pathname === childItem.url && childItem.url !== "#") {
            // Add parent breadcrumb
            if (navItem.url !== "#") {
              breadcrumbs.push({ title: navItem.title, url: navItem.url, isLast: false });
            }
            // Add current page breadcrumb
            breadcrumbs.push({ title: childItem.title, url: childItem.url, isLast: true });
            return breadcrumbs;
          }
        }
      }
    }

    // Fallback: use pathname as title
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      const title = lastSegment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({ title, url: pathname, isLast: true });
    } else {
      breadcrumbs.push({ title: "Home", url: "/", isLast: true });
    }

    return breadcrumbs;
  }, [pathname]);
}

export default function Dashboard() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.url}>
                    <BreadcrumbItem className={index === 0 && breadcrumbs.length > 1 ? "hidden md:block" : ""}>
                      {crumb.isLast ? (
                        <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.url}>{crumb.title}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!crumb.isLast && (
                      <BreadcrumbSeparator className={index === 0 ? "hidden md:block" : ""} />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
