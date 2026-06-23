import React, { useContext, useState } from "react"; // ✅ add imports
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/logo.webp";
import image4 from "../assets/google-color.svg";

const SignUpPage = () => {
  const [pick, setPick] = useState(null);

  const {
    signup,
    signingUp,
    showPassword,
    handlePassword,
    showConfirmPassword,
    handleConfirmPassword,
    googleLogin,
  } = useContext(AuthContext);

  const profiles = [
    { id: 1, title: "Author", discription: "Write and publish stories" },
    { id: 2, title: "Reader", discription: "Discover & collect novels" },
  ];

  const userSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    fullName: yup.string().required("Full Name is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    penName: yup.string(),
    Profile: yup
      .string()
      .oneOf(["I'm an Author", "I'm a Reader"], "Please select a profile")
      .required("Profile is required"),
    agreedToTerms: yup
      .boolean()
      .oneOf([true], "You must accept the terms")
      .required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      penName: "",
      Profile: "",
    },
  });

  const handlePickProfile = (profiler) => {
    setPick(profiler);
    setValue("Profile", profiler.title.trim(), { shouldValidate: true });
    clearErrors("Profile");
  };

  const onSubmit = (data) => {
    signup(data, setError);
  };

  return (
    <div className="bg-linear-to-r from-[#40223E] to-[#2E2939] py-[30px]">
      <div className="w-[600px] m-auto bg-[#EEE9E1] p-[50px] rounded-2xl">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="text-center">
          <h1 className="font-serif text-[1.8rem] font-[600] mt-[40px]">
            Create Your Account
          </h1>
          <p className="text-[1rem] text-[#00000079] font-[600] mb-[20px]">
            Join 2.4 million readers and authors
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* profile picker */}
          <div className="flex gap-[20px]">
            {profiles.map((profiler) => (
              <div
                className="p-[20px] rounded-2xl w-[237px] cursor-pointer"
                key={profiler.id}
                onClick={() => handlePickProfile(profiler)}
                style={{
                  border:
                    pick?.id === profiler.id
                      ? "2px solid #E8B84B"
                      : "1px solid #d5dbe7",
                  backgroundColor: pick?.id === profiler.id ? "#EDE4D2" : "",
                }}
              >
                <div className="text-[1.5rem] text-[#00000060]">
                  <i className="bi bi-book"></i> {/* ✅ className not class */}
                </div>
                <h1 className="font-bold text-[1.1rem] text-[#00000060]">
                  {profiler.title}
                </h1>
                <p className="text-[0.9rem] text-[#00000060]">
                  {profiler.discription}
                </p>
              </div>
            ))}
          </div>
          <input type="hidden" {...register("Profile")} />
          {errors.Profile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.Profile.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[30px]"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className="flex gap-[25px]">
            <div className="w-[100%]">
              <div className="relative w-[100%]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
                />
                <span
                  onClick={handlePassword}
                  className="password-toggle absolute right-[15px] top-[60%] transform -translate-y-[50%] cursor-pointer"
                >
                  <i
                    className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                  ></i>
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-[100%]">
              <div className="relative w-[100%]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
                />
                <span
                  onClick={handleConfirmPassword}
                  className="password-toggle absolute right-[15px] top-[60%] transform -translate-y-[50%] cursor-pointer"
                >
                  <i
                    className={
                      showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"
                    }
                  ></i>
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {pick?.title === "I'm an Author" && (
            <input
              type="text"
              placeholder="Pen Name (Optional)"
              className="bg-white block border-1 border-[#80808060] p-[13px] rounded-xl w-[100%] mt-[20px]"
              {...register("penName")}
            />
          )}

          <div className="flex gap-[10px] mt-[20px]">
            <input type="checkbox" {...register("agreedToTerms")} />
            <p className="text-[#00000080] font-serif text-[0.9rem]">
              I agree to the
              <a href="#" className="ml-[5px] font-serif text-[#EEA73F]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="ml-[5px] font-serif text-[#EEA73F]">
                Privacy Policy
              </a>
            </p>
          </div>
          {errors.agreedToTerms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agreedToTerms.message}
            </p>
          )}

          {errors.root && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.root.message}
            </p>
          )}

          <button
            type="submit"
            disabled={signingUp}
            className="block bg-linear-to-r from-[#dfc8a1] to-[#F87618] w-[100%] p-[15px] text-[1.2rem] rounded-full mt-[20px] font-bold"
          >
            {signingUp ? "Signing Up..." : "Start My Journey"}
          </button>

          <div className="flex items-center gap-3 mt-5 text-gray-400">
            <span className="flex-1 border-b border-gray-300" />
            <span>or</span>
            <span className="flex-1 border-b border-gray-300" />
          </div>

          {/* google */}
          <div className="flex justify-center bg-white border-1 rounded-2xl border-[#8080806b] p-[12px] mt-[30px]">
            <button type="button" onClick={googleLogin} className="flex">
              <img src={image4} alt="" className="w-[20px] mr-[10px]" />
              <span className="font-bold">Continue with Google</span>
            </button>
          </div>

          <div className="justify-center mt-[20px] flex">
            <p className="text-[#00000080] font-serif">
              Already have an account?
            </p>
            <a
              href="/login"
              className="font-bold ml-[5px] font-serif text-[#EEA73F]"
            >
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
