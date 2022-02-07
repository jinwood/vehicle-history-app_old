import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export function uploadImage(file: File, path: string) {
  const imageRef = ref(storage, `images/${path}`);

  try {
    return uploadBytes(imageRef, file).then((snapshot) => {
      console.log(`upload successful ${snapshot}`);
      return snapshot.ref.fullPath;
    });
  } catch (error) {
    throw new Error(String(error));
  }
}
