import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Sidebar = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="pt-[200px]">
      <div>
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullName)}&background=40223E&color=E8B84B&rounded=true&bold=true&size=128`}
          alt={userData.fullName}
          className="w-[45px] h-[45px] rounded-full cursor-pointer ring-2 ring-[#027A36] ring-offset-2"
        />
        <div>
          <h1>{userData.fullName}</h1>
          <p>{userData.Profile}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
