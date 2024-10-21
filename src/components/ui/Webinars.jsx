import React from "react";
import Upcoming from "./Upcoming";
import Live from "./Live";
import Previous from "./Previous";
import H2 from "./H2";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";

const Webinars = () => {
  return (
    <>
      <Router>
        <H2>Webinars</H2>

        <div>
          <Routes>
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/live" element={<Live />} />
            <Route path="/previous" element={<Previous />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Webinars;
