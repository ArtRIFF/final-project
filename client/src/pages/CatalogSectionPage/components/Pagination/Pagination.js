import React from "react";
import "./Pagination.scss";

const pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-wrapper">
            <a href="#" className="pagination-li">
              {" "}
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default pagination;
