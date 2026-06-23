import React, { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../Context/ChapterContext";
import { NovelContext } from "../Context/NovelContext";
import { useNavigate, useParams } from "react-router-dom";

const ReadChapter = () => {
  const {
    getSingleChapter,
    singleChapter,
    singleData,
    getAllChapter,
    allChapterData,
  } = useContext(ChapterContext);
  const { getReadersNovelToRead, readersNovelData } = useContext(NovelContext);
  const { chapterId, novelId } = useParams();
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSingleChapter(chapterId);
    if (!readersNovelData || readersNovelData._id !== novelId) {
      getReadersNovelToRead(novelId);
    }
  }, [chapterId, novelId]);
  useEffect(() => {
    if (singleData?.novel) {
      getAllChapter(singleData.novel);
    }
  }, [singleData?.novel]);
  const currentIndex = allChapterData?.findIndex((ch) => ch._id === chapterId);
  const prevChapter =
    currentIndex > 0 ? allChapterData[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && currentIndex < allChapterData.length - 1
      ? allChapterData[currentIndex + 1]
      : null;
  return (
    <div>
      <aside
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white border-r border-gray-100 transition-transform z-[1500] overflow-y-auto ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-[20px] border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-[1.1rem]">Chapters</h2>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-gray-400"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div>
          {allChapterData?.map((ch) => (
            <div
              key={ch._id}
              onClick={() => {
                navigate(`/read/${novelId}/chapter/${ch._id}`);
                setShowSidebar(false);
              }}
              className="px-[20px] py-[14px] border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                background: ch._id === chapterId ? "#e8f2ec" : "",
                borderLeft:
                  ch._id === chapterId
                    ? "3px solid #027A36"
                    : "3px solid transparent",
              }}
            >
              <p className="text-[12px] text-gray-400">
                Chapter {ch.chapterNumber}
              </p>
              <p
                className="text-[14px] font-[500] truncate"
                style={{ color: ch._id === chapterId ? "#027A36" : "#1f2937" }}
              >
                {ch.chapterTitle}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-black/30 z-[1400]"
        />
      )}

      <div className="max-w-[700px] m-auto py-[40px] w-full">
        {/* back */}
        <div className="flex items-center justify-between mb-[30px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-[13px]"
          >
            <i className="bi bi-arrow-left"></i> Back to chapters
          </button>
          <button
            onClick={() => setShowSidebar(true)}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-[13px]"
          >
            <i className="bi bi-list"></i> All chapters
          </button>
        </div>
        {/* header */}
        <div className="mb-[30px]">
          <p className="text-[12px] text-[#027A36] font-[600] tracking-widest mb-[8px]">
            CHAPTER {singleData?.chapterNumber}
          </p>
          <h1 className="text-[2rem] font-bold font-serif mb-[10px]">
            {singleData?.chapterTitle}
          </h1>
          <div className="flex items-center gap-[10px]">
            <span
              className="px-[10px] py-[4px] rounded-full text-[11px] font-[500]"
              style={{
                background:
                  singleData?.status === "Published" ? "#e8f2ec" : "#f1f1f1",
                color: singleData?.status === "Published" ? "#027A36" : "#888",
              }}
            >
              {singleData?.status}
            </span>
            <p className="text-[12px] text-gray-400">
              Last updated{" "}
              {new Date(singleData?.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* content */}
        <div className="text-[16px] leading-[1.9] text-gray-700 whitespace-pre-wrap font-serif">
          {singleData?.content}
        </div>

        <div className="flex justify-between items-center mt-[50px] pt-[25px] border-t border-gray-100">
          {prevChapter ? (
            <button
              onClick={() =>
                navigate(`/read/${novelId}/chapter/${prevChapter._id}`)
              }
              className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-full text-[13px] hover:bg-gray-50 transition-colors"
            >
              <i className="bi bi-arrow-left"></i>
              <div className="text-left">
                <p className="text-[10px] text-gray-400">Previous</p>
                <p className="font-[500] truncate max-w-[140px]">
                  {prevChapter.chapterTitle}
                </p>
              </div>
            </button>
          ) : (
            <div></div>
          )}
          {nextChapter ? (
            <button
              onClick={() =>
                navigate(`/read/${novelId}/chapter/${nextChapter._id}`)
              }
              className="flex items-center gap-2 px-5 py-3 bg-[#027A36] text-white rounded-full text-[13px] hover:bg-[#153026] transition-colors"
            >
              <div className="text-right">
                <p className="text-[10px] text-green-100">Next</p>
                <p className="font-[500] truncate max-w-[140px]">
                  {nextChapter.chapterTitle}
                </p>
              </div>
              <i className="bi bi-arrow-right"></i>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadChapter;
