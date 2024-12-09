import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

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
          <Route path="/login" element={<Login />} /> {/* Updated path */}
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* Corrected path */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default MainBody;
