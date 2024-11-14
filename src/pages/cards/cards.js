import React, { useState, useEffect } from "react";
import { fetchcatnewsdata } from "../api/connection";
import Link from "next/link";

const Cards = () => {
  const [catNewsData, setCatNewsData] = useState([]);
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data] = await Promise.all([fetchcatnewsdata()]);
        setCatNewsData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(catNewsData);
  }, []);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const limitWords = (text, wordLimit) => {
    const wordsArray = text?.split(" ");
    if (wordsArray?.length > wordLimit) {
      return wordsArray.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <div className="container mx-auto py-16 px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.keys(catNewsData).map((category) => (
            <div key={category}>
              <h2 className="font-bold bg-slate-200 p-2 rounded-md">
                {category}
              </h2>
              <div className="bg-white shadow-md mt-[8px] ">
                {catNewsData[category].map((item, index) => (
                  <div key={index} className="">
                    {index === 0 ? (
                      <Link
                        href={`/news-details/${item.id}`}
                        className="h-full"
                      >
                        <div>
                          <img
                            src={`${imgUrl}${item.photo}`}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="px-[4px] pb-[4px] mt-[8px]">
                          <h4 className="text-[15px] text-black font-bold text-center duration-700 hover:text-blue-400 px-[8px] space-y-2">
                            {limitWords(item.title || "", 8)}
                          </h4>
                          <p className="text-[14px] justify-center pt-[10px]">
                            {limitWords(stripHtml(item.post || ""), 18)}
                          </p>
                          <h6 className="text-[#374151] text-[14px] py-[10px] text-center font-bold">
                            {formatDate(item.published_date)}
                          </h6>
                        </div>
                        <hr className="border-1" />
                      </Link>
                    ) : (
                      index <= 4 && (
                        <div className="px-[4px] pb-[4px] mt-[24px]">
                          <Link href={`/news-details/${item.id}`}>
                            <h4 className="title-with-bullet text-[14px] text-black font-semibold text-start duration-700 hover:text-blue-400 px-[8px] space-y-2 pb-[8px]">
                              <span className="before:content-['•'] before:text-red-500 before:text-[20px] before:mr-2 inline-block w-[30px] mt-1">
                               
                              </span> {limitWords(item.title || "", 8)}
                            </h4>
                          </Link>

                          <hr className="border-1" />
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
