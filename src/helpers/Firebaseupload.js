import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../utils/firebase";

export default async function uploadToFirebase(file, folderName) {
  //creating a reference variable
  const fileRef = ref(storage, `${folderName}/${file.name}`);

  //uploading that file to the firebase with the reference variable
  const resp = await uploadBytes(fileRef, file);

  //getting the url of that uploaded file from firebase
  const url = await getDownloadURL(fileRef);

  //returning the url
  return url;
}
