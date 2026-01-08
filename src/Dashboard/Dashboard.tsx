import { AppSidebar } from "../Components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../Components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
