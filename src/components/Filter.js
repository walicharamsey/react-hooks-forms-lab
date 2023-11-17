import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Pass the search text to the callback prop
  }

  function handleCategoryChange(event) {
    const category = event.target.value;
    onCategoryChange(category); // Pass the category value to the callback prop
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
