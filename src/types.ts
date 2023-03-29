import { ChatCompletionResponseMessage } from "openai";

export interface Message extends ChatCompletionResponseMessage {
  timestamp: string;
}
