import { useParams } from "react-router-dom";
import { HomeContainer } from "./styles";

import { useState } from "react";
import { useEffect } from "react";

import kenzieHubApi from "../../services/api";
import { TechsContainer } from "../../components/TechsContainer";

import { Header } from "../../components/Header";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  const params = useParams();

  const exitPage = () => {
    window.localStorage.clear();
    return history.push("/");
  };
  useEffect(() => {
    kenzieHubApi.get(`/users/${params.id}`).then((res) => setUsers(res.data));
  });

  return (
    <HomeContainer>
      <div className="HomeHeader">
        <Header />
        <button className="ExitBtn" onClick={exitPage}>
          Sair
        </button>
      </div>
      <div className="WelcomeArea">
        <h2>Olá, {users.name}</h2>
        <span>{users.course_module}</span>
      </div>
      <TechsContainer users={users} />
    </HomeContainer>
  );
};
