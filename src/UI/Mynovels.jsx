import React, { useContext, useEffect, useState } from "react";
import { NovelContext } from "../Context/NovelContext";
import { formatDistanceToNow } from "date-fns";
import UpdateModal from "./UpdateModal";

const Mynovels = () => {
  const { novelData, getAuthorNovels, getAuthorNovel, deleteNovel } =
    useContext(NovelContext);
  const [selectedNovel, setSelectedNovel] = useState(null);

  const openUpdateModal = (novel) => {
    setSelectedNovel(novel);
  };

  const closeUpdateModal = () => {
    setSelectedNovel(null);
  };

  const tablehead = ["NOVEL", "STATUS", "CHAPTERS", "LAST UPDATED", "ACTIONS"];
  const totalReaders = novelData?.reduce(
    (acc, novel) => acc + (novel.totalReaders || 0),
    0,
  );
  const totalChapter = novelData?.reduce(
    (acc, novel) => acc + (novel.chapters.length || 0),
    0,
  );
  const handleDeleteNovel = (id) => {
    if (window.confirm("Are you sure you want to delete this novel?")) {
      deleteNovel(id);
    }
  };
  const getStatusStyle = (status) => {
    switch (status) {
      case "Published":
        return { background: "#e8f2ec", color: "#027A36" };
      case "Draft":
        return { background: "#f1f1f1", color: "#888" };
      case "Ongoing":
        return { background: "#fff8e6", color: "#b45309" };
      case "Completed":
        return { background: "#e8f0fe", color: "#1a56db" };
      default:
        return { background: "#f1f1f1", color: "#888" };
    }
  };

  useEffect(() => {
    getAuthorNovels();
  }, []);
  return (
    <div className="mt-[-40px]">
      <div>
        <h1 className="text-[2rem] font-bold">My Novel</h1>
      </div>
      <div className="flex w-[100%] gap-[30px] mt-[70px]">
        <div className="w-[100%] bg-white p-[20px] border border-[#808080a4] rounded-3xl ">
          <p className="text-[gray] font-[500] text-[1.1rem]">Total Novels</p>
          {novelData ? (
            <h1 className="text-[2.3rem] text-[#1A4731]  font-bold font-serif">
              {novelData.length}
            </h1>
          ) : (
            <h1 className="text-[2.3rem] font-serif text-[#1A4731] font-bold">
              0
            </h1>
          )}
        </div>
        <div className="w-[100%] bg-white p-[20px] border border-[#808080a4] rounded-3xl ">
          <p className="text-[gray] font-[500] text-[1.1rem]">Total Readers</p>
          <h1 className="text-[2.3rem] text-[#1A4731]  font-bold font-serif">
            {totalReaders}
          </h1>
        </div>
        <div className="w-[100%] bg-white p-[20px] border border-[#808080a4] rounded-3xl ">
          <p className="text-[gray] font-[500] text-[1.1rem]">Total Chapters</p>
          <h1 className="text-[2.3rem] text-[#1A4731]  font-bold font-serif">
            {totalChapter}
          </h1>
        </div>
      </div>
      <div className=" border border-gray-300 rounded-2xl mt-[50px]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-[30px] py-[15px] gap-[30px] py-[20px] border-b border-gray-300">
          {tablehead.map((h) => (
            <p
              key={h}
              className="text-[1rem] text-gray-400 font-[600] tracking-widest"
            >
              {h}
            </p>
          ))}
        </div>
        {getAuthorNovel ? (
          <p>Loading...</p>
        ) : novelData && novelData.length > 0 ? (
          novelData.map((novel) => (
            <div
              key={novel._id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-[50px] px-[20px] py-[15px] border bg-white border-gray-300"
            >
              <a href={`/author-dashboard/${novel._id}`}>
                <div className="flex gap-[20px]">
                  <img
                    src={novel.coverImage}
                    alt={novel.novelTitle}
                    // className="w-[100px] h-[100px] object-cover"
                    className="w-[40px] h-[55px] object-cover  rounded-md"
                  />
                  <div>
                    <h1 className="font-[600] text-[0.95rem] font-serif text-gray-800">
                      {novel.novelTitle}
                    </h1>
                    <p className="text-[0.9rem] text-gray-400">
                      {novel.genres}
                    </p>
                  </div>
                </div>
              </a>

              <div>
                <p
                  className="p-[10px] rounded-full text-[0.8rem] font-[500] flex justify-center items-center"
                  style={getStatusStyle(novel.status)}
                >
                  {novel.status}
                </p>
              </div>
              <p className="text-[1rem] text-gray-700 font-[500]">
                {novel.chapter?.length || 0}
              </p>
              <p className="text-[0.85rem] text-gray-400">
                {formatDistanceToNow(new Date(novel.updatedAt), {
                  addSuffix: true,
                })}
              </p>
              <div className="flex items-center gap-[15px]">
                <button className="text-gray-400 hover:text-gray-700 transition-colors">
                  <i className="bi bi-eye text-[18px]"></i>
                </button>
                <button
                  className="text-gray-400 hover:text-[#027A36] transition-colors"
                  onClick={() => openUpdateModal(novel)}
                >
                  <i className="bi bi-pencil text-[18px]"></i>
                </button>
                <UpdateModal
                  isOpen={!!selectedNovel}
                  novel={selectedNovel}
                  onClose={closeUpdateModal}
                />
                <button
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  onClick={() => handleDeleteNovel(novel._id)}
                >
                  <i className="bi bi-trash text-[18px]"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-[60px] gap-[10px]">
            <i className="bi bi-book text-[40px] text-gray-200"></i>
            <p className="text-gray-400 text-[0.9rem]">No novels yet</p>
            <button className="mt-[10px] px-6 py-2 bg-[#027A36] text-white rounded-full text-[0.85rem]">
              Add your first novel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mynovels;
