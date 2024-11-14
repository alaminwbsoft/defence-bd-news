// import { useState, useEffect } from "react";
// import { fetchslidernewsData } from "../api/connection";

// const Slider = () => {
//   const [sliderNewsdata, setSliderNewsdata] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchslidernewsData();
//         setSliderNewsdata(data || []);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderNewsdata.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + sliderNewsdata.length) % sliderNewsdata.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 3000);
//     return () => clearInterval(timer);
//   }, [sliderNewsdata]);

//   const visibleSlides = [
//     sliderNewsdata[currentSlide % sliderNewsdata.length],
//     sliderNewsdata[(currentSlide + 1) % sliderNewsdata.length],
//     sliderNewsdata[(currentSlide + 2) % sliderNewsdata.length],
//   ];

//   return (
//     <div className="relative">
//       <div className="flex">
//         {visibleSlides.map((slide, index) => (
//           slide ? ( // Check if slide exists
//             <div
//               key={slide.id}
//               className="flex flex-col items-center justify-center relative top-[60px] w-[420px] left-[320px] h-[220px]"
//             >
//               <img
//                 src={`${imgUrl}${slide.photo}`}
                
//                 alt={`Slide ${slide.id}`}
//                 className="w-[400px] h-[220px] object-cover p-4 border-2 border-gray-200"
//               />
//               <h1 className="mt-[6px] h-[20px] relative left-[10px] text-[18px] text-slate-600 font-semibold">
//                 {slide.title}
//               </h1>
//               <h2 className="mt-[10px] w-[400px] h-[20px] relative top-[30px] left-[5px] text-[13px] text-slate-600 font-semibold">
//                 {slide.blog_category_data?.category_name}
//               </h2>
//             </div>
//           ) : null // Renders nothing if slide is undefined
//         ))}
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-[300px] h-[60px] top-[150px] transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-[10px] p-2"
//       >
//         <span className="bg-slate-300 rounded-[40px] text-black hover:bg-slate-100 hover:font-bold">
//           &#10094;
//         </span>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute h-[60px] top-[150px] right-[-140px] transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-[10px] p-2"
//       >
//         <span className="bg-slate-300 rounded-[40px] text-black hover:bg-slate-100 hover:font-bold">
//           &#10095;
//         </span>
//       </button>

//       <div className="absolute bottom-4 top-[400px] right-[0px] transform -translate-x-1/2 flex space-x-2">
//         {sliderNewsdata.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full cursor-pointer ${
//               currentSlide === index ? "bg-slate-500" : "bg-gray-200"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
import { useState, useEffect } from "react";
import { fetchslidernewsData } from "../api/connection";

const Slider = () => {
  const [sliderNewsdata, setSliderNewsdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchslidernewsData();
        setSliderNewsdata(data || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderNewsdata.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliderNewsdata.length) % sliderNewsdata.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [sliderNewsdata]);

  const visibleSlides = [
    sliderNewsdata[currentSlide % sliderNewsdata.length],
    sliderNewsdata[(currentSlide + 1) % sliderNewsdata.length],
    sliderNewsdata[(currentSlide + 2) % sliderNewsdata.length],
  ];

  return (
    <div className="relative w-full">
      <div className="flex overflow-x-scroll md:overflow-hidden">
        {visibleSlides.map((slide, index) =>
          slide ? (
            <div
              key={slide.id}
              className="flex flex-col items-center justify-center relative md:w-[420px] w-full h-[220px] p-4"
            >
              <img
                src={`${imgUrl}${slide.photo}`}
                alt={`Slide ${slide.id}`}
                className="w-full md:w-full object-cover border-2 border-gray-200"
              />
              <h1 className="mt-[6px] h-[20px] text-[18px] text-slate-600 font-semibold">
                {slide.title}
              </h1>
              <h2 className="mt-[10px] w-full md:w-full text-[13px] text-slate-600 font-semibold">
                {slide.blog_category_data?.category_name}
              </h2>
            </div>
          ) : null
        )}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-[20px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded p-2"
      >
        <span className="bg-slate-300 rounded-full text-black hover:bg-slate-100 hover:font-bold">
          &#10094;
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-[-10px] top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded p-2"
      >
        <span className="bg-slate-300 rounded-full text-black hover:bg-slate-100 hover:font-bold">
          &#10095;
        </span>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderNewsdata.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-slate-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
