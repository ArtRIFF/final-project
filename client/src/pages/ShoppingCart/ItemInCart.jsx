import React, {useEffect, useState} from "react";
import {getOneCard} from "../../API/cardsAPI";
import { changeCart } from "../../store/cart/cartSlice";
import {selectInCart} from "../../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import {sendAuthorizedRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";


const ItemInCart = ({card}) => {
    const {cardID, quantity, size} = card;
    const [oneCard, setCard] = useState({});
    const inCart = useSelector(selectInCart);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getOneCard(cardID).then((data) => {
          setCard(data);
        });
      }, [cardID]);
    
    const {name, article,currentPrice, imageUrls} = oneCard; 
    const findPhoto = () => imageUrls[0];
    
    let newCart =[]
    inCart.forEach(i => {newCart.push({...i})});
    const item = newCart.find(item => item.cardID === cardID);

    const updateCartOnServer = (updatedCart) => {
      if (updatedCart.length === 0) {
            sendAuthorizedRequest(`${API}cart`, 'DELETE')
          } else {
        sendAuthorizedRequest(`${API}cart`, 'PUT', {
          body: JSON.stringify({
            products: updatedCart.map(cartItem => {
              return {
                product: cartItem._id,
                size: cartItem.size,
                cartQuantity: cartItem.quantity
              }
            })
          })
        })
      }
    }

  const increment = () => {
    item.quantity += 1;
    dispatch(changeCart(newCart));
    updateCartOnServer(newCart);
  };
  const removeCard = () => {
    let reducedCart = newCart.filter(i => i !== item);
    dispatch(changeCart(reducedCart))
    updateCartOnServer(reducedCart);
  }
  const decrement = () => {
    item.quantity -= 1;
    if (item.quantity === 0) {
      removeCard()
    } else {
      dispatch(changeCart(newCart));
      updateCartOnServer(newCart);
    }
  }
    
    return(
        <div className="cart-section__products-item">
            {imageUrls !== undefined && <img className="item-image" src={`../${findPhoto()}`} alt={name}></img>}
            <div className="item-element">
                <p className="item-name">{name}</p>
                <p className="item-article">{article}</p>
            </div>
            <p className="item-size">{size}</p>
            <p className="item-price">&#8372; {currentPrice}</p>
            <div className="counter">
                <span onClick={() => decrement(cardID)}>-</span>{quantity}<span onClick={() => increment(cardID)}>+</span>
            </div>
            <div className="delete-item" onClick={()=>removeCard()}></div>
        </div>
    )
}

export default ItemInCart;