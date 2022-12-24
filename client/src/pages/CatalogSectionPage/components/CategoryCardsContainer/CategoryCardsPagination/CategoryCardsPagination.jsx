import './style.scss';
import { useState, useEffect } from 'react';
const CategoryCardsPagination = ({filtredArray,changePaginationIndex}) => {
  const ChoosePageIndex = (e) => {
    if (e.target.classList.contains("categoryCardsPagination__item")) {
      const value = +e.target.children[0].textContent;
     changePaginationIndex(value);
     console.log(value);
    }
  }
  return (
    <div className='categoryCardsPagination'>
     {
        filtredArray.map((card, i) => {
          if (i < 5) {
            return (
              <div key={i} onClick={ChoosePageIndex} className="categoryCardsPagination__item">
              <p className='categoryCardsPagination__index'>{i+1}</p> 
              </div>
            );
          }
        })
      }
    </div>
  );
};

export default CategoryCardsPagination;