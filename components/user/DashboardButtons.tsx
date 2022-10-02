import { faBug, faGear, faPlus, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardButtons() {
    return (
        <div className="grid grid-cols-1">
            <div className="col-span-1 mt-5 text-right mr-7">
                <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 mr-2 text-white"><FontAwesomeIcon icon={faPlus} /></button>
                <button className="bg-black rounded pl-2 pr-2 pt-1 pb-1 text-white"><FontAwesomeIcon icon={faUserGroup} /></button>

            </div>
        </div>
    )
}