function Cart() {
  return (
    <div className="absolute w-[375px] right-2 top-full bg-white shadow-md rounded-md">
      <h4 className="px-4 py-4 font-bold border-b border-dark-grayish-blue">
        Cart
      </h4>
      <p className="py-16 font-bold text-center text-dark-grayish-blue">
        Your cart is empty.
      </p>
    </div>
  );
}

export default Cart;
