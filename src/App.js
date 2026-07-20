import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";
import ProjectDetail from "./pages/projectDetail";
import { LanguageProvider } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/common/languageSwitcher";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:language" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/:language/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/:language/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/:language/project/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/:language/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:language/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
