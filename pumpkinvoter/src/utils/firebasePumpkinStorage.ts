import { getStorage, ref, uploadBytes, UploadResult } from "firebase/storage";

// Create a root reference

export default async function firebasePumpkinStorage(
  file: File
): Promise<UploadResult> {
  const storage = getStorage();
  const storageRef = ref(storage, `/pumpkins/${file.name}`);
  const pumpkinImage = await uploadBytes(storageRef, file);
  alert("Pumpkin Has been uploaded");
  return pumpkinImage;
}
