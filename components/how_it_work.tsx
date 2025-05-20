"use client";

import * as animationData from "@/public/animation/work_animation.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HowItWork() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 md:mt-16">
      <DotLottieReact
        data={animationData}
        autoplay
        loop
        className="size-60 md:size-64 object-cover self-center"
      />
      <div className="md:w-1/2 flex flex-col items-start">
        <h2 className="text-xl md:text-2xl font-semibold ">
          How It <span className="text-[#FF7AB5]">Works?</span>
        </h2>
        <ul className="space-y-3 list-none mt-4 md:mt-8">
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex items-center justify-center bg-blue-100 rounded-full w-6 h-6 text-blue-600 text-sm">
              1
            </span>
            <span>Paste your email or SMS text.</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex items-center justify-center bg-blue-100 rounded-full w-6 h-6 text-blue-600 text-sm">
              2
            </span>
            <span>Our ML model analyzes it in seconds.</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex items-center justify-center bg-blue-100 rounded-full w-6 h-6 text-blue-600 text-sm">
              3
            </span>
            <span>You get a spam or safe result instantly.</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="flex items-center justify-center bg-blue-100 rounded-full w-6 h-6 text-blue-600 text-sm">
              4
            </span>
            <span>Learn from results and stay protected from scams.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
