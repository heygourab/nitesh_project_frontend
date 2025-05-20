"use client";
import { ResultDialog } from "@/components/result_dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as animationData from "@/public/animation/email_animation.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowLeft, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="container mx-auto px-8 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-8">
        <DotLottieReact
          data={animationData}
          autoplay
          loop
          className="w-60 h-60 md:w-72 md:h-72 object-cover self-center"
        />
        <div className="flex flex-col flex-1 space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Email Spam Filtering
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Paste your message and let AI tell you if it&apos;s spam or safe.
          </p>
        </div>
      </div>
      <Textarea
        className="mt-8 min-h-[150px] w-full"
        placeholder="Paste your email message here..."
      />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button
          className="w-full md:w-auto md:px-8"
          onClick={() => setIsDialogOpen(true)}
        >
          Check
        </Button>
        <Link href="/" className="w-full md:w-auto">
          <Button className="w-full md:w-auto md:px-8" variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
          <InfoIcon className="h-5 w-5" />
          Result
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          The result will be displayed here after you paste your email message
          and click the button.
        </p>
      </div>

      {isDialogOpen && (
        <ResultDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          result="This is a spam email."
          state="success"
        />
      )}
    </div>
  );
}
