import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const FileInputUI = (props) => {
  return (
    <div className="">
      <input
        className="hidden"
        ref={props.inputRef}
        type="file"
        multiple
        accept={props.accepted}
        onChange={props.onChangeInput}
      />
      <div className="  shadow-md shadow-gray-400 ">
        {props.images ? (
          <div className="flex justify-center">
            <Swiper
              // spaceBetween={30}
              slidesPerView={1}
              // pagination={{ clickable: true }}
              // className="mySwiper"
            >
              {props.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="object-cover w-[22rem] h-[13rem] rounded-sm"
                    src={URL.createObjectURL(image)}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div
            className="cursor-pointer flex justify-center items-center h-44"
            onClick={props.onFramClick}
          >
            <AddToPhotosIcon sx={{ color: "blue", fontSize: 90 }} />
          </div>
        )}
      </div>
      <p className="text-red-600 text-[10px] font-[800]">
        {props.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default FileInputUI;
