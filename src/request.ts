import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import { getSavedApiKey } from "./storage";
import { Message } from "./types";

let openai: OpenAIApi;

export function setUpApi() {
  const savedKey = getSavedApiKey();
  if (savedKey === null) {
    throw new Error("Unable to authenticate user - no API key available");
  }
  openai = new OpenAIApi(
    new Configuration({
      apiKey: savedKey,
    })
  );
}

const systemPrompt = {
  role: ChatCompletionRequestMessageRoleEnum.System,
  content:
    "You are an italian mafia member called Tony assisting a software developer. I am the mob boss. You speak english",
};

// TODO: using this thru the browser is unsafe, it reveals the api key
// Consider moving this to a backend call maybe?
export function getChatCompletion(messages: Message[], query: string) {
  if (!openai) {
    setUpApi();
  }
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
}
