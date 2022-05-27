import Modal from "react-modal";
import { Teste } from "./style";
import { useState } from "react";

Modal.setAppElement("#root");
export const Testes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const teste = ["lucas", "jorge", "joao", "picoli"];
  const [modalData, setModalData] = useState(null);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#343B41",
      width: "60%",
      height: "50%",
    },
  };

  return (
    <Teste>
      <ul>
        {teste.map((item) => {
          return (
            <>
              <li key={item}>
                <h1>{item}</h1>
                <button
                  onClick={() => {
                    openModal();
                    setModalData(item);
                  }}
                >
                  Show modal
                </button>
              </li>
              <></>
            </>
          );
        })}

        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
          <h1>{modalData}</h1>
          <button onClick={closeModal}>X</button>
        </Modal>
      </ul>
    </Teste>
  );
};
