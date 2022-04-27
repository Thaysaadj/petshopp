import Link from "next/link"

export default function Header () {
    return(
        <div>
            <h1>Sou o header</h1>
            <h2>
                <Link href="/">
                    <a>Clique em mim </a>
                </Link>
            </h2>
        </div>
    )
}