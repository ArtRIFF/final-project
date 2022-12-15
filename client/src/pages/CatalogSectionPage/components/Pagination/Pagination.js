import React, { useState, useEffect } from "react";
import "./Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, setCurrentPage }) => {
  const pageNumbers = [];

  const [currentButton, setCurrentButton] = useState(1);
  const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState([]);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages = [...arrayOfCurrentButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length];
    } else if (currentButton === 4) {
      const sliced = pageNumbers.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length];
    } else if (currentButton > 4 && currentButton < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentButton - 2, currentButton);
      const sliced2 = pageNumbers.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pageNumbers.length,
      ];
    } else if (currentButton > pageNumbers.length - 3) {
      const sliced = pageNumbers.slice(pageNumbers.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(
        arrayOfCurrentButtons[arrayOfCurrentButtons.length - 3] + 1
      );
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrayOfCurrentButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrayOfCurrentButtons[3] - 2);
    }

    setArrayOfCurrentButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div>
      <ul className="pagination-container">
        <a
          href="javascript:void(0)"
          // href="#"
          className={`${currentButton === 1 ? "disabled" : ""}`}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }
        >
          Prev
        </a>
        {arrayOfCurrentButtons.map((page) => (
          <li key={page}>
            <a
              key={page}
              href="javascript:void(0);"
              // href="#"
              className={`${currentButton === page ? "active" : ""}`}
              onClick={() => {
                setCurrentButton(page);
              }}
            >
              {" "}
              {page}{" "}
            </a>
          </li>
        ))}
        <a
          href="javascript:void(0)"
          // href="#"
          className={`${
            currentButton === pageNumbers.length ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev >= pageNumbers.length ? prev : prev + 1
            )
          }
        >
          Next
        </a>
      </ul>
    </div>
  );
};

export default Pagination;
