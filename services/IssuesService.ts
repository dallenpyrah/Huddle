import axios, {AxiosInstance} from "axios";
import IssueModel from "../models/IssueModel";

export default class IssuesService {
  private readonly axiosService: AxiosInstance

  constructor(axiosService: AxiosInstance) {
    this.axiosService = axiosService
  }

  async getUserIssues(userId: number): Promise<IssueModel[]> {
    try {
      const issues = await this.axiosService.get<IssueModel[]>(`/issues/${1}`);
      console.log(issues);
      return issues.data;
    } catch (error) {
      throw error;
    }
  }
}

