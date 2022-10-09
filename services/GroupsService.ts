import { AxiosInstance} from "axios";
import UserGroupModel from "../models/UserGroupModel";

class GroupsService {
    axiosService: AxiosInstance

    constructor(axiosService: AxiosInstance) {
        this.axiosService = axiosService
    }
    
    async getUserGroups(userId: number): Promise<UserGroupModel[]> {
        try {
            const groups = await this.axiosService.get<UserGroupModel[]>(`/usergroups/${1}`);
            console.log(groups);
            return groups.data;
        } catch (error) {
            throw error;
        }
    }
}

export default GroupsService