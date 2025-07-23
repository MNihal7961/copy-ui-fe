import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="max-w-[1600px] flex flex-col items-start justify-center mx-auto p-4">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
