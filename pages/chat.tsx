import SideBarComponent from "../components/SideBarComponent";
import {useState} from "react";

export default function ChatPage() {
    const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 h-screen'>
            <div className="col-span-1 hidden md:block">
                <SideBarComponent />
            </div>
            <div className="col-span-2 p-5 overflow-y-auto">
                {!isNewChatModalOpen &&
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-2xl">Inbox</h1>
                        <button onClick={() => setIsNewChatModalOpen(true)} className="bg-black text-white pl-3 pr-3 rounded-md hover:bg-gray-800">+</button>
                    </div>
                }
                {isNewChatModalOpen &&
                    <div className="flex flex-row justify-between">
                        <input className="w-full" placeholder="Search for a user" />
                        <button onClick={() => setIsNewChatModalOpen(false)} className="bg-red-400 text-white pl-3 pr-3 rounded-md hover:bg-gray-800">X</button>
                    </div>
                }
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
            <div className="col-span-4 p-5 overflow-y-auto h-full">
                <div className="flex flex-row h-full">
                    <div className="flex flex-col justify-between bg-slate-100 w-full overflow-y-auto rounded-lg">
                        <div className="flex flex-row justify-between p-5 bg-black">
                            <h1 className="text-md text-white">Gaurav Sharma</h1>
                            <h1 className="text-md text-white">Software Engineer</h1>
                        </div>
                        <div className="flex flex-row justify-between p-5 bg-slate-100">
                            <input className="bg-slate-100 w-full" placeholder="Write a message..." />
                            <button className="text-white text-sm bg-black p-2 rounded-lg ml-3 hover:bg-gray-800">Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}