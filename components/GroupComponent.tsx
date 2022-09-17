export default function GroupComponent() {
    return (
        <>
            <div className="flex flex-row ml-5">
                <h1 className="text-2xl font-bold">Your Groups</h1>
            </div>
            <div className="flex flex-row ml-3">
                <div className="basis-1/2 m-2 p-8 rounded-md text-white text-center justify-center bg-green-300">
                    C# Architects
                </div>
                <div className="basis-1/2 m-2 p-8 rounded-md text-white text-center justify-center bg-purple-300">
                    React Gurus
                </div>
            </div>
            <div className="flex flex-row ml-3">
                <div className="basis-1/2 m-2 p-8 rounded-md text-white text-center justify-center bg-pink-300">
                    AWS Pilots
                </div>
                <div className="basis-1/2 m-2 p-8 rounded-md text-white text-center justify-center bg-red-300">
                    C# Architects
                </div>
            </div>
        </>
    )
}