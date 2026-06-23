import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const SingleAuthorPage = () => {
  const { authorId } = useParams();
  const { singleAuthor, getSingleAuthor, gettingSingleAuthor } =
    useContext(AuthContext);
  useEffect(() => {
    if (authorId) {
      getSingleAuthor(authorId);
    }
  }, [authorId]);
  if (gettingSingleAuthor) {
    return <p className="text-center py-[60px] text-gray-400">Loading...</p>;
  }
  if (!singleAuthor) {
    return null;
  }
  return (
    <div>
      <Header logoLink="/dashboard" />
      <div className="max-w-[1000px] m-auto px-[20px] py-[40px] pt-[200px]">
        <div className="flex items-center gap-[25px] mb-[40px] pb-[30px] border-b border-gray-100">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(singleAuthor?.author?.fullName)}&background=027A36&color=fff&rounded=true&bold=true&size=128`}
            alt={singleAuthor?.author?.fullName}
            className="w-[110px] h-[110px] rounded-full"
          />
          <div>
            <h1 className="text-[2rem] font-bold font-serif">
              {singleAuthor?.author?.fullName}
            </h1>
            <p className="text-gray-400 mt-[5px]">
              {singleAuthor?.novels?.length || 0} published novel
              {singleAuthor?.novels?.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <h2 className="text-[1.3rem] font-bold mb-[20px]">
          Novels by {singleAuthor?.author?.fullName}
        </h2>

        {singleAuthor.novels?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px]">
            {singleAuthor?.novels.map((novels) => (
              <a href={`/read/${novels._id}`} key={novels._id}>
                <div className="cursor-pointer group">
                  <img
                    src={novels.coverImage}
                    alt={novels.novelTitle}
                    className="w-full h-[260px] object-cover rounded-xl group-hover:opacity-90 transition-opacity"
                  />
                  <h3 className="font-bold text-[1rem] mt-[10px] truncate">
                    {novels.novelTitle}
                  </h3>
                  <p className="text-[0.85rem] text-gray-400">
                    {novels.genres}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-[50px] text-gray-400 border border-gray-100 rounded-2xl">
            No published novels yet
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleAuthorPage;
