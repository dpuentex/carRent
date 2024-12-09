import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import "../assets/MainBody.css";
import MakeModel from "./MakeModel";
import Footer from "./Footer";
import ListYourCar from "./ListYourCar";
import AboutUs from "./AboutUs";
import Make from "./Make";
import Model from "./Model";
import UserPage from "./UserPage";
import LoginCreatePage from "./LoginCreatePage";

function MainBody() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/make.model" element={<MakeModel />} />
          <Route path="/list" element={<ListYourCar />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/make" element={<Make />} />
          <Route path="/model" element={<Model />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/login-create" element={<LoginCreatePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default MainBody;
