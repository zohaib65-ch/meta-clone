import React from "react";
import TopBar from "./pages/TopBar";
import Footer from "./pages/Footer";
import FourCardSection from "./pages/FourCardSection";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";
import HeroPage from "./pages/Hero";
import EmailSection from "./pages/EmailSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <HeroPage />
      <ShopPage />
      <BlogPage />
      <FourCardSection />
      <EmailSection />
      <Footer />
    </div>
  );
};

export default App;
