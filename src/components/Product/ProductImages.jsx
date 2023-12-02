import imgProduct1 from "../../assets/images/image-product-1.jpg";
import imgProduct2 from "../../assets/images/image-product-2.jpg";
import imgProduct3 from "../../assets/images/image-product-3.jpg";
import imgProduct4 from "../../assets/images/image-product-4.jpg";
import imgProductThumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgProductThumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgProductThumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgProductThumb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

function ProductImages() {
  const [showProduct, setShowProduct] = useState(imgProduct1);

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
          onClick={showProductHandler.bind(null, imgProduct1)}
        >
          <img src={imgProductThumb1} alt="Product 1" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, imgProduct2)}
        >
          <img src={imgProductThumb2} alt="Product 2" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, imgProduct3)}
        >
          <img src={imgProductThumb3} alt="Product 3" />
        </li>
        <li
          className="overflow-hidden rounded-md "
          onClick={showProductHandler.bind(null, imgProduct4)}
        >
          <img src={imgProductThumb4} alt="Product 4" />
        </li>
      </ul>
    </>
  );
}

export default ProductImages;
