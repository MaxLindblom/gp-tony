import { type FormEvent, useState } from "react";
import { ImagesInput } from "../components/ImagesInput";
import { getImages } from "../request";
import { LoadingIndicator } from "../components/LoadingIndicator";

interface GeneratedImage {
  revised_prompt: string;
  url: string;
}

// TODO: Save generated images in local state
// Probably refactor useLocalState hook to be more generic
export function Images() {
  const [isLoading, setIsLoading] = useState(false);
  const [displayedImage, setDisplayedImage] = useState<GeneratedImage | null>(
    null
  );

  const onSubmit = async function (event: FormEvent, prompt: string) {
    setIsLoading(true);
    try {
      getImages(prompt).then((response) => {
        const image = response.data[0];
        setDisplayedImage({
          revised_prompt: image.revised_prompt ?? "",
          url: image.url ?? "",
        });
        console.log(response);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  return (
    <div className="centered">
      <div className="route-container">
        {!isLoading && displayedImage && (
          <img src={displayedImage.url} alt={displayedImage.revised_prompt} />
        )}
        <LoadingIndicator isLoading={isLoading} />
        <ImagesInput isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
