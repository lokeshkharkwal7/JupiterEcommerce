import React from "react";
// importing products from sample api
import { products } from "../sampleapi/products";
import ProductCard from "./ProductCard";

function Home() {
  console.log(products);
  return (
    <div>
      <div className="container-fluid d-flex flex-wrap mt-3">
        {products.map((content) => (
          <ProductCard
            pname={content.pname}
            pprice={content.pprice}
            pimages={content.pimages}
            pcategory={content.pcategory}
            psubcategory={content.psubcategory}
            ptitle={content.ptitle}
            pdescription={content.pdescription}
            porigin={content.porigin}
          />
        ))}
        )
      </div>
    </div>
  );
}

export default Home;
