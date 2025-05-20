import loadingAnimation from "@/public/animation/loading.json";
import failureAnimation from "@/public/animation/failure.json";
import successAnimation from "@/public/animation/success.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CURRENT_STATE } from "@/app/utils/enums";
import { SpamResponse } from "@/app/actions/check_spam";

export function ResultDialog({
  isOpen,
  result,
  onClose,
  state,
}: {
  isOpen: boolean;
  onClose: () => void;
  result: SpamResponse | null;
  state?: CURRENT_STATE | null;
}) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Analysis Result</DialogTitle>
          </DialogHeader>
          <div className="flex h-full flex-col items-center justify-center">
            {state === CURRENT_STATE.LOADING && (
              <>
                <div>
                  <DotLottieReact
                    data={loadingAnimation}
                    autoplay
                    loop
                    className="size-32 object-cover"
                  />
                </div>
                <p>Processing...</p>
                <p className="text-sm text-gray-500">
                  Please wait while we analyze your email.
                </p>
              </>
            )}
            {state === CURRENT_STATE.SUCCESS && (
              <>
                <div>
                  <DotLottieReact
                    data={result?.isSpam ? failureAnimation : successAnimation}
                    autoplay
                    loop
                    className="size-32 object-cover"
                  />
                </div>
                <p>Analysis completed successfully!</p>
                <p className="text-base text-gray-500">
                  The result is:{" "}
                  {result?.isSpam ? (
                    <span className="text-red-500">This email is spam</span>
                  ) : (
                    <span className="text-green-500">
                      This email is not spam
                    </span>
                  )}
                </p>
                {result?.isSpam && (
                  <p className="text-sm text-gray-500">
                    Spam Score: {result.spamScore}%
                  </p>
                )}
                {result?.isSpam && (
                  <p className="text-sm text-gray-500">
                    Spam Type: {result.spamType}
                  </p>
                )}
                {result?.isSpam && (
                  <p className="text-sm text-gray-500">
                    Spam Confidence: {result.spamConfidence}%
                  </p>
                )}
              </>
            )}
            {state === CURRENT_STATE.ERROR && (
              <>
                <div>
                  <DotLottieReact
                    data={failureAnimation}
                    autoplay
                    loop
                    className="size-32 object-cover"
                  />
                </div>
                <p>Analysis failed. Please try again.</p>
                <p className="text-sm text-gray-500">
                  Error: {result?.error || "Unknown error"}
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
