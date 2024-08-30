import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";

import { slidesData } from "./data/data";
import "./App.css";
import Featured from "./components/Featured/Featured";
import VideoView from "./components/VideoView/VideoView";
import BestDeal from "./components/BestDeal/BestDeal";
import Properties from "./components/Properties/Properties";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ContactUsPage from "./pages/ContactUs/ContactUs";
import PropertiesDetails from "./pages/PropertiesDeatils/PropertiesDetails";

import PropertiesPage from "./pages/Properties/Properties";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero slidesData={slidesData} />
              <Featured />
              <VideoView />
              <BestDeal />
              <Properties />
              <ContactUs />
            </>
          }
        />
        <Route path="/Properties" element={<PropertiesPage/>} />
        <Route path="/PropertyDetails" element={<PropertiesDetails />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
