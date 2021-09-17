import React from "react";
import { Title, Form, Repos } from "./styled";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

import { api } from "../../services/api";

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>([]);
  const [newRepo, setNewRepo] = React.useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<GithubRepository>(`repos/${newRepo}`);
    setRepos([...repos, response.data]);
    setNewRepo("");
  }
  return (
    <>
      <img src={logo} alt="logo-gitcollection" />
      <Title>Catálogo de repositório do Github</Title>
      <Form onSubmit={handleAddRepo}>
        <input
          type="text"
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        {repos.map((repository) => (
          <a href="/repositories" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repos>
    </>
  );
};
