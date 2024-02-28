export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type Message = ChatMessage & {
  timestamp: string;
};
