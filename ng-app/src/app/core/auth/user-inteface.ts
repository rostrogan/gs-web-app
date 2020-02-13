export interface IUser {
  uid: string;
  email: string;
  first_name: string;
  last_name: string;
  user_role: USER_ROLES;
}

export enum USER_ROLES {
  ADMIN = 1,
}
