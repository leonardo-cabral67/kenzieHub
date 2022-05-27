import { AddTechs, Container, TechsEmpty } from "./styles";
import { TechsList } from "../TechsList";

import Modal from "react-modal";
import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input";
import kenzieHubApi from "../../services/api";

export const TechsContainer = ({ users }) => {
  const [createTech, setCreateTech] = useState(false);

  const openCreate = () => setCreateTech(true);
  const closeCreate = () => setCreateTech(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
    },
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    kenzieHubApi
      .post("/users/techs", data, {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTimeout(() => closeCreate(), 500);
  };

  return (
    <>
      <AddTechs>
        <h3>Tecnologias</h3>
        <button onClick={openCreate}>
          <div className="ButtonContainer">
            <span>+</span>
          </div>
        </button>

        <Modal isOpen={createTech} onRequestClose={closeCreate}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Tecnologia"
              placeholder="insira a tecnologia"
              type="text"
              register={register}
              name="title"
              errors={errors.title?.message}
            />
            <select name="Select" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Criar</button>
          </form>
        </Modal>
      </AddTechs>
      <Container>
        {users.techs?.length === 0 ? (
          <TechsEmpty>
            <h1>Você ainda não possui tecnologias adicionadas</h1>
          </TechsEmpty>
        ) : (
          <TechsList users={users} />
        )}
      </Container>
    </>
  );
};
