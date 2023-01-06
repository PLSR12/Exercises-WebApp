interface IUserContext {
  user: number
  onSubmit: (values: IUserInput) => void
  logoutUser: () => void
  isOpen: boolean
}

interface IUserInput {
  email: string
  password: string
}
export { IUserContext, IUserInput }
