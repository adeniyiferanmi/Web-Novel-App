import React, { useContext, useEffect } from "react";
import { NovelContext } from "../Context/NovelContext";
import { useParams } from "react-router-dom";
import Header from "../UI/Header";
import { LibraryContext } from "../Context/LibraryContext";

const ReadNovel = () => {
  const { getReadersNovelToRead, readersNovelData, gettingReadersNovel } =
    useContext(NovelContext);
  const {
    addLibrary,
    libraryData,
    addingToLibrary,
    userLibraryData,
    getLibraryNovels,
  } = useContext(LibraryContext);
  const { novelId } = useParams();

  useEffect(() => {
    getReadersNovelToRead(novelId);
  }, [novelId]);
  useEffect(() => {
    getLibraryNovels();
  }, []);
  const isInLibrary = userLibraryData?.some(
    (item) => item.novel?._id === readersNovelData?._id,
  );
  return (
    <div>
      <Header logoLink="/dashboard" />
      <div className="max-w-[900px] m-auto px-[20px] pt-[200px] py-[40px]">
        <div className="flex gap-[30px]">
          <img
            src={readersNovelData?.coverImage}
            alt={readersNovelData?.novelTitle}
            className="w-[220px] h-[300px] object-cover rounded-xl"
          />
          <div className="flex-1">
            <h1 className="text-[2rem] font-bold font-serif">
              {readersNovelData?.novelTitle}
            </h1>
            <p className="text-gray-400 mb-[10px]">
              by {readersNovelData?.author?.fullName}
            </p>
            <span className="px-[12px] py-[5px] bg-gray-100 rounded-full text-[0.85rem] text-gray-600">
              {readersNovelData?.genres}
            </span>
            <p className="text-gray-600 mt-[20px] leading-[1.8]">
              {readersNovelData?.synopsis}
            </p>

            {readersNovelData?.chapters?.length > 0 && (
              <a
                href={`/read/${readersNovelData?._id}/chapter/${readersNovelData.chapters[0]._id}`}
              >
                <button className="mt-[20px] px-8 py-3 bg-[#027A36] text-white rounded-full font-medium hover:bg-[#153026] transition-colors">
                  <i className="bi bi-book mr-2"></i>Start Reading
                </button>
              </a>
            )}
            {/* <button
              onClick={() => {
                addLibrary(readersNovelData?._id);
              }}
              disabled={addingToLibrary}
              className=" text-black  px-2 py-1 hover:text-white border-[#027A36] border-2 rounded-full text-xl ml-[5px] font-medium hover:bg-[#025d2a] transition-colors duration-300"
            >
              <i
                className={`bi ${
                  addingToLibrary
                    ? "bi-bookmark-check-fill"
                    : "bi-bookmark-plus-fill"
                }`}
              ></i>
            </button> */}
            <button
              onClick={() => addLibrary(readersNovelData?._id)}
              disabled={
                addingToLibrary || isInLibrary || !readersNovelData?._id
              }
              className={`px-2 py-1 border-2 rounded-full text-xl ml-[5px] font-medium transition-colors duration-300 ${
                isInLibrary
                  ? "bg-[#027A36] text-white border-[#027A36]"
                  : "text-black border-[#027A36] hover:bg-[#025d2a] hover:text-white"
              }`}
            >
              <i
                className={`bi ${
                  addingToLibrary
                    ? "bi-arrow-repeat animate-spin"
                    : isInLibrary
                      ? "bi-bookmark-check-fill"
                      : "bi-bookmark-plus-fill"
                }`}
              ></i>
            </button>
          </div>
        </div>

        <div className="mt-[40px]">
          <h2 className="text-[1.3rem] font-bold mb-[15px]">Chapters</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {readersNovelData?.chapters?.map((ch) => (
              <a
                href={`/read/${readersNovelData._id}/chapter/${ch._id}`}
                key={ch._id}
                className="flex items-center justify-between px-[20px] py-[15px] border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[0.95rem] font-[500]">
                  Chapter {ch.chapterNumber}: {ch.chapterTitle}
                </p>
                <i className="bi bi-chevron-right text-gray-400"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNovel;
