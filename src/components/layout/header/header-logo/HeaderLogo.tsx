import Link from "next/link";

import style from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <Link href="/" className={style.logo}>
      MeraMade
    </Link>
  );
};

export default HeaderLogo;
