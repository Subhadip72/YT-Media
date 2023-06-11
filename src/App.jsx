import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SearchResults, SingleChannel, SingleVideo } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="channel/:id" element={<SingleChannel />} />
        <Route path="video/:id" element={<SingleVideo />} />
        <Route path="search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
