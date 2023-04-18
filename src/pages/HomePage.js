import ProductList from "../components/ProductList";
import products from "../data/product";
import Header from "../components/Header";
import CartList from "../components/CartList";
import { useState } from "react";

const Homepage = () => {

    const [inputValue, setInputValue] = useState("");

    const handleAddItem = (p) => {
        setCartItem((prev) => {
            let exist = prev.find((item) => item.id === p.id);
            setQuantity(quantity + 1);
            if (exist) {
                return prev.map((item) =>
                    item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...p, quantity: 1 }];
        })
    }

    const [cartItem, setCartItem] = useState([]);
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <Header cartItem={cartItem} quantity={quantity}></Header>
            <div className="container mt-4">
                <div className="mb-3 w-50">
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Search"
                        value={inputValue}
                        onChange={(event) =>{
                            setInputValue(event.target.value);
                        }}
                    />
                </div>
            </div>
            <ProductList product={products} handleAddItem={handleAddItem} searchValue={inputValue}/>
            <CartList products={cartItem}/>
        </>
    )
}

export default Homepage;