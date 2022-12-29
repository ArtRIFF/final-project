import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectInFavorite, selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/actions";
import { Link } from "react-router-dom";
import CategorySectionCard from "../../components/CatalogSection/CategorySectionCard";

import "./WishList.scss"


const WishList = () => {
    const inFavorite = useSelector(selectInFavorite);
    const allCollectionProduct = useSelector(selectorAllCollectionProduct);
    let favoriteCards = [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCollectionProduct());
      }, []);
    inFavorite.forEach(cardID => {
        let el = allCollectionProduct.filter(card => card.itemNo === cardID);
        console.log('elem', el)
        favoriteCards.push(...el);
    });
    console.log(favoriteCards)

    return (
        <section className="wishlist-section container">
           {!!inFavorite.length && <> 
            <h3 className="cart-section__title">Your Wishlist</h3>
                <div className="wishlist-section__wrapper">
                    {favoriteCards.map((card, index) => {
                        return( 
                            <CategorySectionCard
                                key={index}
                                product={card}/>
                    )
                    })}
                </div>
           </>}
           {!inFavorite.length && <h3 className="cart-section__title">Your Wishlist is empty</h3>}
        </section>
     );
};

export default WishList;