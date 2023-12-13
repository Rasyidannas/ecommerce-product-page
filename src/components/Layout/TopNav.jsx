import IconCart from "../Icons/IconCart";
import IconLogo from "../Icons/IconLogo";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Cart from "../Cart/Cart";
import Button from "../UI/Button";
import imgAvatar from "../../assets/images/image-avatar.png";
import IconMenu from "../Icons/IconMenu";

function TopNav({ onMobileMenu }) {
  const cartCtx = useContext(CartContext);

  const item = cartCtx.items[0];

  //this will be open menu
  const menuOpenHandler = () => {
    //this will send to parent props
    onMobileMenu(true);
  };

  return (
    <>
      <nav className="relative items-center px-3 border-b border-grayish-blue gap-8 flex">
        <Button className="md:hidden block" onClick={menuOpenHandler}>
          <IconMenu />
        </Button>
        <div className="md:w-fit w-full">
          <IconLogo />
        </div>
        <ul className="w-full hidden md:flex items-center gap-8 text-dark-grayish-blue">
          <li className="nav-link">
            <a href="#">Collections</a>
          </li>
          <li className="nav-link">
            <a href="#">Men</a>
          </li>
          <li className="nav-link">
            <a href="#">Women</a>
          </li>
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="relative z-40 flex items-center gap-4">
          <div className="relative p-4 icon-cart peer cursor-pointer text-dark-grayish-blue hover:text-black">
            {item && (
              <span className="absolute py-1 px-2 rounded-xl text-[.5rem] font-bold top-0 right-0 text-white bg-orange">
                {item.amount}
              </span>
            )}
            <IconCart />
          </div>
          <div className="w-8 h-8 border-2 border-white hover:border-orange cursor-pointer rounded-2xl ">
            <img src={imgAvatar} alt="Avatar" />
          </div>

          <Cart className="hidden peer-hover:block hover:block" />
        </div>
      </nav>
    </>
  );
}

export default TopNav;
