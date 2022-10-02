import { useEffect, useState } from "react";
import { axiosService } from "../../services/AxiosService";
import GroupsService from "../../services/GroupsService";
import UserGroupModel from "../../models/UserGroupModel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import 'tailwindcss/colors'


interface UserGroupsComponentProps {
    setIsStateLoaded: (isStateLoaded: boolean) => void;
    isStateLoaded: boolean;
}

export default function UserGroupsComponent(props: UserGroupsComponentProps) {
    const groupsService = new GroupsService(axiosService);
    const [userGroups, setUserGroups] = useState<UserGroupModel[]>([]);
    const validColors = [
        'bg-slate-300',
        'bg-red-300',
        'bg-orange-300',
        'bg-yellow-300',
        'bg-green-300',
        'bg-teal-300',
        'bg-blue-300',
        'bg-indigo-300',
        'bg-purple-300',
        'bg-pink-300',
    ];
    const maxGroupCount = 4;

    async function getUsersGroups() {
        const userCredentialsString = window.localStorage.getItem('user')
        const userCredentials = JSON.parse(userCredentialsString || '{}')
        const userGroups = await groupsService.getUserGroups(userCredentials.uid);
        setUserGroups(userGroups);
        props.setIsStateLoaded(true);
    }

    useEffect(() => {
        (async () => {
            await getUsersGroups();
        })()
    }, [])

    if(props.isStateLoaded){
        return (
            <>
                <h1 className="font-bold text-stone-900 text-lg ml-6 mb-5">Your Groups</h1>
                <div className="grid grid-cols-2 gap-4 ml-5 h-80">
                    {userGroups.map((userGroup, index) => (
                        <div key={index} className={`col-span-1 ${validColors.find(c => c === userGroup.group.color)} rounded-md p-3 flex justify-center items-center`}>
                            <h1 className="truncate text-center">{userGroup.group.name}</h1>
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1 className="font-bold text-stone-900 text-lg ml-6 mb-5">Your Groups</h1>
                <div className="grid grid-cols-2 gap-4 ml-5 h-80">
                    {Array.from(Array(maxGroupCount)).map((e, index) => (
                            <div key={index}  className="col-span-1 bg-slate-100 rounded-md p-3 flex justify-center items-center">
                                <Skeleton />
                            </div>
                    ))}
                </div>

            </>
        )
    }
}