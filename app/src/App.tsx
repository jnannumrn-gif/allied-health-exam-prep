import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import Exam from "./pages/Exam";
import Flashcards from "./pages/Flashcards";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/practice"
          element={<ProtectedRoute><Practice /></ProtectedRoute>}
        />
        <Route
          path="/exam"
          element={<ProtectedRoute><Exam /></ProtectedRoute>}
        />
        <Route
          path="/flashcards"
          element={<ProtectedRoute><Flashcards /></ProtectedRoute>}
        />
        <Route
          path="/stats"
          element={<ProtectedRoute><Stats /></ProtectedRoute>}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute><Settings /></ProtectedRoute>}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
