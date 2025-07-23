import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import OTP from "../pages/OTP";
import Megamenu from "../pages/Megamenu";
import Images from "../pages/Images";
import Gallery from "../pages/Gallery";
import DatePicker from "../pages/DatePicker";
import Clipboard from "../pages/Clipboard";
import Button from "../pages/Button";
import BreadCrumbs from "../pages/BreadCrumbs";
import Badges from "../pages/Badges";
import Avatar from "../pages/Avatar";
import Alert from "../pages/Alert";
import ProfileDropDowns from "../pages/ProfileDropDowns";
import Accordion from "../pages/Accordion";
import Rating from "../pages/Rating";
import Navbar from "../pages/Navbar";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/megamenu" element={<Megamenu />} />
      <Route path="/images" element={<Images />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/datepicker" element={<DatePicker />} />
      <Route path="/clipboard" element={<Clipboard />} />
      <Route path="/button" element={<Button />} />
      <Route path="/breadcrumbs" element={<BreadCrumbs />} />
      <Route path="/badges" element={<Badges />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/profiledropdowns" element={<ProfileDropDowns />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter; 