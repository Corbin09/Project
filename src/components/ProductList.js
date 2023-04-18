import React,{useState} from "react";
import CartList from "./CartList";

const ProductList = ({product, handleAddItem, searchValue}) => {

    console.log({product});
    console.log({searchValue});

    const ProductItem = ({product, handleAddItem}) => {
        return <div className="card" style={{ width: "14rem" }}>
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6">{product.name}</h5>
          <p className="card-text">
            {product.price}
          </p>
        </div>
        <button className="btn btn-primary w-100" onClick={() => {handleAddItem(product)}}>Add Item</button>
      </div>
    }

    return(
        <div>
            <div className="container mt-4">
                <div className="row row-cols-md-3 g-4">
                    {product.filter(
                        item =>{
                            return item.name.toUpperCase().includes(searchValue.toUpperCase())
                        }
                    ).map((pItem) => {
                        return <ProductItem key={pItem.id} product={pItem} handleAddItem={handleAddItem}/>;
                    })}
                </div>
            </div>
        </div>
    )
    
}

export default ProductList;