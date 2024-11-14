
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { fetchmainewsData, fetchprimarynewsdata } from "./api/connection";

const Home = () => {
  const [mainnewsData, setMainNewsData] = useState([]);
  const [primaryNewsData, setPrimaryNewsData] = useState([]);
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainNewsData, primaryNewsData] = await Promise.all([
          fetchmainewsData(),
          fetchprimarynewsdata(),
        ]);

        setMainNewsData(mainNewsData || []);
        setPrimaryNewsData(primaryNewsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const FaFacebookF = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaFacebookF),
    { ssr: false }
  );
  const FaXTwitter = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaTwitter),
    { ssr: false }
  );
  const FaInstagram = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaInstagram),
    { ssr: false }
  );
  const FaMediumM = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaMediumM),
    { ssr: false }
  );
  const CiLinkedin = dynamic(
    () => import("react-icons/ci").then((mod) => mod.CiLinkedin),
    { ssr: false }
  );
  const BsQuora = dynamic(
    () => import("react-icons/bs").then((mod) => mod.BsQuora),
    { ssr: false }
  );

  return (
    <>
      {mainnewsData.length > 0 ? (
        mainnewsData.map((newsItem) => (
          <div key={newsItem.id}>
            <div className="flex flex-col md:flex-row w-full md:w-[1415px] md:h-[652px] space-y-4 md:space-y-0 md:space-x-2 border-b-4 border-black">
              {/* Main News Section */}
              <div className="flex-1 w-full md:w-[695px] h-auto md:h-[637px]">
                {newsItem.photo && (
                  <img
                    src={`${imgUrl}${newsItem.photo}`}
                    alt="News Photo"
                    className="w-full md:w-[694px] h-auto md:h-[399px]"
                  />
                )}
                <span className="flex relative w-[213px] h-[19px] text-[15px] leading-[20px]">
                  By{" "}
                  <span className="font-semibold ml-[3px]">
                    {newsItem.publish_by_data?.name || "Unknown"}
                  </span>
                </span>
                <div className="w-full md:w-[710px] h-auto text-[25px] font-[600] flex flex-col relative top-[5px]">
                  <h2 className="text-[30px] font-bold hover:text-red-500">
                    {newsItem.title}
                  </h2>
                  <div
                    className="text-[15px] hover:text-[15.3px]"
                    dangerouslySetInnerHTML={{ __html: newsItem.post }}
                  />
                </div>
              </div>
              {/* Primary News Section */}
              <div className="flex-1 space-y-6 w-full md:w-[340px] h-auto md:h-[631px] border-t-4 border-black">
                {primaryNewsData.length > 0 ? (
                  primaryNewsData.map((newsItem) => (
                    <div key={newsItem.id}>
                      <span className="w-full md:w-[331px] h-[125px] flex flex-col items-baseline border-b-[1px] border-gray-200">
                        <span className="text-[19px] w-full md:w-[314px] flex flex-col font-semibold">
                          <div className="flex items-start">
                            <img
                              src="/rightarrow.svg"
                              className="w-[20px] h-[20px] mr-[8px]"
                            />
                            <span className="font-[700]">{newsItem.title}</span>
                          </div>
                        </span>
                        <span>
                          <a href="#" className="text-blue-500 mr-2">
                            {newsItem.blog_category_data?.category_name ||
                            "Category"}
                          </a>{" "}
                          /{" "}
                          <span className="relative left-[10px]">
                            {newsItem.published_date}
                          </span>
                        </span>
                      </span>
                    </div>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
              {/* Social Media Section */}
              <div className="flex flex-col w-full md:w-[340px] h-auto bg-[#F1F5F9]">
                <div className="p-[32px]">
                  <h2 className="text-lg text-black font-bold text-center">
                    Your Trusted Source for Accurate and Timely Updates!
                  </h2>
                  <p className="my-[20px] text-[18px] text-center italic">
                    Our commitment to accuracy, impartiality, and delivering
                    breaking news as it happens has earned us the trust of a
                    vast audience. Stay ahead with real-time updates on the
                    latest events, trends.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-[6px]">
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <FaFacebookF className="mx-auto w-full" />
                      <h6>Facebook</h6>
                    </div>
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <FaXTwitter className="mx-auto w-full" />
                      <h6>Twitter</h6>
                    </div>
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <FaInstagram className="mx-auto w-full" />
                      <h6>Insta</h6>
                    </div>
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <CiLinkedin className="mx-auto w-full " />
                      <h6>LinkedIn</h6>
                    </div>
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <FaMediumM className="mx-auto w-full" />
                      <h6>Medium</h6>
                    </div>
                    <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                      <BsQuora className="mx-auto w-full" />
                      <h6>Quora</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Home;
