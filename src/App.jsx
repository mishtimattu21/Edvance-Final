import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Nav from "./nav.jsx"; // Optional navigation component

function App() {
  return (
    <Router>
      <>
        <Nav />
        {/* Clicking on this will navigate to /login */}

        {/* Routes only render when the URL matches */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
