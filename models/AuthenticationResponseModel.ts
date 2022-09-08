import { UserCredential } from "firebase/auth";

export default class AuthenticationResponseModel {
    userCrendential: UserCredential | undefined; 
    errorMesssage: string | "";

    constructor(userCrendential: UserCredential, errorMesssage: string) {
        this.userCrendential = userCrendential;
        this.errorMesssage = errorMesssage;
    }
  }
  