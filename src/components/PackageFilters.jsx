import React, { useState } from "react";

const PackageFilters = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        placeholder="Search destinations..."
        value={query}
        onChange={handleChange}
        className="px-4 py-2 border rounded w-80 focus:outline-none"
      />
    </div>
  );
};

export default PackageFilters;
