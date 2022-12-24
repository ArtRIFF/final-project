import React, { useEffect, useState } from "react";
import { getOneCard } from "../../helpers/sendRequest";
import { setInCart, removeFromCart } from "../../store/actions";
import { selectInCart } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";


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
    
    const increment = (cardID) => {
        inCart.forEach((item) => {
            if (item.cardID === cardID) {
              let newCart = [...inCart];
              const index = inCart.indexOf(item);
              if (index > -1) {
                newCart.splice(index, 1);
              }
              dispatch(removeFromCart(newCart));
              dispatch(
                setInCart({
                  cardID: cardID,
                  quantity: item.quantity + 1,
                  size: item.size,
                })
              );
            }
    })
    }
    const decrement = (cardID) => {
        inCart.forEach((item) => {
            if (item.cardID === cardID) {
              let newCart = [...inCart];
              const index = inCart.indexOf(item);
              if (index > -1) {
                newCart.splice(index, 1);
              }
              dispatch(removeFromCart(newCart));
              if (item.quantity === 1) {return}
              else { 
                dispatch(
                    setInCart({
                    cardID: cardID,
                    quantity: item.quantity - 1,
                    size: item.size,
                    })
                );}
            }
    })
    } 
    return(
        <div className="cart-section__products-item">
            {/* <div><img src={`../${imageUrls[0]}`} alt={name}></img></div> */}
            <div className="item-image"><img src='#' alt={name}></img></div>
            <div className="item-element">
                <p className="item-name">{name}</p>
                <p className="item-article">{article}</p>
            </div>
            <p className="item-size">{size}</p>
            <p className="item-price">&#8372; {currentPrice}</p>
            <div className="counter">
                <span onClick={() => decrement(cardID)}>-</span>{quantity}<span onClick={() => increment(cardID)}>+</span>
            </div>
            <div className="delete-item"></div>
        </div>
    )
}

export default ItemInCart;