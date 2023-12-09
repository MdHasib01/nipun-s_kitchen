import { Button, Img, RatingBar, Text } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dishes, foodCategories } from "../../utils/data";

const PopularMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start max-w-[1240px] mt-[133px] mx-auto md:px-5 w-full">
      <Text
        className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
        size="txtOpenSansRomanBold52"
      >
        Our Popular Menu
      </Text>
      <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
        <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
          {foodCategories.map((category) => (
            <Button
              className={
                category === "All Categories"
                  ? "cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                  : "cursor-pointer min-w-[192px] text-center text-xl"
              }
              shape="round"
              color={category === "All Categories" ? "red_400" : "gray_400_63"}
              size="lg"
              variant="fill"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
            <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {dishes.map((dish) => (
                <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                  <Img
                    className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                    src="images/img_pngitem41084.png"
                    alt="PngItem41084"
                  />
                  <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <Text
                        className=" text-center text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtPoppinsSemiBold30"
                      >
                        {dish.food_name}
                      </Text>
                      <Text
                        className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                        size="txtPoppinsRegular14"
                      >
                        {dish.description}
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                      <RatingBar
                        className="flex justify-between w-[140px]"
                        value={dish.rating}
                        starCount={dish.rating}
                        activeColor="#f54748"
                        size={24}
                      ></RatingBar>
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsSemiBold25"
                      >
                        ${dish.price}
                      </Text>
                      <Button
                        className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                        onClick={() => navigate("/checkout")}
                        color="red_400"
                        size="md"
                        variant="fill"
                      >
                        Order now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
            <Img
              className="h-[15px] w-[15px]"
              src="images/img_arrowleft_black_900.svg"
              alt="arrowleft"
            />
            <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
              <Button
                className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                color="gray_900"
                size="xs"
                variant="fill"
              >
                1
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                color="gray_200"
                size="xs"
                variant="fill"
              >
                2
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                color="gray_200"
                size="xs"
                variant="fill"
              >
                3
              </Button>
              <Button
                className="flex h-[35px] items-center justify-center rounded w-[35px]"
                color="gray_200"
                size="xs"
                variant="fill"
              >
                <Img className="h-5" src="images/img_user.svg" alt="user" />
              </Button>
            </div>
            <Img
              className="h-[15px] w-[15px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
