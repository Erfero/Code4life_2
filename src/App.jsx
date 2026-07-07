import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Resume, Hero, Navbar, Tech, Works, StarsCanvas, ProjectPage } from "./components";

const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Resume />
    <Tech />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
