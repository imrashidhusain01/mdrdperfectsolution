import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./page/Home";
import About from "./page/About";
import ImageGallery from "./components/ImageGallery";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);

      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/imageGallery" element={<ImageGallery />} />

        <Route
          path="/contact"
          element={<Navigate to="/#contact" replace />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;