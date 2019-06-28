import React from "react";
import PropTypes from "prop-types";

// itemsCount: int
// pageSize: int
// currentPage: int
// onPageChange: function
// alignment: string

const Pager = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  alignment
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  var from = 1,
    skip = 2,
    to = pagesCount;
  var pages = [];

  if (currentPage > skip + 2) {
    from = currentPage - skip;
    pages.push(1);
    pages.push(0);
  }
  if (pagesCount - currentPage > skip) {
    to = currentPage + skip;
  }

  for (let i = from; i <= to; i++) pages.push(i);

  if (to < pagesCount) {
    if (to <= pagesCount - skip) {
      pages.push(0);
    }
    pages.push(pagesCount);
  }

  return (
    <nav>
      <ul
        className={
          alignment === "right"
            ? "pagination justify-content-end"
            : "pagination"
        }
      >
        {pages.map((page, index) => {
          if (page === 0) {
            return (
              <li key={index} className="page-item">
                <button className="page-link" disabled="disabled">
                  ...
                </button>
              </li>
            );
          }
          return (
            <li
              key={index}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pager.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  alignment: PropTypes.oneOf(["left", "right"])
};

export default Pager;
