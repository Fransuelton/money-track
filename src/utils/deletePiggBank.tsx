import { readLocalStorage, deleteFromLocalStorage } from "./LocalStorage";
const key = "piggyBank";
const information = null ;
let piggyBanksCreated = readLocalStorage({key: key, information: information}) ?? {}

export function deletePiggyBank() {
    deleteFromLocalStorage({key: key})
    piggyBanksCreated = readLocalStorage({key: key}) ?? {}
    window.location.reload()
}