import { readLocalStorage, deleteFromLocalStorage } from "./LocalStorage";
const key = "piggyBank";
const information = null ;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let piggyBanksCreated = readLocalStorage({key: key, information: information}) ?? {}

export function deletePiggyBank() {
    deleteFromLocalStorage({key: key, information})
    piggyBanksCreated = readLocalStorage({key: key, information}) ?? {}
    window.location.reload()
}