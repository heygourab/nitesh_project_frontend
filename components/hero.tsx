"use client";
import Link from "next/link";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "./ui/button";
import * as animationData from "../public/animation/hero_animation.json";
import { Mail, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 md:mt-16">
      <DotLottieReact
        data={animationData}
        autoplay
        loop
        className="size-60 md:size-96 object-cover self-center md:order-2"
      />
      <div className="md:order-1 md:w-1/2 flex flex-col items-start">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mt-8 ">
            Is it <span className="text-[#DF3B34]">Spam </span>or{" "}
            <span className="text-[#32AA88]">Safe</span>? Check Emails & SMS in
            One Click.
          </h1>
          <p className="text-gray-500 md:text-base mt-4">
            Paste your message and let AI tell you if it&apos;s spam or safe —
            works for both Email and SMS.
          </p>
        </div>
        <div className="flex w-full md:max-w-[240px] gap-2 md:gap-4 flex-col mt-8">
          <Link href="/email">
            <Button className="w-full">
              <Mail className="mr-2" />
              Email
            </Button>
          </Link>
          <Link href="/sms">
            <Button variant="outline" className="w-full">
              <MessageCircle className="mr-2" />
              SMS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
