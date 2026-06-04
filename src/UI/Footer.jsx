import React from "react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div>
      <div className="border-t-1 border-t-[#80808059] border-b-1 border-b-[#80808059]">
        <footer className="w-[95%] m-auto flex gap-[50px] pb-[30px] pt-[70px]">
          <div className="">
            <img src={logo} alt="" />
            <p className="w-[390px] text-[1rem] mt-[30px]">
              Bokifa draws book lovers of all ages into a community, engage with
              booklovers and meet their favourite literary personalities.
            </p>
          </div>
          <div className="grid grid-cols-4 w-[100%] gap-[30px]">
            <div className="w-[100%]">
              <h4 className="text-[1.3rem] font-mono font-[500] pb-[10px] border-b-1 border-b-[#8080804d]">
                Category
              </h4>
              <ul>
                <li className="mt-[20px] text-[1.1rem] text-[#000000a8]">
                  Action Books
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Comedy
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Drama
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Horror
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Kids Books
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Top 50 Books
                </li>
              </ul>
            </div>
            <div className="w-[100%]">
              <h4 className="text-[1.3rem] font-mono font-[500] pb-[10px] border-b-1 border-b-[#8080804d]">
                Useful links
              </h4>
              <ul>
                <li className="mt-[20px] text-[1.1rem] text-[#000000a8]">
                  Secure Shopping
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Privacy Policy
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Terms of Use
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Shipping Policy
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Returns Policy
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Payment Option
                </li>
              </ul>
            </div>
            <div className="w-[100%]">
              <h4 className="text-[1.3rem] font-mono font-[500] pb-[10px] border-b-1 border-b-[#8080804d]">
                Explore
              </h4>
              <ul>
                <li className="mt-[20px] text-[1.1rem] text-[#000000a8]">
                  About us
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Store Locator
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Kids Club
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Blogs
                </li>
              </ul>
            </div>
            <div className="w-[100%]">
              <h4 className="text-[1.3rem] font-mono font-[500] pb-[10px] border-b-1 border-b-[#8080804d]">
                Get in touch
              </h4>
              <ul>
                <li className="mt-[20px] text-[1.1rem] text-[#000000a8]">
                  Careers
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Become a Franchisee
                </li>
                <li className="mt-[6px] text-[1.1rem] text-[#000000a8]">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <p className="pt-[20px] pb-[30px] text-center text-[0.9rem] font-[500]">
        Copyright © 2025 Bokifa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
