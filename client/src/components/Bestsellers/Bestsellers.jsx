import React, { useEffect, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonViewAll from '../Button/ViewAll/ViewAll';
import CategorySectionCard from '../CatalogSection/CategorySectionCard';
import {selectBestsellers} from '../../store/selectors';
import {fetchBestsellers} from '../../store/actions';
import { getCards } from '../../helpers/sendRequest';


import "./bestsellers.scss"


const Bestsellers = (props) => {
    
    const dispatch = useDispatch();
    const bestsellers = useSelector(selectBestsellers);

    useEffect(() => {
        dispatch(fetchBestsellers());
        getCards()
    .then(data => console.log('DataBase',data))
    },[]);
     

    return (
        <section className='bestsellers'>
            <div className='bestsellers__header'>
                <h2 className='bestsellers__title'>Bestsellers</h2>
                <ButtonViewAll/>
            </div>
            <div className='bestsellers__cards-container'>
                {
                    bestsellers.map((card, index) => {
                        return <CategorySectionCard 
                        key = {index}
                        product = {card}/>
                    })
                }
            </div>

        </section>
    )
}

export default Bestsellers