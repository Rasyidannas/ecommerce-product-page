import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import IconDelete from "../Icons/IconDelete";

function Cart({ className }) {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items;
  const cartTotalAmount = cartCtx.totalAmount;

  //remove item handler
  const removeItemCart = () => {
    cartCtx.removeItem();
  };

  return (
    <div
      className={`absolute w-[327px] right-2 top-full bg-white shadow-md rounded-md ${className}`}
    >
      <h4 className="px-6 py-4 font-bold border-b border-grayish-blue">Cart</h4>

      {cartItems.length < 1 && (
        <p className="py-16 font-bold text-center text-dark-grayish-blue">
          Your cart is empty.
        </p>
      )}

      {cartItems.length > 0 && (
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-4">
            <img
              src={cartItems[0].thumbImage}
              className="w-12 h-12 rounded-sm"
            />
            <div>
              <p className="text-dark-grayish-blue">{cartItems[0].title}</p>
              <p className="text-dark-grayish-blue">
                ${cartItems[0].price.toFixed(2)} x {cartItems[0].amount}
                <span className="pl-2 font-bold text-black">
                  ${cartTotalAmount.toFixed(2)}
                </span>
              </p>
            </div>
            <Button className="text-grayish-blue" onClick={removeItemCart}>
              <IconDelete />
            </Button>
          </div>
          <Button className="flex-1 btn-primary">Checkout</Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
