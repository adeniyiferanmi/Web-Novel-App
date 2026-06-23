import React, { useContext, useEffect } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { NovelContext } from "../Context/NovelContext";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const { searchNovels, searchResults, searchTerm, setSearchTerm, searching } =
    useContext(NovelContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    if (query) {
      searchNovels(query);
    }
  }, [query]);
  return (
    <div>
      <Header logoLink="/dashboard" />
      <div className="max-w-[1200px] mx-auto px-5 pt-[150px] pb-10">
        <div className="mb-10">
          {searchTerm && (
            <p className="mt-4 text-gray-500">
              Search results for:
              <span className="font-semibold text-black"> "{searchTerm}"</span>
            </p>
          )}
        </div>

        {/* Loading State */}
        {searching ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#027A36] rounded-full animate-spin"></div>
          </div>
        ) : searchResults?.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <i className="bi bi-search text-6xl text-gray-300"></i>

            <h2 className="text-2xl font-bold mt-5">No novels found</h2>

            <p className="text-gray-500 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          /* Results Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {searchResults?.map((novel) => (
              <div
                key={novel._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <a href={`/read/${novel._id}`}>
                  <div className="overflow-hidden">
                    <img
                      src={novel.coverImage}
                      alt={novel.novelTitle}
                      className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </a>

                <div className="p-4">
                  <a href={`/read/${novel._id}`}>
                    <h3 className="font-semibold text-lg line-clamp-1 hover:text-[#027A36] transition">
                      {novel.novelTitle}
                    </h3>
                  </a>

                  <p className="text-sm text-gray-500 mt-1">
                    {novel.author?.fullName || "Unknown Author"}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {novel.genres}
                    </span>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        novel.status === "Ongoing"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {novel.status}
                    </span>
                  </div>

                  <a
                    href={`/read/${novel._id}`}
                    className="block mt-5 text-center bg-[#027A36] text-white py-2 rounded-lg hover:bg-[#025d2a] transition"
                  >
                    Read Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
