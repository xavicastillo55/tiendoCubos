import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async (col: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);
  const snapshot = await getDocs(colRef);
  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return docs;
};

export const queryDocument = async (col: string, id: string) => {
  const docRef = doc(firestoreDb,col,id)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    console.log("Document data:", snapshot.data());
  } else {
    console.log("No such document!");
  }  
  return snapshot.data()
};
