import React, { useState } from "react";
import Apicalling from "./components/Apicalling";
import Footer from "./components/Footer";
import Header from "./Components/Header";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header search={search} setSearch={setSearch} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Apicalling search={search} />
      </main>

      <Footer />
    </div>
  );
}
