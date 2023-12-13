import { useState, useRef } from "react";

import IconClose from "../Icons/IconClose";
import IconNext from "../Icons/IconNext";
import IconPrevious from "../Icons/IconPrevious";
import Button from "../UI/Button";

function ProductModal({ bigImg, thumbImg, onCloseModal }) {
  const [showProduct, setShowProduct] = useState(0);
  let bgOverlay = useRef(null);

  //close overlayHandler
  const overlayHandler = () => {
    if (bgOverlay.current.id === "modal-overlay") {
      //this is store on props parent
      onCloseModal(false);
    }
  };

  //handler show product
  const showProductHandler = (value) => {
    setShowProduct(value);
  };

  //handler Next
  const nextHandler = () => {
    setShowProduct((prevState) => {
      if (showProduct >= thumbImg.length - 1) return 0;
      return prevState + 1;
    });
  };

  //handler previous
  const prevHandler = () => {
    setShowProduct((prevState) => {
      if (showProduct <= 0) return thumbImg.length - 1;
      return prevState - 1;
    });
  };

  //handler close btn
  const closeHandler = () => {
    //this is store on props parent
    onCloseModal(false);
  };

  //style for thumbnail
  const activeThumbBox = "border-2 border-orange";
  const activeThumbImg = "opacity-50";

  return (
    <>
      <div
        id="modal-overlay"
        className="bg-black/60 absolute top-0 bottom-0 left-0 right-0 p-24"
        ref={bgOverlay}
        onClick={overlayHandler}
      ></div>

      <div className="w-2/5 absolute top-12 left-1/2 -translate-x-1/2">
        <div className="mx-auto flex flex-col gap-4">
          <Button
            className="hover:text-orange text-light-grayish-blue self-end"
            onClick={closeHandler}
          >
            <IconClose />
          </Button>
          <div className="relative">
            <Button
              className="hover:text-orange absolute top-1/2 -left-6 bg-white rounded-3xl w-12 h-12 flex items-center justify-center"
              onClick={prevHandler}
            >
              <IconPrevious />
            </Button>
            <Button
              className="hover:text-orange absolute top-1/2 -right-6 bg-white rounded-3xl w-12 h-12 flex items-center justify-center"
              onClick={nextHandler}
            >
              <IconNext />
            </Button>
            {/* Big Image */}
            <div className="w-full overflow-hidden rounded-xl">
              <img src={bigImg[showProduct]} />
            </div>
          </div>
          {/* Thumbnail Images */}
          <ul className="flex gap-4">
            <li
              className={`overflow-hidden rounded-md bg-white cursor-pointer ${
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
              className={`overflow-hidden rounded-md bg-white cursor-pointer ${
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
              className={`overflow-hidden rounded-md bg-white cursor-pointer ${
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
              className={`overflow-hidden rounded-md bg-white cursor-pointer ${
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
        </div>
      </div>
    </>
  );
}

export default ProductModal;
