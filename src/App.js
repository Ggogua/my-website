import React, { Suspense } from "react";
import Header from "../src/components/Header";
import AfterHeader from "../src/components/AfterHeader";
import Experience from "../src/components/Experience";
import Education from "../src/components/Education";
import Projects from "../src/components/Projects";

const App = () => {
  return (
    <section>
      <Header />
      <AfterHeader />
      <Experience />
      <Education />
      <Projects />
    </section>
  );
};

export default App;
