import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Cookies from "js-cookie";

const SelectProfile = () => {
  const navigate = useNavigate();
  const { BaseUrl, setUserData, pick, handleUpdateProfile, setPick, loading } =
    useContext(AuthContext);

  const profiles = [
    { id: 1, title: "Author", description: "Write and publish stories" },
    { id: 2, title: "Reader", description: "Discover & collect novels" },
  ];
  const handleUpdateSubmit = () => {
    handleUpdateProfile();
  };
  return (
    <div className="min-h-screen bg-[#EEE9E1] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-[50px] w-[500px]">
        <h1 className="text-[1.8rem] font-serif font-bold text-center mb-[10px]">
          One last step
        </h1>
        <p className="text-center text-gray-400 mb-[30px]">
          How will you be using Bokifa?
        </p>

        <div className="flex gap-[20px] mb-[30px]">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => setPick(profile)}
              className="p-[20px] rounded-2xl w-full cursor-pointer transition-all"
              style={{
                border:
                  pick?.id === profile.id
                    ? "2px solid #E8B84B"
                    : "1px solid #d5dbe7",
                backgroundColor: pick?.id === profile.id ? "#EDE4D2" : "",
              }}
            >
              <i className="bi bi-book text-[1.5rem] text-[#00000060]"></i>
              <h1 className="font-bold text-[1.1rem] text-[#00000060] mt-[10px]">
                {profile.title}
              </h1>
              <p className="text-[0.9rem] text-[#00000060]">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleUpdateSubmit}
          disabled={loading || !pick}
          className="w-full bg-gradient-to-r from-[#dfc8a1] to-[#F87618] p-[15px] rounded-full font-bold text-[1.1rem]"
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default SelectProfile;
