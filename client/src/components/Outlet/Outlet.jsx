import React, { useEffect, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonViewAll from '../Button/ViewAll/ViewAll';
import CategorySectionCard from '../CatalogSection/CategorySectionCard';
import {selectOutlet} from '../../store/selectors';
import {fetchOutlet} from '../../store/actions';


import "./outlet.scss"


const Outlet = (props) => {
    
    const dispatch = useDispatch();
    const outlet = useSelector(selectOutlet);

    useEffect(() => {
        dispatch(fetchOutlet())
    },[]);


    return (
        <section className='outlet'>
            <div className='outlet__header'>
                <h2 className='outlet__title'>Outlet</h2>
                <ButtonViewAll/>
            </div>
            <div className='outlet__cards-container'>
                {
                    outlet.map((card, index) => {
                        return <CategorySectionCard 
                        key = {index}
                        product = {card}/>
                    })
                }
            </div>

        </section>
    )
}

export default Outlet