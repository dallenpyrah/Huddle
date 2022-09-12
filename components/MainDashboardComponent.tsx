export default function MainDashboardComponent(props: { children?: JSX.Element }) {
    return (
        <div className="w-screen h-screen bg-black">
            <div className="flex h-full rounded bg-purple-50">
                {props.children}
            </div>
        </div>
    )
}