import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logo} alt="my contacts logo" />
    </Container>
  );
}

export default Header;
