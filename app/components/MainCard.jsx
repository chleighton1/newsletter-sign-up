"use client";

import Image from "next/image";
import IconSmall from "./IconSmall";
import { React, useState, useEffect } from "react";
import Success from "./Success";
import desktopImg from "../../public/illustration-sign-up-desktop.svg";
import mobileImg from "../../public/illustration-sign-up-mobile.svg";

export default function MainCard() {
  const [subscribe, setSubscribe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function handleClick() {
    setSubscribe(!subscribe);
  }

  function handleChange(e) {
    setUserEmail(e.target.value);
  }

  return (
    <>
      {isMobile ? (
        subscribe ? (
          <Success
            handleClick={handleClick}
            email={userEmail}
            isMobile={isMobile}
          />
        ) : (
          <div className="flex flex-col bg-white w-full h-full">
            <div className="">
              <Image src={mobileImg} className="w-full" alt="Newsletter Logo" />
            </div>
            <div className="flex justify-between h-full flex-col p-8 text-xs text-char-grey">
              <h1 className="text-4xl font-bold text-char-grey mt-3">
                Stay updated!
              </h1>
              <p className="text-[16px]">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="leading-relaxed">
                <li className="flex items-center gap-2 mb-1">
                  <IconSmall width={20} height={20} />
                  <span className="text-[16px]">
                    Product Discovery and building what matters
                  </span>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <IconSmall width={20} height={20} />
                  <span className="text-[16px]">
                    Measuring to ensure updates are a success
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <IconSmall width={20} height={20} />
                  <span className="text-[16px]">And much more!</span>
                </li>
              </ul>
              <form className="flex flex-col w-full" action={handleClick}>
                <label className="font-bold text-[12px] mb-3" htmlFor="">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                  required
                  className="border-reg-grey border px-4 py-2 h-14 w-full rounded-md mb-6"
                  onChange={handleChange}
                  value={userEmail}
                />
                <button
                  className="bg-drk-grey active:bg-grad-test text-white text-[16px] px-4 py-2 h-14 rounded-md"
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        )
      ) : subscribe ? (
        <Success
          handleClick={handleClick}
          email={userEmail}
          isMobile={isMobile}
        />
      ) : (
        <div className="flex bg-white max-w-2xl p-4 rounded-3xl">
          <div className="flex basis-4/5 justify-center flex-col gap-5 mr-2 p-5 text-xs text-char-grey">
            <h1 className="text-4xl font-bold self-center text-char-grey">
              Stay updated!
            </h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="text-[10px]">
              <li className="flex items-center gap-2 mb-1">
                <IconSmall width={15} height={15} />
                <span>Product Discovery and building what matters</span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <IconSmall width={15} height={15} />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li className="flex items-center gap-2">
                <IconSmall width={15} height={15} />
                <span>And much more!</span>
              </li>
            </ul>
            <form className="flex flex-col gap-2 w-full" action={handleClick}>
              <label className="font-bold text-[10px]" htmlFor="">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@company.com"
                required
                className="border-reg-grey border px-4 py-2 w-full rounded-md"
                onChange={handleChange}
                value={userEmail}
              />
              <button
                className="bg-drk-grey active:bg-grad-test text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="">
            <Image src={desktopImg} className="" alt="Newsletter Logo" />
          </div>
        </div>
      )}
    </>
  );
}
