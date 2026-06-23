import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ChapterContext } from "../Context/ChapterContext";
import { useParams } from "react-router-dom";
const AddChapters = ({ isOpen, onClose, novelId }) => {
  const chapterSchema = yup.object({
    chapterTitle: yup.string().required("Chapter Title is required").trim(),
    chapterNumber: yup
      .number()
      .typeError("Chapter number must be a number")
      .required("Chapter Number is required"),
    content: yup
      .string()
      .min(50, "Content must be at least 50 characters")
      .required("Content is required"),
  });
  const [wordCount, setWordCount] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(chapterSchema),
    defaultValues: {
      chapterTitle: "",
      chapterNumber: "",
      content: "",
      status: "",
    },
  });
  const { addChapters, addingChapter, chapterData } =
    useContext(ChapterContext);

  const content = watch("content") || "";
  const handleContentChange = (e) => {
    const text = e.target.value;
    const count = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(count);
  };

  if (!isOpen) return null;
  const handlePublishChapter = (data) => {
    addChapters(novelId, { ...data, status: "Published" }, () => {
      reset();
      setWordCount(0);
      onClose();
    });
  };
  const handleSaveDraft = (data) => {
    addChapters(novelId, { ...data, status: "Draft" }, () => {
      reset();
      setWordCount(0);
      onClose();
    });
  };
  return (
    <div>
      <div class="fixed inset-0 bg-[#0000003d] flex items-center justify-center z-[2000] px-4">
        <div class="bg-white rounded-2xl w-full max-w-[750px] p-[30px] max-h-[90vh] overflow-y-auto">
          <div class="flex items-center text-[gray] justify-between mb-[40px]">
            <h1 class="text-[2rem] font-bold">New Chapter</h1>
            <button
              onClick={onClose}
              type="button"
              class="text-gray-400 hover:text-gray-600"
            >
              <i class="bi bi-x-lg text-[20px]"></i>
            </button>
          </div>

          <form>
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
                  <p className="text-red-500 text-[11px] mt-1">
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
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.chapterNumber.message}
                  </p>
                )}
              </div>
            </div>

            {}

            <div class="border border-gray-200 rounded-xl overflow-hidden">
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

              <textarea
                placeholder="Start writing your chapter here..."
                class="w-full h-[340px] p-[20px] text-black text-[15px] leading-[1.8] outline-none resize-none"
                {...register("content")}
                onChange={(e) => {
                  register("content").onChange(e);
                  handleContentChange(e);
                }}
              ></textarea>

              <div class="px-4 py-2 border-t border-gray-100 text-right text-[12px] text-gray-400">
                {wordCount} word{wordCount !== 1 ? "s" : ""}
              </div>
            </div>
            {errors.content && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.content.message}
              </p>
            )}

            <div class="flex gap-[15px] justify-end mt-[25px]">
              <button
                type="button"
                onClick={onClose}
                class="px-6 py-3 border border-red-200 text-red-500 rounded-full text-[13px] hover:bg-red-50 transition-colors"
              >
                Discard
              </button>
              <button
                type="button"
                disabled={addingChapter}
                onClick={handleSubmit(handleSaveDraft)}
                class="px-6 py-3 border border-[#027A36] text-[#027A36] rounded-full text-[13px] font-medium hover:bg-[#e8f2ec] transition-colors"
              >
                <i class="bi bi-save mr-2"></i>Save Draft
              </button>
              <button
                type="button"
                disabled={addingChapter}
                onClick={handleSubmit(handlePublishChapter)}
                class="px-7 py-3 bg-[#027A36] rounded-full text-[13px] text-white font-medium hover:bg-[#153026] transition-colors"
              >
                {addingChapter ? (
                  "Publishing..."
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i>Publish Chapter
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChapters;
