import React from "react";
import Header from "../UI/Header";
import HeroSection from "../UI/HeroSection";
import MarqueeSection from "../UI/MarqueeSection";
import image1 from "../assets/bo_pro_15.webp";
import image2 from "../assets/bo_pro_3.webp";
import image3 from "../assets/bo_pro_9.webp";
import image4 from "../assets/bo_pro_27.webp";
import image5 from "../assets/bo_pro_19.webp";
import image6 from "../assets/bo_pro_23.webp";
import image7 from "../assets/ap_bo_typecollection_7.webp";
import image8 from "../assets/ap_bo_typecollection_8.png";
import image9 from "../assets/ap_bo_typecollection_5.webp";
import image10 from "../assets/ap_bo_typecollection_3.webp";
import image11 from "../assets/ap_bo_typecollection_2.png";
import image12 from "../assets/ap_bo_typecollection_1.webp";
import image13 from "../assets/ap_bo_typecollection_6.png";
import image14 from "../assets/ap_bo_typecollection_4.webp";
import image15 from "../assets/bo_pro_25.webp";
import image16 from "../assets/bo_pro_13.webp";
import image17 from "../assets/bo_pro_8.webp";
import image18 from "../assets/bo_pro_28.webp";
import image19 from "../assets/bo_pro_10.webp";
import image20 from "../assets/bo_pro_6.webp";
import image21 from "../assets/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.webp";
import image22 from "../assets/bo_pro_18.webp";
import image23 from "../assets/bo_pro_22.webp";
import image24 from "../assets/bo_pro_16.webp";
import image25 from "../assets/bo_pro_17.webp";
import image26 from "../assets/bo_pro_11.webp";
import image27 from "../assets/bo_pro_2.webp";
import image28 from "../assets/bo_pro_7.webp";
import image29 from "../assets/bo_pro_29.webp";
import image30 from "../assets/bo_pro_7.webp";
import authorImage1 from "../assets/Rectangle_289.webp";
import authorImage2 from "../assets/Rectangle_288.webp";
import authorImage3 from "../assets/Rectangle_290.webp";
import authorImage4 from "../assets/Rectangle_291.webp";
import authorImage5 from "../assets/Rectangle_292.webp";
import authorImage6 from "../assets/Rectangle_293.webp";
import authorImage7 from "../assets/Rectangle_302.webp";
import authorImage8 from "../assets/Rectangle_289.webp";
import backgroundImage1 from "../assets/1.webp";
import backgroundImage2 from "../assets/2.webp";
import backgroundImage3 from "../assets/3.webp";
import banner from "../assets/bo_banner.webp";
import Footer from "../UI/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MarqueeSection />
      <section className="mt-[70px] w-[95%] m-auto mb-[30px] ">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
          Our New Novels
        </h1>
        <div className="flex gap-[40px]">
          <div className="text-center">
            <div className=" relative">
              <img
                src={image1}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80] "></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>

            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              A Short Of Nearly Everything
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image2}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              Complete Set Of 7 Books: 30 Days To...
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image3}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              Love In Time Of Cholera
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image4}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px]  rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              One Hundred Years Of Solitude
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image5}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Brief Wondrous Life Of Oscar Wao
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image6}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star text-[#E2E2E2]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Girl With The Dragon Tatoo
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F5F0] pt-[60px] mt-[80px] pb-[50px]">
        <section className="w-[95%] m-auto">
          <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
            Top Categories
          </h1>
          <div className="flex pt-[30px] gap-[40px] text-center">
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f] hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image7} alt="" className="w-[80px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Horror
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f]  hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image8} alt="" className="w-[90px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Fantasy
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f] hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image9} alt="" className="w-[90px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Fiction
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f] hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image10} alt="" className="w-[90px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Kids
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f]  hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image11} alt="" className="w-[90px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                History
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f]  hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image12} alt="" className="w-[80px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Biography
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f]  hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image13} alt="" className="w-[90px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Family
              </p>
            </div>
            <div className="border-[2px] px-[25px] py-[50px] border-[#8080803f]  hover:transform-[scale(1.12)] hover:bg-white">
              <img src={image14} alt="" className="w-[80px]" />
              <p className=" font-[Fraunces, serif] font-300 text-[1.3rem] text-[#292727] mt-[20px]">
                Romance
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="mt-[70px] w-[95%] m-auto mb-[30px] ">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
          Current Top Novels
        </h1>
        <div className="flex gap-[40px]">
          <div className="text-center">
            <div className=" relative">
              <img
                src={image15}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80] "></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>

            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The World According To Garp
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image16}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Wind Up Bird Chronicle
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image17}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Unbearable Lightness Of Being
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image18}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px]  rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Shadow Of The Wind
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image19}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Seven Husbands Of Evelyn Hugo
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image20}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star text-[#E2E2E2]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Housemaid
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center w-[95%] m-auto h-[400px] flex items-center rounded-2xl mt-[80px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="block w-[85%] m-auto">
          <p className="text-[#D0D83A] text-[1.1rem] font-bold font-sans">
            Best Collection
          </p>
          <h1 className="font-bold text-[2.8rem]/[50px] text-white uppercase">
            Top favourite <br /> thriller stories
          </h1>
          <span className="block font-sans text-[1rem] mt-[10px] font-[600] text-white ml-[5px]">
            Find our take on the best books of all time.
          </span>
          <button className="bg-[white] hover:bg-[#102327] hover:text-[white] p-[12px] w-[180px] mt-[15px] rounded-[180px] font-[600]">
            Discover Now <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>
      <section className="mt-[70px] w-[95%] m-auto mb-[230px] ">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
          Short Novels
        </h1>
        <div className="flex gap-[40px]">
          <div className="text-center">
            <div className=" relative">
              <img
                src={image21}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80] "></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>

            <p className="mt-[10px] capitalize font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              All the eye we cannot see
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image22}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-half text-[#027A36] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] capitalize text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              Extremely Loud and Incredibly Close
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image2}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Unbearable Lightness Of Being
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image17}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px]  rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Curious Incident of the Dog in the Night-Time
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image16}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[-5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star-fill text-[#E2BB80]"></i>
                <i class="bi bi-star-fill text-[#E2BB80] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Elegance of the Hedgehog
            </p>
          </div>
          <div className="text-center">
            <div className=" relative">
              <img
                src={image17}
                alt=""
                className="hover:transform-[scale(1.0112)]"
              />
              <div className="flex justify-center items-center p-[5px] absolute bottom-[5px] right-[40px] bg-[white] w-[120px] rounded-[120px]">
                <i class="bi bi-star text-[#E2E2E2]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
              </div>
            </div>
            <p className="mt-[10px] font-[Fraunces, sans-serif] text-[1.2rem]/[26px] text-[#706F91] hover:text-[#027A36]">
              The Shadow of the Wind
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F5F0] relative">
        <section className="mt-[70px] w-[95%] m-auto mb-[30px] flex gap-[30px] absolute top-[-200px] left-[40px]">
          <div
            className="bg-cover bg-center p-[30px] h-[350px] w-[100%] rounded-3xl relative hover:transform-[scale(1.0123)]"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
            }}
          >
            <div className="absolute right-[50px] mt-[70px]">
              <p className="text-[#1acdec] text-[1rem] font-bold">
                Game. Anime. Life
              </p>
              <h1 className="text-white font-bold text-[2.2rem]/[40px] uppercase">
                collect <br /> Shop
              </h1>
            </div>
            <div className="absolute bottom-[25px] right-[25px]">
              <button className="bg-[white] hover:bg-[#027A36] hover:text-[white] p-[10px] w-[130px] rounded-[130px] font-[600]">
                Read Now <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div
            className="bg-cover bg-center p-[30px] h-[350px] w-[100%] rounded-3xl relative hover:transform-[scale(1.0123)]"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
            }}
          >
            <div className="absolute right-[50px] mt-[70px]">
              <p className="text-[#a89864] text-[1rem] font-bold">
                New this week.
              </p>
              <h1 className="text-white font-bold text-[2.2rem]/[40px] uppercase">
                The Truth <br /> Lies Here
              </h1>
            </div>
            <div className="absolute bottom-[25px] right-[25px]">
              <button className="bg-[white] hover:bg-[#027A36] hover:text-[white] p-[10px] w-[130px] rounded-[130px] font-[600]">
                Read Now <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div
            className="bg-cover bg-center p-[30px] h-[350px] w-[100%] rounded-3xl relative hover:transform-[scale(1.0123)]"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
            }}
          >
            <div className="absolute right-[50px] mt-[70px]">
              <p className="text-[#1ACBDA] text-[1rem] font-bold">
                Fiction bestsellers.
              </p>
              <h1 className="text-white font-bold text-[2.2rem]/[40px] uppercase">
                Woman in <br /> the Water
              </h1>
            </div>
            <div className="absolute bottom-[25px] right-[25px]">
              <button className="bg-[white] hover:bg-[#027A36] hover:text-[white] p-[10px] w-[130px] rounded-[130px] font-[600]">
                Read Now <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="w-[95%] m-auto pt-[300px] pb-[70px]">
          <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
            Picks for you
          </h1>
          <div className="flex gap-[30px]">
            <div className="flex gap-[30px] bg-white p-[30px] rounded-xl w-[100%] relative">
              <div className="">
                <img src={image24} alt="" className="object-cover" />
              </div>
              <div className="">
                <div>
                  <i class="bi bi-star text-[#E2E2E2]"></i>
                  <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                </div>
                <h6 className="w-[220px] text-[1.3rem]/[30px] font-bold">
                  The Seven Husbands of Evelyn Hugo
                </h6>
                <p className="text-[1.1rem] text-[#000000b4] mt-[20px] w-[200px]">
                  From the author of The Longest Ride and The Return comes a
                  novel about the enduring legacy of first love, and the
                  decisions that haunt...
                </p>
                <div className="absolute bottom-[80px] right-[30px]">
                  <button className="bg-[#009AF7] text-[1rem] text-white w-[200px] p-[10px] rounded-[200px]">
                    Read Now <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px] bg-white p-[20px] w-[100%] rounded-xl">
              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image25} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div>
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    Harry Potter and the Sorcerer’s Stone
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image26} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div>
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    Memoirs of a Geisha
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image27} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div>
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    Scattershot: Life, Music, Elton, and Me
                  </p>
                </div>
              </div>

              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image28} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div>
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    The Catcher in the Rye
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image29} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div className="">
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    The City and Its Uncertain Wall...
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] shadow-xs p-[10px]  rounded-2xl shadow-[#dbd5d5]">
                <img src={image30} alt="" className="w-[100px] rounded-2xl" />
                <div className="w-[100%] ml-[20px]">
                  <div>
                    <i class="bi bi-star text-[#E2E2E2]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                    <i class="bi bi-star text-[#E2E2E2] ml-[5px]"></i>
                  </div>
                  <p className="text-[1.1rem] text-[#000000b4] mt-[10px]">
                    The House of the Spirits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="pt-[50px] w-[95%] m-auto">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] text-center ">
          Featured authors
        </h1>
        <section className="overflow-hidden text-center">
          <section className="flex w-730 gap-[20px] ">
            <div className="flex gap-[40px] scrools text-[center]">
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage1} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Arlen Nightshade
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage2} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Elara Moonveil
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage3} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Rowan Stormborn
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage4} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Sylas Everwood
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage5} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Kael Ravenshadow
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage6} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Lyra Starwhisper
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage7} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Orion Blackthorn
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage8} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Nyx Silverwind
                </p>
              </div>
            </div>
            <div className="flex gap-[40px] scrools text-[center]">
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage1} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Arlen Nightshade
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage2} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Elara Moonveil
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage3} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Rowan Stormborn
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage4} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Sylas Everwood
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage5} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce] hover:text-[#027A36]">
                  Kael Ravenshadow
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage6} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Lyra Starwhisper
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage7} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Orion Blackthorn
                </p>
              </div>
              <div className="p-[20px] hover:shadow-xl hover:shadow-[#f7d3a8]">
                <img src={authorImage8} alt="" />
                <p className="font-[600] text-[1rem]/[28px] text-[#000000ce]">
                  Nyx Silverwind
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="w-[95%] m-auto mt-[50px]">
        <h1 className="text-[3rem] font-[Fraunces, serif] font-300 mb-[20px] ">
          What client says
        </h1>
        <section className="h-screen overflow-y-auto no-scrollbar">
          <div className=" flex gap-[30px] bg-[#F9F5F0] py-[70px] px-[30px] mt-[50px] rounded-3xl w-750">
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Kaito Ren</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  Dec 1, 2024
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                "This app has one of the cleanest reading experiences I've used.
                Finding new novels is incredibly easy."
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Azure Dragon</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  feb 1, 2025
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                "The recommendation system introduced me to several amazing
                authors I would never have discovered otherwise."
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Damian Wolfe</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  dec 15, 2025
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                Publishing my first novel here was surprisingly easy, and I
                started gaining readers almost immediately.
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Julian Crowe</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  jan 15, 2026
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                This app is actually impressive. Everything works smoothly.
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Kaito Ren</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  Dec 1, 2024
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                "This app has one of the cleanest reading experiences I've used.
                Finding new novels is incredibly easy."
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Azure Dragon</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  feb 1, 2025
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                "The recommendation system introduced me to several amazing
                authors I would never have discovered otherwise."
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Damian Wolfe</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  dec 15, 2025
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                Publishing my first novel here was surprisingly easy, and I
                started gaining readers almost immediately.
              </h3>
            </div>
            <div className="p-[30px] bg-[white] rounded-2xl w-[100%]">
              <p className="text-[1rem] font-[500]">Julian Crowe</p>
              <div className="flex justify-between mt-[15px] pb-[20px] border-b-1 border-b-[#8080805d]">
                <div>
                  <i class="bi bi-star-fill text-[#027A36]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                  <i class="bi bi-star-fill text-[#027A36] ml-[5px]"></i>
                </div>
                <p className="text-[0.9rem] text-[#00000079] font-[500]">
                  jan 15, 2026
                </p>
              </div>
              <h3 className="mt-[40px] text-[1.1rem] font-[500 pb-[30px]">
                This app is actually impressive. Everything works smoothly.
              </h3>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
