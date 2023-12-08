import IconCart from "../Icons/IconCart";
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";

import Input from "../UI/Input";
import Button from "../UI/Button";

import { useState } from "react";

function FormProduct(props) {
  const [amount, setAmount] = useState(0);

  //button plus handler
  const plusAmountHandler = () => {
    setAmount((prevState) => prevState + 1);
  };

  //button minus hanlder
  const minusAmountHandler = () => {
    if (amount > 0) setAmount((prevState) => prevState - 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (amount > 0) {
      //store data in parent props
      props.onAddToCart(amount);
    }
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={submitHandler}>
        <div className="flex">
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 text-orange bg-light-grayish-blue rounded-s"
            onClick={minusAmountHandler}
          >
            <IconMinus />
          </Button>
          <Input
            className="product-form"
            input={{
              value: amount,
              type: "text",
              readOnly: true,
              disabled: true,
            }}
          />
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 text-orange bg-light-grayish-blue rounded-e"
            onClick={plusAmountHandler}
          >
            <IconPlus />
          </Button>
        </div>

        <Button className="flex-1 btn-primary">
          <IconCart />
          Add to cart
        </Button>
      </form>
    </>
  );
}

export default FormProduct;
