export interface IAnonymousUserFormStore {
  dni: string;
  email: string;
  name: string;
  phone: string;
}

export const INITIAL_ANONYMOUS_USER_FORM_STORE: IAnonymousUserFormStore = {
  dni: '',
  email: '',
  name: '',
  phone: ''
};
