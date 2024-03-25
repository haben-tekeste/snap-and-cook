export const fetchImageBlob = async (
  uri: string
): Promise<Blob | undefined> => {
  try {
    const response = await fetch(uri);
    const blobData = await response.blob();
    return blobData;
  } catch (error) {
    console.log(error);
  }
};
