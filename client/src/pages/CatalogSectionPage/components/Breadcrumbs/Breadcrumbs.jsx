import './style.scss';

// import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  // const location = useLocation();
  return (
    <nav className='breadcrumbs'>
      <a href="#" className="breadcrumb-not-active">Shop</a>
      /
      <a href="#" className="breadcrumb-not-active">Rolex</a>
      /
      <a href="#" className="breadcrumb-active">Oyster</a>
      {/* <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <Link to="/products"
        className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Products
      </Link>
      <Link to="/products/1"
        className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Product 1
      </Link> */}
    </nav>
  );
};
export default Breadcrumbs;