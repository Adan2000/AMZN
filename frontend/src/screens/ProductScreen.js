import React from "react";
import data from "../data";

export default function ProductScreen() {
  const product = data.products.find(x => x._id === props.match.params.id);
  if(!product){
    return <div>Product Not Found</div>
  }
  return (
    <div>
        <div className="row">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
          </div>
          <div  className="col-1">
            <ul>
              <li><h1>{product.name}</h1></li>
              <li><Rating rating={product.rating} alt={product.name}></Rating></li>
              <li>Price : ${profuct.price}</li>
              <li>Description : <p>{product.description}</p></li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card car-body">
              <ul>
                <li>
                  <div className="row">

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
