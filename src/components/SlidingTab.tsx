"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type Props = {};

const SlidingTab = (props: Props) => {
  const [leftButton, setLeftButton] = useState<Boolean | null>(false);
  const [rightButton, setRightButton] = useState<Boolean | null>(true);

  const tabContainer = useRef<HTMLUListElement>(null);

  const Items: string[] = [
    "Style",
    "Element",
    "Bottle",
    "Random",
    "Text",
    "Hotel",
    "California",
    "Super",
    "Cunt",
    "Dragon",
    "Tulsa",
    "Gangster",
    "Text",
    "Hotel",
    "California",
    "Super",
    "Cunt",
    "Dragon",
    "Tulsa",
    "Gangster",
    "Text",
    "Hotel",
    "California",
    "Super",
    "Cunt",
    "Dragon",
    "Tulsa",
    "Gangster",
    "Text",
    "Hotel",
    "California",
    "Super",
    "Cunt",
    "Dragon",
    "Tulsa",
    "Gangster",
  ];

  const handleIcons = (scrollValue: number | null) => {
    if (tabContainer.current !== null) {
      const maxScrollable =
        tabContainer.current?.scrollWidth - tabContainer.current?.clientWidth;
      if (scrollValue !== null && scrollValue <= 0) {
        setLeftButton(false);
        setRightButton(true);
      } else if (
        scrollValue !== null &&
        scrollValue > 0 &&
        scrollValue < maxScrollable
      ) {
        setLeftButton(true);
        setRightButton(true);
      } else {
        setLeftButton(true);
        setRightButton(false);
      }
    }
  };

  const handleTabClick = (e: any) => {
    const tabNode = tabContainer.current;
    const tabs = tabNode?.querySelectorAll("li");
    tabs?.forEach((tab) => {
      if (
        tab.classList.contains("bg-black") ||
        tab.classList.contains("text-white")
      ) {
        tab.classList.toggle("bg-black");
        tab.classList.toggle("text-white");
      }
    });
    e.target.classList.toggle("bg-black");
    e.target.classList.toggle("text-white");
  };

  const handleLeftClick = () => {
    const scrollvalue = () =>
      tabContainer.current !== null
        ? (tabContainer.current.scrollLeft -= 300)
        : null;

    if (scrollvalue !== null) {
      handleIcons(scrollvalue());
    }
  };

  const handleRightClick = () => {
    const scrollvalue = () =>
      tabContainer.current !== null
        ? (tabContainer.current.scrollLeft += 300)
        : null;

    handleIcons(scrollvalue());
  };

  return (
    <div className="w-full h-full  ">
      <div className="relative z-[-999] flex items-center justify-between w-full h-full px-2 ">
        {leftButton && (
          <span className="absolute  left-0 flex items-center justify-center w-16 h-full bg-gradient-to-r from-white via-white">
            <span
              onClick={handleLeftClick}
              className="p-1 text-2xl text-black border rounded-full cursor-pointer "
            >
              <FaAngleLeft />
            </span>
          </span>
        )}
        <ul
          ref={tabContainer}
          className="container overflow-hidden scroll-smooth flex w-full h-full "
        >
          {Items !== null &&
            Items?.map((item, idx) => (
              <li
                onClick={handleTabClick}
                key={idx}
                className="p-2 m-2 transition-all duration-500 border cursor-pointer rounded-2xl"
              >
                {item}
              </li>
            ))}
        </ul>
        {rightButton && (
          <span className="absolute right-0 flex items-center w-10 h-full bg-gradient-to-l from-white via-white ">
            <span
              onClick={handleRightClick}
              className="p-1 text-2xl border rounded-full cursor-pointer"
            >
              <FaAngleRight />
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default SlidingTab;
