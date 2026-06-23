import React, { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../Context/ChapterContext";
import { useNavigate } from "react-router-dom";
import UpdateChapter from "./UpdateChapter";

const ChapterList = ({ novelId }) => {
  const { allChapter, allChapterData, getAllChapter, deleteChapter } =
    useContext(ChapterContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (novelId) {
      getAllChapter(novelId);
    }
  }, [novelId]);

  const handleDeleteChapter = (chapterId) => {
    if (window.confirm("Are you sure you want to delete this chapter?")) {
      deleteChapter(chapterId);
    }
  };
  const handleOpenModal = (chapter) => {
    setSelectedChapter(chapter);
  };
  const handleCloseModal = () => {
    setSelectedChapter(null);
  };
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mt-[20px]">
      <div className="grid grid-cols-[40px_minmax(0,1fr)_100px_120px_100px] px-[20px] py-[12px] bg-gray-50 border-b border-gray-100">
        <p className="text-[11px] text-gray-400 font-[600] tracking-widest">
          #
        </p>
        <p className="text-[11px] text-gray-400 font-[600] tracking-widest">
          TITLE
        </p>
        <p className="text-[11px] text-gray-400 font-[600] tracking-widest">
          STATUS
        </p>
        <p className="text-[11px] text-gray-400 font-[600] tracking-widest">
          UPDATED
        </p>
        <p className="text-[11px] text-gray-400 font-[600] tracking-widest text-right">
          ACTIONS
        </p>
      </div>

      {allChapter ? (
        <div className="flex items-center justify-center py-[40px]">
          <p className="text-gray-400">Loading chapters...</p>
        </div>
      ) : allChapterData?.length > 0 ? (
        allChapterData.map((ch) => (
          <div
            key={ch?._id}
            className="grid grid-cols-[40px_minmax(0,1fr)_100px_120px_100px] px-[20px] py-[14px] border-b border-gray-50 hover:bg-gray-50 transition-colors items-center"
          >
            <p className="text-[12px] text-gray-400 font-[500]">
              {ch?.chapterNumber}
            </p>
            <a href={`/single-chapter/${ch?._id}`}>
              <p className="text-[14px] text-gray-800 font-[500] cursor-pointer hover:text-[#027A36] truncate">
                {ch?.chapterTitle}
              </p>
            </a>
            <div>
              <span
                className="px-[10px] py-[4px] rounded-full text-[11px] font-[500]"
                style={{
                  background:
                    ch?.status === "Published" ? "#e8f2ec" : "#f1f1f1",
                  color: ch?.status === "Published" ? "#027A36" : "#888",
                }}
              >
                {ch?.status}
              </span>
            </div>
            <p className="text-[12px] text-gray-400">
              {new Date(ch?.updatedAt).toLocaleDateString()}
            </p>
            <div className="flex justify-end gap-[12px]">
              <a href={`/single-chapter/${ch?._id}`}>
                <button className="text-gray-400 hover:text-gray-700">
                  <i className="bi bi-eye text-[16px]"></i>
                </button>
              </a>
              <button
                onClick={() => handleOpenModal(ch)}
                className="text-gray-400 hover:text-[#027A36]"
              >
                <i className="bi bi-pencil text-[16px]"></i>
              </button>
              <UpdateChapter
                isOpen={!!selectedChapter}
                chapter={selectedChapter}
                onClose={handleCloseModal}
              />
              <button
                onClick={() => handleDeleteChapter(ch._id)}
                className="text-gray-400 hover:text-red-500"
              >
                <i className="bi bi-trash text-[16px]"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-[50px] gap-[10px]">
          <i className="bi bi-journal-x text-[32px] text-gray-200"></i>
          <p className="text-gray-400 text-[0.85rem]">No chapters yet</p>
        </div>
      )}
    </div>
  );
};

export default ChapterList;
