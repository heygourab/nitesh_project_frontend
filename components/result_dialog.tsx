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

export function ResultDialog({
  isOpen,
  result,
  onClose,
  state,
}: {
  isOpen: boolean;
  onClose: () => void;
  result: string;
  state: "loading" | "success" | "failure";
}) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Analysis Result</DialogTitle>
          </DialogHeader>
          <div className="flex h-full flex-col items-center justify-center">
            {state === "loading" && (
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
            {state === "success" && (
              <>
                <div>
                  <DotLottieReact
                    data={successAnimation}
                    autoplay
                    loop
                    className="size-32 object-cover"
                  />
                </div>
                <p>Analysis completed successfully!</p>
                <p className="text-sm text-gray-500">The result is: {result}</p>
              </>
            )}
            {state === "failure" && (
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
                <p className="text-sm text-gray-500">This email is spam</p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
