import styled from "styled-components";
import { Button } from "../../components/index";
import { criarCofrinho } from "../../utils/CreatePiggyBank";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Modal = ({ isOpen, setOpen }: IModal) => {

  if (isOpen) {
    return (
      <StyledModal>
        <div className="modal">
          <h2>Criar Cofrinho</h2>
          <label htmlFor="name">Nome do Cofrinho *</label>
          <input type="text" name="name" id="name" placeholder="Reserva de Emergência"/>
          <label htmlFor="initialdep">Valor Inicial</label>
          <input type="number" name="initialdep" id="initialdep" placeholder="1,00"/>

          <label htmlFor="motive">Motivo *</label>
          <textarea name="motive" id="motive" cols={30} rows={10} placeholder="Qual é o seu grande objetivo? Digite aqui o motivo pelo qual está criando este cofrinho. Ter um objetivo claro ajuda a manter o foco na economia!" className="motive-text-area"></textarea>

          <div className="btn-container">
            <Button
              content="Criar"
              className="createButton"
              onClick={() => criarCofrinho(setOpen, isOpen)}
            />
            <Button
              content="Excluir"
              className="deleteBtn"
              onClick={() => setOpen(!isOpen)}
            />
          </div>
        </div>
      </StyledModal>
    );
  } else {
    return <></>
  }
};

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    height: 5rem;
    padding: 1rem;
    border-radius: 0.8rem;
    outline: none;
    background-color: #d9d9d9;
    border: none;
    font-size: 1.7rem;

    &::placeholder {
      font-size: 1.7rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    text-align: left;
    font-size: 1.6rem;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
  }

  .motive-text-area {
    resize: none;
    padding: 1rem;
    border-radius: 0.8rem;
    outline: none;
    background-color: #d9d9d9;
    border: none;
    font-size: 1.7rem;
  }

  .deleteBtn {
    background-color: #ce2519;
    color: #fff;
  }

  .createBtn {
    background-color: #009c4a;
    color: #fff;
  }
`;

export {Modal}
