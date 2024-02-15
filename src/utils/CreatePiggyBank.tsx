import { saveLocalStorage } from "./LocalStorage";

const key = "piggyBank";

export function createPiggyBank(setOpen?: (isOpen: boolean) => void, isOpen?: boolean) {
    if (setOpen && isOpen) {

        const piggyBankName = (document.getElementById("name") as HTMLInputElement).value;
        const initialDeposit = Number((document.getElementById("initialdep") as HTMLInputElement).value);
        const motive = (document.getElementById("motive") as HTMLInputElement).value;

        saveLocalStorage({ key, information: { piggyBankName, initialDeposit, motive } });

        setOpen(!isOpen);
    }
}
