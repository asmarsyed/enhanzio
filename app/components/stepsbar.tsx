"use client";

import React, { useState, useEffect } from "react";

interface EtapesProps {
  stepname: string;
  stepnumber: string;
  stepstatus: string;
  stepposition: string;
  stepactive: boolean;
}

const Etapes: React.FC<EtapesProps> = ({
  stepnumber,
  stepname,
  stepstatus,
  stepposition,
  stepactive,
}) => {
  const [stroke, setStroke] = useState<string>("");
  const [fill, setFill] = useState<string>("");
  const [className, setClassName] = useState<string>("");
  const [classNameActive, setClassNameActive] = useState<string>("");

  useEffect(() => {
    if (stepstatus === "To do") {
      setStroke("#012680");
      setFill("white");
    } else if (stepstatus === "In progress") {
      setStroke("#DC6633");
      setFill("#DC6633");
    } else if (stepstatus === "Done") {
      setStroke("#3CB548");
      setFill("#3CB548");
    }
  }, [stepstatus]);

  useEffect(() => {
    if (stepposition === "Left") {
      if (stepactive === true) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-r h-[68px] rounded-tl-xl bg-white"
        );
        setClassNameActive("text-[#001F3E]");
      } else if (stepactive === false) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-r border-b h-[68px] rounded-tl-xl bg-[#F3F7FC]"
        );
        setClassNameActive("text-gray-500");
      }
    } else if (stepposition === "Middle") {
      if (stepactive === true) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-r border-l h-[68px] bg-white"
        );
        setClassNameActive("text-[#001F3E]");
      } else if (stepactive === false) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-r border-l border-b h-[68px] bg-[#F3F7FC]"
        );
        setClassNameActive("text-gray-500");
      }
    } else if (stepposition === "Right") {
      if (stepactive === true) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-l h-[68px] rounded-tr-xl bg-white"
        );
        setClassNameActive("text-[#001F3E]");
      } else if (stepactive === false) {
        setClassName(
          "flex flex-auto justify-center items-center px-4 py-3 m-0 border-l border-b h-[68px] rounded-tr-xl bg-[#F3F7FC]"
        );
        setClassNameActive("text-gray-500");
      }
    }
  }, [stepposition, stepactive]);

  return (
    <div className={className}>
      {stepnumber === "1" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />

          <path
            d="M12.1047 23V21.452H14.9127V13.244C14.9127 12.848 14.9307 12.452 14.9307 12.452H14.8947C14.8947 12.452 14.7507 12.74 14.2827 13.19L13.0947 14.36L12.0147 13.244L15.0567 10.292H16.6407V21.452H19.4127V23H12.1047Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "2" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M11.4296 23C11.3756 22.658 11.3396 22.334 11.3396 22.028C11.3396 17.492 17.5676 16.844 17.5676 13.856C17.5676 12.596 16.6136 11.75 15.2816 11.75C13.6076 11.75 12.7076 13.37 12.7076 13.37L11.3936 12.488C11.3936 12.488 12.5456 10.076 15.4076 10.076C17.7476 10.076 19.4216 11.534 19.4216 13.73C19.4216 17.906 13.3556 18.554 13.3196 21.452H19.6196V23H11.4296Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "3" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M11.1136 21.488L12.0856 20.138C12.0856 20.138 13.3276 21.524 15.1636 21.524C16.5856 21.524 17.7556 20.57 17.7556 19.202C17.7556 17.636 16.3696 16.862 14.8036 16.862H13.9216L13.5076 15.908L16.2796 12.65C16.6936 12.164 17.0716 11.822 17.0716 11.822V11.786C17.0716 11.786 16.6936 11.84 15.9916 11.84H11.6896V10.292H19.2856V11.426L15.8296 15.404C17.5036 15.584 19.5556 16.664 19.5556 19.13C19.5556 21.308 17.8456 23.216 15.2356 23.216C12.6436 23.216 11.1136 21.488 11.1136 21.488Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "4" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M10.6 19.598V18.482L16.468 10.292H18.502V18.086H20.23V19.598H18.502V23H16.756V19.598H10.6ZM12.562 18.086H16.756V13.46C16.756 12.866 16.828 12.2 16.828 12.2H16.792C16.792 12.2 16.504 12.794 16.162 13.244L12.562 18.05V18.086Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "5" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M11.2927 21.452L12.2827 20.156C12.2827 20.156 13.2727 21.524 15.0727 21.524C16.5667 21.524 17.8627 20.498 17.8627 18.95C17.8627 17.42 16.6027 16.34 14.9647 16.34C13.7227 16.34 12.8227 16.97 12.8227 16.97L11.7967 16.592L12.4267 10.292H18.8347V11.84H13.9747L13.6687 14.522C13.6507 14.9 13.5787 15.188 13.5787 15.188H13.6147C13.6147 15.188 14.3167 14.792 15.2527 14.792C17.9347 14.792 19.6807 16.646 19.6807 18.932C19.6807 21.38 17.7547 23.216 15.1807 23.216C12.5707 23.216 11.2927 21.452 11.2927 21.452Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "6" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M15.9263 23.216C13.2083 23.216 11.1743 20.84 11.1743 17.222C11.1743 13.964 12.9563 10.076 16.8983 10.076C18.3923 10.076 19.3643 10.598 19.3643 10.598L18.7883 12.128C18.7883 12.128 17.9783 11.714 16.9703 11.714C14.6303 11.714 13.4243 13.874 13.1543 15.98H13.1903C13.7303 15.26 14.8823 14.774 15.9983 14.774C18.4103 14.774 20.0123 16.61 20.0123 18.968C20.0123 21.47 18.3023 23.216 15.9263 23.216ZM15.9083 21.578C17.3663 21.578 18.2483 20.444 18.2483 18.968C18.2483 17.42 17.2583 16.286 15.6383 16.286C14.1983 16.286 13.0463 17.15 13.0463 18.068C13.0463 19.724 14.2883 21.578 15.9083 21.578Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "7" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M12.2843 23L17.2343 12.992C17.5943 12.272 17.9723 11.822 17.9723 11.822V11.786C17.9723 11.786 17.6843 11.84 17.0363 11.84H11.3663V10.292H19.8623V11.516L14.1203 23H12.2843Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "8" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M11.0592 19.328C11.0592 17.384 12.7512 16.178 13.0932 15.944C12.2652 15.35 11.6712 14.576 11.6712 13.406C11.6712 11.714 12.9492 10.076 15.6312 10.076C17.9892 10.076 19.6272 11.39 19.6272 13.478C19.6272 15.17 18.2772 16.61 18.1152 16.79C19.0872 17.384 19.8432 18.176 19.8432 19.49C19.8432 21.47 18.1332 23.216 15.4872 23.216C12.9492 23.216 11.0592 21.632 11.0592 19.328ZM18.0072 19.436C18.0072 18.068 16.1172 17.528 14.4072 16.7C13.9932 16.988 12.8772 17.852 12.8772 19.22C12.8772 20.678 14.1372 21.614 15.4872 21.614C16.8192 21.614 18.0072 20.75 18.0072 19.436ZM13.4352 13.442C13.4352 14.846 15.1272 15.386 16.7652 16.088C16.9632 15.89 17.8812 14.918 17.8812 13.586C17.8812 12.416 16.9452 11.678 15.6132 11.678C14.2092 11.678 13.4352 12.47 13.4352 13.442Z"
            fill="black"
          />
        </svg>
      ) : stepnumber === "9" ? (
        <svg
          className="flex mr-[6px] xl:mr-[10px] h-6"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15" fill={fill} stroke={stroke} />
          <path
            d="M14.1083 23.216C12.5963 23.216 11.6423 22.694 11.6423 22.694L12.2183 21.146C12.2183 21.146 13.0283 21.578 14.0363 21.578C16.3763 21.578 17.5823 19.418 17.8523 17.312H17.8163C17.2943 18.032 16.1243 18.5 15.0083 18.5C12.5963 18.5 10.9943 16.682 10.9943 14.324C10.9943 11.822 12.7043 10.076 15.0803 10.076C17.7803 10.076 19.8323 12.434 19.8323 16.07C19.8323 19.328 18.0503 23.216 14.1083 23.216ZM15.3683 17.006C16.8083 17.006 17.9603 16.124 17.9603 15.224C17.9603 13.568 16.7183 11.714 15.0983 11.714C13.6223 11.714 12.7583 12.848 12.7583 14.324C12.7583 15.872 13.7303 17.006 15.3683 17.006Z"
            fill="black"
          />
        </svg>
      ) : (
        <p></p>
      )}
      <h1 className={`flex font-bold xl:text-[18px] ${classNameActive}`}>
        {stepname}
      </h1>
    </div>
  );
};

export default Etapes;
