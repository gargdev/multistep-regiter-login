import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center">Welcome to MyApp</h1>
      </main>
    </div>
  );
}

export default App;
