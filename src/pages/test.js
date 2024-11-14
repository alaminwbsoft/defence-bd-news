import React, { useEffect, useState } from "react";
import { fetchslidernewsData } from "./api/connection";
import { fetchnormalnewsdata } from "./api/connection";
import {fetchprimarynewsdata} from "./api/connection"; // Assuming connection.js is in the api folder

const Home = () => {
  const [normalNewsData, setNormalNewsData] = useState([]);
  const [sliderNewsdata, setSliderNewsdata] = useState([]);
    const [primaryNewsData, setPrimaryNewsData] = useState([]);

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderNewsdata] = await Promise.all([
          fetchslidernewsData()
        ]);
        setSliderNewsdata(sliderNewsdata || []);
    console.log(sliderNewsdata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [primaryNewsData] = await Promise.all([
          fetchprimarynewsdata()
        ]);
        setPrimaryNewsData(primaryNewsData || []);
    console.log(primaryNewsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [normalNewsData] = await Promise.all([
          fetchnormalnewsdata()
        ]);
        setNormalNewsData(normalNewsData || []);
    console.log(normalNewsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div>
    <h1>Top Primary News</h1>
    {loading && <p>Loading...</p>} {/* Loading indicator */}
    {error && <p>{error}</p>} {/* Error message */}
    
    {primaryNewsData.length > 0 ? (
      primaryNewsData.map((newsItem) => (
        <div key={newsItem.id}>
          <h2>{newsItem.title}</h2>
          <p>Published by: {newsItem.publish_by_data?.name || "Unknown"}</p>
          <p>Category: {newsItem.blog_category_data?.category_name || "No Category"}</p>
          <p>Date: {newsItem.published_date}</p>
          <p>{newsItem.post}</p>
          {newsItem.photo ? (
            <img
              src={`${imgUrl}${newsItem.photo}`}
              alt={newsItem.title || "News Photo"}
              onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} // Fallback image
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      ))
    ) : (
      <p>No slider news data available</p>
    )}
  </div>
    // <div>
    //   <h1>Top Slider News</h1>
    //   {loading && <p>Loading...</p>} {/* Loading indicator */}
    //   {error && <p>{error}</p>} {/* Error message */}
      
    //   {sliderNewsdata.length > 0 ? (
    //     sliderNewsdata.map((newsItem) => (
    //       <div key={newsItem.id}>
    //         <h2>{newsItem.title}</h2>
    //         <p>Published by: {newsItem.publish_by_data?.name || "Unknown"}</p>
    //         <p>Category: {newsItem.blog_category_data?.category_name || "No Category"}</p>
    //         <p>Date: {newsItem.published_date}</p>
    //         <p>{newsItem.post}</p>
    //         {newsItem.photo ? (
    //           <img
    //             src={`${imgUrl}${newsItem.photo}`}
    //             alt={newsItem.title || "News Photo"}
    //             onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} // Fallback image
    //           />
    //         ) : (
    //           <p>No image available</p>
    //         )}
    //       </div>
    //     ))
    //   ) : (
    //     <p>No slider news data available</p>
    //   )}
    // </div>
  );
};

export default Home;
