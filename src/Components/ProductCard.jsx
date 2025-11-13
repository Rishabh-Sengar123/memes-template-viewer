import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      
      {/* Full meme image shown without cropping */}
      <div className="w-full bg-white rounded overflow-hidden mb-3">
        <img
          src={item.url}
          alt={item.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Meme Name */}
      <h3 className="text-md font-semibold text-gray-800 mb-1">
        {item.name}
      </h3>

      {/* Open Image Link */}
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-600 underline"
      >
        Open Full Image
      </a>
    </div>
  );
}
