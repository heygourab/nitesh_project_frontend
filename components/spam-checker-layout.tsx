import { ResultDialog } from "@/components/result_dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowLeft, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { checkSpam, SpamResponse } from "../app/actions/check_spam";
import { CURRENT_STATE } from "../app/utils/enums";

interface SpamCheckerLayoutProps {
  title: string;
  description: string;
  animationData: any;
  type: "email" | "sms";
}

export function SpamCheckerLayout({
  title,
  description,
  animationData,

  type,
}: SpamCheckerLayoutProps) {
  const [message, setMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentState, setCurrentState] = useState<CURRENT_STATE | null>(null);
  const [result, setResult] = useState<SpamResponse | null>(null);

  const handleCheckSpam = async () => {
    setCurrentState(CURRENT_STATE.LOADING);
    setIsDialogOpen(true);
    try {
      const response = await checkSpam(message, type);
      if (response.error) {
        setCurrentState(CURRENT_STATE.ERROR);
        setResult(null);
      } else {
        setCurrentState(CURRENT_STATE.SUCCESS);
        setResult({
          isSpam: response.isSpam,
          spamScore: response.spamScore ?? "",
          spamType: response.spamType ?? type,
          spamConfidence: response.spamConfidence ?? "",
        });
      }
    } catch (error) {
      console.error("Error checking spam:", error);
      setCurrentState(CURRENT_STATE.ERROR);
    }
  };

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
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="text-gray-500 text-base md:text-lg">{description}</p>
        </div>
      </div>
      <Textarea
        className="mt-8 min-h-[150px] w-full"
        placeholder={`Paste your ${type} message here...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button
          className="w-full md:w-auto md:px-8 md:order-2"
          onClick={handleCheckSpam}
          disabled={
            message.trim() === "" || currentState === CURRENT_STATE.LOADING
          }
        >
          {currentState === CURRENT_STATE.LOADING ? "Checking..." : "Check"}
        </Button>
        <Link href="/" className="w-full md:w-auto md:order-1">
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
          The result will be displayed here after you paste your {type} message
          and click the button.
        </p>
      </div>

      {isDialogOpen && (
        <ResultDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          result={result}
          state={currentState}
        />
      )}
    </div>
  );
}
