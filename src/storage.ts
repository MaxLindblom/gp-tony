export const API_STORAGE_KEY = "openAiApiKey";

export const getSavedApiKey = (): string | null => {
  const exisitingKey = localStorage.getItem(API_STORAGE_KEY);
  if (exisitingKey === null) {
    return null;
  }
  return JSON.parse(exisitingKey);
};

export const setApiKey = (key: string) =>
  localStorage.setItem(API_STORAGE_KEY, JSON.stringify(key));
