import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";

export default function Apicalling({ search, onAddToCart }) {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("https://api.imgflip.com/get_memes");
        if (!cancelled) {
          if (res.data && res.data.success) {
            setMemes(res.data.data.memes || []);
          } else {
            setError("API returned no data");
          }
        }
      } catch (err) {
        setError("Failed to fetch memes");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, []);

  // search filter (case-insensitive)
  const filtered = memes.filter(m =>
    m.name.toLowerCase().includes((search || "").trim().toLowerCase())
  );

  return (
    <section>
      {loading ? (
        <div className="text-center py-8 text-lg font-medium">Loading memes...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(meme => (
              <ProductCard key={meme.id} item={meme} onAddToCart={onAddToCart} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center mt-6 text-gray-500">
              No memes found for "<span className="font-semibold">{search}</span>"
            </div>
          )}
        </>
      )}
    </section>
  );
}
