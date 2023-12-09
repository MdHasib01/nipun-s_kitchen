import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({activeNav}) => {
  const navigate = useNavigate();
  const textAvtive = "text-red-400";
  const textInactive = "text-gray-900_cc";
  const sizeActive = "txtOpenSansRomanRegular16Red400";
  const sizeInactive = "txtOpenSansRomanRegular16Gray900cc";
  return (
    <header className="flex items-center justify-center w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
        <div className="header-row ">
          <Img
            onClick={() => navigate("/")}
            className="h-[51px] common-pointer"
            src="images/img_logo.svg"
            alt="Logo"
          />
          <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:hidden items-start justify-center md:ml-[0] ml-[107px] pt-0.5 w-[52%] md:w-full">
          <div className="flex flex-col gap-1.5 items-center justify-start w-[9%] sm:w-full">
            <Text
              className="common-pointer text-base "
              size="txtOpenSansRomanRegular16Red400"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
           {activeNav==="home" && <Line className="bg-red-400 h-px w-full" />}
          </div>
          <div className="flex flex-col items-center justify-start ml-8">
            <Text
              className={`common-pointer text-base ${activeNav==="menu"?textAvtive:textInactive} `}
              size={activeNav==="menu"?sizeActive:sizeInactive}
              onClick={() => navigate("/menu")}
            >
              Menu
            </Text>
            {activeNav==="menu" && <Line className="bg-red-400 h-px w-full" />}
          </div>
          <div className="flex flex-col items-center justify-start ml-8">
            <Text
             className={`common-pointer text-base ${activeNav==="aboutus"?textAvtive:textInactive} `}
             size={activeNav==="aboutus"?sizeActive:sizeInactive}
              onClick={() => navigate("/aboutus")}
            >
              About us
            </Text>
             {activeNav==="aboutus" && <Line className="bg-red-400 h-px w-full" />}
          </div>
          <div className="flex flex-col items-center justify-start ml-[31px]">
            <Text
              className={`common-pointer text-base ${activeNav==="orderonline"?textAvtive:textInactive} `}
              size={activeNav==="orderonline"?sizeActive:sizeInactive}
              onClick={() => navigate("/orderonline")}
            >
              Order online
            </Text>
            {activeNav==="orderonline" && <Line className="bg-red-400 h-px w-full" />}
          </div>
          <div className="flex flex-col items-center justify-start ml-[27px]">
            <Text
             className={`common-pointer text-base ${activeNav==="reservation"?textAvtive:textInactive} `}
             size={activeNav==="reservation"?sizeActive:sizeInactive}
              onClick={() => navigate("/reservation")}
            >
              Reservation
            </Text>
            {activeNav==="reservation" && <Line className="bg-red-400 h-px w-full" />}
          </div>
          <div className="flex flex-col items-center justify-start ml-[31px]">
            <Text
              className={`common-pointer text-base ${activeNav==="contact"?textAvtive:textInactive} `}
              size={activeNav==="contact"?sizeActive:sizeInactive}
              onClick={() => navigate("/contact")}
            >
              Contact us
            </Text>
            {activeNav==="contact" && <Line className="bg-red-400 h-px w-full" />}
          </div>
        </div>
        <Button
          className="cursor-pointer flex h-[50px] sm:hidden items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
          leftIcon={
            <Img
              className="h-6 sm:hidden m-[13px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          }
          shape="circle"
          color="white_A700"
          variant="fill"
        >
          <div className="sm:hidden"></div>
        </Button>
        <Button
          className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
          shape="round"
          color="red_400"
          size="sm"
          variant="fill"
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
