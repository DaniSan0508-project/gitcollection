import { Title, Form } from "./styled";
import logo from "../../assets/logo.svg";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo-gitcollection" />
      <Title>Catálogo de repositório do Github</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
