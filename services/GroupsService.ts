import { Axios } from "axios";
import GroupModel from "../models/GroupModel";

class GroupsService {
    axios: Axios
    constructor(axios: Axios) {
        this.axios = axios
    }
    
    async getUserGroups(userId: number): Promise<GroupModel[]> { 
        try {
            const groups = await this.axios.get<GroupModel[]>(`/usergroups/${1}`);
            return groups.data;
        } catch (error) {
            throw error;
        }
    }
}

export default GroupsService