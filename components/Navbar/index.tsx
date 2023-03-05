import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./styles.module.scss"

const Navbar: React.FC = () => {
    const router = useRouter()
    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <Link href={"/"} className={router.asPath === "/" ? styles.active : ""}>Accueil</Link>
                    <Link href={"/menu"} className={router.asPath === "/menu" ? styles.active : ""}>menu</Link>
                    <Link href={"/test"} className={router.asPath === "/test" ? styles.active : ""}>test</Link>
                    <Link href={"/autre"} className={router.asPath === "/autre" ? styles.active : ""}>autre</Link>
                    <Link href={"/full"} className={router.asPath === "/full" ? styles.active : ""}>full</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar
// import React, { useState } from "react";
// import Link from "next/link";
// import { useState } from "react";

// type NavLinkProps = {
//     href: string;
//     text: string;
// };

// const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
//     const [showSubNav, setShowSubNav] = useState(false);

//     return (
//         <li
//             onMouseEnter={() => setShowSubNav(true)}
//             onMouseLeave={() => setShowSubNav(false)}
//         >
//             <Link href={href}>
//                 {text}
//             </Link>
//             {showSubNav && (
//                 <ul>
//                     <li>
//                         <Link href={`${href}/sublink1`}>
//                             Sublink 1
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href={`${href}/sublink2`}>
//                             Sublink 2
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href={`${href}/sublink3`}>
//                             Sublink 3
//                         </Link>
//                     </li>
//                 </ul>
//             )}
//         </li>
//     );
// };

// const Navbar: React.FC = () => {
//     return (
//         <nav>
//             <ul>
//                 <NavLink href="/" text="Link 1" />
//                 <NavLink href="/link2" text="Link 2" />
//                 <NavLink href="/link3" text="Link 3" />
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;