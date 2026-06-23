import React, { useContext, useEffect } from "react";
import Header from "../UI/Header";
import { LibraryContext } from "../Context/LibraryContext";
import Footer from "../UI/Footer";

const ReadersLibrary = () => {
  const { userLibraryData, getLibraryNovels, removeFromLibrary } =
    useContext(LibraryContext);

  useEffect(() => {
    getLibraryNovels();
  }, []);
  console.log(userLibraryData);
  const handleRomoveFromLibrary = (novelId) => {
    removeFromLibrary(novelId);
  };
  return (
    <div>
      <div>
        <Header logoLink="/dashboard" />

        <section className="max-w-[1200px] mx-auto px-5 pt-[150px] pb-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold">My Library</h1>
              <p className="text-gray-500 mt-2">
                {userLibraryData?.length || 0} Saved Novels
              </p>
            </div>
          </div>

          {userLibraryData?.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-20 text-center">
              <i className="bi bi-bookmark text-6xl text-gray-300"></i>

              <h2 className="text-xl font-semibold mt-4">
                Your library is empty
              </h2>

              <p className="text-gray-500 mt-2">
                Start exploring novels and add them to your library.
              </p>

              <a
                href="/dashboard"
                className="inline-block mt-6 bg-[#027A36] text-white px-6 py-3 rounded-full hover:bg-[#025d2a] transition"
              >
                Discover Novels
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {userLibraryData?.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <a href={`/read/${item.novel._id}`}>
                      <img
                        src={item.novel.coverImage}
                        alt={item.novel.novelTitle}
                        className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
                      />
                    </a>
                    <button
                      onClick={() => {
                        handleRomoveFromLibrary(item.novel._id);
                      }}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>

                  <div className="p-4">
                    <a href={`/read/${item.novel._id}`}>
                      <h3 className="font-semibold text-lg line-clamp-1 hover:text-[#027A36] transition">
                        {item.novel.novelTitle}
                      </h3>
                    </a>

                    <p className="text-sm text-gray-500 mt-1">
                      by {item.novel.author?.fullName}
                    </p>

                    <div className="mt-4 flex gap-2">
                      {item.novel.chapters?.length > 0 ? (
                        <a
                          href={`/read/${item.novel._id}/chapter/${item.novel.chapters[0]}`}
                          className="flex-1 bg-[#027A36] text-white py-2 rounded-lg text-center hover:bg-[#025d2a] transition"
                        >
                          <i className="bi bi-book mr-2"></i>
                          Continue
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed"
                        >
                          No Chapters Yet
                        </button>
                      )}

                      <a
                        href={`/novel/${item.novel._id}`}
                        className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50"
                      >
                        <i className="bi bi-info-circle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReadersLibrary;
