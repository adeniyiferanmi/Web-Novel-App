import React, { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../Context/ChapterContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UpdateChapter = ({ onClose, isOpen, chapter }) => {
  console.log(chapter);

  const { updatingChapter, updateData, updateChapter } =
    useContext(ChapterContext);
  const [chapterStatus, setChapterStatus] = useState(chapter?.status || "");
  const updateChapterSchema = yup.object({
    chapterTitle: yup.string().required("Chapter Title is required").trim(),
    chapterNumber: yup
      .number()
      .typeError("Chapter number must be a number")
      .required("Chapter Number is required"),
    content: yup
      .string()
      .min(50, "Content must be at least 50 characters")
      .required("Content is required"),
    status: yup.string().oneOf(["Draft", "Published"]).required(),
  });
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateChapterSchema),
    defaultValues: {
      chapterTitle: chapter?.chapterTitle || "",
      chapterNumber: chapter?.chapterNumber || "",
      content: chapter?.content || "",
      status: chapter?.status || "",
    },
  });
  useEffect(() => {
    if (chapter) {
      reset({
        chapterTitle: chapter.chapterTitle,
        chapterNumber: chapter.chapterNumber,
        content: chapter.content,
        status: chapter.status,
      });
    }
    setChapterStatus(chapter?.status);
  }, [chapter, reset]);

  if (!isOpen) return null;
  const chapterId = chapter?._id;
  const handleUpdateChapter = (data) => {
    updateChapter(chapterId, data, () => {
      onClose();
    });
  };
  const statusOption = ["Draft", "Published"];
  return (
    <div>
      <div class="fixed inset-0 bg-[#0000003d] flex items-center justify-center z-[2000] px-4">
        <div class="bg-white rounded-2xl w-full max-w-[750px] p-[30px] max-h-[90vh] overflow-y-auto">
          <div class="flex items-center text-[gray] justify-between mb-[40px]">
            <h1 class="text-[2rem] font-bold">Edit Chapter</h1>
            <button
              onClick={onClose}
              type="button"
              class="text-gray-400 hover:text-gray-600"
            >
              <i class="bi bi-x-lg text-[20px]"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(handleUpdateChapter)}>
            <div class="grid grid-cols-2 gap-[20px] mb-[20px]">
              <div>
                <label class="text-[0.9rem] text-gray-400 font-[500] font-serif">
                  CHAPTER TITLE
                </label>
                <input
                  type="text"
                  placeholder="e.g. The Beginning"
                  class="w-full border-b text-black border-gray-200 mt-[8px] pb-2 text-[15px] outline-none bg-transparent focus:border-[#027A36] transition-colors"
                  {...register("chapterTitle")}
                />
                {errors.chapterTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.chapterTitle.message}
                  </p>
                )}
              </div>

              <div>
                <label class="text-[0.9rem] text-gray-400 font-[500] font-serif">
                  CHAPTER NUMBER
                </label>
                <input
                  type="number"
                  placeholder="e.g. 3"
                  min="1"
                  class="w-full border-b text-black border-gray-200 mt-[8px] pb-2 text-[15px] outline-none bg-transparent focus:border-[#027A36] transition-colors"
                  {...register("chapterNumber")}
                />
                {errors.chapterNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.chapterNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-[20px]">
              <label className="text-[0.9rem] text-gray-400 font-[500] font-serif">
                STATUS
              </label>
              <div className="flex gap-2 mt-[10px]">
                {statusOption.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      setChapterStatus(s);
                      setValue("status", s, { shouldValidate: true });
                    }}
                    className="flex-1 py-[9px] rounded-full text-[1rem] border transition-all"
                    style={{
                      borderColor: chapterStatus === s ? "black" : "#e5e7eb",
                      background:
                        chapterStatus === s ? "#027A36" : "transparent",
                      color: chapterStatus === s ? "white" : "#9ca3af",
                      fontWeight: chapterStatus === s ? "500" : "400",
                    }}
                  >
                    {s}
                  </button>
                ))}
                <input type="hidden" {...register("status")} />
                {errors.status && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.status.message}
                  </p>
                )}
              </div>

              <div class="border border-gray-200 rounded-xl overflow-hidden mt-[50px]">
                <div class="flex items-center gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50 flex-wrap">
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-type-bold"></i>
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-type-italic"></i>
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-type-underline"></i>
                  </button>
                  <div class="w-[1px] h-5 bg-gray-200 mx-1"></div>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-text-left"></i>
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-text-center"></i>
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-text-right"></i>
                  </button>
                  <div class="w-[1px] h-5 bg-gray-200 mx-1"></div>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-blockquote-left"></i>
                  </button>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-gray-500"
                  >
                    <i class="bi bi-list-ul"></i>
                  </button>
                </div>

                <input type="hidden" {...register("status")} />
              </div>
              <textarea
                placeholder="Start writing your chapter here..."
                class="w-full h-[340px] p-[20px] text-black text-[15px] leading-[1.8] outline-none resize-none"
                {...register("content")}
              ></textarea>
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}

              <div class="px-4 py-2 border-t border-gray-100 text-right text-[12px] text-gray-400"></div>
            </div>

            <div class="flex gap-[15px] justify-end mt-[25px]">
              <button
                type="button"
                onClick={onClose}
                class="px-6 py-3 border border-red-200 text-red-500 rounded-full text-[13px] hover:bg-red-50 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updatingChapter}
                class="px-7 py-3 bg-[#027A36] rounded-full text-[13px] text-white font-medium hover:bg-[#153026] transition-colors"
              >
                {updatingChapter ? "Updating" : "Update Chapter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateChapter;
