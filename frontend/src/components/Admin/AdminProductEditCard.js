import React from "react";

function AdminProductEditCard({
  pname,
  pimages,
  ptitle,
  pdescription,
  pcategory,
  pprice,
}) {
  return (
    <div>
      <div
        className="card-fluid text-secondary bg-light mx-3 "
        style={{ width: "15rem" }}
      >
        <img src={pimages} className="card-img-top img-responsive" alt="..." />
        <div className="card-body">
          <h5 className="container-fluid  card-title    fs-5">{pname}</h5>

          <h5 className="card-title  fs-6">{ptitle}</h5>
          <p className="card-text fs-6 text-secondary  ">{pdescription}</p>
          <p className="card-text fs-6">Category {pcategory}</p>
          {/* <p className="card-text fs-6">Product Origin {porigin}</p> */}

          <div className="btn btn-danger">
            Rs {"  "}
            {pprice}
          </div>

          <button className="btn btn-danger mx-2">
            Edit <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProductEditCard;
