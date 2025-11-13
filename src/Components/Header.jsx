import React from "react";

export default function Header({ search, setSearch }) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Meme Template Viewer
        </h1>

        {/* Search bar below title */}
        <div className="w-full max-w-5xl mx-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search memes..."
            className="w-full border rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring"
          />
        </div>
      </div>
    </header>
  );
}
