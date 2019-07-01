import React from "react";
import classNames from "classnames";
import Pager from "../common/pager";

const SearchResults = ({ items, total, page, pageSize, onPageChange }) => {
  if (items.length === 0)
    return (
      <div className="search-results">
        <h3>No Results</h3>
      </div>
    );

  return (
    <div className="search-results">
      <div className="row">
        <div className="col">
          <div>Total: {total}</div>
          <div>
            <span className="square-small answered" /> - answered questions
            <span className="square-small unanswered ml-2" /> - unanswered
            questions
          </div>
        </div>
        <div className="col">
          <Pager
            itemsCount={total}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={onPageChange}
            alignment="right"
          />
        </div>
      </div>
      <div className="row header">
        <div className="col">Title</div>
        <div className="col-2">Creation date</div>
        <div className="col-2">Owner</div>
      </div>
      {items.map(x => (
        <div
          key={x.question_id}
          className={classNames("row question", {
            answered: x.is_answered,
            unanswered: !x.is_answered
          })}
        >
          <div className="col">
            <a href={x.link} dangerouslySetInnerHTML={{ __html: x.title }} />
          </div>
          <div className="col-2">
            {new Date(x.creation_date).toLocaleDateString()}
          </div>
          <div className="col-2">
            <a href={x.owner.link}>{x.owner.display_name}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
