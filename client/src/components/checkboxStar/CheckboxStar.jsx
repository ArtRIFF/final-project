import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
const CheckboxStar = ({ isFavorite }) => {
    let iconStar;
    if (isFavorite) {
      iconStar = faStar;
    } else {
      iconStar = faStarRegular;
    }

    return (
      <Container>
        <FontAwesomeIcon icon={iconStar} />
      </Container>
    );
}

CheckboxStar.propTypes = {
  isFavorite: PropTypes.bool
};

CheckboxStar.defaultProps = {
  isFavorite: false
};


export default CheckboxStar;