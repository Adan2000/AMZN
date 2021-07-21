import React from "react";

export default function rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
    </div>
  );
}
