import React, { useContext, useEffect } from "react";
import { NovelContext } from "../Context/NovelContext";
import { useParams } from "react-router-dom";

const GenreNovels = () => {
  const { gettingGenre, getGenreData, getGenres } = useContext(NovelContext);

  const { genres } = useParams();

  useEffect(() => {
    if (genres) {
      getGenres(genres);
    }
  }, [genres]);
  console.log(getGenreData);

  return (
    <div>
      <div className="max-w-[1100px] m-auto px-[20px] py-[40px]">
        <a
          href="/genre"
          className="flex items-center gap-2 text-gray-400 hover:text-gray-700 mb-[20px] text-[13px] w-fit"
        >
          <i className="bi bi-arrow-left"></i> All genres
        </a>

        <h1 className="text-[2rem] font-bold font-serif mb-[30px]">
          {decodeURIComponent(genres)}
        </h1>

        {gettingGenre ? (
          <p className="text-gray-400">Loading novels...</p>
        ) : getGenreData?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px]">
            {getGenreData.map((novel) => (
              <a href={`/read/${novel._id}`} key={novel._id}>
                <div className="cursor-pointer group">
                  <img
                    src={novel.coverImage}
                    alt={novel.novelTitle}
                    className="w-full h-[260px] object-cover rounded-xl group-hover:opacity-90 transition-opacity"
                  />
                  <h3 className="font-bold text-[1rem] mt-[10px] truncate">
                    {novel.novelTitle}
                  </h3>
                  <p className="text-[0.85rem] text-gray-400">
                    by {novel.author?.fullName}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-[60px] text-gray-400 border border-gray-100 rounded-2xl">
            No novels found in this genre yet
          </div>
        )}
      </div>
    </div>
  );
};

export default GenreNovels;
