import React from "react";

const Card2 = () => {
  return (
    <>
      <div className="flex relative w-[325px] h-[485px] bg-[#f0f6fd] border-t-2 border-sky-400">
        <div className="flex flex-col h-[470px] top-[5px] items-center justify-center relative left-[12.5px] space-y-3 bg-white">
          <img
            src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727942423.jpg"
            className="w-[300px] h-[207px]"
          />
          <span className="flex relative top-[10px] text-[14px] text-green-600">
           <a href="#"> National</a>
          </span>
          <span className="flex relative top-[0px] h-[200px] w-[300px] p-2 font-bold text-center text-[16px] justify-center">
            Turkish fighter jet KAAN featured in Chinese military media
          </span>
          <span className="flex relative text-gray-500 top-[-35px] h-[100px] w-[100px] text-center text-[13px] justify-center">
            August 28, 2024
          </span>
          <span className="flex relative text-gray-600 top-[-50px] h-[200px] w-[300px] font-normal text-center text-[15px] justify-center">
            Türkiye’s ambitious defense project, the National Combat Aircraft
            KAAN, which garnered considerable attention in global media was
            recently recognized in...
          </span>
        </div>
      </div>
    </>
  );
};
export default Card2;
