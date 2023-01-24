import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Button from "../../components/Button/ButtonAll/ButtonAll";
import {selectInCart} from "../../store/selectors";
import {Link} from "react-router-dom";
import ItemInCart from "./ItemInCart";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

import "./ShoppingCart.scss";
import {UserContext} from "../../context/UserContext";
import {sendAuthorizedRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import {changeCart} from "../../store/cart/cartSlice";

const ShoppingCart = () => {
  const {userInfo} = useContext(UserContext);
  const dispatch = useDispatch();

  const inCart = useSelector(selectInCart);

  const fetchCartFromServer = () => {
    sendAuthorizedRequest(`${API}cart`).then(r => {
      const prods = r.products.map(productItem => {
        return {
          cardID: productItem.product.itemNo,
          discount: productItem.product.discount,
          price: productItem.product.currentPrice,
          quantity: productItem.cartQuantity,
          size: productItem.size,
          _id: productItem.product._id
        }
      });

      dispatch(changeCart(prods));
    })
  };

  useEffect(() => {
    if (userInfo) {
      fetchCartFromServer()
    }
  }, [userInfo]);

    useEffect(() => {
        localStorage.setItem("inCart", JSON.stringify(inCart));
      }, [inCart]);

    const totalPrice = inCart.reduce((acc, cur) => acc + cur.price*cur.quantity, 0);
    const totalOldPrice = inCart.reduce((acc, cur) => acc + cur.price*100*cur.quantity/(100 - cur.discount), 0);
    const discount = Math.round((totalOldPrice-totalPrice)*100/totalOldPrice);

    return (
        <section className="cart-section container">
            <div className="container">
                <div className="breadcrumbs__cart">
                    <Breadcrumbs />
                </div>
                    {!!inCart.length && <> 
                    <h3 className="cart-section__title">Order Summary</h3>
                        <div className="cart-section__wrapper">
                            <div className="cart-section__products">                    
                            {inCart.map((card, cardID) => {
                                return( 
                                    <ItemInCart
                                        key={cardID}
                                        card={card}/>
                                )
                                })}
                            </div>
                            <div className="cart-section__summary-wrapper">
                                <div className="cart-section__summary">
                                    <p >Shipping</p>
                                    <p className="cart-section__summary-shipping">free</p>
                                    <p>Discount</p>
                                    <p>{discount}%</p>
                                    <p>Tax</p>
                                    <p>-</p>
                                    <p>Total</p>
                                    <p className="cart-section__summary-total">&#8372; {totalPrice}</p>    
                                </div>
                                <Link to="/checkout"> 
                                    <Button className={"section__btn-continue"} text={"Continue to checkout"}/>
                                </Link>
                            </div>
                        </div>
                </>}
                {!inCart.length && <h3 className="cart-section__title">Your cart is empty</h3>}
            </div>
        </section>
     );
 };
 export default ShoppingCart;