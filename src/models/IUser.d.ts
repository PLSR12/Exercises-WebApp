interface IUserContext {
  user: IUser
  onSubmit: (values: IUserInput) => void
  logoutUser: () => void
  isOpen: boolean
}

interface IUser {
  id: string
  email: string
  name: string
  admin: boolean
  token: string
}

interface IUserInput {
  email: string
  password: string
}
export { IUser, IUserContext, IUserInput }
