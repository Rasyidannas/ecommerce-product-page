import { useState } from "react";

function ProductImages({ bigImg, thumbImg }) {
  const [showProduct, setShowProduct] = useState(bigImg[0]);

  //handler show product
  const showProductHandler = (value) => {
    setShowProduct(value);
    console.log(showProduct);
  };

  return (
    <>
      <div className="w-full overflow-hidden rounded-xl">
        <img src={showProduct} />
      </div>
      <ul className="flex gap-4">
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, bigImg[0])}
        >
          <img src={thumbImg[0]} alt="Product 1" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, bigImg[1])}
        >
          <img src={thumbImg[1]} alt="Product 2" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, bigImg[2])}
        >
          <img src={thumbImg[2]} alt="Product 3" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, bigImg[3])}
        >
          <img src={thumbImg[3]} alt="Product 4" />
        </li>
      </ul>
    </>
  );
}

export default ProductImages;
