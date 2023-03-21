import { ChatCompletionRequestMessageRoleEnum } from "openai";

export interface Message {
  role: ChatCompletionRequestMessageRoleEnum;
  content: string;
}
