import { useState } from "react";

interface binaryImageDataResults {
  isError: boolean;
  blob: Blob | null;
  fetchImageBlob: (uri: string) => Promise<void>;
}

export const useBinaryImageData = (): binaryImageDataResults => {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [isError, setIsError] = useState(false);
  const fetchImageBlob = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blobData = await response.blob();
      setBlob(blobData);
    } catch (error) {
      setIsError(true);
    }
  };

  return { isError, blob, fetchImageBlob };
};
