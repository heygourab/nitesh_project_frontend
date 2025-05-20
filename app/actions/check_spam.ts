"use server";

export interface SpamResponse {
  isSpam: boolean;
  spamScore: string;
  spamType: "sms" | "email";
  spamConfidence: string;
  error?: string;
}

export async function checkSpam(
  message: string,
  type: "email" | "sms"
): Promise<{
  isSpam: boolean;
  spamScore?: string;
  spamType?: "sms" | "email";
  spamConfidence?: string;
  error?: string;
}> {
  try {
    if (!message) {
      return { isSpam: false, error: "Message cannot be empty." };
    }

    const response = await fetch(
      `http://localhost:8000/api/detect-${type}-spam`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as SpamResponse;
    if (data.error) {
      throw new Error(data.error);
    }

    const isSpam = Boolean(data.isSpam);
    const spamScore = (parseFloat(data.spamScore) * 100).toFixed(2);
    const spamType = data.spamType;
    const spamConfidence = (parseFloat(data.spamConfidence) * 100).toFixed(2);

    console.log("Spam detection result:", {
      isSpam,
      spamScore,
      spamType,
      spamConfidence,
    });

    return {
      isSpam,
      spamScore,
      spamType,
      spamConfidence,
    };
  } catch (error) {
    console.error("Error checking spam:", error);
    if (error instanceof Error) {
      return { isSpam: false, error: error.message };
    }
    return { isSpam: false, error: "An error occurred while checking spam." };
  }
}
