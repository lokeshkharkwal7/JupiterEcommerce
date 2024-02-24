import React from "react";

function ProductCard({
  pname,
  pprice,
  pimages,
  pcategory,
  psubcategory,
  ptitle,
  pdescription,
  porigin,
}) {
  return (
    <div>
      <div className="card mx-3" style={{ width: "20rem" }}>
        <img src={pimages} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-4">{pname}</h5>

          <h5 className="card-title fs-5">{ptitle}</h5>
          <p className="card-text">{pdescription}</p>
          <p>Category {pcategory}</p>
          <p>Product Origin {porigin}</p>
          <p>
            Rs {"  "}
            {pprice}
          </p>

          <a href="#" className="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
