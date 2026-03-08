import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Set to "eager" for above-the-fold images, defaults to "lazy" */
  loading?: "lazy" | "eager";
}

const OptimizedImage = ({ loading = "lazy", decoding, ...props }: OptimizedImageProps) => {
  return (
    <img
      loading={loading}
      decoding={decoding ?? "async"}
      {...props}
    />
  );
};

export default OptimizedImage;
