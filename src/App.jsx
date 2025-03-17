import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NewsFeed from "./components/NewsFeed";
import SavedArticles from "./components/SavedArticles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/saved" element={<SavedArticles />} />
      </Routes>
    </Router>
  );
};

export default App;