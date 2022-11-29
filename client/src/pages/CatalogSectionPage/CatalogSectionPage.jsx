import './style.scss';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import AsideFilter from './components/AsideFilter/AsideFilter';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';

import { selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/actions";

const CatalogSectionPage = () => {
  const dispatch = useDispatch();
  
  const [showAsideFilter, setModalRender] = useState(false);
  
  const newCollectionArray = useSelector(selectorAllCollectionProduct);
  
  const [showProducts, setProducts] = useState('');
  
  
  useEffect(() => {
    dispatch(fetchAllCollectionProduct());
  }, []);


  const callAsideFilter = () => {
    setModalRender(true);
    const newArray = newCollectionArray.filter(item => item.alt === "Bracelet");
    setProducts(newArray);
  }

  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest('.asideFilter-wrapper--show');
    const isCallButton = !!event.target.closest('.category-filter--btn');
    if (event && !isFilterElement && !isCallButton) {
      setModalRender(false);
    }
  }
  
  const array = (Array.isArray(showProducts))?showProducts.length:newCollectionArray.length;
  return (
    <div className="container" onClick={hideAsideFilter} >
      <div className="grid-wrapper">
        <div className='breadcrumbs-wrapper'>
          <Breadcrumbs />
        </div>
        <div className="catalogPageImg-wrapper"><img src="img/catalogSectionPage/CategorySectionMainImg.jpg" alt="Category Section Main Imgage" /></div>
        <aside className={`${showAsideFilter ? 'asideFilter-wrapper--show' : 'asideFilter-wrapper'}`}>
          <AsideFilter />
        </aside>
        <div className='filter-wrapper'>
          <CategoryFilter onClickFunc={callAsideFilter}  setResult={array}/>
        </div>
        <div style={{ backgroundColor: "rgba(100, 85, 45, 0.5)", width: '850px', height: '510px' }} className='categoryCards-wrapper'>{
       !Array.isArray(showProducts)?
       newCollectionArray.map((item, i)=> {
          const {name,price,alt,bestseller,newProduct} = item;
          return (<p key={i}>{i} Product:{name} price:{price} alt:{alt} bestseller:{bestseller} newProduct:{newProduct}</p>)
        })
        :showProducts.map((item, i)=> {
          const {name,price,alt,bestseller,newProduct} = item;
          return (<p key={i}>{i} Product:{name} price:{price} alt:{alt} bestseller:{bestseller} newProduct:{newProduct}</p>)
        })
        }</div>
        <div style={{ backgroundColor: "grey", width: '396px', height: '88px' }} className='paginnation-wrapper'>paginnation</div>
      </div>
    </div>
  );
};
export default CatalogSectionPage;