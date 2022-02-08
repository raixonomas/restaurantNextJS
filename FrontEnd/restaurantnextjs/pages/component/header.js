import Link from "next/link";
import style from "../../styles/header.module.css"

export default function Header() {
    
    return(
        <div className={style.wrapper}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Drink">
                        <a>Drink</a>
                    </Link>
                </li>
                <li>
                    <Link href="/reservation">
                        <a>Reservation</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
            <div className={style.welcome}>
            <h1>Chez Binou</h1>
            </div>
        </div>
    )
}