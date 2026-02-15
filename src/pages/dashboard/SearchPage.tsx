import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert("Searching for: " + query);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">AI Search</h1>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Find CTO in fintech companies in India"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white px-4"
        >
          Search
        </button>
      </div>
    </DashboardLayout>
  );
}
