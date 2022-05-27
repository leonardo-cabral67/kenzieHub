import { FormContainer, List, Techs } from "./styles";

import { useState } from "react";

import Modal from "react-modal";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import kenzieHubApi from "../../services/api";

export const TechsList = ({ users }) => {
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalData, setModalData] = useState("");

  Modal.setAppElement("#root");

  const modalCreateOpen = () => setModalCreate(true);
  const modalCreateClose = () => setModalCreate(false);

  const modalUpdateOpen = () => setModalUpdate(true);
  const modalUpdateClose = () => setModalUpdate(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#343B41",
    },
  };

  const FormSchema = yup.object().shape({
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  const updateTech = (data) => {
    kenzieHubApi
      .put(`/users/techs/${modalData.id}`, data, {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setTimeout(() => modalUpdateClose(), 500);
  };

  const deleteTech = () => {
    kenzieHubApi
      .delete(`/users/techs/${modalData.id}`, {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <List>
      {users.techs &&
        users.techs.map((item) => {
          const { title, status, id } = item;

          return (
            <div key={title}>
              <li
                onClick={() => {
                  modalUpdateOpen();
                  setModalData(item);
                }}
              >
                <h4>{title}</h4>
                <span>{status}</span>
              </li>
            </div>
          );
        })}

      <Modal
        isOpen={modalUpdate}
        onRequestClose={modalUpdateClose}
        style={customStyles}
      >
        <Techs>
          <h2>Tecnologia detalhes</h2>
          <div className="ButtonDiv" onClick={modalUpdateClose}>
            <button>X</button>
          </div>
        </Techs>
        <FormContainer>
          <form onSubmit={handleSubmit(updateTech)}>
            <div className="inputContainer">
              <label>Nome do projeto</label>
              <input value={modalData.title} />
            </div>
            <div className="inputContainer">
              <label>Status</label>
              <select name="Select" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <div className="ExcluirESalvar">
              <button className="Salvar" type="submit">
                Salvar alterações
              </button>
              <button
                className="Excluir"
                onClick={() => {
                  deleteTech(modalData.id);
                }}
              >
                Excluir
              </button>
            </div>
          </form>
        </FormContainer>
      </Modal>
    </List>
  );
};
