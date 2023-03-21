import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getChatCompletion = (
  messages: ChatCompletionRequestMessage[],
  query: string
) => {
  const newPrompt = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: query,
  };
  return openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [...messages, newPrompt],
  });
};
