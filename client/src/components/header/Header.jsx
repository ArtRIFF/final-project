import { HeaderSection, Container, Cart, Favorite } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { ViewContext } from '../../context';

import ViewButton from './viewButton/ViewButton'

import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { selectCartArray, selectFavoriteProd } from '../../store/selectors';


const Header = () => {
  const { changeInRowView } = useContext(ViewContext);
  const favoriteProd = useSelector(selectFavoriteProd);
  const arrayCart = useSelector(selectCartArray);
  const [rowActive, setRowActive] = useState(false);
  const [columnActive, setColumnActive] = useState(false);
  const handleChangeRow = (e) => {
    const target = e.target.closest('div');
    if (target.id === "row-view") {
      changeInRowView(true);
      setRowActive(true);
      setColumnActive(false);
    } else if (target.id === "column-view") {
      changeInRowView(false);
      setRowActive(false);
      setColumnActive(true);
    }
  }

  return (
    <Container>
      <nav>
        <NavLink to="/"
          style={{ textDecoration: "none" }}>
          <HeaderSection>Guitar</HeaderSection>
        </NavLink>
        <div className='icons-container' >
          <ViewButton idComponent={"row-view"} isActive={rowActive}>
            <FontAwesomeIcon onClick={handleChangeRow} icon={faBars} />
          </ViewButton>
          <ViewButton idComponent={"column-view"} isActive={columnActive}>
            <FontAwesomeIcon onClick={handleChangeRow} icon={faTableCells} />
          </ViewButton>
        </div>
        <div className='icons-container'>
          <NavLink to="/cart">
            <Cart>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span>{arrayCart.length}</span>
            </Cart>
          </NavLink>
          <NavLink to="/favorite">
            <Favorite>
              <FontAwesomeIcon icon={faHeart} />
              <span>{favoriteProd.length}</span>
            </Favorite>
          </NavLink>
        </div>
      </nav>
    </Container>
  );
}

export default Header;