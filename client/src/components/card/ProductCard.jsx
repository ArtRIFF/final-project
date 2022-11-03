import { CardContainer, CardHeader, ImageContainer, CardDesc, CardFooter } from './styles';
import Button from '../button/Button.jsx';
import CheckboxStar from '../checkboxStar/CheckboxStar.jsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectFavoriteProd
} from '../../store/selectors';
import {
  setFavoriteProd,
  setChosenCard,
  setDeleteModalRender,
  setModalRender
} from '../../store/actions';
const ProductCard = ({ cardInfo, isFavoriteProd, isInCart, isInFavorite }) => {
  const dispatch = useDispatch();
  const [isFavorite, setFavorite] = useState(isFavoriteProd);
  const arrayFavorite = useSelector(selectFavoriteProd);
  const addToFavorites = () => {
    setFavorite(!isFavorite);
    let sameElem = arrayFavorite.find(card => card.productArticle === cardInfo.productArticle);
    let newArr;
    if (arrayFavorite && !sameElem) {
      newArr = [...arrayFavorite,cardInfo];
    } else {
      newArr = arrayFavorite.filter(card => card.productArticle !== cardInfo.productArticle)
    }
    dispatch(setFavoriteProd(newArr));
  }
  const showModal = () => {
    dispatch(setChosenCard(cardInfo));
    dispatch(setModalRender(true));
  }

  const showDeleteModal = () => {
    dispatch(setChosenCard(cardInfo));
    dispatch(setDeleteModalRender(true));
  }
  const { productName, price, imgURL, productArticle, productColor } = cardInfo;
  return (
    <CardContainer className='card'>
      <ImageContainer className='card__image-container'>
        {isInCart && <FontAwesomeIcon className='btn-close' icon={faXmark} onClick={() => showDeleteModal()} />}
        <img src={imgURL} alt="card img" />
      </ImageContainer>
      {!isInCart ? (
        <CardHeader className='star' onClick={addToFavorites}>
          <h3 className="card__title">{productName}</h3>
          {isInFavorite?<CheckboxStar isFavorite={true} />:<CheckboxStar isFavorite={isFavorite} />}
        </CardHeader>
      )
        : (
          <CardHeader>
            <h3 style={{ cursor: "auto" }} className="card__title">{productName}</h3>
          </CardHeader>
        )
      }
      <CardDesc>
        <p className="card__product-desk">Product color: {productColor}</p>
        <p className="card__product-desk">Article: {productArticle}</p>
      </CardDesc>
      <CardFooter>
        <p className='card__product-price'>{price} &#x24;</p>
        {isInCart ? null : <Button onClick={showModal} text="add to cart" backgroundColor="rgb(215, 201, 184)" />}

      </CardFooter>
    </CardContainer>
  )
}

ProductCard.propTypes = {
  cardInfo: PropTypes.object,
};

ProductCard.defaultProps = {
  isFavoriteProd: false,
  deleteCard: null,
  isInCart: false,
  isInFavorite: false
};

export default ProductCard;