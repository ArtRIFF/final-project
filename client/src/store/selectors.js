export const selectorAllCollectionProduct = (state) =>
  state.products.allCollectionProduct;
export const selectorFilteredProducts = (state) =>
  state.filteredProducts.filteredProducts;
export const selectorIsProductsLoading = (state) => state.products.isLoading;
export const selectorNewCollectionProduct = (state) =>
  state.products.newCollectionProduct;
export const selectBestsellers = (state) => state.products.bestsellers;
export const selectOutlet = (state) => state.products.outlet;
export const selectInCart = (state) => state.cart.inCart;
export const selectInFavorite = (state) => state.favorite.inFavorite;

