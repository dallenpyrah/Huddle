import IUserModel from '../models/UserModel'

export interface IFireBaseUserService {
  getUserByFireBaseId: (fireBaseUserId: string) => Promise<IUserModel>
}
