import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { NovelContext } from "../Context/NovelContext";

const Modal = () => {
  const [coverPreview, setCoverPreview] = useState(null);
  const genres = [
    "Literary Fiction",
    "Romance",
    "Historical",
    "Horror",
    "Mystery",
    "Fantasy",
    "Science Fiction",
    "Thriller",
    "Adventure",
    "Young Adult",
  ];
  const addNovelShema = yup.object({
    novelTitle: yup.string().required("Novel title is required"),
    genres: yup
      .string()
      .required(
        "Please select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              a genre",
      ),
    synopsis: yup
      .string()
      .min(20, "Synopsis must be at least 20 characters")
      .required("Synopsis is required"),
    coverImage: yup
      .mixed()
      .test("required", "Cover image is required", (value) => {
        return value instanceof File || typeof value === "string";
        // accepts File (new upload) or string (existing URL from DB)
      })
      .test("fileSize", "Image must be less than 5MB", (value) => {
        if (typeof value === "string") return true; // skip for existing URL
        if (!value) return false;
        return value.size <= 5 * 1024 * 1024;
      }),
    status: yup
      .string()
      .oneOf(
        ["Draft", "Ongoing", "Completed", "Published"],
        "Status is required",
      )
      .required("Status is required"),
  });
  const { addNovel, datas, addingNovel } = useContext(NovelContext);
  const [statuses, setStatus] = useState("");
  const statusOptions = ["Draft", "Published", "Ongoing", "Completed"];
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNovelShema),
    defaultValues: {
      novelTitle: "",
      coverImage: "",
      status: localStorage.getItem("status") || "",
      genres: "",
      synopsis: "",
    },
  });

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setValue("coverImage", file, { shouldValidate: true });
    }
  };
  const handleAddNovel = (data) => {
    console.log("submitting:", data);
    addNovel(data);
  };
  useEffect(() => {
    if (datas) {
      reset();
      setCoverPreview(null);
      setValue("coverImage", "");
      setStatus("");
    }
  }, [datas]);

  return (
    <div className="mt-[-40px]">
      <div>
        <h1 className="text-[2rem] font-bold">Add New Novel</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleAddNovel, (errors) => {
          console.log("validation errors:", errors);
        })}
      >
        <div className="flex mt-[80px] gap-[60px] w-[100%]">
          <div>
            <label
              htmlFor="cover-upload"
              className="w-[250px] h-[250px] border-2 border-dashed border-[#c8bfb3] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#f0ebe3] overflow-hidden hover:border-[#1a3c2e] transition-colors w-[100px]"
            >
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="cover"
                  className="w-[250px] h-[250px] object-cover"
                />
              ) : (
                <>
                  <i className="bi bi-image text-[28px] text-[#a09890]"></i>
                  <span className="text-[12px] text-[#a09890] text-center leading-relaxed font-sans">
                    Upload Cover
                  </span>
                </>
              )}

              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverChange}
              />
            </label>
          </div>

          <div className="w-[100%]">
            <div>
              <label
                htmlFor=""
                className="text-[1.1rem] text-gray-400 mb-1.5 font-[500] font-serif"
              >
                NOVEL TITLE
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                className="w-[100%] border-b border-gray-200 mt-[20px] pb-2 text-[15px] outline-none bg-transparent placeholder-gray-300 focus:border-[#027A36] transition-colors"
                {...register("novelTitle")}
              />
            </div>
            {errors.novelTitle && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.novelTitle.message}
              </p>
            )}
            <div>
              <label
                htmlFor=""
                className="text-[1.1rem] block text-gray-400 mt-[20px] mb-1.5 font-[500] font-serif"
              >
                GENRES
              </label>
              <select
                name="genres"
                id=""
                className="w-full border-b border-gray-200 mt-[20px] pb-2 text-[15px] outline-none bg-transparent text-gray-600 focus:border-[#027A36] transition-colors"
                {...register("genres")}
              >
                <option value="" disabled>
                  Select genres...
                </option>

                {genres.map((genre) => (
                  <option value={genre} key={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              {errors.genres && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.genres.message}
                </p>
              )}
            </div>
            <div>
              <p className="text-[1.1rem] block text-gray-400 mt-[20px] mb-1.5 font-[500] font-serif">
                STATUS
              </p>
              <div className="flex gap-2">
                {statusOptions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      setStatus(s);
                      setValue("status", s, { shouldValidate: true });
                      localStorage.setItem("status", s);
                    }}
                    className="flex-1 py-[9px] rounded-full text-[1rem] border transition-all mt-[15px]"
                    style={{
                      borderColor: statuses === s ? "black" : "#e5e7eb",
                      background: statuses === s ? "#027A36" : "transparent",
                      color: statuses === s ? "white" : "#9ca3af",
                      fontWeight: statuses === s ? "500" : "600",
                    }}
                  >
                    {s}
                  </button>
                ))}
                <input type="hidden" {...register("status")} />
                {errors.status && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.status.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className="text-[1.1rem] mt-[30px] block text-gray-400 mb-1.5 font-[500] font-serif"
          >
            SYNOPSIS
          </label>
          <textarea
            placeholder="Write a compelling synopsis"
            className="w-full h-[160px] border border-gray-200 rounded-xl p-3 text-[14px] bg-gray-50 outline-none resize-none focus:border-[#027A36] transition-colors"
            {...register("synopsis")}
          ></textarea>
          {errors.synopsis && (
            <p className="text-red-500 text-[11px] mt-1">
              {errors.synopsis.message}
            </p>
          )}
        </div>
        <div className="flex gap-[20px] justify-end">
          <button className="px-15 py-4 border border-gray-200 rounded-full text-[13px] text-gray-500 hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button
            type="submit"
            className="px-12 py-4 bg-[#027A36] rounded-full text-[13px] text-white font-medium hover:bg-[#153026] transition-colors"
          >
            {addingNovel ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
