import FormProduct from "../Form/FormProduct"

function ProductDescription() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className=" uppercase text-orange font-bold text-sm tracking-wide">
          Sneaker Company
        </h4>
        <h1 className="text-5xl font-bold leading-none">Fall Limited Edition Senakers</h1>
      </div>

      <p className="text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They will withstand everything the wheater can offer.</p>

      <div>
        <div className="flex gap-4">
          <h2 className="text-2xl font-bold">$125.00</h2>
          <div className="px-2 py-1 bg-pale-orange rounded text-sm font-bold text-orange self-center">
            <p>50%</p>
          </div>
        </div>
        <h4 className="text-dark-grayish-blue line-through">$250.00</h4>
      </div>

      <FormProduct/>
    </>
  );
}

export default ProductDescription;
