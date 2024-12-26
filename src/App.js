import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center">Welcome to MyApp</h1>
      </main>
    </div>
    </Router>
  );
}

export default App;
