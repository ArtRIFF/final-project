import './style.scss';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from 'react';
import { NavLink } from 'react-router-dom';
const userNamesById = { 1: "John" };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

// define custom breadcrumbs for certain routes.
// breadcrumbs can be components or strings.
const routes = [
  { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
  { path: "/example", breadcrumb: "Custom Example" },
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
    <div className='breadcrumb container'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb} {" / "}
        </NavLink>
      ))}
      </div>
    </>
  );
};
export default Breadcrumbs;