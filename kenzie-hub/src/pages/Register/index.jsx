import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BackgroundContainer, RegisterContainer } from "./styles";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/Input";

import kenzieHubApi from "../../services/api.js";

import { Header } from "../../components/Header";

export const Register = () => {
  const history = useHistory();

  const FormSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "O mínimo é 3 caracteres")
      .max(20, "Você atingiu o máximo de caracteres")
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Insira apenas letras"
      ),

    email: yup
      .string()
      .email("Email inválido")
      .required("Campo obrigatório")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Insira um email válido"
      ),

    password: yup.string().min(6, "no mínimo 6 caracteres"),

    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  console.log({ errors });

  const functionOnSubmit = ({ name, email, password, course_module }) => {
    const bio = `meu nome é: ${name} e meu email é: ${email}`;
    const contact = `meu contato é: ${email}`;
    const data = { email, password, name, bio, contact, course_module };
    kenzieHubApi
      .post("/users", data)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <RegisterContainer>
      <header>
        <Header />
        <button className="VoltarBtn" onClick={() => history.push("/")}>
          voltar
        </button>
      </header>
      <BackgroundContainer>
        <div>
          <h2>Crie sua conta</h2>
          <span>Rápido e fácil, vamos nessa</span>
        </div>
        <form onSubmit={handleSubmit(functionOnSubmit)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            errors={errors.name?.message}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            errors={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            errors={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite novamente sua senha"
            register={register}
            name="confirmPassword"
            errors={errors.confirmPassword?.message}
          />
          <div>
            <h4>Selecionar módulo</h4>
            <div>
              <select {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </select>
              {errors.course_module?.message}
            </div>
          </div>
          <button className="Cadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </BackgroundContainer>
    </RegisterContainer>
  );
};
