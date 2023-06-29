import "./App.css";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import SinglePage from "./components/pages/singlePage/SinglePage";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(true);
  return (
    <Router>
      <Topbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {!user && (
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/postB/:postId" element={<SinglePage />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
