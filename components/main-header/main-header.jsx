import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";
import imgLogo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image src={imgLogo.src} alt="logo" width={100} height={100} priority />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">
                                Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header >
        </>
    );
}