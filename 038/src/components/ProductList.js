import { useState } from "react"
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products/");
    const { data: products } = useFetch(url);

  return (
    <section>
        <div className="filter">
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
        
        { products && products.map((product) => (
            <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>            
        )) }
    </section>
  )
}
