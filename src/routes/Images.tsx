import { FormEvent, useEffect, useState } from "react";
import { ImagesInput } from "../components/images/ImagesInput";
import { getImages } from "../request";
import { LoadingIndicator } from "../components/LoadingIndicator";
import useLocalState from "../hooks/useLocalState";
import { GeneratedImage } from "../types";
import { ImageGallery } from "../components/images/ImageGallery";

const LOCAL_STORAGE_KEY = "genereatedImages";

export function Images() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const { load } = useLocalState(generatedImages, LOCAL_STORAGE_KEY);

  useEffect(() => {
    setGeneratedImages(load());
  }, []);

  const onSubmit = async function (event: FormEvent, prompt: string) {
    setIsLoading(true);
    try {
      getImages(prompt).then((response) => {
        const image = response.data[0];
        setGeneratedImages((prevState) => [
          ...prevState,
          {
            revised_prompt: image.revised_prompt ?? "",
            b64_json: image.b64_json ?? "",
          },
        ]);
        console.log(response);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const displayedImage = generatedImages[generatedImages.length - 1] ?? null;

  return (
    <div className="centered">
      <div className="route-container image-container">
        {!isLoading && displayedImage && (
          <div className="image-display-area">
            <img
              src={`data:image/jpeg;base64,${displayedImage.b64_json}`}
              alt={"generated from a prompt"}
              title={displayedImage.revised_prompt}
            />
            <ImageGallery images={generatedImages} />
          </div>
        )}

        {isLoading && <LoadingIndicator />}
        <ImagesInput isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
