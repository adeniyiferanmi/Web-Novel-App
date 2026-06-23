import React, { use, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NovelContext } from "../Context/NovelContext";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const genres = [
  { name: "Literary Fiction", icon: "bi-book" },
  { name: "Romance", icon: "bi-heart" },
  { name: "Historical", icon: "bi-hourglass" },
  { name: "Horror", icon: "bi-moon-stars" },
  { name: "Mystery", icon: "bi-search" },
  { name: "Fantasy", icon: "bi-stars" },
  { name: "Science Fiction", icon: "bi-rocket" },
  { name: "Thriller", icon: "bi-lightning" },
  { name: "Adventure", icon: "bi-compass" },
  { name: "Young Adult", icon: "bi-people" },
];

const Genres = () => {
  return (
    <div>
      <Header logoLink="/dashboard" />
      <div className="max-w-[1100px] m-auto px-[20px] py-[40px] pt-[200px]">
        <h1 className="text-[2rem] font-bold font-serif mb-[10px]">
          Browse by Genre
        </h1>
        <p className="text-gray-400 mb-[30px]">Find your next favorite story</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-[20px]">
          {genres.map((genre) => (
            <a
              href={`/genre/${encodeURIComponent(genre.name)}`}
              key={genre.name}
            >
              <div className="flex flex-col items-center justify-center gap-[10px] p-[30px] border border-gray-100 rounded-2xl hover:border-[#027A36]/30 hover:bg-[#027A36]/5 transition-all cursor-pointer text-center">
                <i
                  className={`bi ${genre.icon} text-[28px] text-[#027A36]`}
                ></i>
                <p className="font-[500] text-[0.95rem]">{genre.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
