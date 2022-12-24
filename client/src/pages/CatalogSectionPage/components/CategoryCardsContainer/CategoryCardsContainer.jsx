import './style.scss';
import CategorySectionCard from '../../../../components/CatalogSection/CategorySectionCard/CategorySectionCard';
import CategoryCardsPagination from './CategoryCardsPagination/CategoryCardsPagination';
import { useState, useEffect } from 'react';

const CategoryCardsContainer = ({ filtredArray }) => {
const [paginationIndex, setPaginationIndex] = useState(1);
const changePaginationIndex = (value) => {
  const range = value + 12;
  if (range < filtredArray.length) {
    setPaginationIndex(value);
  }
}
  return (
    <>
    <div className='cards-container'>
      {
        filtredArray.map((card, i) => {
          if (i > (paginationIndex-1) && i < (paginationIndex+12)) {
            return (
              <div key={i}>
                <CategorySectionCard product={card} />
              </div>
            );
          }
        })
      }
    </div>
    <CategoryCardsPagination changePaginationIndex={changePaginationIndex} filtredArray={filtredArray}/>
    </>
  );
};


export default CategoryCardsContainer;