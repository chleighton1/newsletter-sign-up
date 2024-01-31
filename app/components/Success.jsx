import React from "react";
import IconLarge from "./IconLarge";

export default function Success(props) {
  return (
    <div className="flex bg-white max-w-xs p-6 gap-4 rounded-3xl flex-col">
      <IconLarge />
      <h1 className="text-4xl font-bold self-center text-char-grey">
        Thanks for subscribing!
      </h1>
      <p className="text-xs text-char-grey">{`A confirmation email has been sent to ${props.email}. Please open it and click the button inside to confirm your subscription.`}</p>
      <button
        onClick={props.handleClick}
        className="bg-drk-grey active:bg-grad-test text-white px-4 py-2 rounded-md"
      >
        Dismiss message
      </button>
    </div>
  );
}
