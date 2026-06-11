import React, { useContext, useState } from "react";
import Header from "../UI/Header";
import Sidebar from "../UI/Sidebar";
import Modal from "../UI/Modal";
import { AuthContext } from "../Context/AuthContext";
import Mynovels from "../UI/Mynovels";

const AuthorDashboardPage = () => {
  const { setActiveTab, activeTab } = useContext(AuthContext);
  return (
    <div className="">
      <Header />
      <div className="bg-[#FAF7F0] pt-[200px] pb-[100px]">
        <div className="w-[95%] m-auto flex gap-[50px]">
          <Sidebar />
          <main className="flex-1 p-8">
            {activeTab === "addnovels" && <Modal />}
            {activeTab === "novels" && <Mynovels />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthorDashboardPage;
