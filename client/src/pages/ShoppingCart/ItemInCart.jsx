import React, { useEffect, useState } from "react";
import { getOneCard } from "../../API/cardsAPI";
import { changeCart } from "../../store/cart/cartSlice";
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
    const findPhoto = () => imageUrls[0];
    
    let newCart =[]
    inCart.forEach(i => {newCart.push({...i})});
    const item = newCart.find(item => item.cardID === cardID);

    const increment = () => {
        item.quantity += 1;
        dispatch(changeCart(newCart));
        };
    const removeCard = () => {
        let reducedCart = newCart.filter(i => i !== item);
        dispatch(changeCart(reducedCart))
        }    
    const decrement = () => {
        item.quantity -= 1;
        if (item.quantity === 0) {
            removeCard()
        } else {dispatch(changeCart(newCart))};
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