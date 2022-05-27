import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginContainer } from "./styles";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/Input";

import kenzieHubApi from "../../services/api.js";
import { Header } from "../../components/Header";

export const Login = () => {
  const history = useHistory();

  const FormSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Campo obrigatório")
      .matches(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
        "Insira um email válido"
      ),

    password: yup.string().min(8, "no mínimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  console.log({ errors });

  const functionOnSubmit = (data) => {
    console.log(data);
    kenzieHubApi
      .post("/sessions", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        history.push(`/home/${res.data.user.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <LoginContainer>
      <Header />
      <div className="Container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(functionOnSubmit)}>
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
          <button className="Entrar" type="submit">
            Entrar
          </button>
          <span>Ainda Não possui uma conta?</span>
          <button
            className="CadastreSe"
            onClick={() => history.push("/register")}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </LoginContainer>
  );
};
