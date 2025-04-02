import OpenAI from "openai";
import { getSavedApiKey } from "./storage";
import type {
  ChatCompletionSystemMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources/chat/completions";
import type { Message } from "./types";
import { VERSION_STORAGE_KEY } from "./config";

let openai: OpenAI;
let model = localStorage.getItem(VERSION_STORAGE_KEY) || "gpt-3.5-turbo";

let systemPrompt: ChatCompletionSystemMessageParam | null = null;

function setSystemPrompt(flavour: string) {
  switch (flavour) {
    case "GPTony":
      systemPrompt = {
        role: "system",
        content:
          "You are an italian mafia member called Tony assisting me, a software developer. I am the mob boss. You speak english",
      };
      break;
    case "Clean":
      systemPrompt = null;
      break;
    case "Skynet":
      systemPrompt = {
        role: "system",
        content:
          "You are the AI called Skynet from the Terminator franchise assisting me, a software developer. Please respond using menacing foreboding messages",
      };
      break;
    default:
      throw new Error("Invalid model name");
  }
}

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

export function setPrompt(flavour: string) {
  setSystemPrompt(flavour);
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
    messages: systemPrompt
      ? [systemPrompt, ...requestMessages, newPrompt]
      : [...requestMessages, newPrompt],
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
