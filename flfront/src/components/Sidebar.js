import React from "react";
import { IoFastFood } from "react-icons/io5";
import { FaAppleAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { IoBarChartSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="h-screen  sm:w-1/4 md:w-1/5 lg:w-1/6 bg-fuchsia-950 text-white py-5 rounded-lg">
      <Link
        to={"/dashboard"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <MdSpaceDashboard />
        </div>
        <p className="hidden sm:block px-6">Dashboard</p>
      </Link>
      <Link
        to={"/diary"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <LuNotebookPen />
        </div>

        <p className="hidden sm:block px-6">Diary</p>
      </Link>
      <Link
        to={"/trends"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <IoBarChartSharp />
        </div>

        <p className="hidden sm:block px-6">Trends</p>
      </Link>
      <Link
        to={"/foods"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <IoFastFood />
        </div>

        <p className="hidden sm:block px-6">Foods</p>
      </Link>
      <Link
        to={"/organicFoods"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <FaAppleAlt />
        </div>

        <p className="hidden sm:block px-6">Organic Foods</p>
      </Link>
      <Link
        to={"/more"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <CiCircleMore />
        </div>

        <p className="hidden sm:block px-6">More</p>
      </Link>
      <Link
        to={"/about"}
        className="flex px-2 py-4 hover:text-orange-600 hover:bg-purple-950 rounded-lg"
      >
        <div className="px-2 flex items-center">
          <IoIosPerson />
        </div>

        <p className="hidden sm:block px-6">About</p>
      </Link>
    </div>
  );
}

export default Sidebar;
