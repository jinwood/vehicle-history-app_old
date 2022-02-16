import { useState } from "react";
import { uploadImage } from "../store/media";

export const useSaveImage = () => {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [imagePath, setImagePath] = useState<string | undefined>();

  const saveImage = async (fileName: string, category: string, file: File) => {
    let path = "";
    setLoading(true);

    try {
      console.log("uploading image");
      path = await uploadImage(file, `${category}/${fileName}`);
      setImagePath(path);
    } catch (error) {
      setLoading(false);
      setError(String(error));
    }
  };

  return { error, loading, imagePath, saveImage };
};
