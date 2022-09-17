export default function HelloUserHeader(props: { name?: string | null }) {
    return (
        <div className="flex flex-row">
            <h1 className="text-2xl p-6 font-bold text-black">Hello, {props.name}
                <br />
                <span className="text-sm font-normal text-gray-500">Take a look at your most recent updates</span>
            </h1>
        </div>
    )
}