import Image from "next/image"
import { Crimson_Text } from "next/font/google"

const crimson = Crimson_Text({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],})

export default function Nav() {
    return <>
        <nav className="flex items-center container mx-auto pt-2 pb-2">
			<Image src="/logo_v2.png" alt="High_Table_Logo" width="64" height="64"/>
			<span className={crimson.className}>
                <h1 className="text-4xl ml-2 bg-gradient-to-b from-amber-600 via-amber-300 to-amber-600 inline-block text-transparent bg-clip-text">The High Table</h1>
            </span>
		</nav>
    </>
}