export interface IUserFormStore {
  dni: string;
  lastName: string;
  name: string;
  user: string;
  typeDocument: string;
  password: string;
  confirmPassword: string,
  areYouSure: boolean
}

export const INITIAL_USER_FORM_STORE: IUserFormStore = {
  dni: '',
  lastName: '',
  name: '',
  user: '',
  typeDocument: '',
  password: '',
  confirmPassword: '',
  areYouSure: false
};
