import IconClose from "../Icons/IconClose";
import Button from "../UI/Button";

import { useRef } from "react";

function MobileMenu({ onCloseModal }) {
  let bgOverlay = useRef(null);

  //close overlayHandler
  const overlayHandler = () => {
    if (bgOverlay.current.id === "modal-overlay") {
      console.log("this is bg overlay");
      //this is store on props parent
      onCloseModal(false);
    }
  };

  //this will be close menu
  const menuCloseHandler = () => {
    onCloseModal(false);
  };

  return (
    <>
      <div
        id="modal-overlay"
        className=" bg-black/60 absolute top-0 bottom-0 left-0 right-0 p-24"
        ref={bgOverlay}
        onClick={overlayHandler}
      ></div>
      <div className="fixed top-0 z-50 py-8 pl-8 pr-24 bg-white h-screen flex flex-col gap-8">
        <Button className="text-dark-grayish-blue" onClick={menuCloseHandler}>
          <IconClose />
        </Button>
        <ul className="flex flex-col gap-4">
          <li className="font-bold">
            <a href="#">Collections</a>
          </li>
          <li className="font-bold">
            <a href="#">Men</a>
          </li>
          <li className="font-bold">
            <a href="#">Women</a>
          </li>
          <li className="font-bold">
            <a href="#">About</a>
          </li>
          <li className="font-bold">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
