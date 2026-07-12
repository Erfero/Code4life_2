import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Resume, Hero, Navbar, Tech, Works, ProjectPage } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

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
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
    </div>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
