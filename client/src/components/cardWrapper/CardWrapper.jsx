import { Container } from './styles';
import ProductCard from '../card/ProductCard.jsx'

import { ViewContext } from '../../context';
import { useContext } from 'react';
const CardWrapper = ({ cardsArray}) => {
  const { rowView } = useContext(ViewContext);
  let cards = null;
  let arrayFavorite = localStorage.getItem("FavoriteProd");
  if (Array.isArray(cardsArray)) {
    if (arrayFavorite) {
      arrayFavorite = JSON.parse(arrayFavorite);
      cards = cardsArray.map((product, ind) => {
        let sameElem = arrayFavorite.find(card => card.productArticle === product.productArticle);
        if (sameElem) {
          return <ProductCard key={ind} cardInfo={product} isFavoriteProd={true} />
        } else {
          return <ProductCard key={ind} cardInfo={product} />
        }
      });
    } else {
      cards = cardsArray.map((product, ind) => {
        return <ProductCard key={ind} cardInfo={product} />
      });
    }
  }
  return (
    <Container rowView={rowView}>
      {cards}
    </Container>
  )
}


export default CardWrapper;