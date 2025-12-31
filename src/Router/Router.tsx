import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import HowToUse from "../Pages/HowToUse/HowToUse";
import About from "../Pages/About/About";
import ComponentPage from "../Pages/ComponentPage/ComponentPage";
import AccordionPage from "../Pages/AccordionPage/AccordionPage";
import NotFound from "../Pages/NotFound/NotFound";
import AlertPage from "../Pages/AlertPage/AlertPage";
import AvatarPage from "../Pages/AvatarPage/AvatarPage";
import BadgePage from "../Pages/BadgePage/BadgePage";
import BannerPage from "../Pages/BannerPage/BannerPage";
import BottomNavigationPage from "../Pages/BottomNavigationPage/BottomNavigationPage";
import BreadcrumbPage from "../Pages/BreadcrumbPage/BreadcrumbPage";
import ButtonPage from "../Pages/ButtonPage/ButtonPage";
import ButtonGroupPage from "../Pages/ButtonGroupPage/ButtonGroupPage";
import CardPage from "../Pages/CardPage/CardPage";
import CarouselPage from "../Pages/CarouselPage/CarouselPage";
import ChatBubblePage from "../Pages/ChatBubblePage/ChatBubblePage";
import ClipBoardPage from "../Pages/ClipBoardPage/ClipBoardPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="how-to-use" element={<HowToUse />} />
        <Route path="about" element={<About />} />

        {/* Components */}
        <Route path="components" element={<ComponentPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="alert" element={<AlertPage />} />
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="banner" element={<BannerPage />} />
        <Route path="bottom-navigation" element={<BottomNavigationPage />} />
        <Route path="breadcrumb" element={<BreadcrumbPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="button-group" element={<ButtonGroupPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="carousel" element={<CarouselPage />} />
        <Route path="chat-bubble" element={<ChatBubblePage />} />
        <Route path="clipboard" element={<ClipBoardPage />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
        <Route path="not-found" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
