import { Container } from './styles';
import ProductCard from '../card/ProductCard.jsx'
import { useSelector } from 'react-redux';
import {selectFavoriteProd} from '../../store/selectors';

import { ViewContext } from '../../context';

import { useContext } from 'react';

const FavoriteCardWrapper = () => {
  const { rowView } = useContext(ViewContext);
  const favoriteProd = useSelector(selectFavoriteProd);
  return (
    <Container rowView={rowView}>
      {
       !!(favoriteProd.length)?favoriteProd.map((product, ind) => {
          return <ProductCard key={ind} cardInfo={product} isFavoriteProd={true} isInFavorite={true}/>
        })
        :<p style={{textAlign: "center",
        color: "chocolate", fontSize: "30px"}}>No favorite products.</p>
      }
    </Container>
  )
}


export default FavoriteCardWrapper;