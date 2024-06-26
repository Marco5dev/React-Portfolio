// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
