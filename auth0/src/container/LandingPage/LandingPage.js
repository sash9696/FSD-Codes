import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";

function LandingPage() {
  return (
    <div className="landingpage_container">
      <Navbar />
      <LandingPageContent />
    </div>
  );
}

export default LandingPage;
