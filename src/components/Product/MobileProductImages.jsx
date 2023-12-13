import { useState } from "react";

import IconNext from "../Icons/IconNext";
import IconPrevious from "../Icons/IconPrevious";
import Button from "../UI/Button";

function MobileProductImages({ bigImg }) {
  const [showProduct, setShowProduct] = useState(0);

  //handler Next
  const nextHandler = () => {
    setShowProduct((prevState) => {
      if (showProduct >= bigImg.length - 1) return 0;
      return prevState + 1;
    });
  };

  //handler previous
  const prevHandler = () => {
    setShowProduct((prevState) => {
      if (showProduct <= 0) return bigImg.length - 1;
      return prevState - 1;
    });
  };

  return (
    <div className="relative block md:hidden ">
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
  );
}

export default MobileProductImages;
