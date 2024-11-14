// import React, { useEffect, useState } from "react";
// import { fetchnormalnewsdata } from "../api/connection";

// const Card1 = () => {
//   const [normalNewsData, setNormalNewsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchnormalnewsdata(); // Fetch the data
//         setNormalNewsData(data || []); // Set the data to state
//         console.log(data); // Log the data to check the structure
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex relative w-[1410px] h-[400px] bg-[#f0f6fd]">
//       {normalNewsData.length > 0 && normalNewsData.map((news) => (
//         <div key={news.id} className="flex flex-col items-center justify-center space-y-2 bg-white">
//           <img
//             src={`https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/${news.photo}`} // Dynamically set image URL
//             alt={news.title}
//             className="w-[44
//             7px] h-[207px]"
//           />
//           <span className="flex relative top-[30px] h-[200px] w-[447px] font-bold text-center text-[20px] justify-center">
//             {news.title} {/* Dynamically render title */}
//           </span>
//           <span className="flex relative text-gray-600 top-[10px] h-[200px] w-[447px] font-normal text-center text-[15px] justify-center">
//             {news.post ? news.post.substring(0, 150) + '...' : ''} {/* Dynamically render a portion of the post */}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card1;
import React, { useEffect, useState } from "react";
import { fetchnormalnewsdata } from "../api/connection";

const Card1 = () => {
  const [normalNewsData, setNormalNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchnormalnewsdata();
        setNormalNewsData(data || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row relative w-full sm:w-[1410px] h-auto sm:h-[400px] bg-[#f0f6fd]">
      {normalNewsData.length > 0 &&
        normalNewsData.map((news) => (
          <div
            key={news.id}
            className="flex flex-col items-center justify-center space-y-2 bg-white sm:w-1/2 p-4"
          >
            <img
              src={`https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/${news.photo}`}
              alt={news.title}
              className="w-full sm:w-[447px] h-[207px] object-cover"
            />
            <span className="flex relative top-[30px] h-[200px] w-full sm:w-[447px] font-bold text-center text-[20px] justify-center">
              {news.title}
            </span>
            <span className="flex relative text-gray-600 top-[10px] h-[200px] w-full sm:w-[447px] font-normal text-center text-[15px] justify-center">
              {news.post ? news.post.substring(0, 150) + '...' : ''}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Card1;
