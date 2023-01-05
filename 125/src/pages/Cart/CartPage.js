import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const cartlistLength = 0;

  return (
    <main>       
      { cartlistLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}
