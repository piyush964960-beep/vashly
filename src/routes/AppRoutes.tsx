import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import BookDemoPage from "../pages/BookDemoPage";
import DashboardHome from "../pages/dashboard/DashboardHome";
import SearchPage from "../pages/dashboard/SearchPage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/book-demo" element={<BookDemoPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}
