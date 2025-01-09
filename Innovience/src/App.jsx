import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Technologies from "./components/Home/Technologies";
import Internship from "./components/Home/Internship";
import Footer from "./components/Footer/Footer";
import Featuresection from "./components/Home/Featuresection";
import Testonimal from "./components/Testonimal/Testonimal";
import StatsSection from "./components/Home/StatsSection";
import FAQ from "./components/FAQ/FAQ";
import About_us from "./components/About us/About_us";
import Hackton from "./components/Hackatons/Hackton";
import Project from "./components/Project/Project";
import Contact from "./components/Contact us/Contact";
import InternshipPage from "./components/IntershipPage/InternshipPage";
import Signup from "./components/Sign up/Signup";
import Login from "./components/Login/Login";
import WebDevInternPage from "./components/Webdevelop intership/WebDevInternPage";
import Ecommerce from "./components/Project/Ecommerce";
import Taskmanager from "./components/Project/Taskmanager";
import Socialdashboard from "./components/Project/Socialdashboard";

import AdminDashboard from "./components/admin/AdminDashboard";
import AdminContact from "./components/admin/AdminContact";
import AdminFAQ from "./components/admin/AdminFAQ";
import AdminHackathons from "./components/admin/AdminHackathons";
import AdminProjects from "./components/admin/AdminProjects";
import AdminSettings from "./components/admin/AdminSettings";
import AdminUsers from "./components/admin/AdminUsers";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Technologies />
                <Featuresection />
                <Internship />
                <StatsSection />
                <Testonimal />
                <FAQ/>
                <Footer />
              </>
            }
          />

          {/* WebDevInternPage Path*/}
          <Route path="/WebDevInternPage" element={
            <>
            <WebDevInternPage/>
            <Testonimal/>
            <FAQ/>
            <Footer/>
            </>
          }/>

        {/*Navbar Routes */}

          <Route path="/about_us" element={
            <>
            <About_us />
            <Testonimal/>
            <FAQ/>
            <Footer/>
            </>
            } />
          <Route path="/contact" element={
            <>
            <Contact />
            <Footer/>
            </>
          } />
          <Route path="/project" element={
            <>
           <Project />
           <Testonimal/>
           <FAQ/>
           <Footer/>
            </>
          } />
          <Route path="/hackton" element={
            <>
            <Hackton />
            <Testonimal/>
            <FAQ/>
            <Footer/>
            </>
          } />
          <Route path="/InternshipPage" element={
            <>
            <InternshipPage />
            <Testonimal/>
            <FAQ/>
            <Footer/>
            </>
            } />
            <Route path="/signup" element={<Signup/>}/>

            {/*Signup Route*/}
            <Route path="/login" element={<Login/>}/>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/faq" element={<AdminFAQ />} />
          <Route path="/admin/hackathons" element={<AdminHackathons />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Fallback Route */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
          <Route path="/project/Ecommerce/" element={<Ecommerce/>} />
          <Route path="/project/Socialdashboard/" element={<Socialdashboard/>} />
          <Route path="/project/Taskmanager/" element={<Taskmanager/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
