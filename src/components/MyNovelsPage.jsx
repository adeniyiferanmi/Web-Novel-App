import React, { useContext, useEffect } from "react";
import { NovelContext } from "../Context/NovelContext";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const MyNovelsPage = () => {
  const { getAllNovel, allNovels } = useContext(NovelContext);
  useEffect(() => {
    getAllNovel();
  }, []);
  return (
    <div>
      <Header logoLink="/dashboard" />
      <section className="pt-[200px] w-[95%] m-auto mb-[30px] ">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
          Our Collection
        </h1>
        <div className="grid grid-cols-3 gap-[40px] ">
          {allNovels?.map((novel) => (
            <div className="text-center w-[100%]">
              <a href={`read/${novel._id}`}>
                <div className="  w-[100%]">
                  <div
                    className="w-[100%] h-[500px] relative object-cover hover:transform-[scale(1.0112)] bg-center"
                    style={{ backgroundImage: `url(${novel.coverImage})` }}
                  >
                    <div className="flex justify-center items-center items-center p-[5px] absolute bottom-[-5px] right-[35%] bg-[white] w-[120px] rounded-[120px]">
                      <i class="bi bi-star-fill text-[#E2BB80] "></i>
                      <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                      <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                      <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
                      <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[1.2rem] mt-[10px] truncate">
                    {novel.novelTitle}
                  </h3>
                  <p className="text-[1rem] text-[gray]">{novel.genres}</p>
                  <p className="text-[1rem] text-[#1f1d1d]">
                    by {novel.author?.fullName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyNovelsPage;
