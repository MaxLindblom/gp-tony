import { GeneratedImage } from "../../types";
import { ImagePreview } from "./ImagePreview";

interface ImageGalleryProps {
  images: GeneratedImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImagePreview image={image} />
      ))}
    </div>
  );
}
