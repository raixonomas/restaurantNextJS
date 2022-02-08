import Link from "next/link";

export default function Header() {
    
    return(
        <header>
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
        </header>
    )
}