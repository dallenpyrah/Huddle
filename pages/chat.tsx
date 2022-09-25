import SideBarComponent from "../components/sidebar/SideBarComponent";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ChatPage() {
    const [message, setMessage] = useState("Write a message...");

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 h-screen'>
            <div className="col-span-1 hidden md:block">
                <SideBarComponent />
            </div>
            <div className="col-span-2 p-5 overflow-y-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-2xl">Inbox</h1>
                </div>
                <div className="flex flex-row mt-2">
                    <input className="w-full" placeholder="Search for a user" />
                    <button className="bg-black p-1 ml-2 pr-2 pl-2 text-white rounded-md hover:bg-gray-800">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="flex flex-row bg-slate-100 p-8 rounded-lg mt-6">
                    <div className="bg-black rounded-md mr-5">Hi</div>
                    <h2>Dallen Pyrah</h2>
                </div>
                <div className="flex flex-row bg-slate-100 p-10 rounded-lg mt-6">

                </div>
                <div className="flex flex-row bg-slate-100 p-10 rounded-lg mt-6">

                </div>
                <div className="flex flex-row bg-slate-100 p-10 rounded-lg mt-6">

                </div>
                <div className="flex flex-row bg-slate-100 p-10 rounded-lg mt-6">

                </div>
                <div className="flex flex-row bg-slate-100 p-10 rounded-lg mt-6">

                </div>
            </div>
            <div className="col-span-4 p-5 overflow-y-auto">
                <div className="flex flex-row h-[95%]">
                    <div className="flex flex-col bg-slate-100 w-full overflow-y-auto rounded-t-lg justify-between">
                        <div className="flex flex-row justify-between p-5 bg-black">
                            <h1 className="text-md text-white">Gaurav Sharma</h1>
                            <h1 className="text-md text-white">Software Engineer</h1>
                        </div>
                        <div className="flex flex-row justify-between break-words">
                            <span onFocus={() => setMessage("")} contentEditable="true" className="w-screen bg-slate-50 p-4 text-sm">{message}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <button className="text-white text-sm bg-black p-2 rounded-lg mt-2 hover:bg-gray-800">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </div>
    )
}