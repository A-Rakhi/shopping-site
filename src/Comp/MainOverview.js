import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import NavSidebar from "./NavSidebar";

function MainOverview() {
  return (
    <section>
      <div className="shadow-md ">
        <header className="container mx-auto h-20 flex items-center justify-between px-10">
          <div>
            <Link to="/home">
              <h2 className="text-4xl font-bold uppercase">Logo </h2>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-5 items-center uppercase">
              <Link to="">
                <li className="font-medium hover:underline">About Us</li>{" "}
              </Link>
              <Link to="/login">
                <button className=" uppercase bg-yellow-400 px-3 py-1 rounded-md text-lg font-semibold">
                  Log In
                </button>{" "}
              </Link>
            </ul>
          </nav>
        </header>
      </div>
      <div>
        <Carousel />
      </div>
      <NavSidebar />
    </section>
  );
}

export default MainOverview;
