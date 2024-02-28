import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IPiggyBankGetType } from "../../interfaces/piggyBanksInterfaces";

const piggyBankReference = collection(db, "piggyBanks");

export function getPiggyBankObserver(
  callback: React.Dispatch<React.SetStateAction<IPiggyBankGetType[]>>
) {
  onSnapshot(piggyBankReference, (snapshot) => {
    const piggyBankList: IPiggyBankGetType[] = [];

    snapshot.forEach((doc) => {
      piggyBankList.push({ ...(doc.data() as IPiggyBankGetType), id: doc.id });
    });
    callback(piggyBankList);
  });
}
