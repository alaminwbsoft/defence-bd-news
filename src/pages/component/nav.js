import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import { fetchtopnavbarData } from "../api/connection";

const Nav = () => {
  const [newsData, setNewsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Data is loaded
    }, 3000);
    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchtopnavbarData();
        setNewsData(fetchedData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const SkeletonLoader = () => (
    <div className="flex items-center space-x-4 mb-4 animate-pulse">
      <div className="bg-gray-300 h-[50px] w-[70px] rounded"></div>
      <div className="flex items-center space-x-4">
        <div className="bg-gray-300 w-[20px] h-[20px] rounded-full mr-[8px]"></div>
        <div className="bg-gray-300 w-[270px] h-[10px] rounded"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex md:flex-row md:justify-between items-center mt-[20px]">
        {loading ? (
          <div className="flex items-center space-x-4 mb-4 animate-pulse">
            <div className="w-[250px] h-[100px] bg-gray-300"></div>
          </div>
        ) :
          (
            <div>
              <img
                src="https://bangladeshdefencevoice.com/frontend/assets/Logo/logo4.png"
                className="w-[250px] h-[100px]"
                alt="Logo"
              />
            </div>
          )}
        <div className="flex flex-col md:flex-row items-center">
          {newsData.length > 0
            ? newsData.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={`${imgUrl}${item.photo}`}
                  className="h-[50px] w-[70px]"
                  alt={item.title}
                />
                <span className="text-[13px] w-[270px] font-semibold">
                  <div className="flex items-start">
                    <img
                      src="/cameraicon.svg"
                      className="w-[20px] h-[20px] mr-[8px]"
                      alt="Camera Icon"
                    />
                    <span>{item.title}</span>
                  </div>
                </span>
              </div>
            ))
            : Array.from({ length: 3 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        {/* Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Sidebar Links */}
        <div
          className={`fixed top-0 left-0 h-full bg-white w-64 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:space-x-4`}
        >
          <div className="flex flex-col mt-2 space-y-4 px-5 lg:flex-row lg:mt-0 lg:space-y-0 lg:space-x-4 text-lg">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <img
                src="https://bangladeshdefencevoice.com/frontend/assets/Logo/logo4.png"
                className="w-[150px] h-[60px] mb-6 lg:hidden mt-4"
                alt="Logo"
              />
              {/* Close Icon (for mobile view) */}
              <div className="lg:hidden flex justify-end">
                <button onClick={() => setIsOpen(false)} className="">
                  <FiX size={26} />
                </button>
              </div>
            </div>
            {loading ? (
              <div className="container flex items-center justify-between space-x-4 mb-4 animate-pulse">
                <div className="w-[70px] h-[20px] bg-gray-300"></div>
                <div className="w-[70px] h-[20px] bg-gray-300"></div>
                <div className="w-[70px] h-[20px] bg-gray-300"></div>
                <div className="w-[70px] h-[20px] bg-gray-300"></div>
                <div className="w-[70px] h-[20px] bg-gray-300"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-[50px] h-[24px] bg-gray-300"></div>
                  <div className="w-[40px] h-[20px] bg-gray-300"></div>
                </div>
              </div>
            ) :

              <>
                <Link href="#">Home</Link>
                <Link href="#">Defence & Diplomacy</Link>
                <Link href="#">Geopolitics</Link>
                <Link href="#">National</Link>
                <Link href="#">Opinion</Link>
                <Link href="#">Contact us</Link>

              </>

            }

          </div>
        </div>

        {/* User Icon and Login Button */}
        {loading ? (
          <div className="container flex items-center justify-between space-x-4 mb-4 animate-pulse">
            
            <div className="w-[70px] h-[20px] bg-gray-300"></div>
            <div className="flex items-center space-x-4">
              <div className="w-[50px] h-[24px] bg-gray-300"></div>
              <div className="w-[40px] h-[20px] bg-gray-300"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <img src="/usericon.svg" alt="User Icon" className="h-6" />
              <button className="btn-login">Login</button>
            </div>
          </>
        )}

      </div>
    </>
  );
};

export default Nav;
