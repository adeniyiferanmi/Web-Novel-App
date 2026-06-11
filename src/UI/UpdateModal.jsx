import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { NovelContext } from "../Context/NovelContext";

const UpdateModal = ({ isOpen, novel, singleData, onClose }) => {
  console.log(novel);
  const [coverPreview, setCoverPreview] = useState(null);

  const { updateNovel, updatingNovel } = useContext(NovelContext);

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
  const statusOptions = ["Draft", "Published", "Ongoing", "Completed"];

  const updateSchema = yup.object({
    novelTitle: yup.string().required("Novel title is required"),
    genres: yup.string().required("Please select a genre"),
    synopsis: yup
      .string()
      .min(20, "Synopsis must be at least 20 characters")
      .required("Synopsis is required"),
    status: yup
      .string()
      .oneOf(["Draft", "Ongoing", "Completed", "Published"])
      .required(),
    coverImage: yup.mixed().nullable(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateSchema),
    defaultValues: {
      novelTitle: novel?.novelTitle || "",
      genres: novel?.genres || "",
      synopsis: novel?.synopsis || "",
      status: novel?.status || "",
      coverImage: novel?.coverImage,
    },
  });
  const watchedStatus = watch("status");

  useEffect(() => {
    if (novel) {
      reset({
        novelTitle: novel?.novelTitle,
        genres: novel?.genres,
        synopsis: novel?.synopsis,
        status: novel?.status,
        coverImage: novel?.coverImage,
      });
      setCoverPreview(novel.coverImage);
    }
  }, [novel]);

  if (!isOpen) return null;

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setValue("coverImage", file, { shouldValidate: true });
    }
  };
  const id = novel?._id;
  const handleUpdateNovels = (data) => {
    updateNovel(id, data, () => {
      onClose();
    });
  };

  return (
    <div className="fixed inset-0 bg-[#0000003d] flex items-center justify-center z-[2000] px-4">
      <div className="bg-white rounded-2xl w-full max-w-[820px] p-[30px] overflow-hidden max-h-[90vh] overflow-y-auto">
        <div>
          <div>
            <h1 className="text-[2rem] font-bold">Update Novel</h1>
          </div>
          <form onSubmit={handleSubmit(handleUpdateNovels)}>
            <div className="flex mt-[20px] gap-[60px] w-[100%]">
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
                  {errors.novelTitle && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.novelTitle.message}
                    </p>
                  )}
                </div>

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
                    {...register("genres")}
                    className="w-full border-b border-gray-200 mt-[20px] pb-2 text-[15px] outline-none bg-transparent text-gray-600 focus:border-[#027A36] transition-colors"
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
                          setValue("status", s, { shouldValidate: true });
                        }}
                        className="flex-1 py-[9px] rounded-full text-[1rem] border transition-all mt-[15px]"
                        style={{
                          borderColor:
                            watchedStatus === s ? "black" : "#e5e7eb",
                          background:
                            watchedStatus === s ? "#027A36" : "transparent",
                          color: watchedStatus === s ? "white" : "#9ca3af",
                          fontWeight: watchedStatus === s ? "500" : "600",
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
                {...register("synopsis")}
                placeholder="Write a compelling synopsis"
                className="w-full h-[160px] border border-gray-200 rounded-xl p-3 text-[14px] bg-gray-50 outline-none resize-none focus:border-[#027A36] transition-colors"
              ></textarea>
              {errors.synopsis && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.synopsis.message}
                </p>
              )}
            </div>
            <div className="flex gap-[20px] justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-15 py-4 border border-gray-200 rounded-full text-[13px] text-gray-500 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={updatingNovel}
                className="px-12 py-4 bg-[#027A36] rounded-full text-[13px] text-white font-medium hover:bg-[#153026] transition-colors"
              >
                {updatingNovel ? "Updating..." : "Update Novel"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
