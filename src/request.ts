import OpenAI from "openai";
import { getSavedApiKey } from "./storage";
import {
  ChatCompletionSystemMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources/chat/completions";
import { Message } from "./types";

let openai: OpenAI;
let model: string = "gpt-4";

const systemPrompt: ChatCompletionSystemMessageParam = {
  role: "system",
  content:
    "You are an italian mafia member called Tony assisting me, a software developer. I am the mob boss. You speak english",
};

export function setUpApi() {
  const savedKey = getSavedApiKey();
  if (savedKey === null) {
    throw new Error("Unable to authenticate user - no API key available");
  }

  // TODO: Using this thru the browser is unsafe, it reveals the api key
  // https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
  openai = new OpenAI({ apiKey: savedKey, dangerouslyAllowBrowser: true });
}

export function setModel(modelName: string) {
  model = modelName;
}

export function getChatCompletion(messages: Message[], query: string) {
  if (!openai) {
    setUpApi();
  }
  const newPrompt: ChatCompletionUserMessageParam = {
    role: "user",
    content: query,
  };
  const requestMessages = messages.map(({ role, content }) => ({
    role,
    content,
  }));
  return openai.chat.completions.create({
    model,
    messages: [systemPrompt, ...requestMessages, newPrompt],
  });
}

export function getImages(prompt: string) {
  if (!openai) {
    setUpApi();
  }
  return openai.images.generate({
    model: "dall-e-3",
    prompt,
  });
}
