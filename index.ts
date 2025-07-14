import { togetherai } from "@ai-sdk/togetherai";
import { streamText } from "ai";
import "dotenv/config";

async function main() {
  const result = streamText({
    model: togetherai("deepseek-ai/DeepSeek-R1"),
    prompt:
      "Invent a new holiday and describe its traditions. Keep your answer to 100 words max.",
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  for await (const chunk of result.fullStream) {
    console.log(chunk);
  }

  console.log();
  console.log("Token usage:", await result.usage);
  console.log("Finish reason:", await result.finishReason);
}

main().catch(console.error);
