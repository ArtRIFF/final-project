import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../../../pages/CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

import "./SearchPage.scss";

import SearchCardsContainer from "./SearchCardsContainer"
import axios from "axios"
import PaginationSearch from "./PaginationSearch";

const SearchPage = () => {
    const [products, setProducts] = useState([])
    const [setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)

    useEffect(() => {
      const getProducts = async () => {
        const res = await axios.get('https://final-backend-new.onrender.com/api/products')
        setProducts(res.data);
        setLoading(false)
      }
      getProducts()
    },[])

    const lastProductsIndex = currentPage * itemsPerPage;
    const firstProductsIndex = lastProductsIndex - itemsPerPage;
    const courentProducts = products.slice(firstProductsIndex, lastProductsIndex)
    
    const paginationRequest = (url) => {
      setCurrentPage(url);
    };

    return (
        <div className="result container">
          <div className="result__breadcrumbs">
            <Breadcrumbs/>
          </div>
            <SearchCardsContainer products={courentProducts}/>
            <div className="pagination-container">
              <PaginationSearch
                paginationRequest={paginationRequest}
                itemsPerPage={itemsPerPage}
                totalItems={products.length}
              />
            </div>
        </div>
    )
}

export default SearchPage;