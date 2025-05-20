"use client";
import * as animationData from "../public/animation/privacy_animation.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 md:mt-16">
      <DotLottieReact
        data={animationData}
        autoplay
        loop
        className="size-60 md:size-72 object-cover self-center md:order-2"
      />

      <div className="md:order-1 md:w-1/2 flex flex-col items-start">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          Privacy First, Always.
        </h2>
        <p className="text-gray-500 md:text-base mt-4">
          We respect your privacy. Messages you submit are processed in
          real-time and
          <span className="font-semibold text-black">
            {" "}
            never stored or shared.
          </span>
          <br />
          This tool uses AI to detect spam locally via our secure backend.
        </p>
      </div>
    </div>
  );
}
