import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-[16px]">
      <div className="container mx-auto text-black  pb-[12px] text-[18px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0 ">
          <div className="flex items-center  place-items-center w-full border-r">
            <div className="flex items-start justify-center gap-10 w-full">
              <nav>
                <h6 className="font-bold uppercase mb-[8px] border-l-8 pl-[8px] border-black text-black">
                  Top Category
                </h6>
                <ul className="list-none font-bold text-black">
                <li>
                    <Link href="/Defence_Diplomacy" className=" hover:underline">
                    Defence & Diplomacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/Defence_Diplomacy" className=" hover:underline">
                  Geopolitics
                    </Link>
                  </li>
                  <li>
                    <Link href="/Defence_Diplomacy" className=" hover:underline">
                   National
                    </Link>
                  </li>
                  <li>
                    <Link href="/Defence_Diplomacy" className=" hover:underline">
                    Opinion
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <h6 className="font-bold uppercase mb-[8px] border-l-8 pl-[8px] border-black text-black">
                  Useful Link
                </h6>
                <ul className="list-none font-bold text-[#818d9f]">
                  <li>
                    <Link href="/contact" className=" hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/advertise" className="hover:underline ">
                      Advertise With Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/complaint" className="hover:underline">
                      Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="hover:underline">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/submit-trip" className="hover:underline">
                      Submit a Trip
                    </Link>
                  </li>
                </ul>{" "}
              </nav>
            </div>
          </div>
          
          <div className=" grid h-full flex-grow items-center place-items-center">
            <ul className="text-center lg:max-w-[356px]">
              <li>Editorial: Md Siddiqur Rahman Sarkar (Retd)</li>
              <li>Phone: +880 1710-923693</li>
              <li> Email: siddque63bd@gmail.com</li>
              <li>
                House#971, Road#11, Avenue#2, DOHS Mirpur, Pallabi, Dhaka-1216
              </li>
            </ul>
          </div>
         
          <div className="  grid h-full flex-grow place-items-center border-l ">
            <div className="">
              <nav className="space-y-4 text-center">
                <h6 className="footer-title text-black">Follow Us</h6>
                <div className="flex justify-center gap-4">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
                <div className="py-p_12px">
                  <img
                    src="https://bangladeshdefencevoice.com/frontend/assets/Logo/logo4.png"
                    alt=""
                    className="w-[240px]"
                  />
                </div>
                <div className="pt-3">
                  <p className="text-text_18px font-bold md:max-w-[436px] max-w-[401px]">
                    <span className="text-[#374151]">
                      ©Bangladesh Defence Voice.
                      <br /> Design By.{" "}
                    </span>{" "}
                    <span className=" text-[#60A5FA]">WB SOFTWARES</span>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
