import 'reflect-metadata'
import { Container } from 'inversify'
import { IAxiosService } from '../src/auth/interfaces/service/IAxiosService'
import { AxiosService } from '../src/utils/services/AxiosService'
import { TYPES } from './types'
import { IUserGroupsService } from '../src/groups/interfaces/IUserGroupsService'
import { UserGroupsService } from '../src/groups/services/UserGroupsService'
import { GroupsService } from '../src/groups/services/GroupsService'
import { IGroupsService } from '../src/groups/interfaces/IGroupsService'
import { IIssuesService } from '../src/issues/service-interfaces/IIssuesService'
import { IAuthenticationService } from '../src/auth/interfaces/service/IAuthenticationService'
import { AuthenticationService } from '../src/auth/services/AuthenticationService'
import { FireBaseUserService } from '../src/auth/services/FireBaseUserService'
import { IFireBaseUserService } from '../src/auth/interfaces/service/IFireBaseService'
import { IssueOrderingService } from '../src/issues/services/IssueOrderingService'
import { IIssueOrderingService } from '../src/issues/service-interfaces/IIssueOrderingService'
import { IssuesService } from '../src/issues/services/IssuesService'
import { INotificationService } from '../src/notifications/service-interfaces/INotificationService'
import { NotificationService } from '../src/notifications/services/NotificationService'
import { IUserSignUpUtility } from '../src/auth/interfaces/service/IUserSignUpUtility'
import { UserSignUpUtility } from '../src/auth/services/UserSignUpUtility'

const appContainer = new Container()

appContainer.bind<IAxiosService>(TYPES.AxiosService).to(AxiosService)
appContainer.bind<IUserGroupsService>(TYPES.UserGroupsService).to(UserGroupsService)
appContainer.bind<IGroupsService>(TYPES.GroupsService).to(GroupsService)
appContainer.bind<IIssuesService>(TYPES.IssuesService).to(IssuesService)
appContainer.bind<IAuthenticationService>(TYPES.AuthenticationService).to(AuthenticationService)
appContainer.bind<IFireBaseUserService>(TYPES.FireBaseUserService).to(FireBaseUserService)
appContainer.bind<IIssueOrderingService>(TYPES.IssueOrderingService).to(IssueOrderingService)
appContainer.bind<INotificationService>(TYPES.NotificationService).to(NotificationService)
appContainer.bind<IUserSignUpUtility>(TYPES.UserSignUpUtility).to(UserSignUpUtility)

export { appContainer }
