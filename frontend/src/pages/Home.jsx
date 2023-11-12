import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
// import { BsGithub } from "react-icons/bs";
function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0E0E" }}>
      <Navbar />
      <div className=" flex items-center justify-center ">
        <main className=" w-2/3 py-20 md:flex justify-between">
          <div>
            <p className=" md:text-9xl text-8xl font-bold text-teal-400">
              Code.
            </p>
            <p className=" md:text-9xl text-8xl font-bold text-teal-400">
              Enjoy.
            </p>
            <p className=" md:text-9xl text-8xl font-bold text-teal-400">
              Repeat.
            </p>
          </div>

          <div className=" flex flex-col text-white py-20 md:py-0">
            <p className=" text-xl pb-6">Collaborate together !</p>
            <p>
              This is an open source project
              <br /> You collaborate here in this repo
            </p>
            <NavLink href="/join" className=" py-4">
              <Button text="Github" />
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
