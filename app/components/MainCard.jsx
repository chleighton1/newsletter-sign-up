"use client";

import Image from "next/image";
import IconSmall from "./IconSmall";
import { React, useState } from "react";
import Success from "./Success";
import desktopImg from "../../public/illustration-sign-up-desktop.svg";

export default function MainCard() {
  const [subscribe, setSubscribe] = useState(false);

  function handleClick() {
    setSubscribe(!subscribe);
  }

  return (
    <>
      {subscribe ? (
        <Success handleClick={handleClick} email={"Test"} />
      ) : (
        <div className="flex bg-white max-w-xl p-4 rounded-3xl">
          <div className="flex basis-4/5 justify-center flex-col gap-5 mr-2 p-5 text-xs text-char-grey">
            {/* Left Side */}
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
            <Image src={desktopImg} className="" />
          </div>
        </div>
      )}
    </>
  );
}
