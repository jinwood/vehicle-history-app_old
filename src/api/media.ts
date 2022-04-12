import { ref, uploadBytesResumable } from "@firebase/storage";
import { collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

export const uploadFile = (
  file: File,
  vehicleUid: string,
  mediaType: string
) => {
  if (!file) return;

  const storageRef = ref(
    storage,
    `vehicles/${vehicleUid}/${mediaType}/${file.name}`
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
    }
  );
};

const addMediaToVehicle = (
  vehicleUid: string,
  mediaType: string,
  mediaURL: string
) => {
  const vehicleRef = collection(db, "vehicles", vehicleUid);
};
