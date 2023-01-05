import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const {name, price, image} = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => dispatch(add(product))}>Add To Cart</button>
      </div>
    </div>
  )
}
