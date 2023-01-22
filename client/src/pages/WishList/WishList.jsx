import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectInFavorite, selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/actions";
import CategorySectionCard from "../../components/CatalogSection/CategorySectionCard";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
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
        favoriteCards.push(...el);
    });
    console.log(favoriteCards)

    return (
        <section className="wishlist-section">
            <div className="container">
                <div className="breadcrumbs__wishlist">
                    <Breadcrumbs/>
                </div>
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
            </div>
        </section>
     );
};

export default WishList;