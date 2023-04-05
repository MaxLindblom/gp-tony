import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import { getSavedApiKey } from "./storage";
import { Message } from "./types";

let openai: OpenAIApi;
let model = "gpt-4";

const systemPrompt = {
  role: ChatCompletionRequestMessageRoleEnum.System,
  content:
    "You are an italian mafia member called Tony assisting me, a software developer. I am the mob boss. You speak english",
};

export function setUpApi() {
  const savedKey = getSavedApiKey();
  if (savedKey === null) {
    throw new Error("Unable to authenticate user - no API key available");
  }

  const config = new Configuration({
    apiKey: savedKey,
  });
  delete config.baseOptions.headers["User-Agent"];

  openai = new OpenAIApi(config);
}

export function setModel(modelName: string) {
  model = modelName;
}

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
    model,
    messages: [systemPrompt, ...requestMessages, newPrompt],
  });
}
