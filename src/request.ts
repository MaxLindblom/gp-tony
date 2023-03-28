import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import { Message } from "./types";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const systemPrompt = {
  role: ChatCompletionRequestMessageRoleEnum.System,
  content:
    "You are an italian mafia boss assisting a software developer. You speak english",
};

// TODO: using this thru the browser is unsafe, it reveals the api key
// Consider moving this to a backend call maybe?
export const getChatCompletion = (messages: Message[], query: string) => {
  const newPrompt = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: query,
  };
  const requestMessages = messages.map(({ role, content }) => ({
    role,
    content,
  }));
  return openai.createChatCompletion({
    model: "gpt-4",
    messages: [systemPrompt, ...requestMessages, newPrompt],
  });
};
