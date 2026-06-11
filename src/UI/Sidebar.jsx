import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Sidebar = () => {
  const { userData, activeTab, setActiveTab } = useContext(AuthContext);
  return (
    <div className="">
      <div className="flex gap-[20px]">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullName)}&background=40223E&color=E8B84B&rounded=true&bold=true&size=128`}
          alt={userData.fullName}
          className="w-[45px] h-[45px] rounded-full cursor-pointer ring-2 ring-[#027A36] ring-offset-2"
        />
        <div>
          <h1 className="text-[0.95rem] font-bold text-black mb-[5px]">
            {userData.fullName}
          </h1>
          <p className=" bg-[#ca1dbe4d] p-[5px] text-center w-[70px] text-[0.9rem] rounded-full text-[#e2aa11]">
            {userData.Profile}
          </p>
        </div>
      </div>
      <div className="block">
        <div className="mt-[50px]">
          <button
            type="button"
            onClick={() => setActiveTab("novels")}
            className={` ${
              activeTab === "novels"
                ? "bg-[#E8E5DC] text-[#0F5132] rounded-xl"
                : ""
            }`}
          >
            <h1 className="font-bold text-[gray] text-[1.1rem] p-[10px] font-serif rounded-xl hover:bg-[#80808041]">
              <i class="bi bi-book mr-[20px]"></i> My Novels
            </h1>
          </button>
        </div>

        <div>
          <button
            onClick={() => setActiveTab("addnovels")}
            className={`${
              activeTab === "addnovels"
                ? "bg-[#E8E5DC] rounded-xl  text-[#0F5132]"
                : ""
            }`}
          >
            <h1 className="font-bold mt-[10px] text-[gray] text-[1.1rem] p-[10px] font-serif rounded-xl hover:bg-[#80808041] ">
              <i className="bi bi-plus-lg mr-[20px]"></i> Add New Novel
            </h1>
          </button>
        </div>

        <div>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`${
              activeTab === "analytics"
                ? "bg-[#E8E5DC] rounded-xl text-[#0F5132]"
                : ""
            }`}
          >
            <h1 className="font-bold mt-[10px] text-[gray] text-[1.1rem] p-[10px] font-serif rounded-xl hover:bg-[#80808041] ">
              <i class="bi bi-journal-richtext mr-[20px]"></i> Analytics
            </h1>
          </button>
        </div>

        <div>
          <button
            onClick={() => setActiveTab("settings")}
            className={`${
              activeTab === "settings"
                ? "bg-[#E8E5DC] rounded-xl text-[#0F5132]"
                : ""
            }`}
          >
            <h1 className="font-bold mt-[10px] text-[gray] text-[1.1rem] p-[10px] font-serif rounded-xl hover:bg-[#80808041] ">
              <i class="bi bi-gear mr-[20px]"></i> Settings
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
