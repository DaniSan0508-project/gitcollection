import { Title, Form, Repos } from "./styled";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo-gitcollection" />
      <Title>Catálogo de repositório do Github</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/73966133?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
