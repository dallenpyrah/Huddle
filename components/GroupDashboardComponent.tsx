export default function GroupDashboardComponent() {
    return (
        <>
            <h1 className="font-bold text-stone-900 text-lg ml-6">Your Groups</h1>
            <div className="grid grid-cols-2 md:ml-4 lg:ml-4">
                <div className="col-span-1 bg-purple-300 rounded p-14 m-3 md:m-2 lg:m-3 text-center place-items-center hover:-translate-y-1 hover:shadow-lg">
                    <h1 className="font-bold text-md text-white">C# Developers</h1>
                </div>
                <div className="col-span-1 bg-green-300 rounded p-14 m-3 md:m-2 lg:m-3 text-center hover:-translate-y-1 hover:shadow-lg">
                    <h1 className="font-bold text-md text-white">AWS Pilots</h1>
                </div>
                <div className="col-span-1 bg-red-300 rounded p-14 m-3 md:m-2 lg:m-3 text-center hover:-translate-y-1 hover:shadow-lg">
                    <h1 className="font-bold text-md text-white">GoLanders</h1>
                </div>
                <div className="col-span-1 bg-blue-300 rounded p-14 m-3 md:m-2 lg:m-3 text-center hover:-translate-y-1 hover:shadow-lg">
                    <h1 className="font-bold text-md text-white">React Luvers</h1>
                </div>
            </div>
        </>
    )
}