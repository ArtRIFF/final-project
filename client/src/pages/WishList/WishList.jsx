import React, {useContext, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectInFavorite, selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/products/productsSlice";
import CategorySectionCard from "../../components/CatalogSection/CategorySectionCard";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
import "./WishList.scss"
import {UserContext} from "../../context/UserContext";
import {sendAuthorizedRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import {replaceInFavorite} from "../../store/favorite/favoriteSlice";


const WishList = () => {
    const {userInfo} = useContext(UserContext);
    const inFavorite = useSelector(selectInFavorite);
    const allCollectionProduct = useSelector(selectorAllCollectionProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCollectionProduct());
      }, []);
    const favoriteCards = inFavorite.map(id => {
        return allCollectionProduct.find(product => {
          return product._id === id
        });
    })
    useEffect(() => {
      if (userInfo) {
        sendAuthorizedRequest(`${API}wishlist`)
          .then(r => {
            if (r !== null) {
              const favIds = r.products.map((prod) => prod._id)
              dispatch(replaceInFavorite(favIds))
            }
          })
      }
    }, [userInfo])

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