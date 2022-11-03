
import { ViewButtonWrapper } from './styled';
import PropTypes from 'prop-types';
const ViewButton = ({ children,idComponent, isActive}) => {

  return (
      <ViewButtonWrapper data-testid='test' id={idComponent} active={isActive}>
        {children}
      </ViewButtonWrapper>
  );
}

ViewButton.propTypes = {
  isActive: PropTypes.bool
};

ViewButton.defaultProps = {
  isActive: false,
  idComponent: ''
};

export default ViewButton;