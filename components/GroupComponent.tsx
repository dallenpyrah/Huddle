export default function GroupComponent() {
    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 h-32 m-5 p-8 rounded-md text-white text-center justify-center bg-green-300">
                    C# Architects
                </div>
                <div className="flex flex-col w-1/2 h-32 m-5 p-8 rounded-md text-white text-center justify-center bg-green-300">
                    React Gurus
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 h-32 m-5 p-8 rounded-md text-white text-center justify-center bg-green-300">
                    AWS Pilots
                </div>
                <div className="flex flex-col w-1/2 h-32 m-5 p-8 rounded-md text-white text-center justify-center bg-green-300">
                    C# Architects
                </div>
            </div>
        </>
    )
}