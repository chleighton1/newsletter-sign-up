import { React } from "react";
import IconLarge from "./IconLarge";

export default function Success(props) {
  return (
    <>
      {props.isMobile ? (
        <div className="flex bg-white w-full h-full p-10 gap-4 flex-col justify-center">
          <div className="mt-20">
            <IconLarge />
          </div>
          <h1 className="text-4xl font-bold self-center text-char-grey">
            Thanks for subscribing!
          </h1>
          <p className="text-xs text-char-grey mb-auto">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{props.email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            onClick={props.handleClick}
            className="bg-drk-grey active:bg-grad-test text-white px-4 py-2 rounded-md"
          >
            Dismiss message
          </button>
        </div>
      ) : (
        <div className="flex bg-white max-w-sm p-10 gap-4 rounded-3xl flex-col">
          <IconLarge />
          <h1 className="text-4xl font-bold self-center text-char-grey">
            Thanks for subscribing!
          </h1>
          <p className="text-xs text-char-grey">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{props.email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            onClick={props.handleClick}
            className="bg-drk-grey active:bg-grad-test text-white px-4 py-2 rounded-md"
          >
            Dismiss message
          </button>
        </div>
      )}
    </>
  );
}
