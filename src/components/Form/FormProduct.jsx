import Input from "../UI/Input";
import Button from "../UI/Button";
import IconCart from "../Icons/IconCart";
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";

function FormProduct() {
  return (
    <>
      <form className="flex gap-4">
        <div className="flex">
          <Button
            type="button"
            className="w-12 h-12 text-orange bg-light-grayish-blue rounded-e flex justify-center items-center"
          >
            <IconMinus />
          </Button>
          <Input
            className="product-form"
            input={{
              type: "text",
              defaultValue: 0,
            }}
          />
          <Button
            type="button"
            className="w-12 h-12 text-orange bg-light-grayish-blue rounded-e flex justify-center items-center"
          >
            <IconPlus />
          </Button>
        </div>

        <Button className="btn-primary flex-1">
          <IconCart />
          Add to cart
        </Button>
      </form>
    </>
  );
}

export default FormProduct;
