import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import OtherInfo from "../screens/OtherInfo";
import Classes from "../screens/Classes";

const RouterProvider = () => {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other-info" element={<OtherInfo />} />
            <Route path="/classes" element={<Classes />} />
          </Routes>
      </Router>
    );
  };
  
export default RouterProvider;