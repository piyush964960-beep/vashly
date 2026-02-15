import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="w-64 bg-gray-900 text-white p-4 h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <div className="space-y-3">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/search">AI Search</Link>
        <button onClick={logout} className="block text-left">
          Logout
        </button>
      </div>
    </div>
  );
}
