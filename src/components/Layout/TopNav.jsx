import IconCart from "../Icons/IconCart";
import IconLogo from "../Icons/IconLogo";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Cart from "../Cart/Cart";
import imgAvatar from "../../assets/images/image-avatar.png";

function TopNav() {
  const cartCtx = useContext(CartContext);

  const item = cartCtx.items[0];
  // console.log(item);

  return (
    <nav className="relative flex items-center justify-between px-3 py-4 border-b border-grayish-blue">
      <ul className="flex gap-8 text-dark-grayish-blue">
        <li className="mr-4 ">
          <IconLogo />
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="relative flex items-center gap-4">
        <div className="relative p-4 icon-cart peer">
          {item && (
            <span className="absolute py-1 px-2 rounded-xl text-[.5rem] font-bold top-0 right-0 text-white bg-orange">
              {item.amount}
            </span>
          )}
          <IconCart />
        </div>
        <div className="w-8 h-8 ">
          <img src={imgAvatar} alt="Avatar" />
        </div>

        <Cart className="hidden peer-hover:block hover:block" />
      </div>
    </nav>
  );
}

export default TopNav;
