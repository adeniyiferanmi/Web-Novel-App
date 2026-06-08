import React, { useContext } from "react";
import logo from "../assets/30f3f2a0795e4fdba284f215d265ab1b.png";
import image1 from "../assets/photo-1614729939124-032f0b56c9ce.avif";
import image2 from "../assets/photo-1519074069444-1ba4fff66d16.avif";
import image3 from "../assets/237d7c90-5990-4e88-9b16-a865cb560d75.png";
import image4 from "../assets/google-color.svg";
import image5 from "../assets/Apple_logo_white.svg.png";
import image7 from "../assets/ap_bo_typecollection_7.webp";
import { AuthContext } from "../Context/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const { handlePassword, showPassword, login, signingIn } =
    useContext(AuthContext);

  const userSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    login(data);
  };
  return (
    <div className="flex">
      <section className="bg-[#154126] w-[100%]">
        <div className="w-[95%] m-auto pt-[30px] pb-[100px]">
          <div>
            <img src={logo} alt="" className="w-[150px]" />
          </div>
          <div className="w-[90%] m-auto">
            <div>
              <h1 className="text-[5rem]/[90px] font-serif text-[white] font-bold w-[550px]  pt-[70px]">
                Every story deserves a
                <span className="text-[#E8B84B]"> reader.</span>
              </h1>
            </div>
            <div className="flex w-[100%] gap-[20px] pt-[50px] relative">
              <img
                src={image3}
                alt=""
                className="w-[120px] border-1 border-white rounded-2xl h-[220px]"
              />
              <img
                src={image2}
                alt=""
                className="w-[120px] border-1 border-white rounded-2xl  mt-[30px] h-[220px]"
              />
              <img
                src={image1}
                alt=""
                className="w-[120px] border-1 border-white rounded-2xl  mt-[60px] h-[210px]"
              />
              <img
                src={image2}
                alt=""
                className="w-[120px] border-1 border-white rounded-2xl left-[20px] mt-[90px] h-[210px]"
              />
              <div className="absolute  bottom-[40px] flex gap-[40px] text-white">
                <p className="uppercase bg-[#2D4A5F] font-serif text-[0.8rem] p-[6px] rounded-2xl border-1 border-[#80808079]">
                  Fantasy
                </p>
                <p className="uppercase bg-[#4d242c91] font-serif text-[0.8rem] p-[6px] rounded-2xl border-1 border-[#4D242C]">
                  Romance
                </p>
                <p className="uppercase bg-[#404236b6] font-serif text-[0.8rem] p-[6px] rounded-2xl border-1 border-[#393b30]">
                  Thriller
                </p>
                <p className="uppercase bg-[#164956ab] font-serif text-[0.8rem] p-[6px] rounded-2xl border-1 border-[#17515f]">
                  Sci-fi
                </p>
                <p className="uppercase bg-[#352d4ba1] font-serif text-[0.8rem] p-[6px] rounded-2xl border-1 border-[#352b52]">
                  Horror
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] bg-[#f7ecd9]">
        <div className="w-[70%] m-auto pt-[30px]">
          <div>
            <h1 className="font-serif text-[2.5rem] font-[600]">
              Welcome back
            </h1>
            <p className="text-[1.rem] text-[#00000079] font-[600]">
              Sign in to continue your story
            </p>
          </div>
          <form className="block pt-[30px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email address"
              className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%]"
              {...register("email")}
            />
            <div className="relative w-[100%]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
                {...register("password")}
              />

              <span
                onClick={handlePassword}
                className="password-toggle absolute right-[15px] top-[25px] transform -translate-y-[50%] cursor-pointer"
              >
                <i class={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
              </span>
            </div>
            <a
              href=""
              className="text-right block text-[#EF9D37] text-[0.9rem] mt-[15px] font-serif font-semibold"
            >
              Forgot Password?
            </a>
            <button className="block bg-linear-to-r from-[#EBAF44] to-[#F87618] w-[100%] p-[15px] text-[1.2rem] rounded-full mt-[20px] font-bold">
              {signingIn ? "Signing In..." : "Log In"}
              {/* Log In <i class="bi bi-arrow-right "></i> */}
            </button>
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
          <div className="justify-center mt-[20px] flex ">
            <p className="text-[#00000080] font-serif"> New to Bokifa? </p>
            <a
              href="/signup"
              className="font-bold ml-[5px] font-serif text-[#EEA73F]"
            >
              {" "}
              Create account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
