import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import HowToUse from "../Pages/HowToUse/HowToUse";
import About from "../Pages/About/About";
import GettingStarted from "../Pages/GettingStarted/GettingStarted";
import ComponentPage from "../Pages/ComponentPage/ComponentPage";
import AccordionPage from "../Pages/AccordionPage/AccordionPage";
import NotFound from "../Pages/NotFound/NotFound";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="how-to-use" element={<HowToUse />} />
        <Route path="about" element={<About />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="components" element={<ComponentPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="not-found" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
