"use client";
import { SpamCheckerLayout } from "@/components/spam-checker-layout";
import * as animationData from "@/public/animation/email_animation.json";

export default function Page() {
  return (
    <SpamCheckerLayout
      title="Email Spam Filtering"
      description="Paste your message and let AI tell you if it's spam or safe."
      animationData={animationData}
      type="email"
    />
  );
}
