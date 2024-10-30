export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type Message = ChatMessage & {
  timestamp: string;
};

export type GeneratedImage = {
  revised_prompt: string;
  b64_json: string;
};
