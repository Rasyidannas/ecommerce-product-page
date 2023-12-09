import { useContext } from "react";

import FormProduct from "../Form/FormProduct";
import CartContext from "../../store/cart-context";

function ProductDescription({
  id,
  title,
  company,
  description,
  price,
  discount,
  thumbImage,
}) {
  let currPrice;

  discount > 0 ? (currPrice = price * (discount / 100)) : price;

  const cartCtx = useContext(CartContext);

  //this handler for send data to cart-context.js
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      title,
      amount,
      price: currPrice,
      discount,
      thumbImage,
    });
  };

  //this is for check context items
  // console.log(cartCtx.items);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold tracking-wide uppercase  text-orange">
          {company}
        </h4>
        <h1 className="text-5xl font-bold leading-none">{title}</h1>
      </div>

      <p className="text-dark-grayish-blue">{description}</p>

      <div>
        <div className="flex gap-4">
          <h2 className="text-2xl font-bold">${currPrice.toFixed(2)}</h2>
          <div className="self-center px-2 py-1 text-sm font-bold rounded bg-pale-orange text-orange">
            <p>{discount}%</p>
          </div>
        </div>
        <h4 className="line-through text-dark-grayish-blue">
          ${price.toFixed(2)}
        </h4>
      </div>

      <FormProduct id={id} onAddToCart={addToCartHandler} />
    </>
  );
}

export default ProductDescription;
