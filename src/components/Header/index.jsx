import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "../Header/styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/fabinhoflauzino.png"
          alt="Imagem do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Fabinho Flauzino</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
