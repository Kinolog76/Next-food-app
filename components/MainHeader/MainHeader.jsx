import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "@/components/MainHeader/MainHeaderBackground";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image priority src={logo} alt="Next Food" />
          Next Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
