import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { Menu } from "./Menu";
import { useCallback, useState } from "react";
import MenuOpenIcon from "@/icons/MenuOpenIcon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div>
      <header
        className={`${roboto.className} bg-d-blue-900 text-sm flex py-3 px-3 justify-between items-center sticky top-0 z-20`}
      >
        <Link href="/">
          <Image
            src="/favicon.png"
            width={55}
            height={55}
            alt="Logo do portfólio"
            className="transition-all hover:scale-105"
          ></Image>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-md">
          <Link href="/">Sobre mim</Link>
          {/* <Link href="/portfolio">Portfolio</Link> */}
          <Link href="/contact">Entre em contato</Link>
        </nav>
        <button className="p-1 md:hidden" onClick={openMenu}>
          <MenuOpenIcon className="fill-white w-10 h-10" />
        </button>
        <Menu isVisible={isMenuOpen} onClose={closeMenu} />
      </header>
    </div>
  );
};
export default Header;
