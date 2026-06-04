import React from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <div>
      <header className="fixed w-[100%] bg-white pb-[20px] z-[1000]">
        <div className=" pb-[20px] pt-[20px] h-[100px] border-b-[1px] border-b-[#80808041] items-center">
          <div className=" w-[95%] m-auto flex justify-between  ">
            <div>
              <img src={logo} alt="" className="w-[150px]" />
            </div>
            <div className="relative flex items-center  w-[800px] pl-[15px] h-[55px] bg-[rgb(246,246,246)] rounded-[800px]">
              <input
                type="text"
                className="outline-none"
                placeholder="Search for books..."
              />
              <div className="absolute top-[0] right-0 ">
                <button className="bg-[rgb(2,122,54)] text-white p-[10px] w-[150px] rounded-[150px] h-[55px]">
                  {" "}
                  <i class="bi bi-search mr-[10px]"></i> search
                </button>
              </div>
            </div>
            <div className="relative drop">
              <i class="bi bi-person-fill text-[40px]"></i>
              <div className="absolute w-[150px] hidden drop-down  bg-white shadow-xl shadow-[#8080801f] right-[-20px]">
                <ul>
                  <a
                    href="/login"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150 group/item"
                  >
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                      <i className="bi bi-box-arrow-in-right text-green-600 text-[16px]"></i>
                    </span>
                    <span className="font-medium">Log In</span>
                  </a>

                  <a
                    href="/signup"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150 group/item"
                  >
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                      <i className="bi bi-person-plus text-green-600 text-[16px]"></i>
                    </span>
                    <span className="font-medium">Sign Up</span>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] m-auto flex justify-between pt-[20px]">
          <nav className="">
            <ul className="flex gap-[30px]">
              <a href="#">
                <li className="text-[1rem] font-bold">
                  Home <i class="bi bi-caret-down-fill relative"></i>
                </li>
              </a>
              <a href="#">
                <li className="text-[1rem] font-bold">
                  Explore <i class="bi bi-caret-down-fill relative "></i>
                </li>
              </a>
              <a href="#">
                <li className="text-[1rem] font-bold">
                  Genres <i class="bi bi-caret-down-fill relative"></i>
                </li>
              </a>
              <a href="#">
                <li className="text-[1rem] font-bold">
                  Blogs <i class="bi bi-caret-down-fill relative"></i>
                </li>
              </a>
              <a href="#">
                <li className="text-[1rem] font-bold">Contact</li>
              </a>
            </ul>
          </nav>
          <div>
            Need help? Call Us: <b>+84 2500 888 33</b>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
