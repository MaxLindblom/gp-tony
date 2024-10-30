import { GeneratedImage } from "../../types";

interface ImagePreviewProps {
  image: GeneratedImage;
}

export function ImagePreview({ image }: ImagePreviewProps) {
  return (
    <img
      className="image-preview"
      src={`data:image/jpeg;base64,${image.b64_json}`}
      alt={"generated from a prompt"}
      title={image.revised_prompt}
    />
  );
}
