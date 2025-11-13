import { useEffect, useState } from "react";
import ProductCard from "./productCard";
// import ProductCard from ".=ProductCard";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(json => setData(json.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {data.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
