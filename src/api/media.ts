import { ref, uploadBytesResumable } from "@firebase/storage";
import { collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

export const uploadFile = (
  file: File,
  vehicleId: string,
  mediaType: string
) => {
  if (!file) return;

  const storageRef = ref(
    storage,
    `vehicles/${vehicleId}/${mediaType}/${file.name}`
  );

  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      // need to save the url in the vehicle document
      let mediaURL = "";
      await getDownloadURL(uploadTask.snapshot.ref).then(
        (url) => (mediaURL = url)
      );
      addMediaToVehicle(vehicleId, mediaType, mediaURL);
    }
  );
};

const addMediaToVehicle = async (
  vehicleId: string,
  mediaType: string,
  mediaURL: string
) => {
  const vehicleDoc = doc(db, `vehicles/${vehicleId}`);
};
