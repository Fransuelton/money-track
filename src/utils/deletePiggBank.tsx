import { deleteFromLocalStorage } from "./LocalStorage";

const key = "piggyBank";

export function deletePiggyBank() {
    deleteFromLocalStorage({ key });
    window.location.reload();
}
