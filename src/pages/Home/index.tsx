import React from "react";
import Hero from "./Hero";
import GetStarted from "./GetStarted";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <Hero />
      <GetStarted/>
    </div>
  );
};

export default Home;
