import { useContext } from "react";
import CartContext from "../../store/cart-context";

function Cart() {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items;

  return (
    <div className="absolute w-[375px] right-2 top-full bg-white shadow-md rounded-md">
      <h4 className="px-4 py-4 font-bold border-b border-dark-grayish-blue">
        Cart
      </h4>

      {cartItems.length < 1 && (
        <p className="py-16 font-bold text-center text-dark-grayish-blue">
          Your cart is empty.
        </p>
      )}

      {cartItems.length > 0 && <div><img src="/assets/images/image-product-1-thumbnail.jpg" /></div>}
    </div>
  );
}

export default Cart;
