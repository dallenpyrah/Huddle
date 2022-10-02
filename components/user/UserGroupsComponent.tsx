import { useEffect, useState } from "react";
import GroupModel from "../../models/GroupModel";
import { axiosService } from "../../services/AxiosService";
import GroupsService from "../../services/GroupsService";


export default function UserGroupsComponent() {
    const groupsService = new GroupsService(axiosService);
    const [groups, setGroups] = useState<GroupModel[]>([]);

    async function getUsersGroups() {
        const userCredentialsString = window.localStorage.getItem('user')
        const userCredentials = JSON.parse(userCredentialsString || '{}')
        const groups = await groupsService.getUserGroups(userCredentials.uid);
        setGroups(groups);
    }

    useEffect(() => {
        getUsersGroups();
    }, [groups])

    return (
        <>
            <h1 className="font-bold text-stone-900 text-lg ml-6 mb-5">Your Groups</h1>
            <div className="grid grid-cols-2 gap-4 ml-5 h-80">
                {groups.map(group => (
                    <div className={`col-span-1 bg-${group.color}-100 rounded-md p-3 flex justify-center items-center`}>
                        <h1 className="truncate text-center">{group.name}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}