import Image from "next/image"
import { Inter } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCaretUp, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons"

const inter = Inter({subsets: ['latin']})

export default function RequestBox({ name, type, message, bgColor, profileLetter}: {name: string, type: number, message: string, bgColor: number, profileLetter: string}) {
    return <>
        <li className="dark:bg-neutral-700 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-1">
                <div className="rounded-full w-12 h-12 bg-teal-400 place-content-center grid">
                    <h2 className="text-white text-xl">A</h2>
                </div>
                <div className="ml-2">
                    <h3 className="text-white font-bold">{name}</h3>
                    <div className="flex">
                        {type == 0 && <h3 className="text-white text-sm rounded-full bg-green-500 pl-2 pr-2 pt-0.5 pb-0.5">QoL</h3>}
                        {type == 1 && <h3 className="text-white text-sm rounded-full bg-cyan-500 pl-2 pr-2 pt-0.5 pb-0.5">Minor</h3>}
                        {type == 2 && <h3 className="text-white text-sm rounded-full bg-yellow-500 pl-2 pr-2 pt-0.5 pb-0.5">Major</h3>}
                        {type == 3 && <h3 className="text-white text-sm rounded-full bg-rose-600 pl-2 pr-2 pt-0.5 pb-0.5">Critical</h3>}
                    </div>
                </div>
            </div>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae doloremque consectetur cumque, facilis est ea vitae aspernatur quis natus quaerat quos pariatur libero incidunt, quisquam sunt fuga molestiae aliquam.</p>
            <div className="flex justify-end items-center">
                <FontAwesomeIcon icon={faSquareCaretUp} width="32" height="32" className="text-neutral-400 hover:text-green-400"/>
                <h3 className="text-base text-white mx-1">10</h3>
                <FontAwesomeIcon icon={faSquareCaretDown} width="32" height="32" className="text-neutral-400 hover:text-rose-500"/>
            </div>
        </li>
    </>
}