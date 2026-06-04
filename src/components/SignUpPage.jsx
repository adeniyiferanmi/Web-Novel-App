import React, { useContext, useState } from "react";
import logo from "../assets/logo.webp";
import image4 from "../assets/google-color.svg";
import image5 from "../assets/Apple_logo_white.svg.png";
import { ContentContext } from "../Context/ContentContext";
// import ContentContext from "../Context/ContentContext";

const SignUpPage = () => {
  // const { pick, setPick } = useContext(ContentContext);
  const { pick, setPick } = useContext(ContentContext);
  const handlePickProfile = (profile) => {
    setPick(profile);
    localStorage.setItem("profile", profile.title);
  };
  const profiles = [
    {
      id: 1,
      title: " I'm an Author",
      discription: "Write and publish stories",
    },
    {
      id: 2,
      title: " I'm a Reader",
      discription: " Discover & collect novels",
    },
  ];
  return (
    <div className="bg-linear-to-r from-[#40223E] to-[#2E2939] py-[30px]">
      <div className="w-[600px] m-auto bg-[#EEE9E1] p-[50px] rounded-2xl ">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <div className=" text-center">
          <h1 className="font-serif text-[1.8rem] font-[600] mt-[40px]">
            Create Your Account
          </h1>
          <p className="text-[1.rem] text-[#00000079] font-[600]">
            Join 2.4 million readers and authors
          </p>
        </div>

        <div className="flex gap-[20px] ">
          {profiles.map((profile, key) => (
            <div
              className="p-[20px]  rounded-2xl w-[237px]"
              key={profile.id}
              onClick={() => handlePickProfile(profile)}
              style={{
                border:
                  pick?.id === profile.id
                    ? "2px solid #E8B84B"
                    : "1px solid #d5dbe7",
                backgroundColor: pick?.id === profile.id ? "#EDE4D2" : "",
              }}
            >
              <div className="text-[1.5rem] text-[#00000060]">
                <i class="bi bi-book"></i>
              </div>
              <h1 className="font-bold text-[1.1rem] text-[#00000060]">
                {profile.title}
              </h1>
              <p className="f text-[0.9rem] text-[#00000060]">
                {profile.discription}
              </p>
            </div>
          ))}
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[30px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
          />
          <div className="flex gap-[25px]">
            <input
              type="password"
              placeholder="Password"
              className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
            />
          </div>
          {pick?.title === " I'm an Author" && (
            <input
              type="password"
              placeholder="Pen Name"
              className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
            />
          )}

          <div className="flex gap-[10px] mt-[20px]">
            <input type="checkbox" />
            <p className="text-[#00000080] font-serif text-[0.9rem]">
              I agree to the{" "}
              <a href="" className=" ml-[5px] font-serif text-[#EEA73F]">
                {" "}
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="" className=" ml-[5px] font-serif text-[#EEA73F]">
                {" "}
                Privacy Policy{" "}
              </a>{" "}
            </p>
          </div>
          <div>
            <button className="block bg-linear-to-r from-[#EBAF44] to-[#F87618] w-[100%] p-[15px] text-[1.2rem] rounded-full mt-[20px] font-bold">
              Start My Jouney <i class="bi bi-arrow-right "></i>
            </button>
          </div>
          <div className="justify-center mt-[20px] flex ">
            <p className="text-[#00000080] font-serif">
              {" "}
              Already have an account?{" "}
            </p>
            <a href="" className="font-bold ml-[5px] font-serif text-[#EEA73F]">
              {" "}
              Log in
            </a>
          </div>
        </form>
        <div className="flex text-center mt-[20px] text-[#8080807e]">
          <span className="block border-b-1 w-[185px] mr-[10px] mb-[4px]"></span>{" "}
          ___or ___{" "}
          <span className="block border-b-1 w-[185px] mb-[4px] ml-[10px]"></span>
        </div>
        <div className="flex justify-center bg-white border-1 rounded-2xl border-[#8080806b] p-[12px] mt-[30px]">
          <img src={image4} alt="" className="w-[20px] mr-[10px]" />
          <span className="font-bold">Continue with Google</span>
        </div>
        <div className="flex justify-center bg-black text-white border-1 rounded-2xl border-[#8080806b] p-[12px] mt-[20px]">
          <img src={image5} alt="" className="w-[20px] mr-[10px]" />
          <span className="font-bold">Continue with Apple</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
