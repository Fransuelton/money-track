import { IPiggyBank } from "../../interfaces/piggyBanksInterfaces";
import {
  addPiggyBankAcess,
  deletePiggyBankAcess,
  getPiggyBankAcess,
  setPiggyBankAcess,
  updatePiggyBankAcess,
} from "../dataAcess/piggyBanksAcess";

export async function addPiggyBankAction(body: IPiggyBank) {
  const response = await addPiggyBankAcess(body);
  return response.id;
}

export async function setPiggyBankAction(body: IPiggyBank, id: string) {
  const response = await setPiggyBankAcess(body, id);
  return response;
}

export async function updatePiggyBankAction(body: IPiggyBank, id: string) {
  const response = await updatePiggyBankAcess(body, id);
  return response;
}

export async function getPiggyBankAction() {
  const response = await getPiggyBankAcess();

  const piggyBankList: IPiggyBank[] = [];

  response.forEach((doc) => {
    piggyBankList.push(doc.data() as IPiggyBank);
  });

  return piggyBankList;
}

export async function deletePiggyBankAction(id: string) {
  const response = await deletePiggyBankAcess(id);
  return response;
}
