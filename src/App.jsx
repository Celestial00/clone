import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import HomePage from "./Pages/HomePage";
import Project from "./Pages/Project";
import AboutPage from "./Pages/AboutPage";
import Note from "./Pages/Note";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/note" element={<Note />} />
        </Route>
      </Routes>
    </Router>
  );
}
