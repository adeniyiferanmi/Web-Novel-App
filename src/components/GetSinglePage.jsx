import React, { useContext, useEffect, useState } from "react";
import Header from "../UI/Header";
import { NovelContext } from "../Context/NovelContext";
import { useParams } from "react-router-dom";
import UpdateModal from "../UI/UpdateModal";
import { formatDistanceToNow } from "date-fns";
import AddChapters from "../UI/AddChapters";
import { ChapterContext } from "../Context/ChapterContext";

const GetSinglePage = () => {
  const { getSingleNovel, getNovel, singleData, deleteNovel } =
    useContext(NovelContext);
  const { allChapter, allChapterData, getAllChapter } =
    useContext(ChapterContext);

  const { id } = useParams();
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [selectedNovelForChapter, setSelectedNovelForChapter] = useState(null);
  const [isopen, setIsOpen] = useState(false);

  const openUpdateModal = (singleData) => {
    console.log(singleData);
    setSelectedNovel(singleData);
  };

  const closeUpdateModal = () => {
    setSelectedNovel(null);
  };
  const handleOpenModel = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDeleteNovel = (id) => {
    if (window.confirm("Are you sure you want to delete this novel?")) {
      deleteNovel(id);
    }
  };
  useEffect(() => {
    if (id) {
      getSingleNovel(id);
    }
  }, [id]);
  console.log(singleData);

  useEffect(() => {
    if (singleData?._id) {
      getAllChapter(singleData._id); // then fetch chapters
    }
  }, [singleData]);
  console.log(allChapterData);

  return (
    <div>
      <Header logoLink="/dashboard" />
      <section className="min-h-screen bg-[#0F0F0F]  px-6 py-10 pt-[200px]">
        <div className="max-w-7xl mx-auto">
          <a href="/author-dashboard">
            <button className="flex text-white items-center gap-2 px-5 py-2 border border-white/10 rounded-xl hover:bg-white/5 transition">
              <i className="bi bi-arrow-left"></i>
              My Novels
            </button>
          </a>

          <div className="mt-10 flex flex-col lg:flex-row gap-10">
            <div className="w-[280px] shrink-0">
              <img
                src={singleData?.coverImage}
                alt={singleData?.novelTitle}
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div className="flex-1 text-white">
              <h1 className="text-5xl font-bold mb-3">
                {singleData?.novelTitle}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span
                  className={`
            px-5 py-2 rounded-full text-sm font-semibold
            ${
              singleData?.status === "Published"
                ? "bg-green-500/20 text-green-400"
                : singleData?.status === "Draft"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : singleData?.status === "Completed"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-purple-500/20 text-purple-400"
            }
          `}
                >
                  {singleData?.status}
                </span>

                <span className="px-5 py-2 rounded-full bg-white/5 text-gray-300 text-sm">
                  {singleData?.genres}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Chapters
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {singleData?.chapters?.length || 0}
                  </h3>
                </div>

                <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Readers
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {singleData?.totalReaders}
                  </h3>
                </div>

                <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Last Updated
                  </p>

                  <h3 className="text-xl font-semibold mt-2">
                    {singleData?.updatedAt
                      ? formatDistanceToNow(new Date(singleData.updatedAt), {
                          addSuffix: true,
                        })
                      : "Loading..."}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => {
                    setSelectedNovelForChapter(singleData);
                    setIsOpen(true);
                  }}
                  className="bg-[#027A36] hover:bg-[#02632c] px-6 py-3 rounded-xl font-medium transition"
                >
                  <i className="bi bi-plus-lg mr-2"></i>
                  Add Chapter
                </button>
                <AddChapters
                  isOpen={isopen}
                  onClose={handleCloseModal}
                  novelId={selectedNovelForChapter?._id}
                />

                <button
                  onClick={() => openUpdateModal(singleData)}
                  className="border border-white/10 hover:bg-white/5 px-6 py-3 rounded-xl transition"
                >
                  <i className="bi bi-pencil mr-2"></i>
                  Edit Novel
                </button>
                <UpdateModal
                  isOpen={!!selectedNovel}
                  novel={selectedNovel}
                  onClose={closeUpdateModal}
                  onSuccess={() => getSingleNovel(singleData._id)}
                />

                <button
                  onClick={() => handleDeleteNovel(singleData._id)}
                  className="border border-red-500/30 text-red-400 hover:bg-red-500/10 px-6 py-3 rounded-xl transition"
                >
                  <i className="bi bi-trash mr-2"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white bg-[#1A1A1A] rounded-3xl p-8 border border-white/5">
            <h2 className="text-2xl font-semibold mb-6">Synopsis</h2>

            <p className="text-gray-300 leading-9 text-lg">
              {singleData?.synopsis}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex text-white items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Chapters</h2>
              <a href={`/chapter/${singleData?._id}`}>
                <button className="text-[#027A36] hover:text-[#03a548] transition">
                  View All
                </button>
              </a>
            </div>
            {allChapterData?.length > 0 ? (
              allChapterData.slice(0, 4).map((chapter, index) => (
                <a href={`/single-chapter/${chapter._id}`}>
                  <div
                    key={chapter._id}
                    className="bg-[#1A1A1A] text-white border  mt-[20px] border-white/5 rounded-2xl p-5 hover:border-[#027A36]/40 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="">
                        <p className="text-gray-400 text-sm">
                          Chapter {chapter.chapterNumber}
                        </p>

                        <h3 className="text-lg font-medium mt-1">
                          {chapter.chapterTitle}
                        </h3>
                      </div>

                      <i className="bi bi-chevron-right text-gray-400"></i>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="bg-[#1A1A1A] rounded-2xl p-10 text-center text-gray-400">
                No chapters added yet
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetSinglePage;
