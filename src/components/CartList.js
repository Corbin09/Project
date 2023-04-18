import React from "react";
import { useState } from "react";

const CartList = ({ products }) => {

    const [product, setProduct] = useState({ products });
    console.log(product[0]);

    

    const CartItem = ({ item }) => {
        return (
            <>
                <div class="container d-flex">
                    <div className="col-3">
                        <h6>{item.name}</h6>
                    </div>
                    <div className="col-3">: {item.quantity}</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-4 mt-3 mb-4">
                <h5 id="cart">Cart List</h5>
                {products.map((product) => (
                    <CartItem item={product} key={product.id} />
                ))}
            </div>
        </>
    );
};

export default CartList;