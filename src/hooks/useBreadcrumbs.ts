import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { navigationData } from "../config/navigation";

export function useBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  return useMemo(() => {
    const breadcrumbs: Array<{ title: string; url: string; isLast: boolean }> =
      [];

    // Handle home route
    if (pathname === "/" || pathname === "/home") {
      breadcrumbs.push({ title: "Home", url: "/", isLast: true });
      return breadcrumbs;
    }

    // Search through navigation structure to find matching route
    for (const navItem of navigationData.navMain) {
      // Check if current path matches a parent item
      if (pathname === navItem.url && navItem.url !== "#") {
        breadcrumbs.push({
          title: navItem.title,
          url: navItem.url,
          isLast: true,
        });
        return breadcrumbs;
      }

      // Check if current path matches a child item
      if (navItem.items) {
        for (const childItem of navItem.items) {
          if (pathname === childItem.url && childItem.url !== "#") {
            // Add parent breadcrumb
            if (navItem.url !== "#") {
              breadcrumbs.push({
                title: navItem.title,
                url: navItem.url,
                isLast: false,
              });
            }
            // Add current page breadcrumb
            breadcrumbs.push({
              title: childItem.title,
              url: childItem.url,
              isLast: true,
            });
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
