import { Inter } from "next/font/google"
import RequestBox from "./requestBox"

const inter = Inter({subsets: ['latin']})

export default function Requests() {
    return <>
        <div className="col-span-3 col-start-2">
            <h2 className="text-gray-100 text-lg mb-3">Requests</h2>
            <ul>
                <div className={inter.className}>
                    <RequestBox name="Anonymous23" type={3}/>
                </div>
            </ul>
        </div >
    </>
}