import { formatValueToBrl } from "./FormatValueToBrl";

export function criarCofrinho(setOpen?: (isOpen: boolean) => void, isOpen?: boolean) {
    if (setOpen && isOpen) {
        const nomeDoCofrinho = (document.getElementById("name") as HTMLInputElement).value;
        const valorIncial = Number((document.getElementById("initialdep") as HTMLInputElement).value);
        const motivo = (document.getElementById("motive") as HTMLInputElement).value;
        const text = document.querySelector(".text")

       
            if (text) {
                text.innerHTML = `<p>Cofrinho criado com sucesso! 🐷✨</p>
                              <p>Nome do Cofrinho: ${nomeDoCofrinho}</p>
                              <p>Valor Inicial: ${formatValueToBrl(valorIncial)}</p>
                              <p>Motivo: ${motivo}</p>`
            }
        
        

        setOpen(!isOpen)
    }
}