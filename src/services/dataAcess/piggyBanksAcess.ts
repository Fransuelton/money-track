import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { IPiggyBank } from "../../interfaces/piggyBanksInterfaces";

const piggyBankReference = collection(db, "piggyBanks");

// Add new document in collection
export async function addPiggyBankAcess(body: IPiggyBank) {
  const response = await addDoc(piggyBankReference, body);
  return response;
}

// Add new document in collection
export async function setPiggyBankAcess(body: IPiggyBank, id: string) {
  const response = await setDoc(doc(piggyBankReference, id), body);
  return response;
}

// Update document in collection
export async function updatePiggyBankAcess(body: IPiggyBank, id: string) {
  const { ...data } = body;
  const response = await updateDoc(doc(piggyBankReference, id), data);
  return response;
}

// Get all documents in collection
export async function getPiggyBankAcess() {
  const q = query(piggyBankReference);

  const response = await getDocs(q);

  return response;
}

export async function deletePiggyBankAcess(id: string) {
  const response = await deleteDoc(doc(piggyBankReference, id));
  return response;
}
