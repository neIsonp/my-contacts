import PropTypes from 'prop-types';
import Input from '../Input';
import { Container } from './styles';

export default function FormGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
