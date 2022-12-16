import IUserModel from '../models/IUserModel'

export interface IFireBaseUserService {
  getUserByFireBaseId: (fireBaseUserId: string) => Promise<IUserModel>
}
