import { readLocalStorage, saveLocalStorage } from "./LocalStorage";
const key = "piggyBank";
const information = null ;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let piggyBanksCreated = readLocalStorage({key: key, information: information}) ?? {}


export function createPiggyBank(setOpen?: (isOpen: boolean) => void, isOpen?: boolean) {
    
    

    if (setOpen && isOpen) {
        const piggyBankName = (document.getElementById("name") as HTMLInputElement).value;
        const initialDeposit = Number((document.getElementById("initialdep") as HTMLInputElement).value);
        const motive = (document.getElementById("motive") as HTMLInputElement).value;

        saveLocalStorage({key: key, information: {piggyBankName: piggyBankName, initialDeposit: initialDeposit, motive: motive}})

        piggyBanksCreated = readLocalStorage({key: key, information}) ?? {}

        setOpen(!isOpen)
    

    }
}