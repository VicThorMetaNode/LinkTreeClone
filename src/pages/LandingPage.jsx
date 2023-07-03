import React from "react";
import HeroBanner from "../components/HeroBanner";
import Links from "../components/Links";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <section>
        <div>
          <HeroBanner />
          <Links />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
