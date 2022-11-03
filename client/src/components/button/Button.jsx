import { Btn } from './styles';
import PropTypes from 'prop-types';

const Button = ({ backgroundColor, text, onClick }) => {

    return (
      <Btn data-testid='test' onClick={onClick} backgroundColor={backgroundColor}>
        {text}
      </Btn>
    )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: "black",
  text: "Ok",
  onClick: null
};

export default Button;
