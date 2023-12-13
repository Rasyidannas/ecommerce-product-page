import { useState } from "react";

function ProductImages({ bigImg, thumbImg, onCloseModal }) {
  const [showProduct, setShowProduct] = useState(0);

  //handler show product
  const showProductHandler = (value) => {
    setShowProduct(value);
    console.log(showProduct);
  };

  //handler close btn
  const closeHandler = () => {
    //this is store on props parent
    onCloseModal(true);
  };

  //style for thumbnail
  const activeThumbBox = "border-2 border-orange";
  const activeThumbImg = "opacity-50";

  return (
    <>
      <div className="w-full overflow-hidden rounded-xl cursor-pointer">
        <img src={bigImg[showProduct]} onClick={closeHandler} />
      </div>
      <ul className="flex gap-4">
        <li
          className={`overflow-hidden rounded-md cursor-pointer ${
            showProduct === 0 && activeThumbBox
          }`}
          onClick={showProductHandler.bind(null, 0)}
        >
          <img
            src={thumbImg[0]}
            alt="Product 1"
            className={`object-cover h-full + ${
              showProduct === 0 && activeThumbImg
            } hover:opacity-70`}
          />
        </li>
        <li
          className={`overflow-hidden rounded-md cursor-pointer ${
            showProduct === 1 && activeThumbBox
          }`}
          onClick={showProductHandler.bind(null, 1)}
        >
          <img
            src={thumbImg[1]}
            alt="Product 2"
            className={`object-cover h-full + ${
              showProduct === 1 && activeThumbImg
            } hover:opacity-70`}
          />
        </li>
        <li
          className={`overflow-hidden rounded-md cursor-pointer ${
            showProduct === 2 && activeThumbBox
          }`}
          onClick={showProductHandler.bind(null, 2)}
        >
          <img
            src={thumbImg[2]}
            alt="Product 3"
            className={`object-cover h-full + ${
              showProduct === 2 && activeThumbImg
            } hover:opacity-70`}
          />
        </li>
        <li
          className={`overflow-hidden rounded-md cursor-pointer ${
            showProduct === 3 && activeThumbBox
          }`}
          onClick={showProductHandler.bind(null, 3)}
        >
          <img
            src={thumbImg[3]}
            alt="Product 4"
            className={`object-cover h-full + ${
              showProduct === 3 && activeThumbImg
            } hover:opacity-70`}
          />
        </li>
      </ul>
    </>
  );
}

export default ProductImages;
