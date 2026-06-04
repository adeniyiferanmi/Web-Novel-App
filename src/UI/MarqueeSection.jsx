import React from "react";
import scrollImage from "..//assets/ap_bo_iconscroll (1).png";

const MarqueeSection = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <section className="flex w-690">
          <section className=" h-[50px] flex w-[100%] gap-[40px] p-[12px] animation-section bg-[#F9F5F0]">
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  2,500
                </span>{" "}
                <span className="font-bold text-[1.2rem]">authors</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  97%
                </span>{" "}
                <span className="font-bold text-[1.2rem]">happy Customers</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p className="flex">
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  16,000
                </span>{" "}
                <span className="font-bold text-[1.2rem] ml-[5px]">
                  {" "}
                  total books
                </span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  2,500
                </span>{" "}
                <span className="font-bold text-[1.2rem]">authors</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  97%
                </span>{" "}
                <span className="font-bold text-[1.2rem]">happy Customers</span>
              </p>
            </div>
          </section>
          <section className=" h-[50px] flex w-[100%] gap-[40px] p-[12px] animation-section bg-[#F9F5F0]">
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  2,500
                </span>{" "}
                <span className="font-bold text-[1.2rem]">authors</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  97%
                </span>{" "}
                <span className="font-bold text-[1.2rem]">happy Customers</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p className="flex">
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  16,000
                </span>{" "}
                <span className="font-bold text-[1.2rem] ml-[5px]">
                  {" "}
                  total books
                </span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  2,500
                </span>{" "}
                <span className="font-bold text-[1.2rem]">authors</span>
              </p>
            </div>
            <div className="flex">
              <img
                src={scrollImage}
                alt="scroll image"
                className="w-[30px] ml-[20px]"
              />
              <p>
                <span className="text-[1.2rem] font-[600] font-mono ml-[20px] text-[#009AF7]">
                  97%
                </span>{" "}
                <span className="font-bold text-[1.2rem]">happy Customers</span>
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default MarqueeSection;
