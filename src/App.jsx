import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import HomePage from "./Pages/HomePage";
import Project from "./Pages/Project";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<AboutPage />} /> 
        </Route>
      </Routes>
    </Router>
  );
}
