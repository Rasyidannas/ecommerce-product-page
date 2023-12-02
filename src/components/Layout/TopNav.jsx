import IconCart from "../Icons/IconCart";
import IconLogo from "../Icons/IconLogo";
import imgAvatar from "../../assets/images/image-avatar.png";

function TopNav() {
  return (
    <nav className="flex justify-between px-3 py-6 border-b border-grayish-blue">
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

      <div className="flex items-center gap-4">
        <IconCart />
        <div className="w-8 h-8 ">
          <img src={imgAvatar} alt="Avatar" />
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
