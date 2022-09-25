export default function UserGroupsComponent() {
    return (
        <>
            <h1 className="font-bold text-stone-900 text-lg ml-6 mb-5">Your Groups</h1>
            <div className="grid grid-cols-2 gap-4 ml-5 h-80">
                <div className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h1 className="truncate text-center">C# Developers</h1>
                </div>
                <div className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h1 className="truncate text-center">C# Developers</h1>
                </div>
                <div className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h1 className="truncate text-center">C# Developers</h1>
                </div>
                <div className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                    <h1 className="truncate text-center">C# Developers</h1>
                </div>
            </div>
        </>
    )
}