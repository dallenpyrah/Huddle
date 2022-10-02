import { Axios } from "axios";
import UserGroupModel from "../models/UserGroupModel";

class GroupsService {
    axios: Axios
    constructor(axios: Axios) {
        this.axios = axios
    }
    
    async getUserGroups(userId: number): Promise<UserGroupModel[]> {
        try {
            const groups = await this.axios.get<UserGroupModel[]>(`/usergroups/${1}`);
            console.log(groups);
            return groups.data;
        } catch (error) {
            throw error;
        }
    }
}

export default GroupsService