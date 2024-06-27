import { Container, Profile, Logout } from "../Header/styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/fabinhoflauzino.png"
          alt="Imagem do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Fabinho Flauzino</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
