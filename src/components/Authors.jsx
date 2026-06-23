import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Authors = () => {
  const { logout, userData, getAllAuthors, authorsData, gettingAuthors } =
    useContext(AuthContext);
  useEffect(() => {
    getAllAuthors();
  }, []);
  return (
    <div>
      <Header logoLink="/dashboard" />
      <div className="max-w-[1100px] m-auto px-[20px] py-[40px] pt-[200px]">
        <h1 className="text-[2rem] font-bold font-serif mb-[10px]">Authors</h1>
        <p className="text-gray-400 mb-[30px]">
          Discover the writers behind your favorite novels
        </p>

        {gettingAuthors ? (
          <p className="text-gray-400">Loading authors...</p>
        ) : authorsData?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px]">
            {authorsData.map((author) => (
              <a href={`/author/${author._id}`} key={author._id}>
                <div className="flex flex-col items-center text-center p-[20px] border border-gray-100 rounded-2xl hover:border-[#027A36]/30 hover:shadow-sm transition-all cursor-pointer">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(author.fullName)}&background=027A36&color=fff&rounded=true&bold=true&size=128`}
                    alt={author.fullName}
                    className="w-[80px] h-[80px] rounded-full mb-[15px]"
                  />
                  <h3 className="font-bold text-[1rem]">{author.fullName}</h3>
                  <p className="text-[0.85rem] text-gray-400 mt-[5px]">
                    {author.novelCount || 0} novel
                    {author.novelCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-[60px]">
            No authors found
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Authors;
